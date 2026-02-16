"use client";

const SpeakerSection = () => {
    return (
        <section className="relative z-10 py-16 container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Kurnia</h3>
                <p className="text-amber-500 font-medium mb-6">Founder Volubit Academy</p>

                <div className="bg-[#0B1120] p-6 rounded-2xl border border-slate-800">
                    <p className="text-slate-300 italic text-lg leading-relaxed mb-6">
                        "OXO TALKS membuka mata saya. Ternyata saya bukan salah pilih koin, tapi salah dalam timing dan emosi. Setelah apply sistemnya, trading jadi lebih tenang."
                    </p>
                    <div className="flex justify-center gap-4 text-sm text-slate-500">
                        <span>✓ Membantu 500+ Trader</span>
                        <span>✓ Beralih ke Sistematis Trading</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpeakerSection;
