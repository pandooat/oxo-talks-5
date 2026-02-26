"use client";

import Icon from "./Icon";

const ProofSection = () => {
    return (
        <section className="relative z-10 py-24 text-center container mx-auto px-6 border-b border-slate-200">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                {/* Testimonial 1 */}
                <div className="bg-white border border-slate-200 shadow-xl shadow-slate-200/50 p-8 rounded-2xl text-left hover:border-purple-300 transition-colors">
                    <div className="flex text-amber-400 mb-4 text-xl">★★★★★</div>
                    <p className="text-slate-700 text-base md:text-lg mb-6 italic leading-relaxed">
                        “Sebagai pemula, sesi ini bikin aku pede coba DEX pertama kali. Bahasanya jelas dan nggak bikin pusing.”
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-200 to-blue-200 flex items-center justify-center font-bold text-slate-700">S</div>
                        <div>
                            <p className="text-slate-900 text-sm font-bold">Sarah, 23</p>
                            <p className="text-slate-500 text-xs">Freelance</p>
                        </div>
                    </div>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-white border border-slate-200 shadow-xl shadow-slate-200/50 p-8 rounded-2xl text-left hover:border-purple-300 transition-colors">
                    <div className="flex text-amber-400 mb-4 text-xl">★★★★★</div>
                    <p className="text-slate-700 text-base md:text-lg mb-6 italic leading-relaxed">
                        “Aku akhirnya paham kenapa eksekusiku sering kacau. Setelah punya aturan entry–exit, trading jadi lebih tenang.”
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-200 to-cyan-200 flex items-center justify-center font-bold text-slate-700">A</div>
                        <div>
                            <p className="text-slate-900 text-sm font-bold">Andi, 28</p>
                            <p className="text-slate-500 text-xs">Swasta</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quote Speaker */}
            <div className="max-w-3xl mx-auto bg-slate-900 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-2xl">
                <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center shrink-0">
                    <Icon name="Quote" size={24} className="text-white" />
                </div>
                <div className="text-center md:text-left">
                    <p className="text-white text-lg md:text-xl font-medium italic mb-2">
                        “Banyak yang salahnya bukan di koin—tapi di timing dan emosi saat eksekusi.”
                    </p>
                    <p className="text-amber-500 font-bold text-sm">— OXO Talks Speaker</p>
                </div>
            </div>
        </section>
    );
};

export default ProofSection;
