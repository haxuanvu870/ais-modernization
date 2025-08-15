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

    // Save contact to Google Sheets
    await googleSheets.addContact({
      name,
      email,
      phone: phone || '',
      company: company || '',
      message: message || '',
    })

    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully'
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
