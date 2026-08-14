import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (email === "rsvp@spara.com" && password === "Recovery@123") {
      const cookieStore = await cookies();
      cookieStore.set("admin_session", "spara_authenticated_session_token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 24, // 1 day
        sameSite: "strict",
      });
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
  } catch (error: any) {
    return NextResponse.json({ error: "Something went wrong during login" }, { status: 500 });
  }
}
