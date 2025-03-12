"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import Link from "next/link";
import { GitHubLogoIcon, CodeIcon } from "@radix-ui/react-icons";

export default function HeroSection() {
    const [username, setUsername] = useState("");
    const router = useRouter();

    const handleSubmit = () => {
        if (username.trim()) {
            router.push(`/profile/${username}`);
        }
    };

    return (
        <div className="py-32 pt-40 flex flex-col items-center justify-center bg-zinc-900 text-white relative">
            <div className="text-center max-w-4xl px-4 space-y-8 relative z-10">
                <div className="space-y-4">
                    {/* Gradient Heading */}
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight lg:text-7xl text-transparent bg-clip-text
               bg-gradient-to-r from-zinc-200 via-zinc-400 to-white dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-500">
                        Elevate Your Developer Profile
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-300 max-w-[800px] mx-auto">
                        Transform your coding journey into a compelling narrative that speaks volumes about your skills and contributions.
                    </p>
                </div>

                <div className="flex justify-center gap-4">
                    {/* GitHub Profile Dialog */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button
                                size="lg"
                                variant="default"
                                className="bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700"
                            >
                                <GitHubLogoIcon className="mr-2 h-5 w-5" />
                                GitHub Profile
                            </Button>
                        </DialogTrigger>

                        <DialogContent className="bg-zinc-900 border border-zinc-700">
                            <DialogHeader>
                                <DialogTitle className="text-white">Enter Your GitHub Username</DialogTitle>
                            </DialogHeader>

                            <Input
                                type="text"
                                placeholder="your-github-username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="bg-zinc-800 text-white border border-zinc-700"
                            />

                            <DialogFooter>
                                <Button
                                    size="lg"
                                    variant="default"
                                    className="bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700"
                                    onClick={handleSubmit}
                                >
                                    Go to Profile
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>

                    {/* Open Source Works */}
                    <Link href="/contributions">
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-white border-zinc-700 bg-zinc-800 hover:bg-zinc-800 hover:text-white"
                        >
                            <CodeIcon className="mr-2 h-5 w-5" />
                            Open Source Works
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
