import type { Metadata } from 'next';
import { Mail, Clock, Calendar } from 'lucide-react';
import { ContactForm } from '@/components/site/ContactForm';

export const metadata: Metadata = {
  title: 'Contact MAT BLK Supplements',
  description:
    'Questions about TENET Daily Driver Pre-Workout, order support, athlete inquiries, or press. We respond within 24 business hours.',
};

export default function ContactPage() {
  return (
    <article className="space-y-10 sm:space-y-12">
      <header className="space-y-4">
        <p className="label-eyebrow">Get In Touch</p>
        <h1 className="font-display text-5xl sm:text-7xl text-white tracking-[0.01em] leading-[0.92]">
          Contact
        </h1>
        <p className="text-bone-600 max-w-prose text-[15px] sm:text-base leading-relaxed">
          Questions, feedback, or athlete inquiries. We respond within 24
          business hours.
        </p>
      </header>

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-start">
        <ContactForm />

        <aside className="space-y-4 lg:sticky lg:top-24">
          <div className="rounded-2xl border border-ink-600 bg-ink-800 p-6 sm:p-7 space-y-5">
            <p className="label-eyebrow">Reach Us Directly</p>

            <div className="space-y-4">
              <Detail
                icon={Mail}
                label="Email"
                value="support@matblksupps.com"
                href="mailto:support@matblksupps.com"
              />
              <Detail
                icon={Calendar}
                label="Hours"
                value="Monday through Friday, 9am to 5pm Central"
              />
              <Detail
                icon={Clock}
                label="Response Time"
                value="Within 24 business hours"
              />
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}

function Detail({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-md border border-ink-600 bg-ink text-bone shrink-0">
        <Icon
          width={16}
          height={16}
          strokeWidth={1.75 as unknown as number}
        />
      </span>
      <div className="min-w-0">
        <p className="label-eyebrow mb-0.5">{label}</p>
        <p className="text-bone text-sm break-all">{value}</p>
      </div>
    </div>
  );
  if (href) {
    return (
      <a
        href={href}
        className="block group hover:text-white transition-colors"
      >
        {content}
      </a>
    );
  }
  return content;
}
