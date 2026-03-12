'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createMessage(formData: FormData) {
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!email || !message) {
    return { error: 'Email and message are required' };
  }

  try {
    await prisma.message.create({
      data: {
        email,
        message,
      },
    });
    
    // Revalidate the current page
    revalidatePath('/');
    
    return { success: true };
  } catch (error) {
    console.error('Failed to create message', error);
    return { error: 'Failed to create message' };
  }
}
