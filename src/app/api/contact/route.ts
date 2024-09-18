import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, phoneNumber, email, address1, address2, message } = body;

    // Save form data to MongoDB
    // const client = await clientPromise;
    // const db = client.db("nurakeem"); // Replace with your database name
    // const collection = db.collection("contactSubmissions"); // Replace with your collection name

    // // Insert data into MongoDB
    // const result = await collection.insertOne({
    //   firstName,
    //   lastName,
    //   phoneNumber,
    //   email,
    //   address1,
    //   address2,
    //   message,
    //   createdAt: new Date(),
    // });

    // if (!result.acknowledged) {
    //   return NextResponse.json({ message: 'Failed to save data to MongoDB.' }, { status: 500 });
    // }

    // Create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Replace with your mail server info
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "shamsideen7@gmail.com", // Your email id
        pass: "Samson611", // Your password
      },
    });

    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Nurakeem" <no-reply@example.com>', // Sender address
      to: "mathiasakari37@gmail.com", // List of receivers
      subject: "New Contact Form Submission", // Subject line
      text: `New submission from:
      Name: ${firstName} ${lastName}
      Phone: ${phoneNumber}
      Email: ${email}
      Address1: ${address1}
      Address2: ${address2}
      Message: ${message}`, // Plain text body
      html: `<b>New submission from Nurakeem landing page:</b><br>
      Name: ${firstName} ${lastName}<br>
      Phone: ${phoneNumber}<br>
      Email: ${email}<br>
      Address1: ${address1}<br>
      Address2: ${address2}<br>
      Message: ${message}`, // HTML body content
    });

    if (info.messageId) {
      return NextResponse.json({ message: 'Form submitted successfully, email sent.' }, { status: 200 });
    } else {
      return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ message: 'An error occurred.'}, { status: 500 });
  }
}
