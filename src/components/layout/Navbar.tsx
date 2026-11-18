import Link from 'next/link';
import { Network } from 'lucide-react';

export function Navbar() {
    return (
        <header className="border-b border-slate-800 bg-slate-950">
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-sky-400 focus:text-slate-950 focus:font-bold"
            >
                Skip to main content
            </a>

            <nav
                aria-label="Primary navigation"
                className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between"
            >
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 font-bold text-lg text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400 rounded-md"
                >
                    <Network className="w-5 h-5 text-emerald-400" aria-hidden="true" />
                    <span>RollGraph</span>
                </Link>
            </nav>
        </header>
    );
}
