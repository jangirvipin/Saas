"use client";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function SignInPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-900 text-white">
            <h1 className="text-3xl font-bold">Sign in to GitSpotlight</h1>
            <Button
                onClick={() => signIn("github")}
                className="mt-6 bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700"
            >
                <GitHubLogoIcon className="mr-2 h-5 w-5" />
                Sign in with GitHub
            </Button>
        </div>
    );
}
