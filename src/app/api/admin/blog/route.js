import { NextResponse } from 'next/server';
import { collection, addDoc, doc, updateDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

// Helper to check if user is authenticated (simple token check)
function isAuthenticated(request) {
  const authHeader = request.headers.get('authorization');
  return !!authHeader; // In a real app, you'd verify the token here
}

export async function POST(request) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const data = await request.json();
    const { id, ...postData } = data;

    if (id) {
      // Update existing
      const ref = doc(db, 'blogPosts', id);
      await updateDoc(ref, {
        ...postData,
        updatedAt: serverTimestamp(),
      });
      return NextResponse.json({ success: true, id });
    } else {
      // Create new
      const ref = await addDoc(collection(db, 'blogPosts'), {
        ...postData,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
      return NextResponse.json({ success: true, id: ref.id });
    }
  } catch (error) {
    console.error('Firestore API Error:', error);
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

    await deleteDoc(doc(db, 'blogPosts', id));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
