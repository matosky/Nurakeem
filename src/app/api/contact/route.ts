import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const body = await request.json();
  const { firstName, lastName, phoneNumber, email, address1, address2, message } = body;

  // Create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.example.com", // Replace with your mail server info
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "your-email@example.com", // Your email id
      pass: "your-email-password", // Your password
    },
  });

  // Send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Nurakeem" <no-reply@example.com>', // Sender address
    to: "admin@example.com", // List of receivers
    subject: "New Contact Form Submission", // Subject line
    text: `New submission from:
    Name: ${firstName} ${lastName}
    Phone: ${phoneNumber}
    Email: ${email}
    Address1: ${address1}
    Address2: ${address2}
    Message: ${message}`, // Plain text body
    html: `<b>New submission from:</b><br>
    Name: ${firstName} ${lastName}<br>
    Phone: ${phoneNumber}<br>
    Email: ${email}<br>
    Address1: ${address1}<br>
    Address2: ${address2}<br>
    Message: ${message}`, // HTML body content
  });

  if(info.messageId) {
    return NextResponse.json({ message: 'Form submitted successfully, email sent.' });
  } else {
    return NextResponse.json({ message: 'Failed to send email.' });
  }
}
