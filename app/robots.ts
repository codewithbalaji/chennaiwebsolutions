import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/404', '/500', '/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
} 