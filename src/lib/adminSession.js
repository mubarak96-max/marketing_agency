import 'server-only';
import crypto from 'node:crypto';

const COOKIE_NAME = 'mmts_admin_session';
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 7;

function base64url(input) {
  return Buffer.from(input).toString('base64url');
}

function sign(value) {
  const secret = process.env.ADMIN_SECRET;

  if (!secret) {
    throw new Error('ADMIN_SECRET is not configured.');
  }

  return crypto.createHmac('sha256', secret).update(value).digest('base64url');
}

export function createAdminSession(email) {
  const payload = {
    email,
    exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS,
  };

  const encodedPayload = base64url(JSON.stringify(payload));
  const signature = sign(encodedPayload);
  return `${encodedPayload}.${signature}`;
}

export function verifyAdminSession(token) {
  if (!token || !token.includes('.')) return null;

  const [encodedPayload, signature] = token.split('.');
  const expectedSignature = sign(encodedPayload);

  if (signature.length !== expectedSignature.length) {
    return null;
  }

  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expectedSignature))) {
    return null;
  }

  let payload;

  try {
    payload = JSON.parse(Buffer.from(encodedPayload, 'base64url').toString('utf8'));
  } catch {
    return null;
  }

  if (!payload?.email || !payload?.exp || payload.exp < Math.floor(Date.now() / 1000)) {
    return null;
  }

  return payload;
}

export function getAdminSessionCookieOptions() {
  return {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: SESSION_TTL_SECONDS,
  };
}

export function getAdminCookieName() {
  return COOKIE_NAME;
}
