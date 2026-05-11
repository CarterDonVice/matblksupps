'use client';

import * as React from 'react';
import { Plus } from 'lucide-react';

interface Faq {
  q: string;
  a: React.ReactNode;
}

const faqs: Faq[] = [
  {
    q: 'Why TENET?',
    a: 'TENET exists because most pre workouts are built to look strong on the label and feel weak in the gym. Hidden doses behind proprietary blends. Cheap fillers padding the tub. Single source caffeine that crashes you at 2pm. TENET strips all of that out. Ten ingredients. All clinically dosed. All fully disclosed. Built to be the foundation you train on every day.',
  },
  {
    q: "What's in TENET's formula?",
    a: '10 clinically dosed ingredients. No proprietary blends. No fillers. Every milligram fully disclosed. The full label sits visible above.',
  },
  {
    q: 'When should I take TENET?',
    a: 'Take TENET 20 to 30 minutes before training. Mix one scoop with 8 to 12 ounces of cold water. For best results, take it on an empty or near empty stomach.',
  },
  {
    q: 'Can I take TENET every day?',
    a: 'Yes. TENET is formulated as a daily driver. The 233mg total caffeine sits in the moderate range, which makes it suitable for everyday training. Listen to your body and consider taking 1 or 2 days off per week if needed.',
  },
  {
    q: "What if I'm sensitive to caffeine?",
    a: 'TENET sits at 233mg total caffeine, roughly equivalent to two strong coffees. If you\'re caffeine sensitive, start with half a scoop to assess tolerance. For a fully stim free option, watch for future TENET variants.',
  },
  {
    q: 'Will TENET cause a crash?',
    a: 'TENET uses a DUAL CAFFEINE SYSTEM designed specifically to prevent the crash. 100mg of Caffeine Anhydrous delivers the initial kick. 133mg of Di Caffeine Malate extends the release for sustained energy. The result is a smooth taper, not a hard cliff.',
  },
  {
    q: 'How is TENET different from other pre workouts?',
    a: 'Three ways stand out. Every ingredient is clinically dosed without any underdosing to cut costs. No proprietary blends and full transparency on every milligram. No fillers like maltodextrin. TENET is built to be your foundation, not your gimmick.',
  },
  {
    q: 'Why no fillers or proprietary blends?',
    a: 'Fillers like maltodextrin add weight to the tub but nothing to your training. Proprietary blends hide doses behind vague labels. TENET skips both. Every ingredient is disclosed at clinical dose. What you read on the label is exactly what you get.',
  },
  {
    q: 'Is TENET safe for tested athletes?',
    a: "TENET's formula contains no substances on the WADA Prohibited List or the NCAA banned drug list. However, we are not currently NSF Certified for Sport or Informed Sport. Those certifications guarantee batch level cleanliness through third party testing, which is something we may pursue in the future. Athletes in tested competition should verify with their compliance officer before use.",
  },
  {
    q: 'Can I stack TENET with other supplements?',
    a: "Yes. TENET pairs well with creatine, protein, electrolytes, and other non stimulant supplements. Keep total daily caffeine intake under 400mg. If you're already taking caffeinated supplements, factor that in.",
  },
  {
    q: 'How does Subscribe & Save work?',
    a: 'Subscribe & Save delivers TENET to your door at your chosen frequency of every 30, 45, or 60 days with 10% off every order. Cancel, pause, or modify anytime with no commitment required.',
  },
  {
    q: "What's your return policy?",
    a: "100% satisfaction guarantee. If TENET doesn't perform like we say it does, contact us within 30 days for a full refund, even if the tub is empty. No hoops. No questions.",
  },
  {
    q: 'Where is TENET made?',
    a: 'TENET is manufactured in Carrollton, Texas at a GMP compliant, FDA registered facility. Every batch follows current Good Manufacturing Practice standards for dietary supplements, the same regulatory framework that governs how supplements must be produced in the United States. Made in USA. Dosed transparently. No compromises on quality control.',
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
              <li key={i} className="border-b border-ink-600">
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
