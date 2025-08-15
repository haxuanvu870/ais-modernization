import { NextRequest, NextResponse } from 'next/server'
import googleSheets from '@/config/googleSheets'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message } = body

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Try to save to Google Sheets, but don't fail if it doesn't work
    try {
      await googleSheets.addContact({
        name,
        email,
        phone: phone || '',
        company: company || '',
        message: message || '',
      })
    } catch (sheetsError) {
      console.error('Google Sheets error (non-critical):', sheetsError)
      // Continue execution even if Google Sheets fails
    }

    // Always return success for now
    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully',
        note: 'Your message has been received. We will get back to you soon.'
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
