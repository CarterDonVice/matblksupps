
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
      "Enhance your training with MAT BLK's GO-2 Daily Driver. This formula is built on science and backed by clinical research, using clinically dosed ingredients including L-Citrulline, NO3-T Arginine Nitrate, L-Tyrosine, Alpha-GPC, Huperzine A, Cluster Dextrin, Taurine, and a dual-source caffeine system. With added support for nutrient absorption and a smooth, moderate-stim profile, GO-2 is the pre-workout you’ll rely on day in and day out.",
      "† Based on clinical studies of individual ingredients at matching dosages. This product has not been clinically tested. These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease."
    ],
    sellingPoints: ["Clinically dosed Pump+Focus stack", "Dual-Phase energy complex", "Carb-Fueled endurance", "Enhanced absorption"],
    ingredients: [
      'Pump & Performance',
      'L-Citrulline – 6,000 mg',
      'NO3-T® (Arginine Nitrate) – 500 mg',
      'Focus & Cognition',
      'L-Tyrosine – 2,000 mg',
      'Alpha-GPC (50%) – 600 mg',
      'Huperzine A (1%) – 150 mcg',
      'Energy & Stimulants',
      'Caffeine Anhydrous – 100 mg',
      'Dicaffeine Malate (Infinergy®) – 133 mg (yields ~100 mg caffeine)',
      'Total Caffeine Yield – ~200 mg',
      'Carbohydrate Fuel',
      'Cluster Dextrin® (Highly Branched Cyclic Dextrin) – 10,000 mg',
      'Hydration & Support',
      'Taurine – 1,000 mg',
      'Himalayan Pink Salt – 200 mg',
      'Potassium Chloride – 300 mg',
      'Magnesium Glycinate – 100 mg',
      'Absorption Enhancer',
      'Piperine (Black Pepper Extract, 95%) – 5 mg',
    ],
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
