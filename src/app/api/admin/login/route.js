import { NextResponse } from 'next/server';

export async function POST(request) {
  const { email, password } = await request.json();

  const validEmail = process.env.ADMIN_EMAIL;
  const validPassword = process.env.ADMIN_PASSWORD;
  const secret = process.env.ADMIN_SECRET;

  if (email === validEmail && password === validPassword) {
    // Simple token: base64(email + ':' + secret + ':' + timestamp)
    const token = Buffer.from(`${email}:${secret}:${Date.now()}`).toString('base64');
    return NextResponse.json({ success: true, token });
  }

  return NextResponse.json(
    { success: false, message: 'Invalid email or password.' },
    { status: 401 }
  );
}
