import axios from "axios";

async function fetchGitHubUser(username: string) {
    try {
        console.log("i am here")
        const response = await axios.get(`https://api.github.com/users/${username}`, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("GitHub API Error:", error);
        return null;
    }
}

export default async function ProfilePage({username}: {username: string}) {


    const user = await fetchGitHubUser(username);


    if (!user) return <div className="text-center text-red-500">Error fetching profile</div>;

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900  ">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 w-full max-w-lg text-center">
                <img
                    src={user.avatar_url}
                    alt="Avatar"
                    className="w-24 h-24 mx-auto rounded-full border-4 border-blue-500 shadow-md"
                />
                <h2 className="text-2xl font-semibold mt-4 text-gray-900 dark:text-white">
                    {user.name || user.login}
                </h2>
                <p className="text-gray-500 dark:text-gray-400">@{user.login}</p>

                <div className="mt-4 flex justify-center gap-4 text-gray-600 dark:text-gray-300">
                    <div className="text-center">
                        <p className="text-xl font-bold">{user.public_repos}</p>
                        <p className="text-sm">Repositories</p>
                    </div>
                    <div className="text-center">
                        <p className="text-xl font-bold">{user.followers}</p>
                        <p className="text-sm">Followers</p>
                    </div>
                    <div className="text-center">
                        <p className="text-xl font-bold">{user.following}</p>
                        <p className="text-sm">Following</p>
                    </div>
                </div>

                <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300"
                >
                    View Profile
                </a>
            </div>



        </div>
    );
}
