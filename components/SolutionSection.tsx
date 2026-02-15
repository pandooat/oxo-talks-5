"use client";

import Icon from "./Icon";

const SolutionSection = () => {
    return (
        <section className="relative z-10 py-20 container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Dari "Penasaran" Jadi "Paham"
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">Webinar yang benar-benar praktis. Bukan teori kuliah, tapi strategi jalanan.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { title: "Beginner-Friendly", desc: "Dijelaskan dari nol, tidak perlu background IT.", icon: "CheckCircle" },
                    { title: "Real Case Study", desc: "Live demo pakai platform OXO (bukan teori abstrak).", icon: "TrendingUp" },
                    { title: "Peluang 2026", desc: "Apa yang berbeda di tahun ini vs bull run sebelumnya.", icon: "Clock" },
                    { title: "Safety First", desc: "Cara identify red flags dan protect asset kamu.", icon: "ShieldCheck" }
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
