import { blackoutDailyDriver, reviews } from '@/lib/products';

export function ProductJsonLd() {
  const data = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: blackoutDailyDriver.name,
    description: blackoutDailyDriver.shortDescription,
    image: ['https://matblksupps.com/images/product_image_1.png'],
    brand: { '@type': 'Brand', name: 'MAT BLK Supplements' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: blackoutDailyDriver.averageRating,
      reviewCount: blackoutDailyDriver.reviewCount,
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
      price: blackoutDailyDriver.price.toFixed(2),
      availability: blackoutDailyDriver.inStock
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
