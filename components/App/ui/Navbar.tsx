"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RocketIcon } from "@radix-ui/react-icons";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
    const { data: session } = useSession();

    return (
        <nav className="fixed top-0 left-0 w-full z-50">
            <div className="container max-w-4xl mx-auto flex items-center justify-between px-6 py-7">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 text-2xl font-semibold tracking-wide text-neutral-100 hover:text-white transition-all">
                    <RocketIcon className="w-6 h-6 text-neutral-300" />
                    <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        GitSpotlight
                    </span>
                </Link>

                {/* Authentication Button */}
                {session ? (
                    <Button
                        onClick={() => signOut()}
                        className="relative px-6 py-2 rounded-lg shadow-lg transition-all duration-300
                    bg-red-600 text-white hover:bg-red-500 hover:shadow-xl focus:ring-2 focus:ring-red-400 focus:outline-none"
                    >
                        Sign Out
                    </Button>
                ) : (
                    <Button
                        onClick={() => signIn("github")}
                        className="relative px-6 py-2 rounded-lg shadow-lg transition-all duration-300
                    bg-gradient-to-r from-neutral-100 to-zinc-300 text-black
                    hover:from-white hover:to-zinc-400 hover:shadow-xl focus:ring-2 focus:ring-zinc-400 focus:outline-none"
                    >
                        Sign In
                    </Button>
                )}
            </div>
        </nav>
    );
}
