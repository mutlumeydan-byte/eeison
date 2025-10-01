import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, property, message } = await req.json();

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // SMTP Transporter (Zoho)
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.eu",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_USER, // .env.local içine ekle
        pass: process.env.ZOHO_PASS,
      },
    });

    // Mail içeriği
    await transporter.sendMail({
      from: `"EEI Website" <${process.env.ZOHO_USER}>`,
      to: process.env.ZOHO_USER, // kendine veya başka admin maile
      subject: `New Contact Form Submission - ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Property: ${property || "Not specified"}
        Message: ${message || "No message"}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Property:</b> ${property || "Not specified"}</p>
        <p><b>Message:</b> ${message || "No message"}</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Email error details:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process request" },
      { status: 500 }
    );
  }
}
