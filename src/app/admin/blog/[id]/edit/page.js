'use client';
import { useEffect, useState, use } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import AdminNav from '@/components/admin/AdminNav';
import BlogEditor from '@/components/admin/BlogEditor';
import { getPostById, updatePost, deletePost } from '@/lib/blog';
import Link from 'next/link';

export default function EditPostPage({ params }) {
  const { id: postId } = use(params);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');
  const [toast, setToast] = useState('');

  useEffect(() => {
    loadPost(postId);
  }, [postId]);

  useEffect(() => {
    if (searchParams.get('saved')) {
      showToast('Post saved successfully!');
    }
  }, [searchParams]);

  function showToast(msg) {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  }

  async function loadPost(id) {
    try {
      const data = await getPostById(id);
      if (!data) { setError('Post not found.'); return; }
      setPost(data);
    } catch (e) {
      setError('Failed to load post.');
    } finally {
      setLoading(false);
    }
  }

  async function handleSave(data) {
    if (!data.title.trim()) { setError('Title is required.'); return; }
    setError('');
    setIsSaving(true);
    try {
      const id = post.id;
      await updatePost(id, data);
      showToast('Post updated successfully!');
    } catch (e) {
      setError(e?.message || 'Failed to update post. Please try again.');
      console.error(e);
    } finally {
      setIsSaving(false);
    }
  }

  async function handleDelete() {
    if (!confirm(`Delete "${post.title}"? This cannot be undone.`)) return;
    try {
      await deletePost(post.id);
      router.push('/admin/blog');
    } catch (e) {
      setError(e?.message || 'Failed to delete post. Please try again.');
      console.error(e);
    }
  }


  return (
    <div className="flex bg-slate-950 min-h-screen">
      <AdminNav />
      <main className="ml-60 flex-1">
        {/* Breadcrumb + delete */}
        <div className="px-8 pt-6 pb-0 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Link href="/admin/blog" className="hover:text-slate-300 transition-colors">Posts</Link>
            <span>/</span>
            <span className="text-slate-300 line-clamp-1">{post?.title || 'Edit Post'}</span>
          </div>
          {post && (
            <div className="flex items-center gap-3">
              <Link
                href={`/blog/${post.slug}`}
                target="_blank"
                className="text-xs text-slate-400 hover:text-blue-400 transition-colors"
              >
                View post ↗
              </Link>
              <button
                onClick={handleDelete}
                className="text-xs text-red-400 hover:text-red-300 bg-red-500/10 hover:bg-red-500/20 px-3 py-1.5 rounded-lg transition-colors"
              >
                Delete
              </button>
            </div>
          )}
        </div>

        {error && (
          <div className="mx-8 mt-4 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : post ? (
          <BlogEditor post={post} onSave={handleSave} isSaving={isSaving} />
        ) : (
          <div className="px-8 py-10 text-slate-400 text-sm">Post not found.</div>
        )}

        {/* Toast */}
        {toast && (
          <div className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-xl shadow-xl text-sm font-medium animate-fade-in z-50">
            {toast}
          </div>
        )}
      </main>
    </div>
  );
}
