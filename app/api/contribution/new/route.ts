import {NextRequest, NextResponse} from "next/server";
import newContribution from "@/db/query/NewContribution";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";

export async function POST(
    request: NextRequest
) {
    try {
        const data = await request.json()
        const createdAt = data.createdAt ? new Date(data.createdAt) : new Date();

        const session: any = await getServerSession(authOptions);
        const username: string = session?.user?.username?.toString();

        const updatedContribution = await newContribution( username, data,createdAt)

        return NextResponse.json(updatedContribution, { status: 200 })
    } catch (error) {
        console.error('Update Contribution Error:', error)

        if (error instanceof Error) {
            return NextResponse.json(
                {
                    error: 'Failed to update contribution',
                    details: error.message
                },
                { status: 500 }
            )
        }

        return NextResponse.json({ error: 'Unknown error occurred' }, { status: 500 })
    }
}