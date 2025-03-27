import prisma from "@/lib/db";
const contributionData=async(id:string)=>{
    prisma?.$connect();

    const data = await prisma?.contribution.findUnique({
        where:{
            id
        }
    })
    return data;
}

export default contributionData;