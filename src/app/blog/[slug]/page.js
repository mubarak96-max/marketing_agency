import { getPostBySlug } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Simple markdown → HTML (same as editor)
function mdToHtml(md) {
  if (!md) return '';
  return md
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/^\> (.+)$/gm, '<blockquote>$1</blockquote>')
    .replace(/^\- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    .replace(/!\[(.+?)\]\((.+?)\)/g, '<img src="$2" alt="$1" />')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[a-z])/gm, '<p>')
    .replace(/(?<!\>)$/gm, '</p>')
    .replace(/<p><\/p>/g, '');
}

function renderContent(post) {
  if (!post?.content) return '';
  if (post.contentType === 'markdown') return mdToHtml(post.content);
  return post.content; // HTML from visual editor
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return {};

  return {
    title: post.metaTitle || `${post.title} | MM Tech Spot`,
    description: post.metaDescription || post.excerpt,
    keywords: post.metaKeywords || post.tags?.join(', '),
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
      type: 'article',
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || !post.published) {
    notFound();
  }

  const htmlContent = renderContent(post);

  return (
    <article className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-16 bg-brand-dark text-white">
        {post.coverImage && (
          <div className="absolute inset-0 opacity-20">
            <img src={post.coverImage} alt="" className="w-full h-full object-cover" />
          </div>
        )}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors">
            ← Blog
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            {post.category && (
              <span className="px-3 py-1 bg-brand-primary/20 text-brand-primary border border-brand-primary/30 rounded-full text-xs font-semibold">
                {post.category}
              </span>
            )}
            {post.readTime && <span className="text-white/50 text-sm">{post.readTime}</span>}
            {post.publishedAt && <span className="text-white/50 text-sm">{post.publishedAt}</span>}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">{post.title}</h1>
          {post.excerpt && (
            <p className="text-lg text-white/70 max-w-2xl leading-relaxed">{post.excerpt}</p>
          )}

          {/* Tags */}
          {post.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((t) => (
                <span key={t} className="px-2.5 py-1 bg-white/10 text-white/60 rounded-lg text-xs">{t}</span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Body */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="blog-content text-gray-700 leading-8"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* Author / CTA */}
          <div className="mt-16 p-8 bg-brand-light rounded-2xl border border-brand-primary/10 text-center">
            <p className="text-sm text-gray-500 mb-3">Published by</p>
            <p className="text-xl font-bold text-brand-dark mb-1">MM Tech Spot</p>
            <p className="text-gray-500 text-sm mb-6">Uganda's digital agency for websites, apps & marketing.</p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-brand-primary text-white rounded-xl font-semibold hover:bg-brand-accent transition-colors text-sm"
            >
              Work with us →
            </Link>
          </div>

          {/* Back */}
          <div className="mt-10 text-center">
            <Link href="/blog" className="text-brand-primary hover:underline text-sm font-medium">
              ← Back to all articles
            </Link>
          </div>
        </div>
      </section>

      {/* Blog content styles */}
      <style>{`
        .blog-content h1 { font-size: 2em; font-weight: 700; color: #0F172A; margin: 1.2em 0 .5em; }
        .blog-content h2 { font-size: 1.5em; font-weight: 700; color: #0F172A; margin: 1.2em 0 .5em; border-bottom: 2px solid #F1F5F9; padding-bottom: .3em; }
        .blog-content h3 { font-size: 1.2em; font-weight: 600; color: #1E293B; margin: 1em 0 .4em; }
        .blog-content p  { margin: .8em 0; }
        .blog-content ul { list-style: disc; padding-left: 1.6em; margin: .8em 0; }
        .blog-content ol { list-style: decimal; padding-left: 1.6em; margin: .8em 0; }
        .blog-content li { margin: .3em 0; }
        .blog-content blockquote { border-left: 4px solid #2563EB; padding: .5em 1em; background: #F1F5F9; border-radius: 0 8px 8px 0; color: #475569; font-style: italic; margin: 1em 0; }
        .blog-content code { background: #F1F5F9; border-radius: 4px; padding: .15em .4em; font-family: monospace; font-size: .9em; color: #2563EB; }
        .blog-content pre { background: #0F172A; color: #7dd3fc; border-radius: 10px; padding: 1.2em; overflow-x: auto; margin: 1em 0; font-size: .88em; font-family: monospace; white-space: pre-wrap; }
        .blog-content pre code { background: none; color: inherit; padding: 0; }
        .blog-content a { color: #2563EB; text-decoration: underline; }
        .blog-content a:hover { color: #1d4ed8; }
        .blog-content img { max-width: 100%; border-radius: 12px; margin: 1.2em 0; box-shadow: 0 4px 20px rgba(0,0,0,.08); }
        .blog-content strong { font-weight: 700; color: #0F172A; }
        .blog-content hr { border: none; border-top: 2px solid #F1F5F9; margin: 2em 0; }
      `}</style>
    </article>
  );
}
