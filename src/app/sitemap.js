import { services } from '@/data/services';
import { locationPages } from '@/data/locationPages';
import { siteConfig } from '@/data/site';
import { getPublishedPostsPublic } from '@/lib/publicBlog';

function buildUrl(pathname) {
  return new URL(pathname, siteConfig.domain).toString();
}

function parseLastModified(value) {
  if (!value) return undefined;

  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

export const revalidate = 3600;

export default async function sitemap() {
  const staticRoutes = [
    '/',
    '/about',
    '/blog',
    '/contact',
    '/portfolio',
    '/services',
    ...services.map((service) => `/services/${service.id}`),
    ...Object.keys(locationPages).map((slug) => `/${slug}`),
  ];

  const staticEntries = staticRoutes.map((pathname) => ({
    url: buildUrl(pathname),
  }));

  const posts = await getPublishedPostsPublic();
  const blogEntries = posts
    .filter((post) => post?.slug)
    .map((post) => ({
      url: buildUrl(`/blog/${post.slug}`),
      lastModified: parseLastModified(post.updatedAt || post.publishedAt),
    }));

  return [...staticEntries, ...blogEntries];
}
