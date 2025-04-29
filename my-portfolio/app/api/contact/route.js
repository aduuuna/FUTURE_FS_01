import { createClient } from '../../utils/supabase/server'
import { NextResponse } from 'next/server';
import { sendMail } from '../../utils/email';

export async function POST(request) {
  // Create a new Supabase client
  try {
    const supabase = createClient();
    console.log("Supabase client created successfully");
    

    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }


    const { data, error } = await supabase
      .from('contact')
      .insert({
        name,
        email,
        subject,
        message,
      })
      .select();

    if (error) {
      console.error('Error submitting contact form:', error);
      return NextResponse.json(
        { error: 'Failed to submit contact form' },
        { status: 500 }
      );
    }

    try {
      await sendMail({
        to: process.env.NOTIFICATION_EMAIL,
        subject: `New Contact Form Submission: ${subject || 'No Subject'}`,
        text: `
          Name: ${name}
          Email: ${email}
          Subject: ${subject || "No Subject"}

          Message:
          ${message}
        `,
        html: `
        New Contact Form Submission
        Name: ${name}
        Email: ${email}
        Subject: ${subject || 'No Subject'}
        Message:
        ${message.replace(/\n/g, '')}
        `,
      })
      console.log('Email notification sent successfully');
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError);
      // Continue with the response even if email fails
    }

    // Return success response
    return NextResponse.json(
      { success: true, id: data[0].id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting contact form:', error);
    // More detailed error logging
    console.error('Error details:', error.message);
    if (error.stack) console.error('Stack trace:', error.stack);
    
    return NextResponse.json(
      { error: 'Failed to submit contact form', details: error.message },
      { status: 500 }
    );
  }
}