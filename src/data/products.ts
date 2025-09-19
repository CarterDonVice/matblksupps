import type { Product, ProductCategory } from '@/lib/types';

export const products: Product[] = [
  {
    id: '6',
    slug: 'mat-blk-blackout-daily-driver-sour-gummy',
    name: 'Blackout',
    subName: 'Daily Driver',
    baseName: 'Blackout Daily Driver',
    flavor: 'Sour Gummy',
    fullName: 'MAT BLK Blackout Daily Driver - Sour Gummy',
    category: 'preworkout',
    price: 49.99,
    images: ['/images/product image 1.png'],
    dataAiHint: 'preworkout supplement',
    shortDescription: 'Carb-infused, clinically dosed, and moderate stim daily driver to deliver full spectrum performance for every workout.',
    description: [
      "Enhance your training with MAT BLK's Blackout Daily Driver. This formula is built on science and backed by clinical research, using clinically dosed ingredients including L-Citrulline, L-Tyrosine, Alpha-GPC, Huperzine A, Taurine, and a dual-source caffeine system. With added support for nutrient absorption and a smooth, moderate-stim profile, Blackout is the pre-workout you’ll rely on day in and day out.",
      "† Based on clinical studies of individual ingredients at matching dosages. This product has not been clinically tested. These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease."
    ],
    sellingPoints: ["Clinically dosed Pump+Focus stack", "Dual-Phase energy complex", "Carb-Fueled endurance", "Enhanced absorption"],
    ingredients: [
      'Pump & Performance',
      'L-Citrulline – 6,000 mg',
      'Focus & Cognition',
      'L-Tyrosine – 2,000 mg',
      'Alpha-GPC (50%) – 600 mg',
      'Huperzine A (1%) – 150 mcg',
      'Energy & Stimulants',
      'Caffeine Anhydrous – 100 mg',
      'Dicaffeine Malate (Infinergy®) – 133 mg (yields ~100 mg caffeine)',
      'Total Caffeine Yield – ~200 mg',
      'Hydration & Support',
      'Taurine – 1,000 mg',
      'Himalayan Pink Salt – 200 mg',
      'Potassium Chloride – 300 mg',
      'Magnesium Glycinate – 100 mg',
      'Absorption Enhancer',
      'Piperine (Black Pepper Extract, 95%) – 5 mg',
    ],
    isOutOfStock: false,
  },
];

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find(product => product.slug === slug);

export const getProductsByCategory = (category: ProductCategory): Product[] =>
  products.filter(product => product.category === category);

export const getProductsByBaseName = (baseName: string): Product[] =>
  products.filter(product => product.baseName === baseName);
