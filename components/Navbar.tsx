"use client";

interface NavbarProps {
    seatsLeft: number;
    scrollToForm: () => void;
}

const Navbar = ({ seatsLeft, scrollToForm }: NavbarProps) => {
    return (
        <nav className="relative z-20 border-b border-slate-800/50 bg-[#020617]/90 backdrop-blur-md sticky top-0">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-gradient-to-br from-amber-300 to-amber-600 flex items-center justify-center text-black font-bold">O</div>
                    <span className="text-xl font-bold tracking-tight text-white">OXO <span className="text-amber-500">TALKS</span></span>
                </div>
                <div className="hidden md:flex text-sm text-slate-400 gap-6 items-center">
                    <span className="text-amber-500 font-medium">🔥 {seatsLeft} Seat Tersisa</span>
                    <button onClick={scrollToForm} className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-xs font-bold border border-slate-700 transition-colors cursor-pointer">
                        DAFTAR SEKARANG
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
