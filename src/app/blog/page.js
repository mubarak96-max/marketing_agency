import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';

export const metadata = {
  title: 'Digital Marketing & Web Development Blog Uganda | Nexus Digital',
  description: 'Guides on website development, app development cost, Google Ads, and digital marketing for businesses in Uganda.',
  keywords: 'website development Uganda blog, app development cost Uganda, google ads Uganda, website builders small business Uganda',
};

export default function Blog() {
  return (
    <div className="min-h-screen bg-luxury-white">
      <section className="relative py-20 bg-dubai-dark text-luxury-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Digital Growth Blog</h1>
          <p className="text-xl md:text-2xl text-luxury-white/90 max-w-3xl mx-auto">
            Practical articles on websites, apps, SEO, PPC, and digital growth for businesses in Kampala and across Uganda.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-2xl border border-border-light bg-white p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="text-sm font-semibold text-brand-accent mb-3">
                  {post.category} · {post.readTime}
                </div>
                <h2 className="text-2xl font-bold text-dubai-dark mb-4">{post.title}</h2>
                <p className="text-gray-600 mb-6">{post.excerpt}</p>
                <span className="text-dubai-gold font-semibold">Read article</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
