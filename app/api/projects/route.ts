import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { updatedAt: 'desc' },
    });
    
    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description, image, link, type, tech, scale, offset } = body;

    // Validate required fields
    if (!title || !description || !image || !link || !type || !scale || !offset || !Array.isArray(tech)) {
      return NextResponse.json(
        { error: 'Missing or invalid required fields' },
        { status: 400 }
      );
    }

    const newProject = await prisma.project.create({
      data: {
        title,
        description,
        image,
        link,
        type,
        tech,
        scale,
        offset,
      },
    });

    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      { error: 'Failed to create project' },
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
        { error: 'Project ID is required' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { title, description, image, link, type, tech, scale, offset } = body;

     // Validate required fields
    if (!title || !description || !image || !link || !type || !scale || !offset || !Array.isArray(tech)) {
      return NextResponse.json(
        { error: 'Missing or invalid required fields' },
        { status: 400 }
      );
    }

    const updatedProject = await prisma.project.update({
      where: { id },
      data: {
        title,
        description,
        image,
        link,
        type,
        tech,
        scale,
        offset,
      },
    });

    return NextResponse.json(updatedProject, { status: 200 });
  } catch (error) {
    console.error('Error updating project:', error);
    return NextResponse.json(
      { error: 'Failed to update project' },
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
        { error: 'Project ID is required' },
        { status: 400 }
      );
    }

    await prisma.project.delete({
      where: { id },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error deleting project:', error);
    return NextResponse.json(
      { error: 'Failed to delete project' },
      { status: 500 }
    );
  }
}
