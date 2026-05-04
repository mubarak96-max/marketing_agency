import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  orderBy,
  where,
} from 'firebase/firestore';
import { db } from './firebase';

const COLLECTION = 'blogPosts';

/** Get all published posts ordered by date (for public blog) */
export async function getPublishedPosts() {
  try {
    const q = query(
      collection(db, COLLECTION),
      where('published', '==', true),
      orderBy('publishedAt', 'desc')
    );
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  } catch (e) {
    console.error('Error fetching published posts:', e);
    return [];
  }
}

/** Get all posts (for admin) */
export async function getAllPosts() {
  try {
    const q = query(collection(db, COLLECTION), orderBy('createdAt', 'desc'));
    const snap = await getDocs(q);
    return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  } catch (e) {
    console.error('Error fetching all posts:', e);
    return [];
  }
}

/** Get a single post by slug (for public blog page) */
export async function getPostBySlug(slug) {
  try {
    const q = query(collection(db, COLLECTION), where('slug', '==', slug));
    const snap = await getDocs(q);
    if (snap.empty) return null;
    const d = snap.docs[0];
    return { id: d.id, ...d.data() };
  } catch (e) {
    console.error('Error fetching post by slug:', e);
    return null;
  }
}

/** Get a single post by Firestore ID (for admin editor) */
export async function getPostById(id) {
  try {
    const ref = doc(db, COLLECTION, id);
    const snap = await getDoc(ref);
    if (!snap.exists()) return null;
    return { id: snap.id, ...snap.data() };
  } catch (e) {
    console.error('Error fetching post by id:', e);
    return null;
  }
}

// Helper for API calls
async function apiCall(method, body = null, id = null) {
  const token = sessionStorage.getItem('adminToken');
  const url = id ? `/api/admin/blog?id=${id}` : '/api/admin/blog';
  
  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: body ? JSON.stringify(body) : null
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'API request failed');
  }

  return res.json();
}

/** Create a new post via API */
export async function createPost(data) {
  const res = await apiCall('POST', data);
  return res.id;
}

/** Update an existing post via API */
export async function updatePost(id, data) {
  await apiCall('POST', { ...data, id });
}

/** Delete a post via API */
export async function deletePost(id) {
  await apiCall('DELETE', null, id);
}
