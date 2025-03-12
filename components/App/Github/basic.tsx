import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import SocialLinks from "@/components/App/Github/Socials";

interface GitHubUser {
    login: string;
    name: string;
    avatar_url: string;
    bio: string;
    followers: number;
    following: number;
    public_repos: number;
    html_url: string;
    location: string | null;
    company: string | null;
    blog: string | null;
    email: string | null;
    created_at: string;
    // Add other fields you want to use
}

interface GitHubRepo {
    id: number;
    name: string;
    html_url: string;
    description: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
}

const token = process.env.GITHUB_TOKEN;

export default async function Profile({ username }: { username: string }) {
    try {
        // Fetch user data from REST API
        const userRes = await axios.get(`https://api.github.com/users/${username}`, {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/vnd.github.v3+json"
            }
        });

        const user: GitHubUser = userRes.data;

        // Fetch pinned repositories using GraphQL API
        const graphqlQuery = {
            query: `{
                user(login: "${username}") {
                    pinnedItems(first: 3, types: REPOSITORY) {
                        nodes {
                            ... on Repository {
                                id
                                name
                                url
                                description
                                primaryLanguage {
                                    name
                                }
                                stargazerCount
                                forkCount
                            }
                        }
                    }
                }
            }`
        };

        const pinnedReposRes = await axios.post(
            'https://api.github.com/graphql',
            graphqlQuery,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            }
        );

        // Transform GraphQL response to match our repo interface
        const pinnedRepos: GitHubRepo[] = pinnedReposRes.data.data.user.pinnedItems.nodes.map((repo: any) => ({
            id: repo.id,
            name: repo.name,
            html_url: repo.url,
            description: repo.description,
            language: repo.primaryLanguage?.name || "Unknown",
            stargazers_count: repo.stargazerCount,
            forks_count: repo.forkCount,
        }));

        return (
            <div className="max-w-4xl mx-auto mb-6 flex flex-col md:flex-row gap-6">
                {/* User Profile (Left Side) */}
                <div className="w-full md:w-1/2">
                    <Card className="bg-zinc-900 text-white shadow-lg border border-zinc-700 h-full">
                        <CardHeader className="flex flex-col items-center">
                            <Avatar className="w-24 h-24 border-2 border-zinc-600 shadow-md">
                                <AvatarImage src={user.avatar_url} alt={user.name} />
                            </Avatar>
                            <CardTitle className="text-2xl mt-2">{user.name || user.login}</CardTitle>
                            <p className="text-zinc-400 text-sm">{user.bio}</p>
                            <div className="flex gap-4 mt-2">
                                <Badge variant="outline" className="text-zinc-300">
                                    👥 {user.followers} Followers
                                </Badge>
                                <Badge variant="outline" className="text-zinc-300">
                                    🔄 {user.following} Following
                                </Badge>
                                <Badge variant="outline" className="text-zinc-300">
                                    📦 {user.public_repos} Repos
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="text-center">
                            {user.location && (
                                <p className="text-zinc-400 text-sm mb-2">
                                    📍 {user.location}
                                </p>
                            )}

                            {user.company && (
                                <p className="text-zinc-400 text-sm mb-2">
                                    🏢 {user.company}
                                </p>
                            )}

                            {user.blog && (
                                <p className="text-zinc-400 text-sm mb-2">
                                    🌐 <a href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`}
                                         target="_blank"
                                         rel="noopener noreferrer"
                                         className="text-blue-400 hover:underline">
                                    Personal Website
                                </a>
                                </p>
                            )}

                            {user.email && (
                                <p className="text-zinc-400 text-sm mb-2">
                                    ✉️ {user.email}
                                </p>
                            )}

                            <p className="text-zinc-400 text-sm mb-2">
                                📅 Member since {new Date(user.created_at).toLocaleDateString()}
                            </p>

                            <a
                            href={user.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline text-sm block mb-2"
                            >
                            View Profile on GitHub
                        </a>

                    </CardContent>
                    </Card>
                </div>

                {/* Pinned Repositories Section (Right Side) */}
                <div className="w-full md:w-1/2">
                    <Card className="bg-zinc-900 border border-zinc-700 shadow-md h-full">
                        <CardHeader>
                            <h2 className="text-xl text-zinc-300">Pinned Repositories</h2>
                        </CardHeader>
                        <CardContent className="overflow-y-auto max-h-[300px] py-0.5">
                            <div className="grid grid-cols-1 gap-4">
                                {pinnedRepos.length > 0 ? (
                                    pinnedRepos.map((repo) => (
                                        <Card key={repo.id} className="bg-zinc-800/40 border border-zinc-700 shadow-md">
                                            <CardHeader>
                                                <CardTitle className="text-lg text-blue-400 hover:underline">
                                                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                                        {repo.name}
                                                    </a>
                                                </CardTitle>
                                                {repo.description && <p className="text-zinc-400 text-sm">{repo.description}</p>}
                                            </CardHeader>
                                            <CardContent className="flex justify-between text-xs text-zinc-500">
                                                <span>🌐 {repo.language}</span>
                                                <span>⭐ {repo.stargazers_count}</span>
                                                <span>🍴 {repo.forks_count}</span>
                                            </CardContent>
                                        </Card>
                                    ))
                                ) : (
                                    <p className="text-zinc-400">No pinned repositories found.</p>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        );
    } catch (error) {
        console.error("Error fetching GitHub data:", error);
        return <Skeleton className="w-full h-32 bg-zinc-800" />;
    }
}