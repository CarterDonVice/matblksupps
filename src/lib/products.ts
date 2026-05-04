import type { Product, Review } from './types';

export const blackoutDailyDriver: Product = {
  id: 'blackout-daily-driver',
  slug: 'blackout-daily-driver',
  name: 'Blackout Daily Driver',
  subName: 'GO-2 Daily Driver',
  category: 'pre-workout',
  price: 44.99,
  subscribePrice: 40.49,
  flavors: [
    {
      id: 'midnight-limeade',
      name: 'Midnight Limeade',
      shortName: 'Limeade',
      accentHex: '#9bc23d',
    },
    {
      id: 'mango-passionfruit',
      name: 'Mango Passionfruit',
      shortName: 'Mango',
      accentHex: '#e08a3c',
    },
  ],
  images: ['/images/product-1.png'],
  shortDescription:
    'Carb-infused, clinically dosed, and moderate stim daily driver to deliver full spectrum performance for every workout.',
  longDescription:
    "Enhance your training with MAT BLK's Blackout Daily Driver. This formula is built on science and backed by clinical research, using clinically dosed ingredients including L-Citrulline, L-Tyrosine, Alpha-GPC, Huperzine A, Taurine, and a dual-source caffeine system. With added support for nutrient absorption and a smooth, moderate-stim profile, Blackout is the pre-workout you'll rely on day in and day out.",
  sellingPoints: [
    'Clinically dosed Pump+Focus stack',
    'Dual-Phase energy complex',
    'Carb-Fueled endurance',
    'Enhanced absorption',
  ],
  ingredientGroups: [
    {
      title: 'Pump & Performance',
      blurb: 'Nitric oxide pathway support for sustained, full-body pumps.',
      items: [{ name: 'L-Citrulline', dose: '6,000 mg' }],
    },
    {
      title: 'Focus & Cognition',
      blurb: 'Sharpens the mind-muscle connection from rep one.',
      items: [
        { name: 'L-Tyrosine', dose: '2,000 mg' },
        { name: 'Alpha-GPC (50%)', dose: '600 mg' },
        { name: 'Huperzine A (1%)', dose: '150 mcg' },
      ],
    },
    {
      title: 'Energy & Stimulants',
      blurb: 'Dual caffeine: hit hard, stay smooth, no crash.',
      items: [
        { name: 'Caffeine Anhydrous', dose: '100 mg' },
        { name: 'Dicaffeine Malate (Infinergy®)', dose: '133 mg' },
        { name: 'Total Caffeine Yield', dose: '~200 mg' },
      ],
    },
    {
      title: 'Hydration & Support',
      blurb: 'Full electrolyte matrix to keep performance sharp.',
      items: [
        { name: 'Taurine', dose: '1,000 mg' },
        { name: 'Himalayan Pink Salt', dose: '200 mg' },
        { name: 'Potassium Chloride', dose: '300 mg' },
        { name: 'Magnesium Glycinate', dose: '100 mg' },
      ],
    },
    {
      title: 'Absorption Enhancer',
      blurb: 'Ensures your body actually uses what you take.',
      items: [{ name: 'Piperine (Black Pepper Extract, 95%)', dose: '5 mg' }],
    },
  ],
  inStock: true,
  reviewCount: 47,
  averageRating: 4.9,
};

export const reviews: Review[] = [
  {
    id: '1',
    stars: 5,
    title: 'Smoothest pre I\'ve run',
    body:
      'No itch, no jitters, just clean energy and an actual pump that lasts the whole session. The limeade flavor is unreal.',
    author: 'Marcus T.',
    date: '2026-04-22',
    verified: true,
  },
  {
    id: '2',
    stars: 5,
    title: 'Finally clinically dosed',
    body:
      'Tired of prop blends. 6g cit and full Alpha-GPC dose at this price is a steal. Focus is dialed.',
    author: 'Jordan K.',
    date: '2026-04-18',
    verified: true,
  },
  {
    id: '3',
    stars: 5,
    title: 'Daily driver, lives up to the name',
    body:
      'Been using it 5x a week for a month. No tolerance build-up, no crash. Mango is the move.',
    author: 'Devin R.',
    date: '2026-04-10',
    verified: true,
  },
  {
    id: '4',
    stars: 5,
    body:
      'Mixes clean, tastes like an actual drink not a chemical bomb. Pumps are stupid.',
    author: 'Alex P.',
    date: '2026-04-05',
    verified: true,
  },
  {
    id: '5',
    stars: 4,
    title: 'Solid all around',
    body:
      'Energy is smooth, focus is real. Wish there was a stronger stim option but for daily this is perfect.',
    author: 'Ryan S.',
    date: '2026-03-29',
    verified: true,
  },
];
