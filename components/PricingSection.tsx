import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ticket, Cake, Check, Info, Star, Crown, ArrowRight } from 'lucide-react';

const PricingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ticket' | 'birthday'>('ticket');

  useEffect(() => {
    // Automatically switch tab if URL hash is #birthday
    const handleHashChange = () => {
      if (window.location.hash === '#birthday') {
        setActiveTab('birthday');
      }
    };

    // Custom event handler for robust switching even if hash URL update is blocked
    const handleCustomSwitch = () => {
      setActiveTab('birthday');
    };

    // Check on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    // Listen for custom navigation event
    window.addEventListener('switch-to-birthday-tab', handleCustomSwitch);

    return () => {
        window.removeEventListener('hashchange', handleHashChange);
        window.removeEventListener('switch-to-birthday-tab', handleCustomSwitch);
    };
  }, []);

  return (
    <section id="pricing" className="py-20 md:py-32 relative transform-gpu">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 mb-4"
          >
            Játszóház Árak & Belépők
          </motion.h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            <strong>Nyíregyháza legkedvezőbb játszóház árai</strong> rejtett költségek nélkül. Válaszd a sima belépőt vagy a prémium szülinapi csomagot!
          </p>
        </div>

        {/* Tab Switcher - Optimized for small screens */}
        <div className="flex justify-center mb-10 md:mb-16 px-2">
          <div className="bg-white p-1.5 md:p-2 rounded-full shadow-xl border border-slate-200 flex relative w-full max-w-[340px] sm:max-w-[500px] overflow-hidden transform-gpu">
            <button
              onClick={() => setActiveTab('ticket')}
              className={`relative z-10 flex-1 py-2 sm:py-4 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-lg whitespace-nowrap ${
                activeTab === 'ticket' ? 'text-white' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Ticket size={16} className="sm:w-[22px] sm:h-[22px]" />
              Belépőjegy
            </button>
            <button
              onClick={() => setActiveTab('birthday')}
              className={`relative z-10 flex-1 py-2 sm:py-4 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-lg whitespace-nowrap ${
                activeTab === 'birthday' ? 'text-white' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <Cake size={16} className="sm:w-[22px] sm:h-[22px]" />
              Szülinap
            </button>

            {/* Sliding Background */}
            <motion.div 
                layout
                className={`absolute top-1.5 bottom-1.5 sm:top-2 sm:bottom-2 rounded-full shadow-lg ${activeTab === 'ticket' ? 'bg-gradient-to-r from-blue-500 to-indigo-600' : 'bg-gradient-to-r from-orange-500 to-pink-600'}`}
                initial={false}
                animate={{
                    left: activeTab === 'ticket' ? '6px' : '50%',
                    width: 'calc(50% - 6px)'
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-6xl mx-auto min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === 'ticket' ? (
              <motion.div
                key="ticket"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-6 lg:gap-12 items-stretch"
              >
                {/* Weekday Card */}
                <motion.div 
                  className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-xl border border-slate-200 p-6 sm:p-10 relative overflow-hidden flex flex-col h-full transform-gpu"
                >
                  <div className="absolute top-0 left-0 w-full h-3 bg-blue-400"></div>
                  <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-1">Hétköznap</h3>
                        <p className="text-slate-500 font-bold text-xs sm:text-sm uppercase tracking-wide">Hétfő – Csütörtök</p>
                      </div>
                      <div className="p-2 sm:p-3 bg-blue-50 rounded-2xl text-blue-500">
                          <Ticket />
                      </div>
                  </div>
                  <div className="mb-6 sm:mb-8">
                      <span className="text-5xl sm:text-6xl font-black text-slate-800">2 000</span>
                      <span className="text-xl sm:text-2xl font-bold text-blue-500"> Ft</span>
                      <p className="text-slate-400 font-medium mt-2">/ fő / 1 óra</p>
                  </div>
                  <ul className="space-y-4 sm:space-y-5 mb-6 sm:mb-8 flex-grow">
                    {[
                        "Ingyenes kísérőjegy",
                        "Ingyenes parkolás",
                        "Játékautomata használat",
                        "Korlátlan csúszdázás"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 sm:gap-4 text-slate-700 font-medium text-base sm:text-lg">
                            <div className="bg-green-100 p-1 rounded-full shrink-0"><Check className="text-green-600 w-3 h-3 sm:w-4 sm:h-4" strokeWidth={3} /></div>
                            {item}
                        </li>
                    ))}
                    <li className="flex items-center gap-3 text-slate-500 font-medium pt-4 border-t border-slate-100 text-sm sm:text-base">
                      <Info className="text-blue-400 flex-shrink-0" size={18} /> Túllépés: +33 Ft/perc
                    </li>
                  </ul>
                </motion.div>

                {/* Weekend Card */}
                <motion.div 
                  className="bg-white rounded-[2rem] md:rounded-[2.5rem] shadow-xl border-2 border-purple-100 p-6 sm:p-10 relative overflow-hidden flex flex-col h-full md:transform md:-translate-y-4 transform-gpu"
                >
                  <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                  <div className="absolute top-6 right-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg flex items-center gap-1">
                      <Star size={12} fill="currentColor" /> Népszerű
                  </div>
                  
                  <div className="mb-6 mt-2">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-1">Hétvége</h3>
                    <p className="text-purple-500 font-bold text-xs sm:text-sm uppercase tracking-wide">Péntek – Vasárnap & Ünnep</p>
                  </div>

                  <div className="mb-6 sm:mb-8">
                      <span className="text-5xl sm:text-6xl font-black text-slate-800">2 500</span>
                      <span className="text-xl sm:text-2xl font-bold text-purple-500"> Ft</span>
                      <p className="text-slate-400 font-medium mt-2">/ fő / 1 óra</p>
                  </div>
                  <ul className="space-y-4 sm:space-y-5 mb-6 sm:mb-8 flex-grow">
                     {[
                        "Ingyenes kísérőjegy",
                        "Ingyenes parkolás",
                        "Játékautomata használat",
                        "Korlátlan csúszdázás"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 sm:gap-4 text-slate-700 font-bold text-base sm:text-lg">
                            <div className="bg-green-100 p-1 rounded-full shrink-0"><Check className="text-green-600 w-3 h-3 sm:w-4 sm:h-4" strokeWidth={3} /></div>
                            {item}
                        </li>
                    ))}
                    <li className="flex items-center gap-3 text-slate-500 font-medium pt-4 border-t border-slate-100 text-sm sm:text-base">
                      <Info className="text-purple-400 flex-shrink-0" size={18} /> Túllépés: +42 Ft/perc
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="birthday"
                id="birthday"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-orange-50 via-white to-pink-50 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 lg:p-16 border border-orange-100 shadow-2xl relative overflow-hidden transform-gpu"
              >
                {/* Confetti background */}
                <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#FDBA74 2px, transparent 2px), radial-gradient(#F472B6 2px, transparent 2px)', backgroundSize: '40px 40px', backgroundPosition: '0 0, 20px 20px' }}></div>

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center h-full relative z-10">
                  <div className="h-full flex flex-col justify-center text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-bold text-sm mb-6 w-fit mx-auto lg:mx-0">
                        <Crown size={18} />
                        Prémium Szolgáltatás
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black text-slate-800 mb-6 leading-tight">
                      A legjobb <span className="text-orange-500">Szülinapi Party</span> a városban!
                    </h3>
                    <p className="text-slate-600 mb-8 text-lg leading-relaxed hidden md:block">
                      Ünnepeljétek nálunk a nagy napot! Mi gondoskodunk a dekorációról, a tortáról és a fergeteges hangulatról.
                    </p>
                    <div className="space-y-3 sm:space-y-4 text-left mb-8">
                      {[
                        "2 óra önfeledt játék",
                        "4L finom hűsítő limonádé",
                        "Plüss ajándék az ünnepeltnek",
                        "Különterem a tortázáshoz"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-orange-100">
                          <div className="bg-gradient-to-br from-orange-400 to-pink-500 p-1 rounded-full text-white shrink-0">
                            <Check size={12} strokeWidth={4} />
                          </div>
                          <span className="font-bold text-slate-700 text-sm sm:text-base">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Right Side Price Box */}
                  <div className="h-full flex flex-col">
                    <motion.div 
                      className="text-center bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border-4 border-orange-100 flex flex-col justify-center items-center h-full relative"
                    >
                      <div className="absolute -top-6 md:-top-8 left-1/2 -translate-x-1/2 bg-white p-3 md:p-4 rounded-full shadow-xl">
                           <Cake className="w-10 h-10 md:w-14 md:h-14 text-pink-500 animate-bounce" />
                      </div>
                      
                      <div className="mt-6">
                          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs md:text-sm mb-2">Csomagár / fő</p>
                          <div className="text-5xl md:text-7xl font-black text-slate-800 tracking-tighter mb-2">4 000<span className="text-2xl md:text-4xl text-slate-400 font-medium"> Ft</span></div>
                      </div>
                      
                      <div className="w-full h-px bg-slate-100 my-6 md:my-8"></div>

                      <a href="#contact" className="group w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-bold py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-orange-200 hover:shadow-orange-300 text-lg flex items-center justify-center gap-2">
                        Foglalás
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                      <p className="mt-4 text-xs text-slate-400">* Minimum 8 fő esetén</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;