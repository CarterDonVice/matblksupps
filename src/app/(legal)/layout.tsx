import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1 bg-ink">
        <div className="container max-w-3xl py-16 sm:py-24">{children}</div>
      </main>
      <Footer />
    </>
  );
}
