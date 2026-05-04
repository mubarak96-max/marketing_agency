import 'server-only';
import { adminDb } from './firebaseAdmin';

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

function getSortableTimestamp(value) {
  if (!value) return 0;

  const date = new Date(value);
  const time = date.getTime();
  return Number.isNaN(time) ? 0 : time;
}

export async function getPublishedPostsPublic() {
  try {
    const snap = await adminDb.collection('blogPosts').where('published', '==', true).get();

    return snap.docs
      .map(serializeDoc)
      .sort((a, b) => getSortableTimestamp(b.publishedAt) - getSortableTimestamp(a.publishedAt));
  } catch (error) {
    console.error('Error fetching published posts via admin:', error);
    return [];
  }
}

export async function getPublishedPostBySlugPublic(slug) {
  try {
    const snap = await adminDb
      .collection('blogPosts')
      .where('slug', '==', slug)
      .limit(1)
      .get();

    if (snap.empty) return null;

    const post = serializeDoc(snap.docs[0]);
    return post.published ? post : null;
  } catch (error) {
    console.error('Error fetching published post by slug via admin:', error);
    return null;
  }
}
