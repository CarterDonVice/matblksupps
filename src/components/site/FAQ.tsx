'use client';

import * as React from 'react';
import { Plus } from 'lucide-react';

interface Faq {
  q: string;
  a: React.ReactNode;
}

const faqs: Faq[] = [
  {
    q: 'When should I take TENET?',
    a: 'Take TENET 20–30 minutes before training. Mix one scoop with 8–12 oz of cold water. For best results, take on an empty or near-empty stomach.',
  },
  {
    q: 'Can I take TENET every day?',
    a: 'Yes — TENET is formulated as a daily driver. Caffeine content (~233mg total) is moderate compared to high-stim formulas, making it suitable for daily use. As with any caffeinated supplement, listen to your body and consider taking 1–2 days off per week.',
  },
  {
    q: 'Will TENET cause a crash?',
    a: 'TENET uses a dual caffeine system — 100mg of caffeine anhydrous for the initial kick, plus 133mg of di-caffeine malate for sustained release. This combination is specifically designed to provide smooth, sustained energy without the sharp crash of single-source caffeine formulas.',
  },
  {
    q: 'What does the tingle feel like?',
    a: "That tingle is beta-alanine — clinically dosed at 3,200mg. It's harmless and indicates the ingredient is working to buffer lactic acid in your muscles. The sensation typically diminishes after 2–3 weeks of consistent use.",
  },
  {
    q: 'Are there any banned substances?',
    a: 'No. TENET is formulated without WADA-banned substances or proprietary blends. Every ingredient and dosage is fully disclosed on the label.',
  },
  {
    q: 'How does Subscribe & Save work?',
    a: 'Subscribe & Save delivers TENET to your door at your chosen frequency (every 30, 45, or 60 days) with 10% off every order. Cancel, pause, or modify anytime — no commitment required.',
  },
  {
    q: "What's your return policy?",
    a: "We offer a 100% satisfaction guarantee. If TENET doesn't meet your expectations, contact us within 30 days of purchase for a full refund — no questions asked.",
  },
  {
    q: 'Where is TENET manufactured?',
    a: 'TENET is manufactured in Carrollton, Texas in a GMP-compliant, FDA-registered facility. Made in USA.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section
      aria-labelledby="faq"
      className="bg-ink py-16 sm:py-24 border-t border-ink-600"
    >
      <div className="container max-w-3xl">
        <header className="text-center mb-10 sm:mb-12">
          <p className="label-eyebrow mb-3">Answers</p>
          <h2
            id="faq"
            className="font-display text-5xl sm:text-7xl text-white tracking-[0.01em] leading-[0.92] mb-3"
          >
            Frequently Asked
          </h2>
          <p className="text-bone-600 text-[15px] sm:text-base">
            The questions worth answering.
          </p>
        </header>

        <ul className="border-t border-ink-600">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <li
                key={i}
                className="border-b border-ink-600"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 sm:py-6 text-left transition-colors hover:bg-ink-800/40 -mx-4 px-4 sm:-mx-5 sm:px-5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bone"
                >
                  <h3 className="font-condensed text-base sm:text-lg font-extrabold tracking-[0.04em] uppercase text-white leading-snug pr-2">
                    {item.q}
                  </h3>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-bone-600 transition-transform duration-300 ${
                      isOpen ? 'rotate-45 text-white' : ''
                    }`}
                    strokeWidth={1.5}
                  />
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-bone-600 text-[14px] sm:text-[15px] leading-relaxed pb-5 sm:pb-6 max-w-prose">
                      {item.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
