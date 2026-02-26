"use client";

import Icon from "./Icon";

const AgendaSection = () => {
    return (
        <section className="relative z-10 py-24 bg-white border-b border-slate-200">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl shadow-slate-200/50">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-[100px] pointer-events-none"></div>

                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 flex flex-col md:flex-row md:items-center gap-3">
                        <span className="bg-purple-600 text-white rounded px-3 py-1.5 text-xs tracking-widest uppercase self-start md:self-auto">Agenda</span>
                        OXO TALKS (90 menit)
                    </h3>

                    <ul className="space-y-6">
                        {[
                            "Kenapa trader retail sering jadi korban market",
                            "Bagaimana emosi mempengaruhi keputusan entry & exit",
                            "Peran DEX dalam mengurangi keputusan impulsif",
                            "Cara trading langsung dari wallet pribadi",
                            "Studi kasus penggunaan DEX + Q&A"
                        ].map((item, idx) => (
                            <li key={idx} className="flex gap-4 items-start group">
                                <div className="mt-1 min-w-[24px] text-purple-600">
                                    <Icon name="CheckCircle" size={24} className="fill-purple-100" />
                                </div>
                                <div className="flex-1">
                                    <span className="text-slate-800 font-bold block group-hover:text-purple-600 transition-colors text-base md:text-lg">{item}</span>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-10 p-5 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl flex flex-col md:flex-row items-start md:items-center gap-4 shadow-sm">
                        <div className="px-3 py-1 bg-purple-600 rounded text-white font-bold text-xs uppercase tracking-wider shadow-md">BONUS</div>
                        <p className="text-slate-800 text-sm md:text-base font-medium">
                            <span className="font-bold text-purple-700">(untuk 50 pendaftar pertama):</span> Checklist “Emotional Trading Audit” (PDF) untuk mengevaluasi kebiasaan FOMO/panic sell kamu.
                        </p>
                    </div>
                    <div className="mt-8 text-center">
                        <a href="#register-section" className="inline-block w-full md:w-auto bg-slate-900 hover:bg-slate-800 text-white text-lg font-bold px-8 py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1">
                            Daftar Gratis Sekarang
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AgendaSection;
