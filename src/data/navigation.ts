export interface NavLink {
  href: string;
  label: string;
  category?: string; // For product category links
}

export const mainNavLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/products/preworkout', label: 'Pre-Workout', category: 'preworkout' },
  { href: '/products/protein', label: 'Protein', category: 'protein' },
  { href: '/products/creatine', label: 'Creatine', category: 'creatine' },
  { href: '/about', label: 'About Us' },
];

export const footerNavLinks: NavLink[] = [
  { href: '/terms', label: 'Terms of Service' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/contact', label: 'Contact Us' },
];
