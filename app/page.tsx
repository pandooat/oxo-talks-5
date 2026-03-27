'use client';

import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Disc as Discord, Activity, CheckCircle, Shield, Users, Lock, ChevronDown, ChevronUp, Zap, Box, Hexagon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import Image from 'next/image';

const Page = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isEventStarted, setIsEventStarted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [isScrolled, setIsScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzaZSWphHZ4oyW4o-5A_0TLSB-KsLJfeAj7K9V9P0GyJ6TUzjAeanYp1EHPlsMqXpiX/exec';
  const targetDate = new Date('2026-04-08T13:00:00Z').getTime();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setIsEventStarted(true);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [targetDate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('whatsapp', formData.whatsapp);
    data.append('timestamp', new Date().toLocaleString('id-ID'));

    try {
      await fetch(GOOGLE_SCRIPT_URL, { method: 'POST', body: data, mode: 'no-cors' });
      setFormStatus('success');
      setFormData({ name: '', email: '', whatsapp: '' });
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan saat mengirim data. Silakan coba lagi.');
      setFormStatus('idle');
    }
  };

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const faqs = [
    { q: "Apakah acara ini gratis?", a: "Ya, 100% gratis. Cukup daftar dan join Discord BASE pada 8 April pukul 8 malam WIB." },
    { q: "Apakah perlu pengalaman DeFi sebelumnya?", a: "Tidak. Reza akan menjelaskan dari dasar hingga strategi lanjutan dalam bahasa yang mudah dipahami." },
    { q: "Bagaimana cara join?", a: "Setelah daftar, kamu akan mendapat link Discord BASE via email. Join server-nya dan masuk ke channel yang ditentukan saat acara dimulai." },
    { q: "Apakah ada replaynya?", a: "Kami akan berusaha menyediakan rekaman untuk peserta terdaftar. Pastikan kamu punya akun OXO di www.oxo.so untuk akses." },
    { q: "Apa itu OXO?", a: "OXO adalah agregator DEX lintas rantai yang menghubungkan berbagai sumber likuiditas terdesentralisasi. Tukarkan aset langsung dari dompet Anda. Tanpa perlu membuat akun, tanpa setoran, dan Anda yang mengelola aset sendiri." }
  ];

  return (
    <div className="min-h-screen bg-[#06070B] text-white font-sans selection:bg-[#00FFA3] selection:text-black overflow-x-hidden relative scroll-smooth">
      
      {/* BACKGROUND EFFECTS & FLOATING OBJECTS */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        {/* Massive glows */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-[#7B5EF8] rounded-full blur-[180px] opacity-20"></div>
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[90%] h-[50%] bg-[#A855F7] rounded-full blur-[200px] opacity-30"></div>
        
        {/* Floating Abstract Tiles/Shapes */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [-12, -15, -12] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] w-16 h-16 bg-gradient-to-br from-[#1E202D] to-[#0A0B10] border border-white/5 rounded-2xl opacity-80 shadow-2xl blur-[2px]"
        ></motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [45, 50, 45] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[35%] right-[15%] w-24 h-24 bg-gradient-to-br from-[#1E202D] to-[#0A0B10] border border-white/5 rounded-3xl opacity-60 shadow-2xl"
        ></motion.div>
        <motion.div 
          animate={{ y: [0, -15, 0], rotate: [12, 10, 12] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[30%] left-[15%] w-20 h-20 bg-gradient-to-br from-[#00FFA3]/20 to-[#0A0B10] border border-[#00FFA3]/30 rounded-2xl opacity-80 shadow-[0_0_30px_rgba(0,255,163,0.1)]"
        ></motion.div>
        <motion.div 
          animate={{ y: [0, 15, 0], rotate: [-45, -40, -45] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[40%] right-[10%] w-12 h-12 bg-gradient-to-br from-[#7B5EF8]/30 to-[#0A0B10] border border-[#7B5EF8]/30 rounded-xl opacity-70 shadow-[0_0_30px_rgba(123,94,248,0.2)]"
        ></motion.div>
        
        {/* Particle stars */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-white rounded-full opacity-50 shadow-[0_0_10px_white]"></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-[#00FFA3] rounded-full opacity-70 shadow-[0_0_15px_#00FFA3]"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-[#A855F7] rounded-full opacity-60 shadow-[0_0_10px_#A855F7]"></div>
      </div>

      {/* ZONE 0: Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#06070B]/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="font-extrabold text-xl tracking-[0.2em] flex items-center">
              OXO<span className="text-[#00FFA3]">TALKS</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#speaker" className="hover:text-white transition-colors">Speaker</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>

          <a href="#register" className="px-5 py-2 rounded-lg font-bold text-black bg-[#00FFA3] hover:bg-white hover:shadow-[0_0_20px_rgba(0,255,163,0.5)] transition-all duration-300 text-sm">
            Save Seat
          </a>
        </div>
      </nav>

      {/* ZONE 1: Hero Section */}
      <section className="container mx-auto px-4 pt-40 pb-20 relative z-10 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00FFA3]/10 border border-[#00FFA3]/20 text-[#00FFA3] text-xs font-bold tracking-widest uppercase mb-8"
        >
          <Zap className="w-3 h-3" /> Live Webinar
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight max-w-4xl"
        >
          From DEX Liquidity <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">to Settlement</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mb-10 font-light max-w-2xl"
        >
          Swap, redeem, and earn in one flow. Learn about the world&apos;s leading decentralized exchange mechanisms, right from your screen.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <a href="#register" className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-black bg-[#00FFA3] hover:bg-white hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,163,0.4)] transition-all duration-300 flex items-center justify-center gap-3">
            <Calendar className="w-5 h-5" />
            <div className="text-left leading-tight">
              <div className="text-[10px] opacity-80 uppercase tracking-wider">Free Registration</div>
              <div className="text-base">Save My Seat</div>
            </div>
          </a>
          <div className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-[#13141C] border border-white/10 transition-all duration-300 flex items-center justify-center gap-3 cursor-default">
            <Discord className="w-5 h-5 text-[#5865F2]" />
            <div className="text-left leading-tight">
              <div className="text-[10px] text-gray-400 uppercase tracking-wider">Live Venue</div>
              <div className="text-base">Discord BASE</div>
            </div>
          </div>
        </motion.div>

        {/* TRUST BAR */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-xs font-medium text-gray-500 uppercase tracking-widest mb-16"
        >
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#0052FF] rounded-full"></div>
            <span className="text-gray-300 font-bold">BASE</span>
          </div>
          <span className="hidden sm:inline">|</span>
          <div className="flex items-center gap-2">
             <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center font-bold text-[8px] text-black">O</div>
             <span className="text-gray-300">OXO</span>
          </div>
          <span className="hidden sm:inline">|</span>
          <div className="flex items-center gap-2"><Lock className="w-3 h-3 text-[#00FFA3]" /> <span>Free</span></div>
          <span className="hidden sm:inline">|</span>
          <div className="flex items-center gap-2"><Discord className="w-3 h-3 text-[#7B5EF8]" /> <span>Live</span></div>
        </motion.div>

      </section>

      {/* ZONE 2: Speaker & Timer */}
      <section id="speaker" className="container mx-auto px-4 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Speaker Widget */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="bg-[#0D0E15]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-6 md:p-8 flex items-center gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#7B5EF8]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl border border-white/10 overflow-hidden shrink-0 shadow-[0_0_20px_rgba(123,94,248,0.2)] bg-[#1A1C29] relative">
               <Image 
                 src="https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/Poster-Event-OXO--15--imagetourl.cloud-1774612336425-renl9b.jpg" 
                 alt="Reza" 
                 fill
                 className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500" 
                 referrerPolicy="no-referrer"
               />
            </div>
            <div>
              <div className="text-[#00FFA3] text-xs font-bold tracking-widest uppercase mb-1">Speaker</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-1">Reza Gandara</h3>
              <p className="text-gray-400 text-sm mb-3">CEO & Co-Founder, OXO</p>
              <p className="text-gray-300 text-xs leading-relaxed mb-4 line-clamp-3">
                Senior Director of Product at Liminal Custody, ex-VP Product at Indodax, and PhD candidate in cross-chain security. Built OXO to solve a real problem he saw in crypto payments.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#1E202D] border border-white/5 px-2.5 py-1 rounded-md text-[10px] font-medium text-gray-300 uppercase tracking-wider">DeFi Architect</span>
                <span className="bg-[#1E202D] border border-white/5 px-2.5 py-1 rounded-md text-[10px] font-medium text-gray-300 uppercase tracking-wider">Web3 Leadership</span>
              </div>
            </div>
          </motion.div>
          {/* ... existing timer widget ... */}
          <div className="bg-[#0D0E15]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00FFA3]/10 blur-3xl rounded-full"></div>
            
            <div className="flex justify-between items-end mb-6">
              <div>
                <div className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-1">Status</div>
                <h3 className="text-xl font-bold">{isEventStarted ? "Live Now" : "Starting In"}</h3>
              </div>
              <div className="text-right">
                <div className="text-gray-400 text-xs font-bold tracking-widest uppercase mb-1">Target</div>
                <h3 className="text-sm font-medium">8 Apr, 8PM WIB</h3>
              </div>
            </div>

            {isEventStarted ? (
               <a href="https://discord.gg/wC8Fns8zVc" target="_blank" rel="noreferrer" className="w-full block text-center py-4 rounded-xl font-bold text-black bg-[#00FFA3] animate-pulse">
                Join Discord Channel
              </a>
            ) : (
              <div className="bg-[#06070B] rounded-2xl p-4 border border-white/5">
                <div className="grid grid-cols-4 gap-2 text-center">
                  {[
                    { l: 'D', v: timeLeft.days }, { l: 'H', v: timeLeft.hours },
                    { l: 'M', v: timeLeft.minutes }, { l: 'S', v: timeLeft.seconds }
                  ].map((t, i) => (
                    <div key={i}>
                      <div className="text-2xl md:text-3xl font-extrabold text-white mb-1 font-mono">{t.v.toString().padStart(2, '0')}</div>
                      <div className="text-[10px] text-gray-500 uppercase font-bold">{t.l}</div>
                    </div>
                  ))}
                </div>
                {/* Simulated Progress Bar */}
                <div className="w-full bg-[#1E202D] h-1.5 rounded-full mt-4 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '75%' }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="bg-gradient-to-r from-[#7B5EF8] to-[#00FFA3] h-full rounded-full"
                  ></motion.div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ZONE 3: Cards */}
      <section id="about" className="container mx-auto px-4 py-20 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold mb-16"
        >
          Why Attend?
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: <Hexagon className="w-8 h-8"/>, title: "DEX Liquidity", desc: "Pahami bagaimana likuiditas bergerak dan mengapa itu penting untuk transaksi kamu.", builders: "24,352" },
            { icon: <Box className="w-8 h-8"/>, title: "Settlement Process", desc: "Dari klik 'swap' hingga aset masuk wallet — seluruh alurnya dibedah transparan.", builders: "20,100", active: true },
            { icon: <Activity className="w-8 h-8"/>, title: "Earn One Flow", desc: "Strategi praktis: swap, redeem reward, dan earn yield tanpa berpindah platform.", builders: "14,521" }
          ].map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-[#0D0E15] border ${card.active ? 'border-[#00FFA3]/30 md:-translate-y-4 shadow-[0_20px_40px_rgba(0,255,163,0.1)]' : 'border-white/5 mt-0 md:mt-8 hover:border-white/20'} rounded-3xl p-8 transition-all duration-300 flex flex-col items-center relative overflow-hidden group`}
            >
              {card.active && <div className="absolute top-0 left-0 w-full h-1 bg-[#00FFA3]"></div>}
              
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-inner ${card.active ? 'bg-gradient-to-br from-[#00FFA3]/20 to-transparent text-[#00FFA3]' : 'bg-[#1E202D] text-gray-400 group-hover:text-white'}`}>
                {card.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">{card.desc}</p>
              
              <div className="w-full bg-[#06070B] rounded-xl p-3 flex justify-between items-center border border-white/5">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-gray-700 border border-[#0D0E15]"></div>)}
                </div>
                <div className="text-xs text-gray-400 font-medium">
                  <span className={card.active ? "text-[#00FFA3]" : "text-white"}>• {card.builders}</span> learners
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ZONE 4: Registration Form */}
      <section id="register" className="container mx-auto px-4 py-32 relative z-10 text-center">
        {/* Enormous glow behind form */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[600px] bg-[radial-gradient(circle,rgba(168,85,247,0.15)_0%,rgba(6,7,11,0)_70%)] pointer-events-none"></div>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative z-10">Save Your Seat</h2>
        <p className="text-gray-400 mb-12 max-w-md mx-auto relative z-10">Amankan tempatmu sekarang. Kapasitas Discord terbatas untuk interaksi maksimal.</p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto bg-[#0D0E15]/90 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] p-8 relative z-10 text-left"
        >
            
          {formStatus === 'success' ? (
            <div className="text-center">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-20 h-20 bg-[#00FFA3]/10 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                 <CheckCircle className="w-10 h-10 text-[#00FFA3]" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4">Registrasi Berhasil!</h3>
              
              <div className="bg-[#06070B] border border-white/5 rounded-xl p-4 mb-6 text-left">
                <p className="text-sm text-[#00FFA3] font-bold mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00FFA3]"></span> Langkah Terakhir
                </p>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Acara disiarkan di Discord BASE. Pastikan bergabung ke server sekarang agar tidak ketinggalan.
                </p>
              </div>

              <a href="https://discord.gg/wC8Fns8zVc" target="_blank" rel="noreferrer" className="w-full py-4 rounded-xl font-bold text-black bg-[#00FFA3] hover:bg-white transition-all flex justify-center items-center gap-2 text-sm">
                <Discord className="w-5 h-5" /> Join Discord BASE
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1 mb-1 block">Full Name</label>
                <input type="text" name="name" required value={formData.name} onChange={handleInputChange} className="w-full bg-[#06070B] border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00FFA3]/50 focus:ring-1 focus:ring-[#00FFA3]/50 transition-all text-sm" placeholder="Satoshi Nakamoto" />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1 mb-1 block">Email Address</label>
                <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full bg-[#06070B] border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00FFA3]/50 focus:ring-1 focus:ring-[#00FFA3]/50 transition-all text-sm" placeholder="satoshi@web3.com" />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold ml-1 mb-1 block">WhatsApp (Optional)</label>
                <input type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleInputChange} className="w-full bg-[#06070B] border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00FFA3]/50 focus:ring-1 focus:ring-[#00FFA3]/50 transition-all text-sm" placeholder="+62 812..." />
              </div>
              
              <button type="submit" disabled={formStatus === 'submitting'} className={`w-full py-4 rounded-xl font-bold text-black text-sm bg-[#00FFA3] hover:bg-white hover:shadow-[0_0_20px_rgba(0,255,163,0.3)] transition-all flex justify-center items-center gap-2 mt-6 ${formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}>
                {formStatus === 'submitting' ? 'Processing...' : 'Complete Registration'}
              </button>
            </form>
          )}
        </motion.div>
      </section>

      {/* ZONE 5: FAQ */}
      <section id="faq" className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-10">FAQ</h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className={`border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === index ? 'bg-[#0D0E15]' : 'bg-[#06070B] hover:bg-[#0D0E15]/50'}`}>
                <button onClick={() => toggleFaq(index)} className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none">
                  <span className="font-medium text-sm md:text-base pr-4">{faq.q}</span>
                  {openFaq === index ? <ChevronUp className="w-5 h-5 text-[#00FFA3] shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-600 shrink-0" />}
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 overflow-hidden"
                    >
                      <p className="pb-5 text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZONE 6: Footer */}
      <footer className="border-t border-white/5 bg-[#06070B] pt-16 pb-8 relative z-10 mt-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          <div className="font-extrabold text-2xl tracking-[0.2em] flex items-center">
              OXO<span className="text-[#00FFA3]">TALKS</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm font-medium text-gray-500">
            <a href="https://www.oxo.so" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Website</a>
            <a href="https://discord.gg/bGMDNDyJRr" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Discord</a>
            <a href="https://x.com/oxo_so" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>

        <div className="container mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
           <div>&copy; 2026 OXO. All Rights Reserved.</div>
           <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
