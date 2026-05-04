'use client';

import * as React from 'react';
import { Send, Check, ChevronDown } from 'lucide-react';

const subjects = [
  'General Inquiry',
  'Order Issue',
  'Press',
  'Wholesale',
  'Other',
] as const;

type Subject = (typeof subjects)[number];

export function ContactForm() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState<Subject>('General Inquiry');
  const [message, setMessage] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const valid =
    name.trim().length > 0 && email.includes('@') && message.trim().length > 4;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    setSubmitted(true);
    // TODO: wire to a transactional email/forms service (Resend, Formspree, etc.)
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-bone-500/40 bg-ink-800 p-8 sm:p-10 text-center space-y-3">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-success/15 text-success">
          <Check className="h-6 w-6" strokeWidth={2.5} />
        </span>
        <h2 className="font-display text-3xl text-white tracking-[0.01em]">
          Message sent
        </h2>
        <p className="text-bone-600 text-sm max-w-md mx-auto">
          Thanks for reaching out. We'll get back to you at{' '}
          <span className="text-bone">{email}</span> within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-4 rounded-2xl border border-ink-600 bg-ink-800 p-6 sm:p-8"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Name" required>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            className={inputCls}
          />
        </Field>
        <Field label="Email" required>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            placeholder="you@email.com"
            className={inputCls}
          />
        </Field>
      </div>

      <Field label="Subject">
        <div className="relative">
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value as Subject)}
            className={`${inputCls} appearance-none pr-10 cursor-pointer`}
          >
            {subjects.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-bone-500"
            strokeWidth={1.75}
          />
        </div>
      </Field>

      <Field label="Message" required>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          placeholder="What's up?"
          className={`${inputCls} h-auto py-3 resize-y min-h-[120px]`}
        />
      </Field>

      <button
        type="submit"
        disabled={!valid}
        className="w-full h-12 rounded-xl bg-white text-ink font-condensed text-sm font-extrabold tracking-[0.16em] uppercase inline-flex items-center justify-center gap-2 transition-transform hover:scale-[1.005] active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-800 focus-visible:ring-bone"
      >
        Send Message
        <Send className="h-4 w-4" strokeWidth={2.25} />
      </button>
    </form>
  );
}

const inputCls =
  'w-full h-12 rounded-lg bg-ink border border-ink-600 px-4 text-bone placeholder:text-bone-500 outline-none transition-colors focus:border-bone-500 focus-visible:ring-2 focus-visible:ring-bone/20';

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  const id = React.useId();
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block label-eyebrow">
        {label}
        {required && <span className="text-bone-500 ml-1">*</span>}
      </label>
      {React.isValidElement(children)
        ? React.cloneElement(children as React.ReactElement<{ id?: string }>, { id })
        : children}
    </div>
  );
}
