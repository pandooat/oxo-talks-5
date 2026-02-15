"use client";

const FAQSection = () => {
    return (
        <section className="relative z-10 py-16 bg-slate-900/30">
            <div className="container mx-auto px-6 max-w-2xl">
                <h3 className="text-2xl font-bold text-center text-white mb-8">Pertanyaan Umum</h3>
                <div className="space-y-4">
                    {[
                        { q: "Saya masih baru banget di crypto, apakah terlalu advanced?", a: "Justru ini untuk kamu! Kita mulai dari bedain CEX vs DEX, jadi nanti nggak gaptek lagi ngobrol sama trader senior." },
                        { q: "Apakah perlu instal wallet dulu sebelum webinar?", a: "Tidak perlu. Kita akan demo pakai screen sharing. Tapi kalau mau praktik bareng, nanti kami kasih panduan setup wallet setelah registrasi." },
                        { q: "Gratisannya beneran gratis atau ada hidden fee?", a: "100% gratis, tanpa syarat membeli token apapun. OXO hanya sebagai contoh platform yang user-friendly." },
                        { q: "Saya sibuk kerja, apakah ada replay?", a: "Replay tersedia 24 jam untuk yang registrasi, tapi Q&A session hanya untuk yang live. Plus, bonus e-book hanya untuk yang hadir live." }
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
