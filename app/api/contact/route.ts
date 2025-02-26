import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { rateLimit } from "@/lib/rate-limit";

const limiter = rateLimit({
  interval: 60 * 60 * 1000, // 1 hour
  uniqueTokenPerInterval: 500, // Max 500 unique users
});

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    await limiter.check(5, "CACHE_TOKEN"); // Limit to 5 requests per hour
  } catch {
    return NextResponse.json(
      { message: "Rate limit exceeded. Please try again later." },
      { status: 429 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Your Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Message from ${name}`,
      html: `
    <html lang="en">
      <head>
      <title>New Message from ${name}</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; }
          .container { padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
          h1 { color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px; }
          .info { background-color: #f9f9f9; padding: 15px; border-left: 5px solid #3498db; margin-bottom: 20px; }
          .message { background-color: #f0f0f0; padding: 15px; border-radius: 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>New Message</h1>
          <div class="info">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          <h2>Message:</h2>
          <div class="message">
            <p>${message}</p>
          </div>
          <p>This message was sent from your portfolio contact form.</p>
        </div>
      </body>
    </html>
  `,
    });
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 },
    );
  }
}
