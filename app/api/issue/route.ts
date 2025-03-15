import {getServerSession, Session} from "next-auth";
import {NextResponse} from "next/server";
import {authOptions} from "@/lib/auth";
import {Difficulty} from "@prisma/client";

type Session2 = {
    user: {
        id: string;
    };
}


export async function GET(){
    const session: any = await getServerSession(authOptions);
    const id2: string = session?.user?.username?.toString();

    if (!session) {
        return NextResponse.json({error: "Unauthorized"}, {status: 401});
    }

    await seedData(id2);
    return NextResponse.json({message: "Data seeded successfully"});
}

const seedData=async(id2:any)=>{

    prisma?.$connect();

    const userid= await prisma?.user.findFirst({
        where: {
           username: id2,
        },
    })

    if(!userid){
        console.log("User not found");
        return;
    }

    const contribution = await prisma?.contribution.create({
        data: {
            title: "Fix memory leak in Rust project",
            about: "A critical fix for a known issue in Rust's memory handling",
            repoUrl: "https://github.com/example/repo",
            prUrl: "https://github.com/example/repo/pull/1",
            company: "Mozilla",
            difficulty: Difficulty.EASY,
            status: "PENDING",
            userId: userid.id,
            contributionType:"ISSUE",
            skill:"RUST"
    }});

    console.log("Data inserted successfully:", contribution);


}