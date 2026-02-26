"use client";

const SpeakerSection = () => {
    return (
        <section className="relative z-10 py-24 bg-slate-50 border-b border-slate-200">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
                        Main <span className="text-purple-600">Speakers</span>
                    </h2>
                    <p className="text-lg text-slate-600">Belajar langsung dari praktisi yang ada di market setiap hari.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Speaker 1: Monica */}
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-100 mb-6 shrink-0">
                            <img src="https://i.imgur.com/Clt0wJe.png?auto=format&fit=crop&w=400&q=80" alt="Monica CMO OXO" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">Monica</h3>
                        <p className="text-purple-600 font-bold uppercase tracking-wider text-sm mb-4">CMO OXO</p>

                        <div className="bg-slate-50 w-full p-4 rounded-xl border border-slate-100 mb-4 text-left">
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Fokus Materi:</p>
                            <p className="text-slate-700 font-medium">Edukasi eksekusi & kebiasaan trading yang lebih disiplin.</p>
                        </div>

                        <div className="flex flex-col gap-2 text-sm text-slate-600 text-left w-full">
                            <div className="flex gap-2 items-center"><span className="text-blue-500">✓</span> Membina Ribuan Trader OXO</div>
                            <div className="flex gap-2 items-center"><span className="text-blue-500">✓</span> Ekspertis Ekosistem Web3</div>
                        </div>
                    </div>

                    {/* Speaker 2: Kurnia */}
                    <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-100 mb-6 shrink-0">
                            <img src="https://i.imgur.com/9LvWxM0.png?auto=format&fit=crop&w=400&q=80" alt="Kurnia Bijaksana" className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-1">Kurnia Bijaksana</h3>
                        <p className="text-purple-600 font-bold uppercase tracking-wider text-sm mb-4">Founder Volubit Academy</p>

                        <div className="bg-slate-50 w-full p-4 rounded-xl border border-slate-100 mb-4 text-left">
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Fokus Materi:</p>
                            <p className="text-slate-700 font-medium">Mindset, sistem, dan pendekatan belajar untuk trader retail.</p>
                        </div>

                        <div className="flex flex-col gap-2 text-sm text-slate-600 text-left w-full">
                            <div className="flex gap-2 items-center"><span className="text-blue-500">✓</span> Pengalaman Mengajar 5+ Tahun</div>
                            <div className="flex gap-2 items-center"><span className="text-blue-500">✓</span> Edukator Retail Trading</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpeakerSection;
