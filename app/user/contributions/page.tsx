import React from 'react';
import ContributionsHeader from "@/components/App/Contributions/Header";
import {getServerSession, Session} from "next-auth";
import {authOptions} from "@/lib/auth";
import seedData from "@/db/query/get_contri";
import ContributionsPage from "@/components/App/Contributions/Contributions"

async function getContributions(){
    const session:Session | any = await getServerSession(authOptions);
    const username:any=session?.user?.username;

    const result:any = await seedData(username);
    return result
}

export default async function ContributionCards() {
    const res = await getContributions();
    console.log(res);

    return (
        <div className="min-h-screen relative bg-zinc-900 py-16">
        <div className="w-full max-w-6xl mx-auto px-4">

             <div className="mt-10">
                 <ContributionsHeader />
             </div>

            <div>
                <ContributionsPage data={res} />
            </div>
        </div>
        </div>
    );
}