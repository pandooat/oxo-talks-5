"use client";

interface NavbarProps {
    seatsLeft: number;
    scrollToForm: () => void;
}

const Navbar = ({ seatsLeft, scrollToForm }: NavbarProps) => {
    return (
        <>
            {/* Announcement Bar */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs md:text-sm font-medium py-2 px-4 text-center">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-2">
                    <span>📅 28 Feb 2026 • ⏰ 19.30 WIB • 📍 Google Meet</span>
                    <span className="hidden md:inline">|</span>
                    <span className="text-white/80">Link dikirim via WhatsApp + Email</span>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="relative z-20 border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 relative flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg"></div>
                            <div className="relative text-white font-black text-lg select-none">X</div>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-slate-900">OXO <span className="text-purple-600">TALKS #5</span></span>
                    </div>
                    <div className="hidden md:flex text-sm text-slate-600 gap-6 items-center">
                        <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full">🔥 {seatsLeft} Seat Tersisa</span>
                        <button onClick={scrollToForm} className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-slate-200 cursor-pointer">
                            Amankan Seat Gratis
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
