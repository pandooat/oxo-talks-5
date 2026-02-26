"use client";

import Icon from "./Icon";

const ProblemSection = () => {
    return (
        <section className="relative z-10 bg-slate-50 py-24 border-y border-slate-200">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        Kenapa trader retail sering jadi <span className="text-red-500">korban market?</span>
                    </h2>
                    <p className="text-lg text-slate-600">Bukan karena retail “kurang pintar”. Biasanya karena 3 hal ini:</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-purple-300 transition-all transform hover:-translate-y-1 group">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all">
                            <Icon name="TrendingDown" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">1) Salah Sistem</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Trading tanpa aturan clear: entry asal-asalan, exit tanpa rencana, sizing tidak konsisten.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-purple-300 transition-all transform hover:-translate-y-1 group">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all">
                            <Icon name="Frown" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">2) Salah Mindset</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Emosi mengendalikan eksekusi: FOMO saat hijau, panik saat merah, revenge trading setelah loss.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 hover:border-purple-300 transition-all transform hover:-translate-y-1 group">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all">
                            <Icon name="MapPin" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">3) Salah Tempat Eksekusi</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Tidak paham konsekuensi eksekusi di platform tertentu; kurang transparansi, dan proses yang terlalu “instan” sering memicu keputusan impulsif.
                        </p>
                    </div>
                </div>

                <div className="mt-16 bg-gradient-to-r from-purple-50 to-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8 text-center max-w-4xl mx-auto shadow-sm">
                    <p className="text-lg md:text-xl font-semibold text-slate-800 italic">
                        “Bayangkan kalau kamu bisa memahami akar masalah ini—dan punya langkah praktis untuk memperbaikinya—dalam <span className="text-blue-600 font-bold">90 menit</span>.”
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
