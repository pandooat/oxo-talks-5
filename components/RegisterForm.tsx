"use client";

import { useState } from "react";
import Icon from "./Icon";

interface RegisterFormProps {
    seatsLeft: number;
}

const RegisterForm = ({ seatsLeft }: RegisterFormProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    // --- PENTING: GANTI URL DI BAWAH INI DENGAN URL WEB APP ANDA ---
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyclS4ZeDbSOL3mzRwoO1BFlQ2zO8tbaJsDCnro_pFwqXL_EvIk-axmG4tgKQfSugJeFw/exec";

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Validation removed as URL is now set

        const formEle = e.currentTarget;
        const formData = new FormData(formEle);

        // --- META PIXEL EVENT TRACKING START ---
        // Trigger Event segera saat klik (sebelum fetch) untuk reliability
        // @ts-expect-error fbq is injected via script
        if (typeof window !== 'undefined' && window.fbq) {
            // @ts-expect-error fbq is injected via script
            window.fbq('track', 'CompleteRegistration', {
                content_name: 'Webinar Web3 Registration',
                currency: 'IDR',
                value: 0
            });
            console.log("[DEBUG] Meta Pixel: CompleteRegistration event fired (Early Trigger)");
        } else {
            console.warn("[DEBUG] Meta Pixel: fbq not found on window");
        }
        // --- META PIXEL EVENT TRACKING END ---

        // Add detailed timestamp
        const now = new Date();
        const date = now.getDate().toString().padStart(2, '0');
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const year = now.getFullYear();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const formattedDate = `${date}/${month}/${year} ${hours}:${minutes}:${seconds}`;

        formData.append('Timestamp', formattedDate);

        // Mengambil nilai email untuk dikirim ke Pixel (opsional untuk Advanced Matching)
        // const userEmail = formData.get("Email");

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                body: formData
            });

            // --- META PIXEL EVENT TRACKING START ---
            // Trigger Event 'CompleteRegistration' saat sukses submit (pindah ke atas)
            // --- META PIXEL EVENT TRACKING END ---

            formEle.reset();
            setShowSuccessModal(true);
        } catch (error) {
            console.error("Error!", error);
            // Event sudah dipicu di awal submit
            setShowSuccessModal(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleWhatsAppRedirect = () => {
        window.location.href = "https://chat.whatsapp.com/FzJCFZ3qmpI1yBAQQNBcbq";
    };

    return (
        <div className="relative h-full">
            {showSuccessModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
                    <div className="bg-[#0B1120] border border-amber-500/50 rounded-2xl p-8 max-w-md w-full text-center shadow-2xl transform scale-100 animate-in zoom-in-95 duration-300 relative">
                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Icon name="CheckCircle" size={32} className="text-green-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Pendaftaran Berhasil!</h3>
                        <p className="text-amber-500 font-bold text-lg mb-4">⚠️ 1 Langkah Lagi</p>
                        <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                            Wajib bergabung ke grup WhatsApp untuk mendapatkan link Zoom, materi, dan update jadwal webinar.
                        </p>
                        <button
                            onClick={handleWhatsAppRedirect}
                            className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 flex justify-center items-center gap-2 cursor-pointer"
                        >
                            <Icon name="Users" size={20} />
                            Gabung Grup WhatsApp Sekarang
                        </button>
                    </div>
                </div>
            )}

            <div className="bg-[#0B1120] rounded-2xl p-6 md:p-8 w-full border border-amber-500/50 shadow-[0_0_60px_rgba(217,119,6,0.15)] relative h-full flex flex-col justify-center text-left">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white text-[10px] font-bold px-4 py-1 rounded-full shadow-lg z-10 whitespace-nowrap">
                    🔥 Tersisa {seatsLeft} Slot Hari Ini
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">Formulir Pendaftaran</h3>

                <form onSubmit={handleSubmit} className="space-y-4">

                    {/* 1. Nama Lengkap */}
                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-amber-500 uppercase tracking-wider pl-1">Nama Lengkap</label>
                        <input name="Nama" type="text" className="w-full bg-[#020617] border border-slate-700 focus:border-amber-500 rounded-lg px-4 py-3 text-white outline-none transition-all placeholder:text-slate-600 text-sm" placeholder="John Doe" required />
                    </div>

                    {/* 2. Email */}
                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-amber-500 uppercase tracking-wider pl-1">Email</label>
                        <input name="Email" type="email" className="w-full bg-[#020617] border border-slate-700 focus:border-amber-500 rounded-lg px-4 py-3 text-white outline-none transition-all placeholder:text-slate-600 text-sm" placeholder="email@domain.com" required />
                    </div>

                    {/* 3. WhatsApp */}
                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-amber-500 uppercase tracking-wider pl-1">Nomor WhatsApp</label>
                        <input name="Whatsapp" type="tel" className="w-full bg-[#020617] border border-slate-700 focus:border-amber-500 rounded-lg px-4 py-3 text-white outline-none transition-all placeholder:text-slate-600 text-sm" placeholder="0812xxxx" required />
                    </div>

                    {/* 4. Tahu Darimana (New Field) */}
                    <div className="space-y-1">
                        <label className="text-[10px] font-bold text-amber-500 uppercase tracking-wider pl-1">Info Dari Mana?</label>
                        <select name="Sumber" className="w-full bg-[#020617] border border-slate-700 focus:border-amber-500 rounded-lg px-4 py-3 text-white outline-none transition-all placeholder:text-slate-600 appearance-none cursor-pointer text-sm" required defaultValue="">
                            <option value="" disabled className="text-slate-500">Pilih salah satu...</option>
                            <option value="instagram">Instagram Ads / Post</option>
                            <option value="telegram">Komunitas Telegram</option>
                            <option value="friend">Rekomendasi Teman</option>
                            <option value="youtube">YouTube</option>
                            <option value="other">Lainnya</option>
                        </select>
                    </div>

                    <div className="flex items-start gap-2 pt-2 pb-2">
                        <input type="checkbox" className="mt-1" required />
                        <p className="text-[10px] text-slate-500 leading-tight">Saya setuju untuk bergabung ke grup komunitas eksklusif dan menerima info webinar.</p>
                    </div>

                    <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-bold py-4 rounded-xl shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-1 uppercase tracking-wide flex justify-center items-center gap-2 btn-gold-pulse disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
                        {isSubmitting ? (
                            <div className="loader"></div>
                        ) : (
                            <>
                                <Icon name="Zap" size={18} className="fill-black" />
                                Daftar Sekarang - Gratis
                            </>
                        )}
                    </button>
                </form>
                <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-slate-600">
                    <Icon name="Lock" size={10} />
                    <span>Data Terenkripsi 256-bit SSL</span>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
