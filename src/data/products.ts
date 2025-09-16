
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
    isOutOfStock: true,
  },
  {
    id: '4',
    slug: 'mat-blk-stacked-creatine',
    name: 'Stacked Creatine',
    subName: '',
    baseName: 'Stacked Creatine',
    flavor: 'Unflavored',
    fullName: 'Stacked Creatine',
    category: 'creatine',
    price: 39.99,
    images: ['/images/matblklogo.png'],
    dataAiHint: 'company logo',
    shortDescription: 'Elevate your strength and muscle growth with our advanced creatine blend.',
    description: [
      'Stacked Creatine combines multiple forms of creatine with synergistic ingredients to maximize absorption and effectiveness. Build lean muscle, increase strength, and improve recovery.',
      'Our formula ensures you get the most out of every training session.'
    ],
    sellingPoints: ['Multi-source creatine blend', 'Enhanced absorption', 'Supports muscle growth', 'Improves strength & power'],
    ingredients: ['Creatine Monohydrate', 'Creatine HCl', 'Creatine MagnaPower®', 'Betaine Anhydrous', 'Astragin®'],
  },
  {
    id: '5',
    slug: 'mat-blk-foundation-fuel',
    name: 'Foundation Fuel',
    subName: 'Protein',
    baseName: 'Foundation Fuel Protein',
    flavor: 'Chocolate',
    fullName: 'Foundation Fuel Protein',
    category: 'protein',
    price: 59.99,
    images: ['/images/matblklogo.png'],
    dataAiHint: 'company logo',
    shortDescription: 'Premium quality protein for optimal muscle recovery and growth.',
    description: [
      'Foundation Fuel Protein provides a high-quality, easily digestible protein source to fuel your muscles and support recovery. Our blend is rich in essential amino acids and tastes incredible.',
      'Perfect for post-workout shakes or as a convenient way to meet your daily protein needs.'
    ],
    sellingPoints: ['Premium whey protein blend', 'Supports muscle recovery', 'Promotes lean muscle growth', 'Delicious taste & mixability'],
    ingredients: ['Whey Protein Isolate', 'Whey Protein Concentrate', 'Digestive Enzyme Blend', 'Natural Flavors'],
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

export const getProductsByCategory = (category: ProductCategory): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductsByBaseName = (baseName: string): Product[] => {
  return products.filter(product => product.baseName === baseName);
}
