"use client";

import Icon from "./Icon";

interface MobileCTAProps {
    seatsLeft: number;
    scrollToForm: () => void;
}

const MobileCTA = ({ seatsLeft, scrollToForm }: MobileCTAProps) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-slate-200 z-40 md:hidden animate-fade-in-up shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
            <div className="flex gap-4 items-center">
                <div className="text-left flex-1 pl-2">
                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Sisa Seat</p>
                    <p className="text-purple-600 font-black text-2xl leading-none">{seatsLeft}</p>
                </div>
                <button onClick={scrollToForm} className="flex-[2] bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-purple-500/20 flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all">
                    Daftar Sekarang <Icon name="ChevronRight" size={16} />
                </button>
            </div>
        </div>
    );
};

export default MobileCTA;
