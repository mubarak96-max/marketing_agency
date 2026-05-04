import { NextResponse } from 'next/server';
import { FieldValue } from 'firebase-admin/firestore';
import { getAdminCookieName, verifyAdminSession } from '@/lib/adminSession';
import { adminDb } from '@/lib/firebaseAdmin';

function isAuthenticated(request) {
  const token = request.cookies.get(getAdminCookieName())?.value;
  return verifyAdminSession(token);
}

function serializeValue(value) {
  if (value && typeof value.toDate === 'function') {
    return value.toDate().toISOString();
  }

  if (Array.isArray(value)) {
    return value.map(serializeValue);
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, nestedValue]) => [key, serializeValue(nestedValue)])
    );
  }

  return value;
}

function serializeDoc(docSnap) {
  return {
    id: docSnap.id,
    ...serializeValue(docSnap.data()),
  };
}

export async function GET(request) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
      const docSnap = await adminDb.collection('blogPosts').doc(id).get();
      if (!docSnap.exists) {
        return NextResponse.json({ error: 'Post not found' }, { status: 404 });
      }

      return NextResponse.json(serializeDoc(docSnap));
    }

    const snap = await adminDb.collection('blogPosts').orderBy('createdAt', 'desc').get();
    return NextResponse.json(snap.docs.map(serializeDoc));
  } catch (error) {
    console.error('Firestore Admin GET Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const data = await request.json();
    const { id, ...postData } = data;

    if (id) {
      await adminDb.collection('blogPosts').doc(id).update({
        ...postData,
        updatedAt: FieldValue.serverTimestamp(),
      });
      return NextResponse.json({ success: true, id });
    } else {
      const ref = await adminDb.collection('blogPosts').add({
        ...postData,
        createdAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      });
      return NextResponse.json({ success: true, id: ref.id });
    }
  } catch (error) {
    console.error('Firestore Admin POST Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });

    await adminDb.collection('blogPosts').doc(id).delete();
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Firestore Admin DELETE Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
