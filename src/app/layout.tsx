import type { Metadata, Viewport } from 'next';
import { Bebas_Neue, Barlow_Condensed, DM_Sans } from 'next/font/google';
import './globals.css';
import { SelectionProvider } from '@/contexts/SelectionContext';
import { ReviewsProvider } from '@/contexts/ReviewsContext';
import { CartProvider } from '@/contexts/CartContext';
import {
  CouponProvider,
  StickyDiscountButton,
} from '@/components/marketing/CouponPopup';
import { CartDrawer } from '@/components/cart/CartDrawer';

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
    default:
      'MAT BLK Supplements — Clinically Dosed, Transparent-Label Pre-Workout',
    template: '%s · MAT BLK Supplements',
  },
  description:
    'MAT BLK builds clinically dosed, transparent-label daily driver pre-workout. Every ingredient. Every dose. Printed on the label. No proprietary blends. No fillers.',
  keywords: [
    'clinically dosed pre-workout',
    'transparent label pre-workout',
    'daily driver pre-workout',
    'moderate stim pre-workout',
    'best pre-workout for serious lifters',
    'pre-workout no proprietary blend',
    'TENET',
    'MAT BLK',
  ],
  openGraph: {
    title: 'TENET Daily Driver Pre-Workout — MAT BLK Supplements',
    description:
      'Clinically dosed, transparent-label daily driver pre-workout. 6g L-citrulline, 3.2g beta-alanine, 600mg Alpha-GPC, 100mg caffeine.',
    url: 'https://matblksupps.com',
    siteName: 'MAT BLK Supplements',
    type: 'website',
    images: [{ url: '/images/product_image_1.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TENET Daily Driver Pre-Workout — MAT BLK Supplements',
    description:
      'Clinically dosed, transparent-label daily driver pre-workout. Every ingredient, every dose, on the label.',
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
        <ReviewsProvider>
          <CartProvider>
            <SelectionProvider>
              <CouponProvider>
                {children}
                <CartDrawer />
                <StickyDiscountButton />
              </CouponProvider>
            </SelectionProvider>
          </CartProvider>
        </ReviewsProvider>
      </body>
    </html>
  );
}
