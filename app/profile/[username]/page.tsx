import Profile from "@/components/App/Profile/Profile";
import GitHubStats from "@/components/App/Github/Commits";

const page =({params}:{params:{username:string}})=>{

    const user = params.username

    return (
        <div className='relative min-h-screen bg-zinc-900 py-28'>
        <Profile username={user} />
        </div>
    )
}

export default  page;