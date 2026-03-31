"use server";

import { revalidatePath } from "next/cache";
import {
  CreateServiceCommand,
  DescribeServicesCommand,
} from "@aws-sdk/client-ecs";
import ecsClient from "./ecs";

// =======================
// CREATE VIRTUALBOX
// =======================
export async function createVirtualbox(body: {
  type: string;
  name: string;
  visibility: string;
}) {
  try {
    const res = await fetch(
      "https://database.sairamesh-pragada.workers.dev/api/virtualbox",
      {
        method: "PUT", // change to POST if needed
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    if (!res.ok) {
      const errorText = await res.text();
      console.error("API Error:", errorText);
      throw new Error(errorText);
    }

    return await res.text();
  } catch (error) {
    console.error("Fetch failed:", error);
    throw new Error("Failed to create Virtualbox");
  }
}

// =======================
// DELETE VIRTUALBOX
// =======================
export async function deleteVirtualbox(id: string) {
  try {
    await fetch(
      `https://database.sairamesh-pragada.workers.dev/api/virtualbox?id=${id}`,
      {
        method: "DELETE",
      }
    );

    revalidatePath("/dashboard");
  } catch (error) {
    console.error("Delete failed:", error);
  }
}

// =======================
// UPDATE VIRTUALBOX
// =======================
export async function updateVirtualbox(body: {
  id: string;
  name?: string;
  visibility?: "public" | "private";
}) {
  try {
    await fetch(
      "https://database.sairamesh-pragada.workers.dev/api/virtualbox",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    revalidatePath("/dashboard");
  } catch (error) {
    console.error("Update failed:", error);
  }
}

// =======================
// SHARE VIRTUALBOX
// =======================
export async function shareVirtualbox(
  virtualboxId: string,
  email: string
) {
  try {
    const res = await fetch(
      "https://database.sairamesh-pragada.workers.dev/api/virtualbox/share",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ virtualboxId, email }),
      }
    );

    const text = await res.text();

    if (!res.ok) {
      return { success: false, message: text };
    }

    revalidatePath(`/code/${virtualboxId}`);
    return { success: true, message: "Shared successfully" };
  } catch (err) {
    console.error("Share failed:", err);
    return { success: false, message: "Error sharing" };
  }
}

// =======================
// UNSHARE VIRTUALBOX
// =======================
export async function unshareVirtualbox(
  virtualboxId: string,
  userId: string
) {
  try {
    await fetch(
      "https://database.sairamesh-pragada.workers.dev/api/virtualbox/share",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ virtualboxId, userId }),
      }
    );

    revalidatePath(`/code/${virtualboxId}`);
  } catch (error) {
    console.error("Unshare failed:", error);
  }
}

// =======================
// GENERATE CODE (AI)
// =======================
export async function generateCode(code: string, line: number) {
  try {
    const res = await fetch(
      "https://api.cloudflare.com/client/v4/accounts/dbcc31144a91550582475baf9bb01af1/ai/run/@cf/meta/llama-3-8b-instruct",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.CLOUDFLARE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content:
                "You are an expert coding assistant who reads from an existing code file and suggests improvements.",
            },
            {
              role: "user",
              content: code,
            },
          ],
        }),
      }
    );

    return await res.json();
  } catch (error) {
    console.error("AI generation failed:", error);
  }
}

// =======================
// START SERVER (AWS ECS)
// =======================
export async function startServer(serviceName: string) {
  const command = new CreateServiceCommand({
    cluster:
      "arn:aws:ecs:us-east-1:654654208427:cluster/virtualboxccce",
    serviceName,
    taskDefinition: "cccetasks",
    desiredCount: 1,
    networkConfiguration: {
      awsvpcConfiguration: {
        securityGroups: ["sg-0b60193994bed8816"],
        subnets: [
          "subnet-0579b3a7463100753",
          "subnet-03fd1f4d91b5f5311",
          "subnet-052bb79f721ced4f6",
          "subnet-0fcf2238868a2e709",
          "subnet-0face6c4520a7bb9a",
          "subnet-0234c726980dc66b2",
        ],
        assignPublicIp: "ENABLED",
      },
    },
  });

  try {
    const response = await ecsClient.send(command);
    console.log("Server started:", response.service?.serviceName);
  } catch (err) {
    console.error("Error starting server:", err);
  }
}

// =======================
// CHECK SERVICE STATUS
// =======================
export const checkServiceStatus = (serviceName: string) => {
  return new Promise((resolve, reject) => {
    const command = new DescribeServicesCommand({
      cluster:
        "arn:aws:ecs:us-east-1:654654208427:cluster/virtualboxccce",
      services: [serviceName],
    });

    const interval = setInterval(async () => {
      try {
        const response = await ecsClient.send(command);

        if (response.services && response.services.length > 0) {
          const service = response.services[0];

          if (
            service.runningCount === service.desiredCount &&
            service.deployments &&
            service.deployments.length === 1 &&
            service.deployments[0].rolloutState === "COMPLETED"
          ) {
            clearInterval(interval);
            resolve(service);
          }
        }
      } catch (error) {
        clearInterval(interval);
        reject(error);
      }
    }, 5000);
  });
};