
import type { Product, ProductCategory } from '@/lib/types';

export const products: Product[] = [
  {
    id: '1',
    slug: 'mat-blk-pure-and-potent',
    name: 'MAT BLK',
    subName: 'pure and potent',
    fullName: 'MAT BLK pure and potent',
    category: 'preworkout',
    price: 49.99,
    images: ['/images/mat-blk-pure-and-potent.png'],
    shortDescription: 'The ultimate daily driver preworkout for sustained energy and focus.',
    description: [
      'Experience the pinnacle of pre-workout supplementation with MAT BLK pure and potent. Engineered for athletes who demand the best, this formula delivers a smooth, sustained energy release without the jitters or crash.',
      'Our extended release energy blend keeps you powered through your toughest workouts, while clinically potent dosages of key ingredients ensure maximum efficacy. Enhance focus, endurance, and strength with every scoop.'
    ],
    sellingPoints: ['Extended release energy blends', 'Clinical potent dosings', 'Enhanced focus & endurance', 'No crash formula'],
    ingredients: ['Beta-Alanine', 'Citrulline Malate', 'Caffeine Anhydrous (timed release)', 'L-Theanine', 'Alpha-GPC'],
  },
  {
    id: '2',
    slug: 'mat-blk-jitter-bug',
    name: 'MAT BLK',
    subName: 'Jitter Bug',
    fullName: 'MAT BLK Jitter Bug',
    category: 'preworkout',
    price: 54.99,
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    dataAiHint: 'dark supplement',
    shortDescription: 'Unleash unparalleled intensity with our high-stimulant preworkout.',
    description: [
      'MAT BLK Jitter Bug is not for the faint of heart. This high-stimulant preworkout is designed to push your limits, delivering explosive energy, laser-sharp focus, and an overwhelming drive to conquer your workout.',
      'If you\'re seeking an extreme sensory experience and a performance boost that hits hard, Jitter Bug is your weapon of choice.'
    ],
    sellingPoints: ['Maximum stimulant complex', 'Explosive energy & power', 'Intense mental focus', 'For advanced users'],
    ingredients: ['Caffeine Anhydrous', 'DMAE Bitartrate', 'Yohimbine HCL', 'Hordenine', 'Rauwolscine'],
  },
  {
    id: '3',
    slug: 'mat-blk-tunnel-vision-non-stim',
    name: 'MAT BLK',
    subName: 'tunnel vision - non stim',
    fullName: 'MAT BLK tunnel vision - non stim',
    category: 'preworkout',
    price: 45.99,
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    dataAiHint: 'sleek product',
    shortDescription: 'Achieve peak mental clarity and pump without stimulants.',
    description: [
      'MAT BLK tunnel vision offers a unique, stimulant-free preworkout experience. Sharpen your focus, enhance mind-muscle connection, and achieve incredible pumps without any caffeine or other stimulants.',
      'Perfect for late-night training sessions or for those sensitive to stimulants.'
    ],
    sellingPoints: ['Stimulant-free formula', 'Enhanced cognitive function', 'Massive muscle pumps', 'Zero jitters or crash'],
    ingredients: ['L-Citrulline', 'GlycerPump™', 'Nitrosigine®', 'Lion\'s Mane Mushroom', 'Huperzine A'],
  },
  {
    id: '4',
    slug: 'mat-blk-stacked-creatine',
    name: 'MAT BLK',
    subName: 'stacked creatine',
    fullName: 'MAT BLK stacked creatine',
    category: 'creatine',
    price: 39.99,
    images: ['https://placehold.co/600x600.png'],
    dataAiHint: 'powder supplement',
    shortDescription: 'Elevate your strength and muscle growth with our advanced creatine blend.',
    description: [
      'MAT BLK stacked creatine combines multiple forms of creatine with synergistic ingredients to maximize absorption and effectiveness. Build lean muscle, increase strength, and improve recovery.',
      'Our formula ensures you get the most out of every training session.'
    ],
    sellingPoints: ['Multi-source creatine blend', 'Enhanced absorption', 'Supports muscle growth', 'Improves strength & power'],
    ingredients: ['Creatine Monohydrate', 'Creatine HCl', 'Creatine MagnaPower®', 'Betaine Anhydrous', 'Astragin®'],
  },
  {
    id: '5',
    slug: 'mat-blk-foundation-fuel',
    name: 'MAT BLK',
    subName: 'Foundation Fuel',
    fullName: 'MAT BLK Foundation Fuel',
    category: 'protein',
    price: 59.99,
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    dataAiHint: 'protein powder',
    shortDescription: 'Premium quality protein for optimal muscle recovery and growth.',
    description: [
      'MAT BLK Foundation Fuel provides a high-quality, easily digestible protein source to fuel your muscles and support recovery. Our blend is rich in essential amino acids and tastes incredible.',
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
