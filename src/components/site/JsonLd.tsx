import { tenet, reviews } from '@/lib/products';

export function ProductJsonLd() {
  const data = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: tenet.name,
    description: tenet.shortDescription,
    image: ['https://matblksupps.com/images/product_image_1.png'],
    brand: { '@type': 'Brand', name: 'MAT BLK Supplements' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: tenet.averageRating,
      reviewCount: tenet.reviewCount,
    },
    review: reviews.slice(0, 3).map((r) => ({
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: r.stars },
      author: { '@type': 'Person', name: r.author },
      reviewBody: r.body,
      datePublished: r.date,
    })),
    offers: {
      '@type': 'Offer',
      url: 'https://matblksupps.com/',
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
