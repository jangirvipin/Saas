import prisma from "@/lib/db";

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

    const contributions:any = await prisma?.contribution.findMany({
        where: {
            userId: userid.id,
        },
    })

    return contributions
}

export default seedData;