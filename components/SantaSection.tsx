import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Clock, MapPin, Gift, AlertCircle } from 'lucide-react';

const SantaSection: React.FC = () => {
  const containerRef = useRef(null);
  
  // Parallax effect for the background content
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} id="santa" className="relative py-24 md:py-32 bg-[#0f172a] overflow-hidden transform-gpu">
      
      {/* Magical Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-slate-900 to-slate-900"></div>
      <motion.div style={{ y }} className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-[2.5rem] p-6 md:p-12 shadow-[0_0_30px_rgba(220,38,38,0.15)] relative overflow-hidden group will-change-transform"
        >
           {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-green-600 to-red-600 rounded-[2.6rem] opacity-10 blur-lg group-hover:opacity-20 transition-opacity duration-700"></div>

          <div className="text-center mb-12 relative z-10">
            <div className="inline-block bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-3 rounded-full text-sm md:text-base font-bold mb-6 shadow-lg uppercase tracking-widest border border-red-400/50">
              🎅 Mikulás Ünnepség 2025
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-300 mb-4 drop-shadow-md">
              Találkozz a Mikulással!
            </h2>
            <p className="text-lg md:text-2xl text-red-200/90 italic max-w-2xl mx-auto font-serif">
              "Egy varázslatos este, ahol az álmok valóra válnak."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-white relative z-10">
            {/* Left Column: Details */}
            <div className="space-y-4 md:space-y-6">
              {[
                { icon: Calendar, label: "Dátum", value: "2025. december 05. (Péntek)", color: "red" },
                { icon: MapPin, label: "Helyszín", value: "Mini City (Átrium Üzletház)", sub: "Nyíregyháza, Rákóczi u. 18-20.", color: "green" },
                { icon: Gift, label: "Jegyár", value: "5 990 Ft", sub: "/ gyermek (2+1 óra + Ajándék)", color: "yellow" }
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-5 bg-white/5 p-5 rounded-3xl border border-white/5 shadow-inner transition-colors hover:bg-white/10"
                >
                  <div className={`bg-${item.color}-500/20 p-4 rounded-2xl shadow-lg shadow-${item.color}-500/10`}>
                    <item.icon className={`text-${item.color}-400 w-8 h-8`} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-1">{item.label}</p>
                    <p className={`font-bold ${item.color === 'yellow' ? 'text-2xl text-yellow-400' : 'text-lg'}`}>{item.value}</p>
                    {item.sub && <p className="text-sm text-gray-400">{item.sub}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Schedule & Alert */}
            <div className="space-y-6 flex flex-col h-full">
               <div className="bg-gradient-to-br from-red-900/40 to-purple-900/40 p-8 rounded-3xl border border-red-500/30 flex-grow shadow-xl">
                  <h3 className="text-2xl font-bold text-red-100 mb-6 flex items-center gap-3">
                    <Clock className="w-7 h-7 text-red-400" /> Menetrend
                  </h3>
                  <ul className="space-y-8 relative pl-2 border-l-2 border-red-500/30 ml-3 my-4">
                    <li className="relative pl-8">
                      <span className="font-black text-white text-2xl block mb-1">17:00</span>
                      <span className="text-red-100 text-lg">Program kezdete & Játékidő</span>
                    </li>
                    <li className="relative pl-8">
                      <span className="font-black text-white text-2xl block mb-1">18:00</span>
                      <span className="text-red-100 text-lg">A Mikulás érkezése! 🎅</span>
                    </li>
                  </ul>
               </div>

               <motion.div 
                 animate={{ scale: [1, 1.02, 1] }}
                 transition={{ duration: 2, repeat: Infinity }}
                 className="bg-yellow-500/10 p-6 rounded-3xl border border-yellow-500/40 flex items-start gap-5"
               >
                 <AlertCircle className="text-yellow-400 w-8 h-8 shrink-0 mt-1" />
                 <div>
                   <p className="font-bold text-yellow-100 text-xl mb-1">Figyelem!</p>
                   <p className="text-sm text-yellow-50/90 leading-relaxed">A jegyek csak korlátozott számban kaphatók! Siess a foglalással!</p>
                 </div>
               </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SantaSection;