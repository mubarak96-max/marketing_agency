import { notFound } from 'next/navigation';
import { blogPosts, getBlogPostBySlug } from '@/data/blogPosts';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }

  return {
    title: `${post.title} | MM Tech Spot`,
    description: post.description,
    keywords: post.keywords,
  };
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-luxury-white">
      <section className="relative py-20 bg-dubai-dark text-luxury-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-accent font-semibold mb-4">
            {post.category} · {post.readTime} · {post.publishedAt}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          <p className="text-xl text-gray-300">{post.description}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg leading-8 text-gray-700 mb-10">{post.intro}</p>

          <div className="space-y-10">
            {post.sections.map((section) => (
              <section key={section.title} className="rounded-2xl bg-white p-8 shadow-sm border border-border-light">
                <h2 className="text-2xl font-bold text-dubai-dark mb-4">{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-gray-600 leading-8 mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-4 space-y-2 text-gray-600">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start">
                        <span className="w-2 h-2 bg-dubai-gold rounded-full mr-3 mt-3" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <section className="mt-12 rounded-2xl bg-section-light p-8">
            <h2 className="text-2xl font-bold text-text-on-light mb-6">Frequently Asked Questions</h2>
            <div className="space-y-5">
              {post.faqs.map((faq) => (
                <div key={faq.question} className="rounded-xl bg-card-light p-6 border border-border-light">
                  <h3 className="text-lg font-semibold text-text-on-light mb-2">{faq.question}</h3>
                  <p className="text-text-muted-light">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </article>
  );
}
