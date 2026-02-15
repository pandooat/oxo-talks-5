"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import AgendaSection from "@/components/AgendaSection";
import ProofSection from "@/components/ProofSection";
import SpeakerSection from "@/components/SpeakerSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import Countdown from "@/components/Countdown";
import RegisterForm from "@/components/RegisterForm";
import Icon from "@/components/Icon";

export default function Home() {
  const [seatsLeft, setSeatsLeft] = useState(37);

  // Simulating organic seat drop for scarcity
  useEffect(() => {
    const interval = setInterval(() => {
      setSeatsLeft(prev => prev > 32 ? prev - 1 : prev);
    }, 45000);
    return () => clearInterval(interval);
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById('register-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative selection:bg-amber-500/30 selection:text-amber-200 pb-20 md:pb-0 font-sans">

      {/* Background Elements */}
      <div className="fixed inset-0 z-0 bg-circuit pointer-events-none"></div>
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <Navbar seatsLeft={seatsLeft} scrollToForm={scrollToForm} />

      <Hero seatsLeft={seatsLeft} scrollToForm={scrollToForm} />

      <ProblemSection />

      <SolutionSection />

      <AgendaSection />

      <ProofSection />

      <SpeakerSection />

      <FAQSection />

      {/* 8. URGENCY & FINAL FORM SECTION (New Embedded Layout) */}
      <section id="register-section" className="relative z-10 py-20 bg-gradient-to-b from-[#020617] to-[#0f172a] text-center container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left Side: Copy & Urgency */}
            <div className="text-left">
              <h2 className="text-sm text-amber-500 font-bold uppercase tracking-widest mb-4">Webinar Dimulai Dalam:</h2>
              <Countdown />

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 mt-6 leading-tight">
                Jangan Jadi Penonton di Era Web3—<span className="text-gold-gradient">Jadi Pemainnya.</span>
              </h2>
              <p className="text-slate-300 mb-8 text-base md:text-lg">
                Daftar sekarang dan amankan seatmu. Gratis, tapi insightnya bisa worth jutaan rupiah kalau kamu apply dengan benar.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-green-500/20 p-1 rounded text-green-500"><Icon name="CheckCircle" size={16} /></div>
                  <p className="text-slate-400 text-sm">Link Zoom dikirim via WhatsApp</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-500/20 p-1 rounded text-green-500"><Icon name="CheckCircle" size={16} /></div>
                  <p className="text-slate-400 text-sm">Akses Grup Komunitas Premium</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-500/20 p-1 rounded text-green-500"><Icon name="CheckCircle" size={16} /></div>
                  <p className="text-slate-400 text-sm">Bonus E-Book (Live Attendance)</p>
                </div>
              </div>
            </div>

            {/* Right Side: The Form */}
            <div className="mt-8 md:mt-0">
              <RegisterForm seatsLeft={seatsLeft} />
            </div>

          </div>
        </div>
      </section>

      <Footer />

      <MobileCTA seatsLeft={seatsLeft} scrollToForm={scrollToForm} />

    </div>
  );
}
