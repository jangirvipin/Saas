import prisma from "@/lib/db";

const DeleteContribution=async(id:string)=>{
    prisma?.$connect();
    try{
        return await prisma.contribution.delete({
            where:{
                id
            }
        })
    }catch (e){
        console.error("Error deleting contribution", e);
    }
}

export default DeleteContribution;