
import type { Product, ProductCategory } from '@/lib/types';

export const products: Product[] = [
  {
    id: '6',
    slug: 'mat-blk-go2-daily-driver',
    name: 'GO-2',
    subName: 'Daily Driver',
    fullName: 'MAT BLK GO-2 Daily Driver',
    category: 'preworkout',
    price: 49.99,
    images: ['/images/product image 1.png'], 
    dataAiHint: 'preworkout supplement',
    shortDescription: 'Carb-infused, clinically dosed, and moderate stim daily driver to deliver full spectrum performance for every workout.',
    description: [
      'Elevate your daily training with MAT BLK G2 Daily Driver. Building on our trusted formula, G2 offers an even smoother energy curve and heightened mental clarity for peak performance, day in and day out.',
      'Formulated with advanced ingredients for superior absorption and effectiveness, ensuring you get the most from every workout without the crash.'
    ],
    sellingPoints: ["Clinically dosed Pump+Focus stack", "Dual-Phase energy complex", "Carb-Fueled endurance", "Enhanced absorption"],
    ingredients: ['Beta-Alanine (CarnoSyn®)', 'L-Citrulline DL-Malate 2:1', 'Caffeine Anhydrous (dual-source)', 'L-Tyrosine', 'Cognizin® Citicoline', 'AstraGin®'],
  },
  {
    id: '2',
    slug: 'mat-blk-jitter-bug',
    name: 'Jitter Bug',
    subName: 'Ultra High Stim',
    fullName: 'Jitter Bug-Ultra High Stim',
    category: 'preworkout',
    price: 54.99,
    images: ['/images/matblklogo.png'],
    dataAiHint: 'company logo',
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
    images: ['/images/matblklogo.png'],
    dataAiHint: 'company logo',
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
