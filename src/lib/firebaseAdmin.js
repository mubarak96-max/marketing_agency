import 'server-only';
import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

function getFirebaseAdminConfig() {
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!projectId || !clientEmail || !privateKey) {
    return null;
  }

  return { projectId, clientEmail, privateKey };
}

export function isFirebaseAdminConfigured() {
  return getFirebaseAdminConfig() !== null;
}

let cachedDb = undefined;

export function getAdminDb() {
  if (cachedDb !== undefined) return cachedDb;

  const config = getFirebaseAdminConfig();
  if (!config) {
    cachedDb = null;
    return cachedDb;
  }

  const adminApp =
    getApps()[0] ??
    initializeApp({
      credential: cert(config),
    });

  cachedDb = getFirestore(adminApp);
  return cachedDb;
}

// Lazily initialized. Null when FIREBASE_* env vars are missing (e.g. Cloudflare
// build without secrets) so prerender doesn't crash at import time. Callers
// must handle null and fall back gracefully.
export const adminDb = getAdminDb();
