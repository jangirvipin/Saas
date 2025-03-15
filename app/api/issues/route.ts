import {getServerSession, Session} from "next-auth";
import {NextRequest, NextResponse} from "next/server";
import {authOptions} from "@/lib/auth";


type Session2 = {
    user: {
        id: string;
    };
}


export async function GET(req:NextRequest){
    const session:Session | any = await getServerSession(authOptions);
    const username:Session2=session?.user?.username;

    console.log("Session:", session);
    if (!session) {
        return NextResponse.json({error: "Unauthorized"}, {status: 401});
    }


    const data =await seedData(username);
    return NextResponse.json({message: "Data seeded successfully",data:data});
}

const seedData=async(username:any)=>{

    prisma?.$connect();

    const userid= await prisma?.user.findUnique({
        where: {
            username
        },
    })

    if(!userid){
        console.log("User not found");
        return;
    }

   const contribution = await prisma?.contribution.findMany({
        where: {
            userId: userid.id,
        },
    })

    return contribution



}