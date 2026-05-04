import type { Metadata } from 'next';
import { Instagram, Mail, Clock } from 'lucide-react';
import { ContactForm } from '@/components/site/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with MAT BLK Supplements. Order issues, press, wholesale, or anything else — we respond within 24 hours.',
};

export default function ContactPage() {
  return (
    <article className="space-y-10">
      <header className="space-y-4">
        <p className="label-eyebrow">Get in Touch</p>
        <h1 className="font-display text-5xl sm:text-7xl text-white tracking-[0.01em] leading-[0.92]">
          Contact
        </h1>
        <p className="text-bone-600 max-w-prose text-[15px] sm:text-base leading-relaxed">
          Questions, feedback, order issues, wholesale inquiries — drop us a line.
          We respond within 24 hours.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 gap-3">
        <a
          href="mailto:hello@matblksupps.com"
          className="group flex items-center gap-3 rounded-xl border border-ink-600 bg-ink-800 p-5 hover:border-bone-500 transition-colors"
        >
          <Mail
            className="h-5 w-5 text-bone group-hover:text-white shrink-0"
            strokeWidth={1.5}
          />
          <div className="min-w-0">
            <p className="label-eyebrow">Email</p>
            <p className="text-bone text-sm truncate">hello@matblksupps.com</p>
          </div>
        </a>
        <a
          href="https://www.instagram.com/matblksupps/"
          target="_blank"
          rel="noreferrer noopener"
          className="group flex items-center gap-3 rounded-xl border border-ink-600 bg-ink-800 p-5 hover:border-bone-500 transition-colors"
        >
          <Instagram
            className="h-5 w-5 text-bone group-hover:text-white shrink-0"
            strokeWidth={1.5}
          />
          <div className="min-w-0">
            <p className="label-eyebrow">Instagram</p>
            <p className="text-bone text-sm">@matblksupps</p>
          </div>
        </a>
      </div>

      <ContactForm />

      <p className="flex items-center justify-center gap-2 text-bone-500 text-xs tracking-[0.12em] uppercase">
        <Clock className="h-3.5 w-3.5" strokeWidth={1.75} />
        We respond within 24 hours
      </p>
    </article>
  );
}
