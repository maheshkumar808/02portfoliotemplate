import { NextResponse } from 'next/server';
import SibApiV3Sdk from 'sib-api-v3-sdk';
import ApiClient from './ApiClient';

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields!' },
        { status: 400 },
      );
    }

    // Initialize Brevo (Sendinblue) API client
    const defaultClient = SibApiV3Sdk.ApiClient.instance;
    const apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = process.env.BREVO_API_V3_KEY; // Make sure this is in your .env.local

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    // Define email content
    const emailData = {
      sender: { name: name, email: email }, // The sender will be the form submitter
      to: [{ email: '808maheshkumar@gmail.com', name: 'Admin' }], // Your email
      subject: `New Contact Form Submission: ${subject}`,
      htmlContent: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    const response = await apiInstance.sendTransacEmail(emailData);

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully!',
      data: response,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Error sending email!' },
      { status: 500 },
    );
  }
}
