import Profile from "@/components/App/Profile/Profile";


const page =({params}:any)=>{

    const user = params.username

    return (
        <div className='relative min-h-screen bg-zinc-900 py-28'>
        <Profile username={user} />
        </div>
    )
}

export default  page;