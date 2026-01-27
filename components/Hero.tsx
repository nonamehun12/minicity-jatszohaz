import React, { useRef } from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { MapPin, ArrowRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // OPTIMIZED: Much faster animations for better LCP score
  const curtainVariants: Variants = {
    hidden: { y: "110%", opacity: 0 },
    visible: (i: number) => ({
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.8, // Reduced from 1.1s
        ease: [0.25, 0.1, 0.25, 1.0], // Sharper ease-out
        delay: 0.1 + (i * 0.05) // Drastically reduced delay
      }
    })
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.6 // Appears sooner
      }
    }
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: offsetTop - 100,
            behavior: 'smooth'
        });
        
        try {
            window.history.pushState({}, '', '#contact');
        } catch (err) {
            console.warn('Navigation history update prevented by environment:', err);
        }
    } else {
        window.location.href = '#contact';
    }
  };

  return (
    <section ref={containerRef} id="home" className="relative min-h-[100dvh] w-full overflow-hidden bg-[#020617] flex items-center justify-center pb-20 transform-gpu content-visibility-auto">
      
      {/* Liquid Metal Background - Optimized */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[#020617]" />
        
        {/* Animated Aurora/Mesh Gradients - Optimized with Radial Gradients */}
        <div className="absolute top-[-20%] left-[-20%] w-[100vw] h-[100vw] md:w-[80vw] md:h-[80vw] bg-[radial-gradient(circle,rgba(107,33,168,0.4)_0%,transparent_70%)] mix-blend-screen animate-aurora gpu will-change-transform" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[100vw] h-[100vw] md:w-[80vw] md:h-[80vw] bg-[radial-gradient(circle,rgba(157,23,77,0.4)_0%,transparent_70%)] mix-blend-screen animate-aurora delay-aurora gpu will-change-transform" />
        
      </motion.div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 h-full flex flex-col justify-center pt-24 md:pt-32 pb-24">
        <div className="max-w-6xl mx-auto w-full">
            
            {/* Top Label - SEO Optimized */}
            <div className="overflow-hidden mb-6 md:mb-8">
                <motion.div 
                    custom={0}
                    variants={curtainVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 md:px-5 rounded-full"
                >
                    <Sparkles size={14} className="text-purple-400 shrink-0" />
                    <span className="text-purple-200 font-medium tracking-[0.15em] uppercase text-[10px] md:text-sm whitespace-nowrap">
                        Nyíregyháza Legmenőbb Játszóháza
                    </span>
                </motion.div>
            </div>

            {/* Main Title - Responsive Typography */}
            <div className="relative z-10">
                <div className="overflow-hidden pb-2 md:pb-6">
                    <motion.h1 
                        custom={1}
                        variants={curtainVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.95] md:leading-[0.9] tracking-tight break-words"
                    >
                        Ahol a játék
                    </motion.h1>
                </div>
                <div className="overflow-hidden pb-4">
                    <motion.h1 
                        custom={2}
                        variants={curtainVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 leading-[0.95] md:leading-[0.9] tracking-tight pb-2 break-words"
                    >
                        életre kel.
                    </motion.h1>
                </div>
            </div>

            {/* Description - SEO Optimized content injection for "Átrium" and "Víz utca" */}
            <div className="overflow-hidden mb-10 md:mb-12 max-w-2xl mt-2 md:mt-4">
                <motion.p 
                    custom={3}
                    variants={curtainVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-base sm:text-lg md:text-2xl text-slate-300/90 leading-relaxed font-light"
                >
                    Lépj be a Mini City világába! Nyíregyháza legnagyobb beltéri játszóháza az <strong className="text-purple-300 font-medium">Átrium Üzletházban</strong> (Víz utca felől) 500 m²-en vár kalanddal, ahol a gyerekek a főszereplők.
                </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col sm:flex-row gap-4" 
            >
                {/* Standard anchor with motion wrapper for safety against navigation crashes */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <a
                        href="#contact"
                        onClick={handleScrollToContact}
                        className="group relative block w-full px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg text-center overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-shadow cursor-pointer"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Irány a Játszóház <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                </motion.div>

                <motion.div
                     whileHover={{ scale: 1.02 }}
                     whileTap={{ scale: 0.98 }}
                >
                    <a
                        href="https://www.google.com/maps/dir//Mini+City+Nyíregyháza+Rákóczi+utca+18-20"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full px-8 py-4 border border-white/20 hover:border-white/60 hover:bg-white/10 text-white rounded-full font-bold text-lg backdrop-blur-sm transition-all flex items-center justify-center gap-2 text-center"
                    >
                        <MapPin size={20} />
                        Útvonal
                    </a>
                </motion.div>
            </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 md:bottom-10 left-0 w-full flex justify-center pointer-events-none z-20"
      >
        <div className="flex flex-col items-center gap-3 text-white/30">
            <span className="text-[10px] uppercase tracking-[0.4em]">Görgess</span>
            <div className="w-px h-12 md:h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;