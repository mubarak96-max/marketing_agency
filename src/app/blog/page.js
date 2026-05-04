import Link from 'next/link';
import { getPublishedPosts } from '@/lib/blog';

export const metadata = {
  title: 'Digital Growth Blog | MM Tech Spot Uganda',
  description: 'Practical articles on website development, mobile apps, SEO, PPC, and digital marketing strategies for businesses in Uganda.',
  keywords: 'digital marketing blog uganda, seo tips kampala, web development articles, mm tech spot blog',
};

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-20 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Digital Growth Blog</h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Practical articles on websites, apps, SEO, PPC, and digital growth for businesses in Uganda.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <p className="text-lg">No posts published yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-lg hover:border-brand-primary/30 transition-all duration-300"
                >
                  {post.coverImage && (
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full aspect-video object-cover rounded-xl mb-5"
                    />
                  )}
                  <div className="text-sm font-semibold text-brand-primary mb-3">
                    {[post.category, post.readTime].filter(Boolean).join(' · ')}
                  </div>
                  <h2 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 mb-6 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-brand-primary font-semibold text-sm group-hover:underline">
                      Read article →
                    </span>
                    <span className="text-gray-400 text-xs">{post.publishedAt}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
