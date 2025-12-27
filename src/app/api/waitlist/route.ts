import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export async function POST(request: NextRequest) {
  try {
    const { name, email, vertical } = await request.json();

    // Validate input
    if (!name || !email || !vertical) {
      return NextResponse.json(
        { error: 'Name, email, and vertical selection are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Create Supabase client with service role for server-side operations
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Check if email already exists
    const { data: existing } = await supabase
      .from('waitlist')
      .select('id')
      .eq('email', email.toLowerCase())
      .single();

    if (existing) {
      // Update the vertical if they're already on the list
      const { error: updateError } = await supabase
        .from('waitlist')
        .update({ 
          name,
          vertical,
          updated_at: new Date().toISOString()
        })
        .eq('email', email.toLowerCase());

      if (updateError) {
        console.error('Update error:', updateError);
        return NextResponse.json(
          { error: 'Failed to update your preferences' },
          { status: 500 }
        );
      }

      return NextResponse.json({ 
        success: true, 
        message: 'Preferences updated successfully' 
      });
    }

    // Insert new waitlist entry
    const { error: insertError } = await supabase
      .from('waitlist')
      .insert({
        name,
        email: email.toLowerCase(),
        vertical,
        created_at: new Date().toISOString(),
      });

    if (insertError) {
      console.error('Insert error:', insertError);
      
      // Handle unique constraint violation
      if (insertError.code === '23505') {
        return NextResponse.json(
          { error: 'This email is already on the waitlist' },
          { status: 409 }
        );
      }

      return NextResponse.json(
        { error: 'Failed to join waitlist. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully joined the waitlist!' 
    });

  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
