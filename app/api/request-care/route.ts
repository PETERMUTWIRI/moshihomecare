import { NextResponse } from 'next/server';
import { z } from 'zod';
import { sendCareRequestEmails } from '@/lib/email/resend';

const careRequestSchema = z.object({
  name: z.string().trim().min(2, 'Name is too short').max(100),
  email: z.string().trim().email('Invalid email address').max(200),
  phone: z.string().trim().min(7, 'Phone number is too short').max(30),
  location: z.string().trim().min(2, 'Location is too short').max(200),
  serviceType: z.string().trim().min(1, 'Please select a type of care').max(200),
  duration: z.string().trim().min(1, 'Please select a duration').max(100),
  notes: z.string().trim().max(2000).optional().default(''),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const parsed = careRequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Please check the form and try again.', issues: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  try {
    await sendCareRequestEmails(parsed.data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to send care request emails:', error);
    return NextResponse.json(
      { error: 'We could not send your request right now. Please try again or call us at +1 (910) 476-6003.' },
      { status: 500 },
    );
  }
}
