'use client';

import * as React from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Lock, Loader2 } from 'lucide-react';

export default function LoginPage() {
  return (
    <React.Suspense fallback={null}>
      <LoginForm />
    </React.Suspense>
  );
}

function LoginForm() {
  const params = useSearchParams();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setLoading(true);
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (res.ok) {
        const from = params.get('from') || '/';
        // Hard navigation so middleware re-runs with the new cookie.
        window.location.href = from;
        return;
      }
      setError(true);
      setLoading(false);
    } catch {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink px-5 overflow-hidden">
      <div aria-hidden className="absolute inset-0 texture-grain opacity-60" />
      <div
        aria-hidden
        className="absolute inset-0 texture-wordmark opacity-30 pointer-events-none"
      />

      <div className="relative w-full max-w-sm">
        <div className="flex flex-col items-center text-center mb-8">
          <Image
            src="/images/AbrevLogoMini.png"
            alt="MAT BLK Supplements"
            width={56}
            height={56}
            priority
            className="h-12 w-12 object-contain mb-5"
          />
          <p className="label-eyebrow mb-2">Private Preview</p>
          <h1 className="font-display text-4xl sm:text-5xl text-white tracking-[0.02em] leading-[0.95]">
            MAT BLK
          </h1>
          <p className="text-bone-600 text-sm mt-3">
            This site is in development. Sign in to continue.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          noValidate
          className="rounded-2xl border border-ink-600 bg-ink-800 p-6 sm:p-7 space-y-4"
        >
          <Field
            label="Username"
            type="text"
            value={username}
            onChange={setUsername}
            autoComplete="username"
          />
          <Field
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
            autoComplete="current-password"
          />

          {error && (
            <p className="text-destructive text-[13px] text-center" role="alert">
              Incorrect username or password.
            </p>
          )}

          <button
            type="submit"
            disabled={loading || !username || !password}
            className="w-full h-12 rounded-xl bg-white text-ink font-condensed text-sm font-extrabold tracking-[0.16em] uppercase inline-flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] hover:bg-bone active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-800 focus-visible:ring-bone"
          >
            {loading ? (
              <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2.25} />
            ) : (
              <Lock className="h-4 w-4" strokeWidth={2.25} />
            )}
            {loading ? 'Signing in' : 'Enter Site'}
          </button>
        </form>

        <p className="text-bone-500 text-[10px] tracking-[0.12em] uppercase text-center mt-6">
          © 2026 MAT BLK Supplements LLC
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  type,
  value,
  onChange,
  autoComplete,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  autoComplete?: string;
}) {
  const id = React.useId();
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block label-eyebrow">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        className="w-full h-12 rounded-lg bg-ink border border-ink-600 px-4 text-bone placeholder:text-bone-500 outline-none transition-colors focus:border-bone-500 focus-visible:ring-2 focus-visible:ring-bone/20"
      />
    </div>
  );
}
