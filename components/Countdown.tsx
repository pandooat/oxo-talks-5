"use client";

import { useState, useEffect } from "react";

const Countdown = () => {
    const calculateTimeLeft = () => {
        const eventDate = new Date("2026-02-21T19:30:00").getTime();
        const now = new Date().getTime();
        const difference = eventDate - now;

        if (difference > 0) {
            return {
                Hari: Math.floor(difference / (1000 * 60 * 60 * 24)),
                Jam: Math.floor((difference / (1000 * 60 * 60)) % 24),
                Menit: Math.floor((difference / 1000 / 60) % 60),
                Detik: Math.floor((difference / 1000) % 60),
            };
        }
        return { Hari: 0, Jam: 0, Menit: 0, Detik: 0 };
    };

    const [timeLeft, setTimeLeft] = useState<{ [key: string]: number }>(calculateTimeLeft());
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    if (!mounted) return null; // Prevent hydration mismatch

    return (
        <div className="flex gap-2 md:gap-4 justify-start py-4">
            {Object.keys(timeLeft).map((interval) => (
                <div key={interval} className="text-center">
                    <div className="bg-[#020617] border border-amber-500/30 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-1 shadow-inner shadow-black/50">
                        <span className="text-xl md:text-2xl font-bold text-white">
                            {timeLeft[interval] < 10 ? `0${timeLeft[interval]}` : timeLeft[interval]}
                        </span>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-slate-500">{interval}</span>
                </div>
            ))}
        </div>
    );
};

export default Countdown;
