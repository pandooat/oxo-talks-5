"use client";

import Countdown from "./Countdown";
import RegisterForm from "./RegisterForm";

interface HeroProps {
    seatsLeft: number;
    scrollToForm: () => void;
}

const Hero = ({ seatsLeft, scrollToForm }: HeroProps) => {
    return (
        <header className="relative z-10 container mx-auto px-6 py-16 md:py-20 text-center">
            <div className="inline-block mb-6">
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/5 backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </span>
                    <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Webinar Gratis 90 Menit</span>
                </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight max-w-5xl mx-auto">
                Jangan Cuma HODL—Kuasai Cara <span className="text-gold-gradient">Trading Cerdas di Web3</span> dengan DEX Trading
            </h1>

            <p className="text-base md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
                Bongkar cara kerja <span className="text-white font-medium">Decentralized Exchange (DEX)</span> yang sedang menggemparkan dunia kripto—dari dasar hingga strategi praktis menggunakan platform OXO. Tanpa perlu modal besar atau takut kena scam.
            </p>

            <div className="flex flex-col items-center gap-4 mb-16">
                <button
                    onClick={scrollToForm}
                    className="w-full md:w-auto bg-gradient-to-r from-amber-400 to-amber-600 text-black text-lg font-bold px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(245,158,11,0.4)] btn-gold-pulse transition-transform transform hover:-translate-y-1 cursor-pointer"
                >
                    Saya Mau Ikut! Gratis – Daftar Sekarang
                </button>
                <p className="text-sm text-amber-500 font-mono bg-amber-900/20 px-3 py-1 rounded border border-amber-500/20">
                    ⚠️ Hanya 100 Seat – Sisa {seatsLeft}
                </p>
            </div>

            {/* Speaker & Host Dual Visual */}
            <div className="relative max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row justify-center items-end gap-4 md:gap-8">
                    {/* Host */}
                    <div className="relative group w-48 mx-auto md:mx-0 order-2 md:order-1 opacity-80 hover:opacity-100 transition-opacity">
                        <div className="relative h-60 bg-[#0B1120] border border-slate-700 rounded-t-[5rem] rounded-b-xl overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover" alt="Monica" />
                            <div className="absolute bottom-0 inset-x-0 bg-black/70 py-2 text-center">
                                <p className="text-white text-xs font-bold">Monica</p>
                                <p className="text-[10px] text-slate-400">CMO OXO</p>
                            </div>
                        </div>
                    </div>
                    {/* Speaker */}
                    <div className="relative group w-64 mx-auto md:mx-0 order-1 md:order-2 z-10">
                        <div className="absolute -top-4 -right-4 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full z-20">Main Speaker</div>
                        <div className="relative h-72 bg-[#0B1120] border-2 border-amber-500/50 rounded-t-[6rem] rounded-b-xl overflow-hidden shadow-2xl">
                            <div className="w-full h-full bg-gradient-to-t from-slate-900 to-slate-800 flex items-end justify-center">
                                {/* Silhouette Placeholder */}
                                <svg className="w-full h-full text-slate-600 opacity-50 absolute bottom-0" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                            </div>
                            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent pt-8 pb-3 text-center">
                                <p className="text-white text-lg font-bold">Adrian</p>
                                <p className="text-xs text-amber-500 uppercase tracking-wide">DeFi Researcher</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
