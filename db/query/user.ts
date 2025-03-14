import prisma from "@/lib/db";

export async function createUser(githubId: string, username: string) {
    try {
        return await prisma.user.create({
            data: { githubId, username },
        });
    } catch (error) {
        console.error("Error creating user:", error);
        throw new Error("Failed to create user");
    }
}

export async function createContribution( data: {
    title: string;
    userId: string;
    about: string;
    repoUrl: string;
    prUrl: string;
    company?: string;
    difficulty: string;
    status?: string;
    contributionTypeId?: string;
    skillId?: string;
}){
    try{
        return await prisma.contribution.create({
            data:{
                ...data
            }
        })
    }catch (error){
        console.error("Error creating contribution:", error);
        throw new Error("Failed to create contribution");
    }
}
