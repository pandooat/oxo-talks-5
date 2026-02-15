"use client";

import Icon from "./Icon";

interface MobileCTAProps {
    seatsLeft: number;
    scrollToForm: () => void;
}

const MobileCTA = ({ seatsLeft, scrollToForm }: MobileCTAProps) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#0B1120]/90 backdrop-blur-md border-t border-slate-800 z-40 md:hidden animate-fade-in-up">
            <div className="flex gap-4 items-center">
                <div className="text-left flex-1">
                    <p className="text-[10px] text-slate-400 uppercase">Sisa Seat</p>
                    <p className="text-amber-500 font-bold text-xl leading-none">{seatsLeft}</p>
                </div>
                <button onClick={scrollToForm} className="flex-[2] bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold py-3 rounded-lg shadow-lg flex items-center justify-center gap-2 cursor-pointer">
                    Daftar Sekarang <Icon name="ChevronRight" size={16} />
                </button>
            </div>
        </div>
    );
};

export default MobileCTA;
