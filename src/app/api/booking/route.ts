import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, contact_number, services, message } = body;

    if (!name || !email || !contact_number || !services || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In production, send email (e.g. via Resend, SendGrid, or nodemailer)
    // For now we just acknowledge receipt. Configure your email service and uncomment:
    /*
    await sendEmail({
      to: "helloajinas@gmail.com",
      subject: `New enquiry from ${name}`,
      body: `Name: ${name}\nEmail: ${email}\nContact: ${contact_number}\nServices: ${services}\nMessage: ${message}`,
    });
    */

    return NextResponse.json({
      success: true,
      message: "Thank you for your booking request. We will get back to you soon!",
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
