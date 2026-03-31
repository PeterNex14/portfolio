import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const certifications = await prisma.certification.findMany({
      orderBy: { updatedAt: 'desc' },
    });
    
    return NextResponse.json(certifications, { status: 200 });
  } catch (error) {
    console.error('Error fetching certifications:', error);
    return NextResponse.json(
      { error: 'Failed to fetch certifications' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, issuer, date, icon, iconColor } = body;

    if (!title || !issuer || !date || !icon || !iconColor) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newCertification = await prisma.certification.create({
      data: {
        title,
        issuer,
        date,
        icon,
        iconColor,
      },
    });

    return NextResponse.json(newCertification, { status: 201 });
  } catch (error) {
    console.error('Error creating certification:', error);
    return NextResponse.json(
      { error: 'Failed to create certification' },
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
        { error: 'Certification ID is required' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { title, issuer, date, icon, iconColor } = body;

    if (!title || !issuer || !date || !icon || !iconColor) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const updatedCertification = await prisma.certification.update({
      where: { id },
      data: {
        title,
        issuer,
        date,
        icon,
        iconColor,
      },
    });

    return NextResponse.json(updatedCertification, { status: 200 });
  } catch (error) {
    console.error('Error updating certification:', error);
    return NextResponse.json(
      { error: 'Failed to update certification' },
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
        { error: 'Certification ID is required' },
        { status: 400 }
      );
    }

    await prisma.certification.delete({
      where: { id },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error deleting certification:', error);
    return NextResponse.json(
      { error: 'Failed to delete certification' },
      { status: 500 }
    );
  }
}
