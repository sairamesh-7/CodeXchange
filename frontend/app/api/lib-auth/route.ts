import { colors } from "@/lib/colors";
import { User } from "@/lib/types";
import { currentUser } from "@clerk/nextjs/server";
import { Liveblocks } from "@liveblocks/node";
import { NextRequest } from "next/server";

// IMPORTANT: Liveblocks requires Node runtime (not Edge)
export const runtime = "nodejs";

// Initialize Liveblocks with ENV variable
const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY!,
});

export async function POST(request: NextRequest) {
  try {
    // Get logged-in user from Clerk
    const clerkUser = await currentUser();

    if (!clerkUser) {
      return new Response("Unauthorized", { status: 401 });
    }

    // Fetch user from your backend API
    const res = await fetch(
      `https://database.sairamesh-pragada.workers.dev/api/user?id=${clerkUser.id}`
    );

    if (!res.ok) {
      return new Response("Failed to fetch user data", { status: 500 });
    }

    const user = (await res.json()) as User;

    // Assign random color
    const colorNames = Object.keys(colors);
    const randomColor =
      colorNames[Math.floor(Math.random() * colorNames.length)] as keyof typeof colors;

    // Create Liveblocks session
    const session = liveblocks.prepareSession(user.id, {
      userInfo: {
        id: user.id,
        name: user.name,
        email: user.email,
        color: randomColor,
      },
    });

    // Give access to owned projects
    user.virtualbox?.forEach((virtualbox) => {
      session.allow(`${virtualbox.id}`, session.FULL_ACCESS);
    });

    // Give access to shared projects
    user.usersToVirtualboxes?.forEach((userToVirtualbox) => {
      session.allow(`${userToVirtualbox.virtualboxId}`, session.FULL_ACCESS);
    });

    // Authorize session
    const { body, status } = await session.authorize();

    return new Response(body, { status });

  } catch (error) {
    console.error("Liveblocks Auth Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}