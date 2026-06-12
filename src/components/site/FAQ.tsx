'use client';

import * as React from 'react';
import Link from 'next/link';
import { Plus, ArrowRight, Mail } from 'lucide-react';
import { faqItems } from '@/lib/faq';

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section
      aria-labelledby="faq"
      className="bg-ink py-12 sm:py-16 border-t border-ink-600"
    >
      <div className="container max-w-3xl lg:max-w-5xl">
        <header className="text-center mb-8 sm:mb-10">
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

        <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 lg:items-start">
        <ul className="border-t border-ink-600">
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <li key={i} className="border-b border-ink-600">
                <button
                  type="button"
                  id={`faq-question-${i}`}
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
                  aria-labelledby={`faq-question-${i}`}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-left text-bone-600 text-[14px] sm:text-[15px] leading-relaxed pb-5 sm:pb-6 max-w-prose">
                      {item.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Desktop side panel — fills the empty right margin */}
        <aside className="hidden lg:block sticky top-24 rounded-2xl border border-ink-600 bg-ink-800 p-7 space-y-4">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-ink-600 bg-ink text-bone">
            <Mail className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <p className="font-display text-3xl text-white tracking-[0.01em] leading-[0.95]">
            Still Have Questions?
          </p>
          <p className="text-bone-600 text-sm leading-relaxed">
            Reach out and we will get back to you within 24 business hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-white text-ink font-condensed text-xs font-extrabold tracking-[0.16em] uppercase transition-all duration-200 hover:scale-[1.02] hover:bg-bone active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-800 focus-visible:ring-bone"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
          </Link>
        </aside>
        </div>
      </div>
    </section>
  );
}
