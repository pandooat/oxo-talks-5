"use client";

const SpeakerSection = () => {
    return (
        <section className="relative z-10 py-16 container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Adrian "The Architect"</h3>
                <p className="text-amber-500 font-medium mb-6">Crypto Educator & DeFi Researcher</p>

                <div className="bg-[#0B1120] p-6 rounded-2xl border border-slate-800">
                    <p className="text-slate-300 italic text-lg leading-relaxed mb-6">
                        "Saya tahu rasanya overwhelming melihat interface DEX pertama kali. Grafik membingungkan, angka bergerak cepat... Makanya di webinar ini, saya akan jelaskan seolah-olah saya duduk di sebelah kamu."
                    </p>
                    <div className="flex justify-center gap-4 text-sm text-slate-500">
                        <span>✓ 7 Tahun di Blockchain Space</span>
                        <span>✓ Membantu 1000+ Trader</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpeakerSection;
