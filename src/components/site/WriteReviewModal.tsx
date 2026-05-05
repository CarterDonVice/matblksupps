'use client';

import * as React from 'react';
import { Star, X, Check, Send } from 'lucide-react';
import type { Review } from '@/lib/types';

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmit: (review: Review) => void;
}

export function WriteReviewModal({ open, onClose, onSubmit }: Props) {
  const [stars, setStars] = React.useState(0);
  const [hoverStars, setHoverStars] = React.useState(0);
  const [author, setAuthor] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  // Reset on open
  React.useEffect(() => {
    if (open) {
      setStars(0);
      setHoverStars(0);
      setAuthor('');
      setTitle('');
      setBody('');
      setSubmitted(false);
    }
  }, [open]);

  // Lock scroll + ESC handler
  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  const valid = stars >= 1 && author.trim().length > 0 && body.trim().length > 4;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    const review: Review = {
      id: `user-${Date.now()}`,
      stars,
      title: title.trim() || undefined,
      body: body.trim(),
      author: author.trim(),
      date: new Date().toISOString().slice(0, 10),
      verified: false,
    };
    onSubmit(review);
    setSubmitted(true);
    window.setTimeout(onClose, 1500);
  };

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-4 sm:p-6 transition-opacity duration-300 ${
        open ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="write-review-title"
        className={`relative w-full max-w-md rounded-2xl bg-ink-800 border border-ink-600 shadow-[0_30px_80px_rgba(0,0,0,0.6)] transition-all duration-300 ease-out ${
          open ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-[0.98] opacity-0'
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-bone-600 hover:text-white hover:bg-ink/60 transition-colors"
        >
          <X className="h-4 w-4" strokeWidth={1.75} />
        </button>

        <div className="px-6 pt-9 pb-7 sm:px-8 sm:pt-10 sm:pb-8">
          {submitted ? (
            <div className="text-center py-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-success/15 text-success mb-4">
                <Check className="h-6 w-6" strokeWidth={2.5} />
              </span>
              <h3 className="font-display text-3xl text-white tracking-[0.01em] mb-2">
                Thanks for the feedback
              </h3>
              <p className="text-bone-600 text-sm">
                Your review has been added.
              </p>
            </div>
          ) : (
            <>
              <p className="label-eyebrow mb-3">Your Review</p>
              <h3
                id="write-review-title"
                className="font-display text-3xl sm:text-4xl text-white tracking-[0.01em] leading-[0.95] mb-6"
              >
                Write a Review
              </h3>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Star rating */}
                <div className="space-y-1.5">
                  <span className="label-eyebrow">Rating *</span>
                  <div
                    className="flex items-center gap-1"
                    role="radiogroup"
                    aria-label="Rating"
                  >
                    {[1, 2, 3, 4, 5].map((n) => {
                      const filled = (hoverStars || stars) >= n;
                      return (
                        <button
                          key={n}
                          type="button"
                          role="radio"
                          aria-checked={stars === n}
                          aria-label={`${n} star${n === 1 ? '' : 's'}`}
                          onMouseEnter={() => setHoverStars(n)}
                          onMouseLeave={() => setHoverStars(0)}
                          onClick={() => setStars(n)}
                          className="p-1 -m-1 inline-flex items-center justify-center rounded transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bone"
                        >
                          <Star
                            className={`h-7 w-7 transition-colors ${
                              filled ? 'text-bone fill-bone' : 'text-bone-500'
                            }`}
                            strokeWidth={1.5}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                <Field label="Name" required>
                  <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Your name"
                    className={inputCls}
                  />
                </Field>

                <Field label="Title (optional)">
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Sums up your review"
                    maxLength={80}
                    className={inputCls}
                  />
                </Field>

                <Field label="Review" required>
                  <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="What did you think?"
                    rows={4}
                    maxLength={500}
                    className={`${inputCls} h-auto py-3 resize-y min-h-[100px]`}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={!valid}
                  className="w-full h-12 rounded-xl bg-white text-ink font-condensed text-sm font-extrabold tracking-[0.16em] uppercase inline-flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] hover:bg-bone active:scale-[0.99] disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-800 focus-visible:ring-bone"
                >
                  Submit Review
                  <Send className="h-4 w-4" strokeWidth={2.25} />
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
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
