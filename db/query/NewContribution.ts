const newContribution=async(username:any,data:any,createdAt:any)=>{
    prisma?.$connect();
    const userid= await prisma?.user.findUnique({
        where: {
            username,
        },
        select: { id: true }, // Only return the id
    })

    if(!userid){
        console.log("User not found");
        return;
    }

    const contributions:any = await prisma?.contribution.create({
       data:{
           ...data,
           createdAt,
           userId: userid.id
       }
    })

    return contributions
}

export default newContribution;