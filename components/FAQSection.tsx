"use client";

const FAQSection = () => {
    return (
        <section className="relative z-10 py-24 bg-white border-b border-slate-200">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
                        Pertanyaan <span className="text-purple-600">Sering Muncul</span>
                    </h2>
                </div>
                <div className="space-y-4">
                    {[
                        { q: "Saya masih pemula, apakah ini terlalu advanced?", a: "Tidak. Materi disusun dari dasar mindset + sistem, lalu contoh penggunaan DEX dibuat step-by-step." },
                        { q: "Apakah ini seminar jualan token/coin tertentu?", a: "Tidak. Ini sesi edukasi tentang sistem, psikologi trading, dan contoh workflow eksekusi." },
                        { q: "Link akses dikirim lewat apa?", a: "Link Google Meet dikirim via WhatsApp dan email setelah kamu daftar." },
                        { q: "Apakah ada recording?", a: "Ada ringkasan materi untuk peserta terdaftar. Recording lengkap terbatas untuk peserta yang hadir live." },
                        { q: "Saya khawatir data saya disalahgunakan.", a: "Data dipakai hanya untuk kebutuhan webinar dan komunikasi terkait OXO Talks." }
                    ].map((item, i) => (
                        <details key={i} className="group bg-slate-50 border border-slate-200 rounded-xl p-5 cursor-pointer open:border-purple-300 open:bg-white open:shadow-md transition-all">
                            <summary className="font-bold text-slate-900 flex justify-between items-center list-none text-base md:text-lg">
                                {item.q}
                                <span className="transition group-open:rotate-180 text-purple-600 text-sm">▼</span>
                            </summary>
                            <p className="text-slate-600 mt-4 text-sm md:text-base leading-relaxed pl-1 pt-2 border-t border-slate-100">{item.a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
