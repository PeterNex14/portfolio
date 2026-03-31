import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const skills = await prisma.skill.findMany({
      orderBy: { updatedAt: 'desc' },
    });
    
    return NextResponse.json(skills, { status: 200 });
  } catch (error) {
    console.error('Error fetching skills:', error);
    return NextResponse.json(
      { error: 'Failed to fetch skills' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { label, icon, category } = body;

    if (!label || !icon || !category) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newSkill = await prisma.skill.create({
      data: {
        label,
        icon,
        category,
      },
    });

    return NextResponse.json(newSkill, { status: 201 });
  } catch (error) {
    console.error('Error creating skill:', error);
    return NextResponse.json(
      { error: 'Failed to create skill' },
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
        { error: 'Skill ID is required' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { label, icon, category } = body;

    if (!label || !icon || !category) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const updatedSkill = await prisma.skill.update({
      where: { id },
      data: {
        label,
        icon,
        category,
      },
    });

    return NextResponse.json(updatedSkill, { status: 200 });
  } catch (error) {
    console.error('Error updating skill:', error);
    return NextResponse.json(
      { error: 'Failed to update skill' },
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
        { error: 'Skill ID is required' },
        { status: 400 }
      );
    }

    await prisma.skill.delete({
      where: { id },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error deleting skill:', error);
    return NextResponse.json(
      { error: 'Failed to delete skill' },
      { status: 500 }
    );
  }
}
