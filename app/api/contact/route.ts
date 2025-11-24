import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API Key (safe to fail if key is missing in dev)
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // If Resend is configured, send the email
    if (resend) {
      try {
        await resend.emails.send({
          from: 'AumLabs Contact <onboarding@resend.dev>', // Default Resend sender
          to: 'cvamtiwari73@gmail.com',
          subject: `[AumLabs] ${subject}: ${name}`,
          replyTo: email,
          text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
        });
      } catch (emailError) {
        console.error('Resend Error:', emailError);
        return NextResponse.json(
          { error: 'Failed to send email via Resend' },
          { status: 500 }
        );
      }
    } else {
      // Fallback for development without API key
      console.log('--- MOCK EMAIL SENT ---');
      console.log(`To: cvamtiwari73@gmail.com`);
      console.log(`Subject: [AumLabs] ${subject}: ${name}`);
      console.log(`Message: ${message}`);
      console.log('-----------------------');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
