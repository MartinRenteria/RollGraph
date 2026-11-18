import { QuickLogForm } from '../../features/logger/components/QuickLogForm';

export default function LogRollPage() {
    return (
        <section
            aria-labelledby="log-heading"
            className="w-full max-w-xl mx-auto px-4 py-8 sm:py-12"
        >
            <div className="mb-6">
                <h1
                    id="log-heading"
                    className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
                >
                    Log a Roll
                </h1>
                <p className="text-sm text-slate-400 mt-1">
                    Capture what worked and where you got stuck while it is fresh.
                </p>
            </div>

            <QuickLogForm />
        </section>
    );
}
