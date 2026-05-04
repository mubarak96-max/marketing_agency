import { NextResponse } from 'next/server';
import {
  createAdminSession,
  getAdminCookieName,
  getAdminSessionCookieOptions,
} from '@/lib/adminSession';

export async function POST(request) {
  const { email, password } = await request.json();

  const validEmail = process.env.ADMIN_EMAIL;
  const validPassword = process.env.ADMIN_PASSWORD;
  const secret = process.env.ADMIN_SECRET;

  if (email === validEmail && password === validPassword) {
    if (!secret) {
      return NextResponse.json(
        { success: false, message: 'Admin session secret is not configured.' },
        { status: 500 }
      );
    }

    const token = createAdminSession(email);
    const response = NextResponse.json({ success: true });
    response.cookies.set(getAdminCookieName(), token, getAdminSessionCookieOptions());
    return response;
  }

  return NextResponse.json(
    { success: false, message: 'Invalid email or password.' },
    { status: 401 }
  );
}
