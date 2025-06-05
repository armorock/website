'use server'

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db/prisma'
import * as z from 'zod'

// Contact form schema for validation
const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const result = contactSchema.safeParse(body)
    
    if (!result.success) {
      // If validation fails, return the error messages
      return NextResponse.json(
        { error: 'Invalid form data', details: result.error.format() },
        { status: 400 }
      )
    }
    
    const { name, email, phone, message } = result.data
    
    // Create a new contact in the database
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        phone,
        message,
      },
    })
    
    return NextResponse.json({ success: true, contact }, { status: 201 })
  } catch (error) {
    console.error('Error processing contact form submission:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
