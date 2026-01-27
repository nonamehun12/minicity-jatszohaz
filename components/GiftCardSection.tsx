import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Star, CreditCard } from 'lucide-react';

const GiftCardSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 relative transform-gpu">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white/60 backdrop-blur-xl rounded-[3rem] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] border border-white/80 p-6 md:p-12 lg:p-16 overflow-hidden relative group"
        >
          {/* Hover Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 blur-2xl rounded-[3rem]"></div>

          <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left: Text Content (Cols 1-7) */}
            <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 font-extrabold text-xs uppercase tracking-wider mb-6 shadow-sm border border-amber-200/50"
              >
                <Star size={14} className="fill-amber-500 text-amber-500 animate-spin-slow" />
                Ajándék Ötlet
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 mb-6 leading-[1.1] tracking-tight">
                Ajándékozz <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">
                  Felejthetetlen Élményt!
                </span>
              </h2>
              
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Legyen szó születésnapról, névnapról vagy karácsonyról – a Mini City Ajándékutalvány garantáltan mosolyt csal minden gyermek arcára.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                 <div className="flex items-center gap-4 pl-2 pr-6 py-2 bg-white rounded-2xl border border-slate-100 shadow-lg shadow-purple-100/50 hover:scale-105 transition-transform duration-300">
                    <div className="bg-gradient-to-br from-green-400 to-emerald-600 w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg shadow-green-200 shrink-0">
                        <Gift size={24} strokeWidth={2.5} />
                    </div>
                    <div className="text-left">
                        <p className="font-bold text-slate-800 leading-tight">Ajándékutalvány</p>
                        <p className="text-xs font-semibold text-green-600 uppercase tracking-wide">Kapható a recepción</p>
                    </div>
                 </div>
                 
                 <div className="hidden sm:block h-px w-12 sm:h-12 sm:w-px bg-slate-200"></div>

                 <div className="flex items-center gap-3 text-slate-500 font-medium">
                    <CreditCard size={20} />
                    <span>Szép kártya elfogadóhely</span>
                 </div>
              </div>
            </div>

            {/* Right: Image (Cols 8-12) */}
            <div className="lg:col-span-5 order-1 lg:order-2 relative flex justify-center">
              <motion.div
                whileHover={{ scale: 1.03, rotate: 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="relative z-10 w-full max-w-sm perspective-1000"
              >
                {/* Card Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-3xl blur-2xl opacity-30 transform translate-y-6 scale-90"></div>
                
                <img 
                    src="/uploads/gift-card.jpg"
                    alt="Mini City Ajándékutalvány"
                    width="600"
                    height="400"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/600x400/f3f4f6/4b5563?text=Ajándékutalvány";
                    }}
                    className="relative w-full rounded-3xl shadow-2xl border-[6px] border-white rotate-[-3deg] hover:rotate-0 transition-transform duration-500 object-cover aspect-[3/2]"
                />
                
                {/* Floating Badge */}
                <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-6 -left-4 bg-white text-slate-800 px-4 py-2 md:px-6 md:py-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3"
                >
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-bold text-xs md:text-sm">Bármilyen összegben!</span>
                </motion.div>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftCardSection;