"use client";

import Countdown from "./Countdown";
import RegisterForm from "./RegisterForm";

interface HeroProps {
    seatsLeft: number;
    scrollToForm: () => void;
}

const Hero = ({ seatsLeft, scrollToForm }: HeroProps) => {
    return (
        <header className="relative z-10 container mx-auto px-6 py-16 md:py-24 max-w-4xl text-center md:text-left">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
                        Bukan Soal Koinnya,<br className="hidden md:block" /> tapi <span className="text-crypto-gradient">Cara Mainnya</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 mb-6 leading-relaxed">
                        Kebanyakan trader rugi bukan karena "salah coin", tapi karena:
                    </p>

                    <ul className="text-left space-y-3 mb-8">
                        <li className="flex gap-3 items-start">
                            <span className="text-red-500 mt-1">❌</span>
                            <span className="text-slate-700">Tidak punya aturan entry–exit yang jelas</span>
                        </li>
                        <li className="flex gap-3 items-start">
                            <span className="text-red-500 mt-1">❌</span>
                            <span className="text-slate-700">Emosi (FOMO, panic sell) mengambil alih keputusan</span>
                        </li>
                        <li className="flex gap-3 items-start">
                            <span className="text-red-500 mt-1">❌</span>
                            <span className="text-slate-700">Eksekusi di tempat yang membuat impuls makin mudah</span>
                        </li>
                    </ul>

                    <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl mb-8 text-left">
                        <p className="font-bold text-blue-900 mb-4">
                            Dalam 90 menit, kamu akan dapat framework sederhana untuk trading lebih terukur—plus contoh workflow DEX yang bisa kamu adaptasi.
                        </p>
                        <p className="text-sm font-bold text-slate-500 mb-3 uppercase tracking-wider">Yang akan kamu bawa pulang:</p>
                        <ul className="space-y-2">
                            <li className="flex gap-2 items-start text-sm text-slate-700">
                                <span className="text-blue-500">✓</span> Checklist anti-FOMO untuk ambil keputusan entry/exit lebih tenang
                            </li>
                            <li className="flex gap-2 items-start text-sm text-slate-700">
                                <span className="text-blue-500">✓</span> Cara mengenali “retail trap” (kenapa retail sering jadi korban market)
                            </li>
                            <li className="flex gap-2 items-start text-sm text-slate-700">
                                <span className="text-blue-500">✓</span> Cara mulai eksekusi dari wallet pribadi via DEX (studi kasus)
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center md:items-start gap-3 mb-8">
                        <button
                            onClick={scrollToForm}
                            className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-bold px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.3)] btn-crypto-pulse transition-transform transform hover:-translate-y-1 cursor-pointer"
                        >
                            Daftar Gratis (60 detik)
                        </button>
                        <p className="text-xs text-slate-500 font-medium bg-slate-100 px-3 py-1.5 rounded-full">
                            🔒 Gratis. Edukasi. Tidak minta seed phrase. Tidak bahas 'koin 100x'.
                        </p>
                    </div>

                    <div className="flex flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
                                <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white"></div>
                                <div className="w-8 h-8 rounded-full bg-slate-500 border-2 border-white"></div>
                            </div>
                            <p className="text-slate-600 font-medium">Sudah diikuti <strong className="text-slate-900">500+ traders</strong> komunitas Crypto Indo.</p>
                        </div>
                        <p className="text-purple-600 font-bold bg-purple-50 px-3 py-2 rounded-lg inline-block self-center md:self-start mt-2">
                            ⚠️ Kapasitas ruang 100 seat. Sisa: {seatsLeft}. Update seat berdasarkan pendaftar terbaru.
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
