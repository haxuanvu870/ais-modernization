import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/config/database'

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

    // Create contact record in database
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        phone: phone || null,
        company: company || null,
        message: message || null,
      },
    })

    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully',
        contact 
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
