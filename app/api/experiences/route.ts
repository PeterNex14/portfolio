import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const experiences = await prisma.experience.findMany({
      orderBy: { createdAt: 'desc' },
    });
    
    return NextResponse.json(experiences, { status: 200 });
  } catch (error) {
    console.error('Error fetching experiences:', error);
    return NextResponse.json(
      { error: 'Failed to fetch experiences' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { role, company, startDate, endDate, description } = body;

    // Validate required fields
    if (!role || !company || !startDate || !description || !Array.isArray(description)) {
      return NextResponse.json(
        { error: 'Missing or invalid required fields' },
        { status: 400 }
      );
    }

    const newExperience = await prisma.experience.create({
      data: {
        role,
        company,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
        description,
      },
    });

    return NextResponse.json(newExperience, { status: 201 });
  } catch (error) {
    console.error('Error creating experience:', error);
    return NextResponse.json(
      { error: 'Failed to create experience' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Experience ID is required' },
        { status: 400 }
      );
    }

    await prisma.experience.delete({
      where: { id },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error deleting experience:', error);
    return NextResponse.json(
      { error: 'Failed to delete experience' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Experience ID is required' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { role, company, startDate, endDate, description } = body;

    // Validate required fields
    if (!role || !company || !startDate || !description || !Array.isArray(description)) {
      return NextResponse.json(
        { error: 'Missing or invalid required fields' },
        { status: 400 }
      );
    }

    const updatedExperience = await prisma.experience.update({
      where: { id },
      data: {
        role,
        company,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
        description,
      },
    });

    return NextResponse.json(updatedExperience, { status: 200 });
  } catch (error) {
    console.error('Error updating experience:', error);
    return NextResponse.json(
      { error: 'Failed to update experience' },
      { status: 500 }
    );
  }
}



