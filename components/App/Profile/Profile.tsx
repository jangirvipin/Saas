import Basic from "@/components/App/Github/basic";
import GitHubCalendar from "@/components/App/Github/Calendar";
import GitHubStats from "@/components/App/Github/Commits";
import ContributionStats from "@/components/App/Github/Stats";
import {fetchGitHubContributions} from "@/lib/github";

export  default  async function Profile({username}:{username:string}){
    const contributions = await fetchGitHubContributions(username);

    return (
        <div className='text-white max-w-4xl  mx-auto'>


            <Basic username={username} />
                
            <GitHubCalendar username={username} />
            <ContributionStats data={contributions} username={username} />
        </div>
    )
}