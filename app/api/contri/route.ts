import {NextResponse} from "next/server";
import {createContribution} from "@/db/query/user";


export async function POST(){
    try{
     const contribution:any = await createContribution({
         title: "Fix Memory Leak in Rust",
         userId:"cm894cv1u0000v56cq0hsvxu0",
         about: "This issue involves optimizing memory usage in Rust.",
         repoUrl: "https://github.com/example/repo",
         prUrl: "https://github.com/example/repo/pull/1",
         company: "OpenAI",
         difficulty: "HARD",
     })

        return NextResponse.json(contribution, {status: 201});
    }
    catch (e:any){
        return NextResponse.json({error: e.message}, {status: 500});
    }
}

