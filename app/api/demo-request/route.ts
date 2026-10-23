import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const demoRequestSchema = z.object({
  fullName: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().email(),
  propertyName: z.string().min(2),
  numberOfBeds: z.number().int().positive(),
  propertyType: z.enum(["hostel", "pg"]),
  message: z.string().optional(),
});

const DEMO_REQUEST_RECIPIENT = "support@easyrentpe.com";

export async function POST(request: Request) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_USER || !SMTP_PASS) {
    console.error("SMTP_USER / SMTP_PASS are not configured");
    return NextResponse.json({ error: "Email service is not configured" }, { status: 500 });
  }

  const parsed = demoRequestSchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  const data = parsed.data;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST || "smtp.hostinger.com",
    port: Number(SMTP_PORT) || 465,
    secure: true,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: `Easy RentPe Website <${SMTP_USER}>`,
      to: DEMO_REQUEST_RECIPIENT,
      replyTo: data.email,
      subject: `New demo request from ${data.fullName} (${data.propertyName})`,
      text: [
        `Name: ${data.fullName}`,
        `Phone: ${data.phone}`,
        `Email: ${data.email}`,
        `Property name: ${data.propertyName}`,
        `Number of beds: ${data.numberOfBeds}`,
        `Property type: ${data.propertyType}`,
        `Message: ${data.message || "(none)"}`,
      ].join("\n"),
    });
  } catch (error) {
    console.error("Failed to send demo request email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

