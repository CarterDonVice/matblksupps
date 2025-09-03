
export interface NavLink {
  href: string;
  label: string;
  category?: string;
  children?: NavLink[];
}

export const mainNavLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  {
    href: '/shop',
    label: 'Shop',
    children: [
      { href: '/products/preworkout', label: 'Pre-Workout', category: 'preworkout' },
      { href: '/products/protein', label: 'Protein', category: 'protein' },
      { href: '/products/creatine', label: 'Creatine', category: 'creatine' },
    ],
  },
  { href: '/science', label: 'Science' },
  { href: '/about', label: 'About' },
  { href: '/ambassador', label: 'Become an Ambassador' },
  { href: '/contact', label: 'Contact' },
];

export const footerNavLinks: NavLink[] = [
  { href: '/terms', label: 'Terms of Service' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/contact', label: 'Contact Us' },
];
