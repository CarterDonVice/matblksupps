import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified, priority: 1 },
    { url: `${SITE_URL}/product/tenet`, lastModified, priority: 0.9 },
    { url: `${SITE_URL}/science`, lastModified, priority: 0.7 },
    { url: `${SITE_URL}/about`, lastModified, priority: 0.5 },
    { url: `${SITE_URL}/contact`, lastModified, priority: 0.5 },
    { url: `${SITE_URL}/accessibility`, lastModified, priority: 0.3 },
    { url: `${SITE_URL}/privacy`, lastModified, priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified, priority: 0.3 },
    { url: `${SITE_URL}/refund`, lastModified, priority: 0.3 },
  ];
}
