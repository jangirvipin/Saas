import {NextResponse} from "next/server";
import  {createUser} from "@/db/query/user";

export async function POST(){
    try{
        const user = await createUser("123", "test");
        return NextResponse.json(user,{status: 201});
    }
    catch (e:any){
        return NextResponse.json({error: e.message}, {status: 500});
    }
}

