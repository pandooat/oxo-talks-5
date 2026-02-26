"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import WhatWeCoverSection from "@/components/WhatWeCoverSection";
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
    <div className="min-h-screen relative selection:bg-purple-500/30 selection:text-purple-900 pb-20 md:pb-0 font-sans">

      {/* Background Elements */}
      <div className="fixed inset-0 z-0 bg-circuit top-0 left-0 w-full h-full pointer-events-none"></div>
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <Navbar seatsLeft={seatsLeft} scrollToForm={scrollToForm} />

      <Hero seatsLeft={seatsLeft} scrollToForm={scrollToForm} />

      <ProblemSection />

      <WhatWeCoverSection />

      <AgendaSection />

      <ProofSection />

      <SpeakerSection />

      <FAQSection />

      {/* CLOSING CTA SECTION */}
      <section id="register-section" className="relative z-10 py-20 bg-gradient-to-b from-white to-slate-50 text-center container mx-auto px-6 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Side: Copy & Urgency */}
            <div className="text-left">
              <h2 className="text-sm text-purple-600 font-bold uppercase tracking-widest mb-4">Webinar Dimulai Dalam:</h2>
              <Countdown />

              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 mt-6 leading-tight">
                Jangan jadi penonton di era Web3—<span className="text-crypto-gradient">jadi pemainnya.</span>
              </h2>
              <p className="text-slate-600 mb-8 text-base md:text-lg">
                Daftar sekarang untuk dapat akses link Google Meet, reminder, dan bonus (untuk pendaftar awal).
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-1.5 rounded-full text-blue-600"><Icon name="CheckCircle" size={16} /></div>
                  <p className="text-slate-700 text-sm font-medium">Link Zoom dikirim via WhatsApp</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-1.5 rounded-full text-blue-600"><Icon name="CheckCircle" size={16} /></div>
                  <p className="text-slate-700 text-sm font-medium">Akses Grup Komunitas Premium</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-1.5 rounded-full text-blue-600"><Icon name="CheckCircle" size={16} /></div>
                  <p className="text-slate-700 text-sm font-medium">Bonus E-Book (Live Attendance)</p>
                </div>
              </div>
            </div>

            {/* Right Side: The Form */}
            <div className="mt-8 lg:mt-0 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 blur-3xl -z-10 rounded-[3rem]"></div>
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
