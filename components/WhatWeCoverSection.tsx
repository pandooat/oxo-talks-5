const WhatWeCoverSection = () => {
    return (
        <section className="relative z-10 bg-white py-24 border-b border-slate-200">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                        Ini <span className="text-red-500">Bukan</span> Kelas Sinyal
                    </h2>
                    <p className="text-lg text-slate-600">Yang kita bahas (dan yang tidak kita bahas)</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Kita Bahas */}
                    <div className="bg-blue-50 border border-blue-100 p-8 rounded-2xl shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">✓</div>
                            <h3 className="text-2xl font-bold text-slate-900">Kita Bahas:</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex gap-3 items-start">
                                <span className="text-blue-500 mt-1">✓</span>
                                <span className="text-slate-700">Cara membuat aturan entry–exit yang realistis dan bisa diulang</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="text-blue-500 mt-1">✓</span>
                                <span className="text-slate-700">Cara mengenali emosi yang paling sering merusak keputusan</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="text-blue-500 mt-1">✓</span>
                                <span className="text-slate-700">Peran DEX untuk membantu eksekusi lebih sadar (dengan kontrol dari wallet pribadi)</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="text-blue-500 mt-1">✓</span>
                                <span className="text-slate-700">Studi kasus penggunaan DEX (workflow dari awal sampai eksekusi)</span>
                            </li>
                        </ul>
                    </div>

                    {/* Kita Tidak Bahas */}
                    <div className="bg-red-50 border border-red-100 p-8 rounded-2xl shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white text-xl font-bold">✗</div>
                            <h3 className="text-2xl font-bold text-slate-900">Kita Tidak Bahas:</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex gap-3 items-start">
                                <span className="text-red-500 mt-1">✗</span>
                                <span className="text-slate-700">"Koin apa yang akan naik 100x"</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="text-red-500 mt-1">✗</span>
                                <span className="text-slate-700">"Pompa token" atau ajakan beli aset tertentu</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeCoverSection;
