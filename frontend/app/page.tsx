import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <div className="w-screen min-h-screen bg-background">

      {/* ================= HERO SECTION ================= */}
      <div className="flex h-screen items-center justify-center">
        <div className="max-w-2xl px-8 text-center flex flex-col items-center">

          <h1 className="text-3xl font-semibold">
            Scalable Cloud Infrastructure for Remote Collaborative Programming Environments
          </h1>

          <p className="text-muted-foreground mt-5 leading-relaxed">
            The Scalable Cloud Infrastructure for Remote Collaborative Programming Environments is an online coding environment where developers can write and edit code together in real time.
            It provides an integrated AI assistant that offers smart code suggestions and autocompletion.
            The platform enables seamless collaboration with instant updates and shared workspaces.
            All project files and databases are securely stored on Cloudflare’s cloud infrastructure.
            This system delivers a fast, scalable, and reliable solution for modern software development.
          </p>

          <div className="mt-8">
            <Link href="/sign-up">
              <Button>Go To App</Button>
            </Link>
          </div>

        </div>
      </div>

      {/* ================= HOW IT WORKS SECTION ================= */}
      <div className="py-24 text-center">

        <h2 className="text-3xl font-semibold mb-3">
          How It Works
        </h2>

        <p className="text-muted-foreground mb-16">
          Get started in minutes and begin coding in the cloud
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-12 px-8">

          {/* Step 1 */}
          <div>
            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">1</div>
            <h3 className="font-semibold">Sign Up</h3>
            <p className="text-sm text-muted-foreground mt-2">Create your account.</p>
          </div>

          {/* Step 2 */}
          <div>
            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">2</div>
            <h3 className="font-semibold">Create Project</h3>
            <p className="text-sm text-muted-foreground mt-2">Select React, Node, or Python.</p>
          </div>

          {/* Step 3 */}
          <div>
            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">3</div>
            <h3 className="font-semibold">Auto Setup</h3>
            <p className="text-sm text-muted-foreground mt-2">Files load automatically.</p>
          </div>

          {/* Step 4 */}
          <div>
            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">4</div>
            <h3 className="font-semibold">Start Coding</h3>
            <p className="text-sm text-muted-foreground mt-2">No installation needed.</p>
          </div>

          {/* Step 5 */}
          <div>
            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">5</div>
            <h3 className="font-semibold">Share Easily</h3>
            <p className="text-sm text-muted-foreground mt-2">Collaborate with team or clients.</p>
          </div>

          {/* Step 6 */}
          <div>
            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">6</div>
            <h3 className="font-semibold">Terminal & Localhost</h3>
            <p className="text-sm text-muted-foreground mt-2">Run and preview projects.</p>
          </div>

          {/* Step 7 */}
          <div>
            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">7</div>
            <h3 className="font-semibold">Cloud Storage</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Project stored in cloud & downloadable anytime.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}