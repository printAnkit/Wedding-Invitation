import { NextResponse } from "next/server";
import { sql } from "../../lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, attendance } = body;

    // Server-side validation
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }
    const cleanPhone = phone ? phone.trim() : "";
    if (!cleanPhone || !/^[0-9\s+-]{10,15}$/.test(cleanPhone)) {
      return NextResponse.json({ error: "A valid mobile number (10-15 digits) is required" }, { status: 400 });
    }
    if (attendance !== "yes" && attendance !== "no") {
      return NextResponse.json({ error: "Attendance choice is required" }, { status: 400 });
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

    // Insert response
    const cleanName = name.trim();
    await sql`
      INSERT INTO rsvp_responses (name, phone, attendance)
      VALUES (${cleanName}, ${cleanPhone}, ${attendance})
    `;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("RSVP Submission Error:", error);
    return NextResponse.json({ error: error.message || "Failed to submit RSVP" }, { status: 500 });
  }
}
