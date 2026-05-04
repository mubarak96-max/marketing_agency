'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import AdminNav from '@/components/admin/AdminNav';
import { getAllPosts, deletePost, updatePost } from '@/lib/blog';

export default function AdminBlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    loadPosts();
  }, []);

  async function loadPosts() {
    setLoading(true);
    const data = await getAllPosts();
    setPosts(data);
    setLoading(false);
  }

  async function handleDelete(id, title) {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    await deletePost(id);
    setPosts((prev) => prev.filter((p) => p.id !== id));
  }

  async function handleTogglePublish(post) {
    await updatePost(post.id, { published: !post.published });
    setPosts((prev) => prev.map((p) => p.id === post.id ? { ...p, published: !p.published } : p));
  }

  const filtered = posts.filter((p) => {
    const matchSearch = p.title?.toLowerCase().includes(search.toLowerCase());
    if (filter === 'published') return matchSearch && p.published;
    if (filter === 'drafts') return matchSearch && !p.published;
    return matchSearch;
  });

  return (
    <div className="flex bg-slate-950 min-h-screen">
      <AdminNav />
      <main className="ml-60 flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white">Posts</h1>
            <p className="text-slate-400 text-sm mt-1">{posts.length} total posts</p>
          </div>
          <Link
            href="/admin/blog/new"
            className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors"
          >
            + New Post
          </Link>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4 mb-5">
          <div className="flex gap-1 bg-slate-900 border border-slate-800 rounded-xl p-1">
            {['all', 'published', 'drafts'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 text-sm font-medium rounded-lg capitalize transition-colors ${
                  filter === f ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <input
            type="search"
            placeholder="Search posts…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 max-w-xs bg-slate-900 border border-slate-800 text-slate-200 placeholder-slate-600 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Table */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
          {loading ? (
            <div className="p-8 text-center text-slate-500 text-sm">Loading posts…</div>
          ) : filtered.length === 0 ? (
            <div className="p-8 text-center text-slate-500 text-sm">
              No posts found.{' '}
              <Link href="/admin/blog/new" className="text-blue-400 hover:text-blue-300">Create one →</Link>
            </div>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="text-slate-500 text-xs uppercase tracking-wider border-b border-slate-800">
                  <th className="text-left px-6 py-3">Title</th>
                  <th className="text-left px-6 py-3">Category</th>
                  <th className="text-left px-6 py-3">Status</th>
                  <th className="text-left px-6 py-3">Read time</th>
                  <th className="text-left px-6 py-3">Date</th>
                  <th className="text-right px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((post) => (
                  <tr key={post.id} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors group">
                    <td className="px-6 py-4 max-w-xs">
                      <Link
                        href={`/admin/blog/${post.id}/edit`}
                        className="text-slate-200 hover:text-blue-400 font-medium transition-colors line-clamp-1 block"
                      >
                        {post.title || 'Untitled'}
                      </Link>
                      <span className="text-slate-600 text-xs">/blog/{post.slug}</span>
                    </td>
                    <td className="px-6 py-4 text-slate-400">{post.category || '—'}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleTogglePublish(post)}
                        className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${
                          post.published
                            ? 'bg-green-500/10 text-green-400 hover:bg-green-500/20'
                            : 'bg-yellow-500/10 text-yellow-400 hover:bg-yellow-500/20'
                        }`}
                      >
                        {post.published ? 'Published' : 'Draft'}
                      </button>
                    </td>
                    <td className="px-6 py-4 text-slate-400">{post.readTime || '—'}</td>
                    <td className="px-6 py-4 text-slate-400">{post.publishedAt || '—'}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Link
                          href={`/blog/${post.slug}`}
                          target="_blank"
                          className="text-xs text-slate-400 hover:text-blue-400 px-2 py-1 rounded hover:bg-slate-800 transition-colors"
                        >
                          View
                        </Link>
                        <Link
                          href={`/admin/blog/${post.id}/edit`}
                          className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded hover:bg-slate-800 transition-colors"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(post.id, post.title)}
                          className="text-xs text-slate-400 hover:text-red-400 px-2 py-1 rounded hover:bg-red-500/10 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
}
