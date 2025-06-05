'use server'

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db/prisma'
import * as z from 'zod'

// Quote request schema for validation
const quoteSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectType: z.string().min(1, { message: 'Project type is required' }),
  message: z.string().min(10, { message: 'Please provide details about your project' }),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const result = quoteSchema.safeParse(body)
    
    if (!result.success) {
      // If validation fails, return the error messages
      return NextResponse.json(
        { error: 'Invalid form data', details: result.error.format() },
        { status: 400 }
      )
    }
    
    const { name, email, phone, company, projectType, message } = result.data
    
    // Create a new quote request in the database
    const quote = await prisma.quote.create({
      data: {
        name,
        email,
        phone,
        company,
        projectType,
        message,
      },
    })
    
    return NextResponse.json({ success: true, quote }, { status: 201 })
  } catch (error) {
    console.error('Error processing quote request:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
