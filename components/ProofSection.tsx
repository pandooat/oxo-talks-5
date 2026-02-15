"use client";

import Icon from "./Icon";

const ProofSection = () => {
    return (
        <section className="relative z-10 py-16 text-center container mx-auto px-6">
            <div className="inline-flex items-center gap-2 mb-12 bg-slate-800 px-4 py-2 rounded-full border border-slate-700">
                <Icon name="Users" size={16} className="text-amber-500" />
                <span className="text-slate-300 text-sm">Sudah diikuti <strong className="text-white">500+ traders</strong> dari komunitas Crypto Indo</span>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="bg-[#0B1120] border border-slate-800 p-6 rounded-xl text-left">
                    <div className="flex text-amber-500 mb-3">★★★★★</div>
                    <p className="text-slate-300 text-sm mb-4">"Akhirnya paham kenapa gas fee bisa mahal dan cara minimize-nya. Demo pakai OXO-nya super jelas!"</p>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-700"></div>
                        <div>
                            <p className="text-white text-xs font-bold">Andi, 28</p>
                            <p className="text-slate-500 text-[10px]">Swasta</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#0B1120] border border-slate-800 p-6 rounded-xl text-left">
                    <div className="flex text-amber-500 mb-3">★★★★★</div>
                    <p className="text-slate-300 text-sm mb-4">"Sebagai pemula, webinar ini ngasih confidence untuk coba DEX pertama kali. Bahasanya nggak bikin pusing."</p>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-700"></div>
                        <div>
                            <p className="text-white text-xs font-bold">Sarah, 23</p>
                            <p className="text-slate-500 text-[10px]">Freelance</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProofSection;
