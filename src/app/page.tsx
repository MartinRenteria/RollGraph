import { Navbar } from '@/components/layout/Navbar';
import { LandingHero } from '@/features/landing/components/LandingHero';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Navbar />

      <main id="main-content" className="flex-1 flex flex-col">
        <LandingHero />
      </main>
    </div>
  );
}
