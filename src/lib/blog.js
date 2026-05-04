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
    const res = await fetch('/api/admin/blog', {
      method: 'GET',
      cache: 'no-store',
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || 'Failed to fetch posts');
    }

    return res.json();
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
    const res = await fetch(`/api/admin/blog?id=${id}`, {
      method: 'GET',
      cache: 'no-store',
    });

    if (res.status === 404) return null;

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || 'Failed to fetch post');
    }

    return res.json();
  } catch (e) {
    console.error('Error fetching post by id:', e);
    return null;
  }
}

async function adminApiCall(method, body = null, id = null) {
  const url = id ? `/api/admin/blog?id=${id}` : '/api/admin/blog';

  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : null,
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || 'Admin API request failed');
  }

  return res.json();
}

/** Create a new post through the protected admin API. */
export async function createPost(data) {
  const res = await adminApiCall('POST', data);
  return res.id;
}

/** Update an existing post through the protected admin API. */
export async function updatePost(id, data) {
  await adminApiCall('POST', { ...data, id });
}

/** Delete a post through the protected admin API. */
export async function deletePost(id) {
  await adminApiCall('DELETE', null, id);
}
