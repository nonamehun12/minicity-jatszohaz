import React, { useEffect, useState, Suspense, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

// Lazy load non-critical components to reduce initial bundle size
const AboutSection = React.lazy(() => import('./components/AboutSection'));
const GallerySection = React.lazy(() => import('./components/GallerySection'));
const MenuSection = React.lazy(() => import('./components/MenuSection'));
const GiftCardSection = React.lazy(() => import('./components/GiftCardSection'));
const EventsSection = React.lazy(() => import('./components/EventsSection'));
const LegalModals = React.lazy(() => import('./components/LegalModals'));
const SocialShareCard = React.lazy(() => import('./components/SocialShareCard'));
const Confetti = React.lazy(() => import('./components/Confetti'));
const CookieConsent = React.lazy(() => import('./components/CookieConsent'));

// --- Optimized Preloader ---
const Preloader = ({ setLoading }: { setLoading: (loading: boolean) => void }) => {
  
  useEffect(() => {
    // OPTIMIZATION: Drastically reduced duration from 1800ms to 500ms
    // to improve Largest Contentful Paint (LCP)
    const duration = 500; 
    
    // Check if window is already loaded
    if (document.readyState === 'complete') {
        setTimeout(() => setLoading(false), duration);
    } else {
        const handleLoad = () => {
             setTimeout(() => setLoading(false), duration);
        }
        window.addEventListener('load', handleLoad);
        // Fallback safety
        setTimeout(() => setLoading(false), 2000);
        return () => window.removeEventListener('load', handleLoad);
    }
  }, [setLoading]);

  // INLINE STYLES: Critical for rendering before Tailwind loads
  const containerStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
  };

  return (
    <motion.div 
      className="fixed inset-0 z-[9999] flex items-center justify-center text-white pointer-events-none"
      style={containerStyle}
    >
      <motion.div
        initial={{ height: "50vh" }}
        exit={{ height: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        className="absolute top-0 left-0 w-full bg-[#020617] z-0"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', backgroundColor: '#020617' }}
      />
      <motion.div
        initial={{ height: "50vh" }}
        exit={{ height: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        className="absolute bottom-0 left-0 w-full bg-[#020617] z-0"
        style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', backgroundColor: '#020617' }}
      />

      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center"
        exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
        style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
      >
        <div
            className="flex items-center gap-2 p-4 mb-8"
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem', marginBottom: '2rem' }}
        >
             <span className="text-4xl md:text-7xl font-[Fredoka] font-black text-white tracking-tight">Mini</span>
             <span className="text-4xl md:text-7xl font-[Fredoka] font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 tracking-tight py-1">City</span>
        </div>

        <div className="w-48 md:w-64 h-1 bg-white/10 rounded-full overflow-hidden relative mb-4" style={{ width: '12rem', height: '0.25rem', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '9999px', overflow: 'hidden', position: 'relative', marginBottom: '1rem' }}>
            <motion.div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ position: 'absolute', top: 0, left: 0, height: '100%', background: 'linear-gradient(to right, #a855f7, #ec4899)' }}
            />
        </div>

        <p 
            className="text-xs uppercase tracking-[0.3em] text-slate-200 font-bold"
            style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.3em', color: '#e2e8f0', fontWeight: 'bold' }}
        >
            Betöltés
        </p>
      </motion.div>
    </motion.div>
  );
};

// Optimization: Memoize background elements to avoid re-renders
const BackgroundBlobs = React.memo(() => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none transform-gpu translate-z-0">
     {/* Top Area (About) */}
     <div className="absolute top-[5%] left-[-10%] w-[45rem] h-[45rem] bg-[radial-gradient(circle,rgba(147,51,234,0.3)_0%,transparent_70%)] mix-blend-multiply opacity-100 animate-blob will-change-transform" style={{ animationDelay: '0s' }} />
     <div className="absolute top-[10%] right-[-15%] w-[50rem] h-[50rem] bg-[radial-gradient(circle,rgba(37,99,235,0.3)_0%,transparent_70%)] mix-blend-multiply opacity-100 animate-blob will-change-transform" style={{ animationDelay: '-5s' }} />
     
     {/* Middle Area */}
     <div className="absolute top-[35%] left-[20%] w-[50rem] h-[50rem] bg-[radial-gradient(circle,rgba(236,72,153,0.25)_0%,transparent_70%)] mix-blend-multiply opacity-100 animate-blob will-change-transform" style={{ animationDelay: '-8s' }} />
     
     {/* Lower Middle */}
     <div className="absolute top-[60%] left-[-5%] w-[35rem] h-[35rem] bg-[radial-gradient(circle,rgba(79,70,229,0.3)_0%,transparent_70%)] mix-blend-multiply opacity-100 animate-blob will-change-transform" style={{ animationDelay: '-2s' }} />
     <div className="absolute top-[65%] right-[-5%] w-[40rem] h-[40rem] bg-[radial-gradient(circle,rgba(147,51,234,0.25)_0%,transparent_70%)] mix-blend-multiply opacity-100 animate-blob will-change-transform" style={{ animationDelay: '-12s' }} />

     {/* Bottom */}
     <div className="absolute bottom-[10%] left-[10%] w-[30rem] h-[30rem] bg-[radial-gradient(circle,rgba(234,179,8,0.3)_0%,transparent_70%)] mix-blend-multiply opacity-100 animate-blob will-change-transform" style={{ animationDelay: '-4s' }} />
     <div className="absolute bottom-[5%] right-[5%] w-[35rem] h-[35rem] bg-[radial-gradient(circle,rgba(249,115,22,0.3)_0%,transparent_70%)] mix-blend-multiply opacity-100 animate-blob will-change-transform" style={{ animationDelay: '-7s' }} />
  </div>
));

function App() {
  const [isOgPreview] = useState(() => window.location.hash === '#og-preview');
  const [isLoading, setIsLoading] = useState(!isOgPreview);
  const [showConfetti, setShowConfetti] = useState(false);
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'impressum' | null>(null);

  useEffect(() => {
    if (!isLoading && !isOgPreview) {
      // OPTIMIZATION: Delay confetti start by 1.5s to prioritise Hero animation (LCP)
      // This prevents the main thread from choking on canvas drawing while animating the hero text
      const startTimer = setTimeout(() => setShowConfetti(true), 1500);
      const endTimer = setTimeout(() => setShowConfetti(false), 6500);
      return () => {
        clearTimeout(startTimer);
        clearTimeout(endTimer);
      };
    }
  }, [isLoading, isOgPreview]);

  if (isOgPreview) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <Suspense fallback={<div className="text-white">Loading Preview...</div>}>
          <SocialShareCard />
        </Suspense>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617] font-sans text-slate-900 selection:bg-purple-500 selection:text-white overflow-x-hidden w-full relative">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader setLoading={setIsLoading} />}
      </AnimatePresence>

      {showConfetti && (
        <Suspense fallback={null}>
          <Confetti />
        </Suspense>
      )}

      {!isLoading && (
        <>
          <ErrorBoundary>
              <Navbar />
          </ErrorBoundary>
          
          <Suspense fallback={null}>
             <CookieConsent onOpenPrivacy={() => setActiveLegalModal('privacy')} />
          </Suspense>

          <Suspense fallback={null}>
            <LegalModals 
                isOpen={!!activeLegalModal} 
                type={activeLegalModal} 
                onClose={() => setActiveLegalModal(null)} 
            />
          </Suspense>
          
          <main>
            {/* 1. HERO SECTION (Dark) - Eagerly loaded for LCP */}
            <ErrorBoundary>
                <Hero />
            </ErrorBoundary>

            {/* 2. EVENTS SECTION (Featured Dark) */}
            <Suspense fallback={<div className="h-96 w-full bg-[#020617]" />}>
                <ErrorBoundary>
                    <EventsSection />
                </ErrorBoundary>
            </Suspense>

            {/* 3. MAIN CONTENT (Continuous White Background) */}
            <div className="relative z-10 bg-slate-100 pb-20">
              
              <BackgroundBlobs />

              {/* Sections - Lazy loaded */}
              <div className="relative z-10">
                
                <Suspense fallback={<div className="h-96 w-full flex items-center justify-center text-slate-300">Betöltés...</div>}>
                    <ErrorBoundary>
                        <AboutSection />
                    </ErrorBoundary>
                </Suspense>
                
                <Suspense fallback={<div className="h-96 w-full" />}>
                    <ErrorBoundary>
                        <GallerySection />
                    </ErrorBoundary>
                </Suspense>

                <Suspense fallback={<div className="h-64 w-full" />}>
                    <ErrorBoundary>
                        <GiftCardSection />
                    </ErrorBoundary>
                </Suspense>

                {/* Eagerly loaded to ensure #pricing and #birthday anchors work immediately */}
                <ErrorBoundary>
                    <PricingSection />
                </ErrorBoundary>

                <Suspense fallback={<div className="h-96 w-full" />}>
                    <ErrorBoundary>
                        <MenuSection />
                    </ErrorBoundary>
                </Suspense>
              </div>
            </div>
          </main>
          
          {/* Eagerly loaded to ensure #contact anchor works immediately */}
          <ErrorBoundary>
              <Footer 
                onOpenPrivacy={() => setActiveLegalModal('privacy')} 
                onOpenImpressum={() => setActiveLegalModal('impressum')} 
              />
          </ErrorBoundary>
        </>
      )}
    </div>
  );
}

export default App;