import prisma from "@/lib/db";

const EditContribution=async(id:string,data:any)=>{
    prisma?.$connect();
    try {
        return await prisma?.contribution.update({
            where: {
                id
            },
            data: {
                ...data
            }
        })
    }catch (e){
        console.error("Error updating contribution", e);
    }
}

export default EditContribution;