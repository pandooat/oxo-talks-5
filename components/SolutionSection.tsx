"use client";

import Icon from "./Icon";

const SolutionSection = () => {
    return (
        <section className="relative z-10 py-20 container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    🚀 Belajar Sistem Trading yang Benar di Era Web3
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Kita tidak membahas "koin apa yang akan naik 100x". Kita membahas bagaimana kamu bisa bertahan dan profit dengan sistem, mindset, dan tools yang tepat.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { title: "Bukan Jualan Koin", desc: "Murni edukasi sistem trading, bukan pompa koin micin.", icon: "ShieldCheck" },
                    { title: "Psikologi Trading", desc: "Cara mengontrol emosi agar tidak menjadi korban market maker.", icon: "TrendingUp" },
                    { title: "Sistematis", desc: "Keputusan entry/exit berdasarkan data, bukan tebak-tebakan.", icon: "CheckCircle" },
                    { title: "Kontrol Penuh", desc: "Menggunakan DEX untuk transparansi dan keamanan aset.", icon: "Lock" }
                ].map((item, i) => (
                    <div key={i} className="bg-[#0B1120]/50 border border-amber-500/20 p-6 rounded-xl hover:bg-[#0B1120] transition-colors">
                        <Icon name={item.icon} className="text-amber-500 mb-4" size={32} />
                        <h4 className="text-white font-bold mb-2">{item.title}</h4>
                        <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SolutionSection;
