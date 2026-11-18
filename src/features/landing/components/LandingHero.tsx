import Link from 'next/link';
import { Mic, Network } from 'lucide-react';

export function LandingHero() {
    return (
        <section
            aria-labelledby="hero-heading"
            className="flex-1 flex flex-col items-center justify-center px-4 text-center max-w-2xl mx-auto"
        >
            <h1
                id="hero-heading"
                className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4"
            >
                Map your Jiu-Jitsu game, one roll at a time.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
                Log your sparring rounds in seconds and watch your personalized BJJ
                skill tree grow automatically.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Link
                    href="/log"
                    className="min-h-12 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold inline-flex items-center justify-center gap-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                >
                    <Mic className="w-5 h-5" aria-hidden="true" />
                    Log a Roll
                </Link>

                <Link
                    href="/graph"
                    className="min-h-12 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold inline-flex items-center justify-center gap-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                >
                    <Network className="w-5 h-5 text-sky-400" aria-hidden="true" />
                    View Skill Tree
                </Link>
            </div>
        </section>
    );
}
