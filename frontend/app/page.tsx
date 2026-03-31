import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();

  // Redirect logged-in users to dashboard
  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="w-screen min-h-screen bg-background">

      {/* ================= HERO SECTION ================= */}
      <div className="flex flex-col items-center justify-center text-center px-6 py-32">

        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl">
          CodeXchange
          <br />
          <span className="text-primary">
            Serverless Cloud IDE for Real-Time Collaboration Using Docker
          </span>
        </h1>

        <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed">
          A cloud-based collaborative programming platform that allows multiple users to write, edit, run, and share code in real time directly from the browser, with no local setup required.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link href="/sign-up">
            <Button size="lg" className="px-8">
              Get Started
            </Button>
          </Link>

          <Link href="#how-it-works">
            <Button variant="outline" size="lg" className="px-8">
              Learn More
            </Button>
          </Link>
        </div>

      </div>

      {/* ================= HOW IT WORKS ================= */}
      <div id="how-it-works" className="py-24 text-center">

        <h2 className="text-3xl font-semibold mb-3">
          How It Works
        </h2>

        <p className="text-muted-foreground mb-16">
          Get started in minutes and begin coding in the cloud
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-12 px-8">

          {[
            ["1", "Sign Up", "Create your account."],
            ["2", "Create Project", "Select React, Node, or Python."],
            ["3", "Auto Setup", "Files load automatically."],
            ["4", "Start Coding", "No installation needed."],
            ["5", "Share Easily", "Collaborate with team or clients."],
            ["6", "Terminal & Localhost", "Run and preview projects."],
            ["7", "Cloud Storage", "Project stored in cloud & downloadable anytime."]
          ].map(([num, title, desc]) => (
            <div key={num}>
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4">
                {num}
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{desc}</p>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}