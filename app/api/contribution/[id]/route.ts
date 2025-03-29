// app/api/contributions/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server'
import EditContribution from "@/db/query/EditContribution";
import DeleteContribution from "@/db/query/delete";

export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const data = await request.json()

        if (!params.id) {
            return NextResponse.json({ error: 'Contribution ID is required' }, { status: 400 })
        }

        const updatedContribution = await EditContribution(params.id, data)

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

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const id = params.id;
        const result = await DeleteContribution(id);
        return NextResponse.json({ message: "Contribution deleted", result }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete contribution" }, { status: 500 });
    }
}