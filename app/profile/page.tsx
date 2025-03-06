import ProfilePage from "@/components/App/Profile/Profile";

const  page =({ params }: { params: { username: string } })=>{
    const {username}=params;

    return (
        <div className="relative">
            <ProfilePage username={username}/>

            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute inset-0 bg-[size:20px_20px] bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)]"></div>
            </div>

        </div>
    )
}

export default page