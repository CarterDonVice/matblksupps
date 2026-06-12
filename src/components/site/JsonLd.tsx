import { tenet } from '@/lib/products';
import { faqItems } from '@/lib/faq';
import { SITE_URL } from '@/lib/site';

export function ProductJsonLd() {
  const data = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: tenet.name,
    description: tenet.shortDescription,
    image: [`${SITE_URL}/images/product_image_1.png`],
    brand: { '@type': 'Brand', name: 'MAT BLK Supplements' },
    // No AggregateRating or Review markup: the on-page reviews are labeled
    // placeholders, so no rating/review structured data is served to search.
    offers: {
      '@type': 'Offer',
      url: `${SITE_URL}/product/tenet`,
      priceCurrency: 'USD',
      price: tenet.price.toFixed(2),
      availability: tenet.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Organization schema. Mounted once in the root layout. */
export function OrganizationJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MAT BLK Supplements',
    url: SITE_URL,
    logo: `${SITE_URL}/images/FullLogo.png`,
    sameAs: ['https://www.instagram.com/matblksupps/'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** WebSite schema for site name display in search. Mounted once in the root layout. */
export function WebSiteJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'MAT BLK Supplements',
    alternateName: 'MAT BLK',
    url: SITE_URL,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * FAQPage schema for the product detail page.
 * Sourced from the same FAQ items rendered visibly in the FAQ section,
 * so visible content and structured data stay in sync.
 */
export function FAQJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
