import { NextResponse } from 'next/server';
import {
  getAdminCookieName,
  getAdminSessionCookieOptions,
  verifyAdminSession,
} from '@/lib/adminSession';

export async function GET(request) {
  const token = request.cookies.get(getAdminCookieName())?.value;
  const session = verifyAdminSession(token);

  if (!session) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  return NextResponse.json({
    authenticated: true,
    user: { email: session.email },
  });
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.set(getAdminCookieName(), '', {
    ...getAdminSessionCookieOptions(),
    maxAge: 0,
  });
  return response;
}
