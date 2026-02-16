"use client";

import Icon from "./Icon";

const AgendaSection = () => {
    return (
        <section className="relative z-10 py-20 bg-slate-900/20">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="bg-[#0B1120] border border-amber-500/30 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[100px] pointer-events-none"></div>

                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                        <span className="bg-amber-500 text-black rounded px-2 py-1 text-sm">AGENDA</span>
                        📚 Di OXO TALKS Ini Kamu Akan Memahami:
                    </h3>

                    <ul className="space-y-6">
                        {[
                            { title: "The Retail Trap", desc: "Kenapa trader retail sering rugi: Psikologi crowd behavior & FOMO." },
                            { title: "Emotional Trading Exposing", desc: "Identifikasi trigger emosional dan cara install 'circuit breaker'." },
                            { title: "DEX as Discipline Tool", desc: "Bagaimana transparansi blockchain memaksa kehati-hatian." },
                            { title: "Practical Execution", desc: "Demo setup wallet, connect DEX, dan eksekusi trade aman." },
                            { title: "Real Case Study", desc: "Analisis skenario nyata: dari perencanaan sampai eksekusi." }
                        ].map((item, idx) => (
                            <li key={idx} className="flex gap-4 items-start group">
                                <div className="mt-1 min-w-[24px] text-amber-500">
                                    <Icon name="CheckCircle" size={24} className="fill-amber-500/10" />
                                </div>
                                <div>
                                    <span className="text-white font-bold block group-hover:text-amber-400 transition-colors">{item.title}</span>
                                    <span className="text-slate-400 text-sm">{item.desc}</span>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-10 p-4 bg-amber-900/20 border border-amber-500/30 rounded-lg flex items-center gap-4">
                        <div className="p-2 bg-amber-500 rounded text-black font-bold text-xs shadow-lg">BONUS</div>
                        <p className="text-amber-200 text-sm font-medium">
                            Checklist "Emotional Trading Audit" untuk 50 pendaftar pertama.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AgendaSection;
