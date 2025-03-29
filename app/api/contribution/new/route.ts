import { NextRequest, NextResponse } from "next/server";
import newContribution from "@/db/query/NewContribution";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

type Session = {
    user: {
        name: string;
        picture: string;
        sub: string;
        id: string;
        username: string;
        iat: number;
        exp: number;
        jti: string;
    };
};

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const createdAt = data.createdAt ? new Date(data.createdAt) : new Date();

        const session: Partial<Session> | null = await getServerSession(authOptions);
        console.log("Session:", session);

        if (!session || !session.user?.username) {
            return NextResponse.json(
                { error: "You must be signed in to submit a contribution" },
                { status: 401 }
            );
        }

        const username = session.user.username;

        const updatedContribution = await newContribution(username, data, createdAt);

        return NextResponse.json(updatedContribution, { status: 200 });
    } catch (error) {
        console.error("Update Contribution Error:", error);

        return NextResponse.json(
            { error: "Failed to update contribution", details: error instanceof Error ? error.message : "Unknown error" },
            { status: 500 }
        );
    }
}
