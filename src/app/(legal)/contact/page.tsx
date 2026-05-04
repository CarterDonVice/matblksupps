import type { Metadata } from 'next';
import { Instagram, Mail } from 'lucide-react';

export const metadata: Metadata = { title: 'Contact Us' };

export default function ContactPage() {
  return (
    <article className="space-y-8">
      <p className="label-eyebrow">Get in touch</p>
      <h1 className="font-display text-5xl sm:text-6xl text-white">Contact</h1>
      <p className="text-bone-600 max-w-md">
        Questions, feedback, or wholesale inquiries — drop us a line.
      </p>

      <div className="grid gap-3 sm:grid-cols-2 max-w-xl">
        <a
          href="mailto:hello@matblksupps.com"
          className="group flex items-center gap-3 rounded-xl border border-ink-600 bg-ink-800 p-5 hover:border-bone-500 transition-colors"
        >
          <Mail className="h-5 w-5 text-bone group-hover:text-white" strokeWidth={1.5} />
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
          <Instagram className="h-5 w-5 text-bone group-hover:text-white" strokeWidth={1.5} />
          <div className="min-w-0">
            <p className="label-eyebrow">Instagram</p>
            <p className="text-bone text-sm">@matblksupps</p>
          </div>
        </a>
      </div>
    </article>
  );
}
