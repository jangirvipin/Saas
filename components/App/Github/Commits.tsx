import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const GITHUB_API = "https://api.github.com";
const token = process.env.GITHUB_TOKEN; // Store in .env

async function fetchGitHubStats(username: string) {
    const headers = { Authorization: `Bearer ${token}` };

    const [prs, issues] = await Promise.all([
        axios.get(`${GITHUB_API}/search/issues?q=type:pr+author:${username}`, { headers }),
        axios.get(`${GITHUB_API}/search/issues?q=type:issue+author:${username}`, { headers })
    ]);

    return {
        totalPRs: prs.data.total_count,
        totalIssues: issues.data.total_count
    };
}

export default async function GitHubStats({ username }: { username: string }) {
    try {
        const stats = await fetchGitHubStats(username);

        return (
            <Card className="bg-zinc-900 max-w-4xl mx-auto  flex flex-col items-center text-white shadow-lg border border-zinc-700 w-full p-6">
                <CardHeader>
                    <CardTitle className="text-lg text-center">GitHub Contributions</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center gap-4">
                    <Badge variant="outline" className="text-green-400 border-green-500">
                        🛠 {stats.totalPRs} PRs
                    </Badge>
                    <Badge variant="outline" className="text-green-400 border-green-500">
                        📝 {stats.totalIssues} Issues
                    </Badge>
                </CardContent>
            </Card>
        );
    } catch (error) {
        return (
            <Card className="bg-zinc-900 max-w-4xl mx-auto flex flex-col items-center text-white shadow-lg border border-zinc-700 w-full p-6">
                <CardHeader>
                    <CardTitle className="text-lg text-center">GitHub Contributions</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-red-400">⚠️ Failed to load stats</p>
                </CardContent>
            </Card>
        );
    }
}
