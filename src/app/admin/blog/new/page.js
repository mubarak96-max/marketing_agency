'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminNav from '@/components/admin/AdminNav';
import BlogEditor from '@/components/admin/BlogEditor';
import { createPost } from '@/lib/blog';
import Link from 'next/link';

export default function NewPostPage() {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');

  async function handleSave(data) {
    if (!data.title.trim()) { setError('Title is required.'); return; }
    if (!data.slug.trim()) { setError('Slug is required.'); return; }
    setError('');
    setIsSaving(true);
    try {
      const id = await createPost(data);
      router.push(`/admin/blog/${id}/edit?saved=1`);
    } catch (e) {
      setError(e?.message || 'Failed to save post. Please try again.');
      console.error(e);
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <div className="flex bg-slate-950 min-h-screen">
      <AdminNav />
      <main className="ml-60 flex-1">
        {/* Breadcrumb */}
        <div className="px-8 pt-6 pb-0 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/admin/blog" className="hover:text-slate-300 transition-colors">Posts</Link>
          <span>/</span>
          <span className="text-slate-300">New Post</span>
        </div>

        {error && (
          <div className="mx-8 mt-4 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
            {error}
          </div>
        )}

        <BlogEditor onSave={handleSave} isSaving={isSaving} />
      </main>
    </div>
  );
}
