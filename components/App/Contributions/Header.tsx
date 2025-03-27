
import { Sparkles } from "lucide-react";

export default function ContributionsHeader() {
    return (
        <div className="text-center mt-10 mb-6">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl flex justify-center items-center gap-2">
                <Sparkles className="h-8 w-8 text-yellow-400 animate-pulse" />
                Open Source <span className="text-zinc-400">Contributions</span>
            </h1>
            <p className="mt-4 text-lg text-zinc-300 max-w-2xl mx-auto">
                Discover and showcase impactful open-source contributions.
                Elevate your presence in the developer community!
            </p>
        </div>
    );
}
