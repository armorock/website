import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db/prisma';

// GET /api/case-studies
export async function GET() {
  try {
    const caseStudies = await prisma.caseStudy.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    return NextResponse.json(caseStudies);
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return NextResponse.json(
      { error: 'Failed to fetch case studies' },
      { status: 500 }
    );
  }
}

// GET /api/case-studies/[slug]
export async function getBySlug(slug: string) {
  try {
    const caseStudy = await prisma.caseStudy.findUnique({
      where: {
        slug
      }
    });
    
    if (!caseStudy) {
      return NextResponse.json(
        { error: 'Case study not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(caseStudy);
  } catch (error) {
    console.error(`Error fetching case study with slug ${slug}:`, error);
    return NextResponse.json(
      { error: 'Failed to fetch case study' },
      { status: 500 }
    );
  }
}
