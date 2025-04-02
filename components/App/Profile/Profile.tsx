import Basic from "@/components/App/Github/basic";
import GitHubCalendar from "@/components/App/Github/Calendar";
import ContributionStats from "@/components/App/Github/Stats";
import { fetchGitHubContributions } from "@/lib/github";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserX } from "lucide-react";

export default async function Profile({ username }: { username: string }) {
    let contributions = [];
    let error = null;

    try {
        contributions = await fetchGitHubContributions(username);
    } catch (err) {
        error = err;
    }

    if (error || !contributions.length) {
        return (
            <div className="text-white max-w-4xl mx-auto">
                <NoGitHubProfile username={username} />
            </div>
        );
    }

    return (
        <div className="text-white max-w-4xl mx-auto">
            <Basic username={username} />
            <GitHubCalendar username={username} />
            <ContributionStats data={contributions} username={username} />
        </div>
    );
}

function NoGitHubProfile({ username }: { username: string }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
            <Card className="w-full max-w-md  border-2 bg-transparent backdrop-blur-sm">
                <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                        <UserX size={64} className="text-muted-foreground" />
                    </div>
                    <CardTitle className="text-2xl text-white">No GitHub profile found</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-sm text-muted-foreground">
                    <p className="mb-4">
                        We couldn&apos;t find any contributions for the GitHub username: <span className="font-bold">{username}</span>
                    </p>
                    <p>
                        This could be because:
                    </p>
                    <ul className="list-disc list-inside text-left mt-2 space-y-1">
                        <li>The username  doesn&apos; exist on GitHub</li>
                        <li>The profile exists but has no public contributions</li>
                        <li>There might be an issue with our GitHub API connection</li>
                    </ul>
                </CardContent>
            </Card>
        </div>
    );
}