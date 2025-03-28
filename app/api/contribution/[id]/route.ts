// app/api/contributions/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server'
import EditContribution from "@/db/query/EditContribution";


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