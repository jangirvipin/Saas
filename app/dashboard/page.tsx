
import React from "react";
import Dashboard from "@/components/App/Contributions/Dashboard";
import {getServerSession, Session} from "next-auth";
import {authOptions} from "@/lib/auth";
import profile from "@/lib/Dadhboard";

async function getProfile(){
    const session:Session | any = await getServerSession(authOptions);
    const username:any=session?.user?.username;
    return await profile(username);
}

const page =async ()=>{
    const profileData=await getProfile();


    return (
            <div className="min-h-screen relative bg-zinc-900 py-16">
                <div className="w-full max-w-6xl mx-auto px-4">
                <div className="my-10">
                <Dashboard data={profileData}/>
            </div>
                </div>
        </div>
    )
}

export default page;