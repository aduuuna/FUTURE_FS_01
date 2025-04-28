import { createClient } from '../../utils/supabase/server'
import { NextResponse } from 'next/server';

export async function POST(request) {
  // Create a new Supabase client
  try {
    const supabase = createClient();
    console.log("Supabase client created successfully");
    

    // Parse the request body
    const body = await request.json();
    const { name, email, subject, message } = body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Insert a new contact submission in the database
    // Note: Replace 'contact_submissions' with your actual table name
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