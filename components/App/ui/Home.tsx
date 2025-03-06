import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GitHubLogoIcon, CodeIcon } from "@radix-ui/react-icons";

export default function HeroSection() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-white relative">
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
                    <Link href="/github">
                        <Button
                            size="lg"
                            variant="default"
                            className="bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700"
                        >
                            <GitHubLogoIcon className="mr-2 h-5 w-5" />
                            GitHub Profile
                        </Button>
                    </Link>

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
