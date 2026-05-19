import type { Product, Review } from './types';

export const tenet: Product = {
  id: 'tenet',
  slug: 'tenet',
  name: 'TENET',
  subName: 'The Daily Driver Pre Workout',
  category: 'pre workout',
  price: 44.99,
  subscribePrice: 40.49,
  flavors: [
    {
      id: 'midnight-limeade',
      name: 'Midnight Limeade',
      shortName: 'Limeade',
      // Lemon TL → lime TR → blackberry BR → cherry BL — middle ground:
      // each color holds its quadrant identity but melts smoothly into neighbors
      gradient:
        'radial-gradient(circle at 22% 22%, rgba(245, 226, 90, 0.95) 0%, rgba(245, 226, 90, 0.55) 22%, transparent 38%), radial-gradient(circle at 78% 22%, rgba(160, 200, 60, 0.95) 0%, rgba(160, 200, 60, 0.55) 22%, transparent 38%), radial-gradient(circle at 78% 78%, rgba(126, 36, 144, 0.98) 0%, rgba(126, 36, 144, 0.6) 24%, transparent 42%), radial-gradient(circle at 22% 78%, rgba(170, 30, 52, 0.98) 0%, rgba(170, 30, 52, 0.6) 24%, transparent 42%), linear-gradient(135deg, #0c0c0c 0%, #050505 100%)',
    },
    {
      id: 'mango-passionfruit',
      name: 'Mango Passionfruit',
      shortName: 'Mango',
      // Mango orange (top half) ↔ passionfruit magenta-purple (bottom half),
      // closer-to-equal presence with soft horizontal blend at the meridian
      gradient:
        'radial-gradient(ellipse 110% 75% at 50% 18%, rgba(255, 148, 36, 0.98) 0%, rgba(255, 148, 36, 0.7) 28%, rgba(255, 148, 36, 0.25) 48%, transparent 72%), radial-gradient(ellipse 110% 75% at 50% 82%, rgba(168, 38, 124, 1) 0%, rgba(168, 38, 124, 0.78) 28%, rgba(168, 38, 124, 0.3) 48%, transparent 72%), linear-gradient(135deg, #1a0a06 0%, #0a0606 100%)',
    },
  ],
  // All 4 slots show the real product image until we have alternate angles.
  // Click behavior on thumbnails still swaps the main image normally.
  images: [
    '/images/product_image_1.png',
    '/images/product_image_1.png',
    '/images/product_image_1.png',
    '/images/product_image_1.png',
  ],
  shortDescription:
    'Carb infused, clinically dosed, and moderate stim daily driver to deliver full spectrum performance for every workout.',
  longDescription:
    "Enhance your training with TENET. This formula is built on science, with seven of our active ingredients at clinically dosed levels across pump, focus, endurance, and absorption pathways. The supporting cast (caffeine anhydrous, di caffeine malate, and Huperzine A) is included at clinically referenced doses and fully disclosed on the panel. With a smooth, moderate stim profile, TENET is the pre workout you'll rely on day in and day out.",
  ingredients: [
    { name: 'L-Citrulline', dose: '6,000 mg', hero: true },
    { name: 'Sodium Nitrate (NO3-T®)', dose: '1,000 mg', hero: true },
    { name: 'Beta-Alanine', dose: '3,200 mg' },
    { name: 'Alpha-GPC (50%)', dose: '600 mg', hero: true },
    { name: 'L-Tyrosine', dose: '2,000 mg', hero: true },
    { name: 'Taurine', dose: '1,000 mg' },
    { name: 'Caffeine Anhydrous', dose: '100 mg' },
    { name: 'Di Caffeine Malate', dose: '133 mg' },
    { name: 'Huperzine A (1% extract)', dose: '15 mg' },
    { name: 'Piperine (95%)', dose: '5 mg' },
  ],
  inStock: true,
  reviewCount: 47,
  averageRating: 4.9,
};

export const reviews: Review[] = [
  {
    id: '1',
    stars: 5,
    title: "Smoothest pre I've run",
    body:
      'No itch, no jitters, just clean energy and an actual pump that lasts the whole session. Limeade is unreal.',
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
      'Been using it 5x a week for a month. No tolerance build up, no crash. Mango is the move.',
    author: 'Devin R.',
    date: '2026-04-10',
    verified: true,
  },
  {
    id: '4',
    stars: 5,
    title: 'Mixes clean, tastes clean',
    body:
      'Tastes like an actual drink not a chemical bomb. Pumps are stupid.',
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
  {
    id: '6',
    stars: 5,
    title: 'Goes down easy',
    body:
      'Didn\'t expect the flavor to be this clean. No grit, no aftertaste. Limeade tastes like an actual drink.',
    author: 'Tyler M.',
    date: '2026-03-21',
    verified: true,
  },
  {
    id: '7',
    stars: 4,
    body:
      'Pump is real and lasts. Focus kicks in around 25 min. Smooth come down too.',
    author: 'Cole D.',
    date: '2026-03-14',
    verified: true,
  },
];
