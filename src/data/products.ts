
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
    images: ['/images/daily-driver.png'],
    dataAiHint: 'preworkout supplement',
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
    name: 'Jitter Bug',
    subName: 'Ultra High Stim',
    fullName: 'Jitter Bug-Ultra High Stim',
    category: 'preworkout',
    price: 54.99,
    images: ['/images/logopng.png', '/images/logopng.png'],
    dataAiHint: 'dark supplement',
    shortDescription: 'Unleash unparalleled intensity with our high-stimulant preworkout.',
    description: [
      'Jitter Bug-Ultra High Stim is not for the faint of heart. This high-stimulant preworkout is designed to push your limits, delivering explosive energy, laser-sharp focus, and an overwhelming drive to conquer your workout.',
      'If you\'re seeking an extreme sensory experience and a performance boost that hits hard, Jitter Bug is your weapon of choice.'
    ],
    sellingPoints: ['Maximum stimulant complex', 'Explosive energy & power', 'Intense mental focus', 'For advanced users'],
    ingredients: ['Caffeine Anhydrous', 'DMAE Bitartrate', 'Yohimbine HCL', 'Hordenine', 'Rauwolscine'],
  },
  {
    id: '3',
    slug: 'mat-blk-tunnel-vision-non-stim',
    name: 'Tunnel Vision',
    subName: 'Nootropic Non-Stim',
    fullName: 'Tunnel Vision-Nootropic Non-Stim',
    category: 'preworkout',
    price: 45.99,
    images: ['/images/logopng.png', '/images/logopng.png'],
    dataAiHint: 'sleek product',
    shortDescription: 'Achieve peak mental clarity and pump without stimulants.',
    description: [
      'Tunnel Vision-Nootropic Non-Stim offers a unique, stimulant-free preworkout experience. Sharpen your focus, enhance mind-muscle connection, and achieve incredible pumps without any caffeine or other stimulants.',
      'Perfect for late-night training sessions or for those sensitive to stimulants.'
    ],
    sellingPoints: ['Stimulant-free formula', 'Enhanced cognitive function', 'Massive muscle pumps', 'Zero jitters or crash'],
    ingredients: ['L-Citrulline', 'GlycerPump™', 'Nitrosigine®', 'Lion\'s Mane Mushroom', 'Huperzine A'],
  },
  {
    id: '4',
    slug: 'mat-blk-stacked-creatine',
    name: 'Stacked Creatine',
    subName: '',
    fullName: 'Stacked Creatine',
    category: 'creatine',
    price: 39.99,
    images: ['/images/logopng.png'],
    dataAiHint: 'powder supplement',
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
    name: 'MAT BLK',
    subName: 'Foundation Fuel',
    fullName: 'MAT BLK Foundation Fuel',
    category: 'protein',
    price: 59.99,
    images: ['/images/logopng.png', '/images/logopng.png'],
    dataAiHint: 'protein powder',
    shortDescription: 'Premium quality protein for optimal muscle recovery and growth.',
    description: [
      'MAT BLK Foundation Fuel provides a high-quality, easily digestible protein source to fuel your muscles and support recovery. Our blend is rich in essential amino acids and tastes incredible.',
      'Perfect for post-workout shakes or as a convenient way to meet your daily protein needs.'
    ],
    sellingPoints: ['Premium whey protein blend', 'Supports muscle recovery', 'Promotes lean muscle growth', 'Delicious taste & mixability'],
    ingredients: ['Whey Protein Isolate', 'Whey Protein Concentrate', 'Digestive Enzyme Blend', 'Natural Flavors'],
  },
  {
    id: '6',
    slug: 'mat-blk-g2-daily-driver',
    name: 'MAT BLK',
    subName: 'G2 Daily Driver',
    fullName: 'MAT BLK G2 Daily Driver',
    category: 'preworkout',
    price: 52.99,
    images: ['/images/daily-driver.png'], 
    dataAiHint: 'preworkout supplement',
    shortDescription: 'Next-gen daily preworkout: enhanced focus, sustained energy.',
    description: [
      'Elevate your daily training with MAT BLK G2 Daily Driver. Building on our trusted formula, G2 offers an even smoother energy curve and heightened mental clarity for peak performance, day in and day out.',
      'Formulated with advanced ingredients for superior absorption and effectiveness, ensuring you get the most from every workout without the crash.'
    ],
    sellingPoints: ['Upgraded sustained energy', 'Advanced focus matrix', 'Improved absorption', 'Zero compromise performance'],
    ingredients: ['Beta-Alanine (CarnoSyn®)', 'L-Citrulline DL-Malate 2:1', 'Caffeine Anhydrous (dual-source)', 'L-Tyrosine', 'Cognizin® Citicoline', 'AstraGin®'],
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

export const getProductsByCategory = (category: ProductCategory): Product[] => {
  return products.filter(product => product.category === category);
};
