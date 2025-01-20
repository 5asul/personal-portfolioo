/* eslint-disable @typescript-eslint/no-explicit-any */
// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();
    // Here, integrate with an email service or store in DB
    console.log("Contact form data received:", { name, email, message });

    return NextResponse.json({ success: true, message: "Message sent successfully" });
  } catch (error:any) {
    console.error("Error handling contact form:", error);
    return new NextResponse(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
    });
  }
}
