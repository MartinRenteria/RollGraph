'use client';

import React, { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';

type SessionType = 'gi' | 'nogi' | 'open_mat';

export function QuickLogForm() {
    const [sessionType, setSessionType] = useState<SessionType>('nogi');
    const [notes, setNotes] = useState('');
    const [savedLog, setSavedLog] = useState<{ type: SessionType; text: string } | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!notes.trim()) return;

        setSavedLog({ type: sessionType, text: notes.trim() });
        setNotes('');
    };

    return (
        <div className="space-y-6">
            <form
                onSubmit={handleSubmit}
                aria-label="Quick roll logger"
                className="space-y-5 bg-slate-900 border border-slate-800 rounded-2xl p-5"
            >
                <fieldset className="space-y-2">
                    <legend className="text-sm font-semibold text-slate-200">
                        Session Type
                    </legend>
                    <div className="grid grid-cols-3 gap-2">
                        {(
                            [
                                { id: 'nogi', label: 'No-Gi' },
                                { id: 'gi', label: 'Gi' },
                                { id: 'open_mat', label: 'Open Mat' },
                            ] as const
                        ).map((option) => {
                            const isSelected = sessionType === option.id;
                            return (
                                <button
                                    key={option.id}
                                    type="button"
                                    aria-pressed={isSelected}
                                    onClick={() => setSessionType(option.id)}
                                    className={`min-h-11 rounded-xl text-sm font-bold border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 ${isSelected
                                            ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                                        }`}
                                >
                                    {option.label}
                                </button>
                            );
                        })}
                    </div>
                </fieldset>

                <div className="space-y-2">
                    <label
                        htmlFor="roll-notes"
                        className="block text-sm font-semibold text-slate-200"
                    >
                        How did your rounds go?
                    </label>
                    <textarea
                        id="roll-notes"
                        rows={4}
                        required
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="e.g., Hit a scissor sweep from closed guard on a blue belt, but kept getting passed with knee cuts in half guard."
                        className="w-full rounded-xl bg-slate-950 border border-slate-700 p-3.5 text-base text-slate-100 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none"
                    />
                    <p className="text-xs text-slate-400">
                        Write naturally—our AI will extract positions, hits, and struggles automatically.
                    </p>
                </div>

                <button
                    type="submit"
                    disabled={!notes.trim()}
                    className="w-full min-h-12 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-40 disabled:pointer-events-none text-slate-950 font-bold text-base flex items-center justify-center gap-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
                >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    Save Roll Note
                </button>
            </form>

            {savedLog && (
                <div
                    role="status"
                    aria-live="polite"
                    className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-sm text-emerald-200 flex items-start gap-3"
                >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                        <p className="font-bold text-white uppercase text-xs tracking-wider mb-1">
                            Logged ({savedLog.type.replace('_', ' ')})
                        </p>
                        <p className="text-slate-200">{savedLog.text}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
