"use client";

const FAQSection = () => {
    return (
        <section className="relative z-10 py-16 bg-slate-900/30">
            <div className="container mx-auto px-6 max-w-2xl">
                <h3 className="text-2xl font-bold text-center text-white mb-8">Pertanyaan Umum</h3>
                <div className="space-y-4">
                    {[
                        { q: "Saya masih pemula, apakah ini terlalu advanced?", a: "Justru untuk pemula agar tidak terjebak kebiasaan buruk sejak awal. Kita bahas dari mindset, bukan technical analysis rumit." },
                        { q: "Apakah ini seminar jualan OXO token?", a: "Tidak. OXO TALKS fokus edukasi sistem trading. OXO digunakan sebagai contoh platform DEX yang user-friendly saja." },
                        { q: "Saya sibuk, apakah ada recording?", a: "Ada replay 24 jam, tapi sesi tanya-jawab dan bonus hanya untuk yang hadir live." }
                    ].map((item, i) => (
                        <details key={i} className="group bg-[#0B1120] border border-slate-800 rounded-lg p-4 cursor-pointer open:border-amber-500/50 open:bg-slate-900 transition-all">
                            <summary className="font-semibold text-white flex justify-between items-center list-none text-sm md:text-base">
                                {item.q}
                                <span className="transition group-open:rotate-180 text-amber-500">▼</span>
                            </summary>
                            <p className="text-slate-400 mt-3 text-sm leading-relaxed pl-1 border-l-2 border-slate-700">{item.a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
