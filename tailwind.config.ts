import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        md: '2rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
      },
    },
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'Bebas Neue', 'sans-serif'],
        condensed: ['var(--font-condensed)', 'Barlow Condensed', 'sans-serif'],
        body: ['var(--font-body)', 'DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Brand tokens (raw hex for precision)
        ink: {
          DEFAULT: '#141414',
          900: '#141414',
          800: '#1e1e1e',
          700: '#262626',
          600: '#333333',
        },
        bone: {
          DEFAULT: '#f0ece4',
          600: '#b0aca4',
          500: '#6e6a64',
        },
        success: '#4caf7d',
        // Reserved for review stars only — like success is reserved for verified badges
        gold: '#D4AF37',

        // shadcn semantic mappings
        background: '#141414',
        foreground: '#f0ece4',
        card: {
          DEFAULT: '#1e1e1e',
          foreground: '#f0ece4',
        },
        popover: {
          DEFAULT: '#1e1e1e',
          foreground: '#f0ece4',
        },
        primary: {
          DEFAULT: '#ffffff',
          foreground: '#141414',
        },
        secondary: {
          DEFAULT: '#262626',
          foreground: '#f0ece4',
        },
        muted: {
          DEFAULT: '#262626',
          foreground: '#b0aca4',
        },
        accent: {
          DEFAULT: '#f0ece4',
          foreground: '#141414',
        },
        destructive: {
          DEFAULT: '#dc2626',
          foreground: '#ffffff',
        },
        border: '#333333',
        input: '#262626',
        ring: '#f0ece4',
      },
      borderRadius: {
        lg: '12px',
        md: '8px',
        sm: '4px',
      },
      letterSpacing: {
        widest: '0.18em',
        ultra: '0.32em',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'announcement-cycle': {
          '0%, 28%': { opacity: '1', transform: 'translateY(0)' },
          '33%, 95%': { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '0', transform: 'translateY(-8px)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.25s ease-out',
        'accordion-up': 'accordion-up 0.25s ease-out',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
        'marquee': 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
