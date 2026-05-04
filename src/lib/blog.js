import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  where,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from './firebase';

const COLLECTION = 'blogPosts';

/** Get all published posts ordered by date (for public blog) */
export async function getPublishedPosts() {
  const q = query(
    collection(db, COLLECTION),
    where('published', '==', true),
    orderBy('publishedAt', 'desc')
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

/** Get all posts (for admin) */
export async function getAllPosts() {
  const q = query(collection(db, COLLECTION), orderBy('createdAt', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

/** Get a single post by slug (for public blog page) */
export async function getPostBySlug(slug) {
  const q = query(collection(db, COLLECTION), where('slug', '==', slug));
  const snap = await getDocs(q);
  if (snap.empty) return null;
  const d = snap.docs[0];
  return { id: d.id, ...d.data() };
}

/** Get a single post by Firestore ID (for admin editor) */
export async function getPostById(id) {
  const ref = doc(db, COLLECTION, id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() };
}

/** Create a new post */
export async function createPost(data) {
  const ref = await addDoc(collection(db, COLLECTION), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return ref.id;
}

/** Update an existing post */
export async function updatePost(id, data) {
  const ref = doc(db, COLLECTION, id);
  await updateDoc(ref, {
    ...data,
    updatedAt: serverTimestamp(),
  });
}

/** Delete a post */
export async function deletePost(id) {
  await deleteDoc(doc(db, COLLECTION, id));
}

/** Check if a slug is already taken (optional utility) */
export async function isSlugTaken(slug, excludeId = null) {
  const q = query(collection(db, COLLECTION), where('slug', '==', slug));
  const snap = await getDocs(q);
  const docs = snap.docs.filter((d) => d.id !== excludeId);
  return docs.length > 0;
}
