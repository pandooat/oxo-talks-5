"use client";

import Icon from "./Icon";

const ProblemSection = () => {
    return (
        <section className="relative z-10 bg-[#050A14] py-20 border-y border-slate-800">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
                    🎭 Kenapa Trader Retail Sering Jadi <span className="text-red-500">Korban Market?</span>
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-[#0B1120] p-8 rounded-2xl border border-red-900/30 hover:border-red-500/50 transition-colors group">
                        <div className="w-12 h-12 bg-red-900/20 rounded-lg flex items-center justify-center mb-6 text-red-500 group-hover:scale-110 transition-transform">
                            <Icon name="TrendingUp" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Salah Sistem</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Trading tanpa aturan clear entry-exit. Asal beli karena "katanya bagus" tanpa rencana matang.
                        </p>
                    </div>
                    <div className="bg-[#0B1120] p-8 rounded-2xl border border-red-900/30 hover:border-red-500/50 transition-colors group">
                        <div className="w-12 h-12 bg-red-900/20 rounded-lg flex items-center justify-center mb-6 text-red-500 group-hover:scale-110 transition-transform">
                            <Icon name="Zap" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Salah Mindset</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Emosi (FOMO, panic sell) menguasai keputusan. Beli di pucuk, jual di bottom karena panik.
                        </p>
                    </div>
                    <div className="bg-[#0B1120] p-8 rounded-2xl border border-red-900/30 hover:border-red-500/50 transition-colors group">
                        <div className="w-12 h-12 bg-red-900/20 rounded-lg flex items-center justify-center mb-6 text-red-500 group-hover:scale-110 transition-transform">
                            <Icon name="AlertTriangle" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Salah Tempat</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Bergantung pada exchange terpusat yang tidak transparan. Rawan manipulasi dan pemblokiran sepihak.
                        </p>
                    </div>
                </div>
                <p className="text-center text-slate-300 mt-12 text-lg italic">
                    "Bayangkan kalau ada cara sederhana untuk memahami semua ini dalam 90 menit saja..."
                </p>
            </div>
        </section>
    );
};

export default ProblemSection;
