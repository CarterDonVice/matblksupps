import type { Metadata, Viewport } from 'next';
import { Bebas_Neue, Barlow_Condensed, DM_Sans } from 'next/font/google';
import './globals.css';
import { SelectionProvider } from '@/contexts/SelectionContext';
import { CouponPopup } from '@/components/marketing/CouponPopup';

const display = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
});

const condensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-condensed',
  display: 'swap',
});

const body = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://matblksupps.com'),
  title: {
    default: 'MAT BLK Supplements — Blackout Daily Driver Pre-Workout',
    template: '%s · MAT BLK Supplements',
  },
  description:
    'Clinically dosed daily driver pre-workout. Science-backed ingredients at proper doses. No proprietary blends. Premium performance, accessibly priced.',
  keywords: [
    'best pre-workout',
    'clinically dosed pre-workout',
    'science-backed pre-workout supplement',
    'daily driver pre-workout',
    'pre-workout without crash',
    'moderate stim pre-workout',
    'MAT BLK',
  ],
  openGraph: {
    title: 'Blackout Daily Driver — MAT BLK Supplements',
    description:
      'Clinically dosed. Every rep. Every set. Science-backed daily driver pre-workout.',
    url: 'https://matblksupps.com',
    siteName: 'MAT BLK Supplements',
    type: 'website',
    images: [{ url: '/images/product_image_1.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blackout Daily Driver — MAT BLK Supplements',
    description: 'Clinically dosed. Every rep. Every set.',
    images: ['/images/product_image_1.png'],
  },
  icons: {
    icon: [
      { url: '/images/AbrevLogoMini.png', sizes: '32x32', type: 'image/png' },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#141414',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${condensed.variable} ${body.variable}`}
    >
      <body className="bg-ink text-bone min-h-screen flex flex-col antialiased">
        <SelectionProvider>
          {children}
          <CouponPopup />
        </SelectionProvider>
      </body>
    </html>
  );
}
