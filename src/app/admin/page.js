'use client';
import { useEffect, useState } from 'react';
import AdminNav from '@/components/admin/AdminNav';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export default function AdminDashboard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts().then((data) => { setPosts(data); setLoading(false); });
  }, []);

  const published = posts.filter((p) => p.published).length;
  const drafts = posts.filter((p) => !p.published).length;

  return (
    <div className="flex bg-slate-950 min-h-screen">
      <AdminNav />
      <main className="ml-60 flex-1 p-8">
        <h1 className="text-2xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-slate-400 text-sm mb-8">Welcome back, Mubarak 👋</p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { label: 'Total Posts', value: loading ? '—' : posts.length, color: 'blue' },
            { label: 'Published', value: loading ? '—' : published, color: 'green' },
            { label: 'Drafts', value: loading ? '—' : drafts, color: 'yellow' },
          ].map((s) => (
            <div key={s.label} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <p className="text-sm text-slate-400 mb-1">{s.label}</p>
              <p className="text-4xl font-bold text-white">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div className="flex gap-3 mb-10">
          <Link
            href="/admin/blog/new"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors"
          >
            + New Post
          </Link>
          <Link
            href="/admin/blog"
            className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium rounded-xl transition-colors"
          >
            View All Posts
          </Link>
        </div>

        {/* Recent posts */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-200">Recent Posts</h2>
            <Link href="/admin/blog" className="text-xs text-blue-400 hover:text-blue-300">View all →</Link>
          </div>
          {loading ? (
            <div className="p-6 text-slate-500 text-sm">Loading…</div>
          ) : posts.length === 0 ? (
            <div className="p-6 text-slate-500 text-sm">No posts yet. <Link href="/admin/blog/new" className="text-blue-400">Create your first post →</Link></div>
          ) : (
            <table className="w-full text-sm">
              <thead>
                <tr className="text-slate-500 text-xs uppercase tracking-wider border-b border-slate-800">
                  <th className="text-left px-6 py-3">Title</th>
                  <th className="text-left px-6 py-3">Category</th>
                  <th className="text-left px-6 py-3">Status</th>
                  <th className="text-left px-6 py-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {posts.slice(0, 8).map((post) => (
                  <tr key={post.id} className="border-b border-slate-800/50 hover:bg-slate-800/40 transition-colors">
                    <td className="px-6 py-3">
                      <Link href={`/admin/blog/${post.id}/edit`} className="text-slate-200 hover:text-blue-400 font-medium transition-colors line-clamp-1">
                        {post.title || 'Untitled'}
                      </Link>
                    </td>
                    <td className="px-6 py-3 text-slate-400">{post.category || '—'}</td>
                    <td className="px-6 py-3">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${post.published ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'}`}>
                        {post.published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-6 py-3 text-slate-400">{post.publishedAt || '—'}</td>
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
