import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { sql } from "../../../lib/db";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get("admin_session")?.value;

    if (session !== "spara_authenticated_session_token") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Ensure table exists
    await sql`
      CREATE TABLE IF NOT EXISTS rsvp_responses (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        attendance VARCHAR(10) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Fetch responses
    const responses = await sql`
      SELECT id, name, phone, attendance, created_at
      FROM rsvp_responses
      ORDER BY created_at DESC
    `;

    return NextResponse.json({ responses });
  } catch (error: any) {
    console.error("Admin Responses Fetch Error:", error);
    return NextResponse.json({ error: "Failed to fetch responses" }, { status: 500 });
  }
}
