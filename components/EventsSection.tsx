import React from 'react';
import { motion } from 'framer-motion';
import { Sun, PartyPopper, Calendar, Clock, Utensils, Shield, Palette, Cookie, Star } from 'lucide-react';

const EventsSection: React.FC = () => {
  return (
    <section id="events" className="relative py-20 bg-[#020617] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-slate-900 to-slate-100/5 pointer-events-none"></div>
      
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-white mb-6">
            <Star className="text-yellow-400 w-4 h-4 fill-yellow-400 animate-pulse" />
            <span className="text-sm font-bold tracking-wide uppercase">Kiemelt Események</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Kalandok & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">Ünnepek</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
            
          {/* CARD 1: FARSANG (Carnival) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden"
          >
             {/* Card Glow */}
             <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/20 via-transparent to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
             
             <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <span className="px-3 py-1 rounded-lg bg-fuchsia-500/20 text-fuchsia-300 text-xs font-bold uppercase border border-fuchsia-500/30">
                                2026. Február 14-15.
                            </span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                            Farsangi Hétvége <br/>
                            <span className="text-fuchsia-400">a Játszóházban</span>
                        </h3>
                    </div>
                    <div className="bg-gradient-to-br from-fuchsia-500 to-purple-600 p-4 rounded-2xl shadow-lg shadow-fuchsia-500/20 transform group-hover:rotate-12 transition-transform duration-500">
                        <PartyPopper className="w-8 h-8 text-white" />
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-6 flex-grow">
                    <p className="text-slate-300 text-lg leading-relaxed">
                        Vedd fel a legmenőbb jelmezedet, és gyere el hozzánk! Nálunk minden hercegnő, szuperhős és kiskalóz otthon érzi magát.
                    </p>
                    
                    {/* Special Offer Box */}
                    <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-3xl p-6 relative overflow-hidden">
                        <div className="flex items-center gap-4 relative z-10">
                             <div className="bg-pink-500/20 p-3 rounded-full shrink-0">
                                <Cookie className="w-8 h-8 text-pink-300" />
                             </div>
                             <div>
                                 <h4 className="font-bold text-pink-200 text-lg mb-1">A farsang kelléke a fánk!</h4>
                                 <p className="text-sm text-pink-100/80">
                                    Minden gyerkőc, aki <strong className="text-white">JELMEZBEN</strong> érkezik, egy <strong className="text-white">FINOM FÁNKOT KAP AJÁNDÉKBA!</strong> 🍩
                                 </p>
                             </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-3xl -z-10"></div>
             </div>
          </motion.div>

          {/* CARD 2: SUMMER CAMP (Nyári Kalandok) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden"
          >
             {/* Card Glow */}
             <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

             <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                             <span className="px-3 py-1 rounded-lg bg-orange-500/20 text-orange-300 text-xs font-bold uppercase border border-orange-500/30">
                                Nyár 2026
                            </span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                            Nyári Kalandok <br/>
                            <span className="text-orange-400">a Mini Cityben</span>
                        </h3>
                    </div>
                    <div className="bg-gradient-to-br from-orange-400 to-yellow-500 p-4 rounded-2xl shadow-lg shadow-orange-500/20 transform group-hover:rotate-12 transition-transform duration-500">
                        <Sun className="w-8 h-8 text-white" />
                    </div>
                </div>

                {/* Intro */}
                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                    Itt a helyed, ha egy felejthetetlen, mozgással, rengeteg játékkal és nevetéssel teli nyarat szeretnél!
                </p>

                {/* Feature List */}
                <ul className="space-y-4 mb-8">
                    {[
                        { icon: Palette, text: "Szabad játék mellett strukturált foglalkozások (arcfestés, sorverseny, kincskeresés)" },
                        { icon: Shield, text: "Korlátolt létszámkeret a biztonság és minőségi felügyelet érdekében" },
                        { icon: Calendar, text: "Ötnapos turnusok (hétfő – péntek)" },
                        { icon: Utensils, text: "Szakértő felügyelet és napi háromszoros étkezés (tízórai, ebéd, uzsonna)" },
                        { icon: Star, text: "Izgalmas külsős programok" }
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300">
                            <div className="mt-1 bg-orange-500/10 p-1.5 rounded-lg shrink-0">
                                <item.icon size={14} className="text-orange-400" />
                            </div>
                            <span className="text-sm md:text-base">{item.text}</span>
                        </li>
                    ))}
                </ul>

                {/* Footer / CTA */}
                <div className="mt-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                     <div className="text-center sm:text-left">
                        <p className="font-bold text-white">Dátumok & Árak</p>
                        <p className="text-orange-400 font-bold uppercase text-sm tracking-wider">HAMAROSAN!</p>
                     </div>
                     <a 
                        href="https://www.facebook.com/profile.php?id=61579641141928"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-orange-50 transition-colors shadow-lg shadow-orange-900/20 inline-flex items-center justify-center"
                     >
                        Kövess minket!
                     </a>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -z-10"></div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EventsSection;