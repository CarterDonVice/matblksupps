'use client';

export default function ErrorBoundary({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex-1 bg-ink flex items-center justify-center px-5 py-24">
      <div className="text-center space-y-5 max-w-sm">
        <h1 className="font-display text-5xl text-white tracking-[0.01em]">
          Something went sideways.
        </h1>
        <p className="text-bone-600 text-sm">Refresh or try again.</p>
        <button
          type="button"
          onClick={() => reset()}
          className="h-12 px-6 rounded-xl bg-white text-ink font-condensed text-sm font-extrabold tracking-[0.16em] uppercase transition-all duration-200 hover:scale-[1.02] hover:bg-bone active:scale-[0.99]"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
