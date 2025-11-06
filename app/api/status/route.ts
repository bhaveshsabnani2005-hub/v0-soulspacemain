import { type NextRequest, NextResponse } from "next/server"

// In-memory storage for demo purposes
const statusChecks: any[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { client_name } = body

    if (!client_name) {
      return NextResponse.json({ error: "client_name is required" }, { status: 400 })
    }

    const statusCheck = {
      id: Math.random().toString(36).substring(7),
      client_name,
      timestamp: new Date().toISOString(),
    }

    statusChecks.push(statusCheck)

    return NextResponse.json(statusCheck, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create status check" }, { status: 500 })
  }
}

export async function GET() {
  try {
    return NextResponse.json(statusChecks)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch status checks" }, { status: 500 })
  }
}
