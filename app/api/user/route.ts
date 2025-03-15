import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/db";
import {NextResponse} from "next/server"; // Ensure you have the correct import for prisma



export async function GET() {
    const session: any = await getServerSession(authOptions);
    const id2: string = session?.user?.username?.toString();

    if (!session) {
        return { error: "Unauthorized" };
    }

    const data = await prisma?.user.findUnique({
        where: {
            username:id2
        },
    });

    console.log("Data seeded successfully", data);
    return NextResponse.json({ data: data });
}