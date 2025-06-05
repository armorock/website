import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db/prisma';

// GET /api/team
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    
    const where = type ? { type, isActive: true } : { isActive: true };
    
    const teamMembers = await prisma.teamMember.findMany({
      where,
      orderBy: {
        order: 'asc'
      }
    });
    
    return NextResponse.json(teamMembers);
  } catch (error) {
    console.error('Error fetching team members:', error);
    return NextResponse.json(
      { error: 'Failed to fetch team members' },
      { status: 500 }
    );
  }
}
