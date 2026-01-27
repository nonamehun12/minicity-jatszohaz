import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavItem } from '../types';
import { Menu, X, Phone, Cake } from 'lucide-react';

const navItems: NavItem[] = [
  { label: 'Főoldal', href: '#home' },
  { label: 'Szülinap', href: '#birthday', special: true },
  { label: 'Galéria', href: '#gallery' },
  { label: 'Árak', href: '#pricing' },
  { label: 'Büfé', href: '#menu' },
  { label: 'Kapcsolat', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Throttle: Only update state if the boolean value actually changes
      const isScrolled = window.scrollY > 30;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    // Add passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'auto';
    }
    return () => {
        document.body.style.overflow = 'unset';
        document.body.style.touchAction = 'auto';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    let targetId = href.replace('#', '');
    
    // Special handling for #birthday:
    // If we can't find #birthday (likely because the tab isn't active), 
    // we target the #pricing section instead, and rely on URL hash to switch the tab.
    if (targetId === 'birthday' && !document.getElementById('birthday')) {
        targetId = 'pricing';
    }

    const element = document.getElementById(targetId);

    if (element) {
        // Safe scroll calculation
        const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
            top: offsetTop - 100, // Offset for navbar
            behavior: 'smooth'
        });
        
        // Try to update URL, but don't crash if blocked (e.g. in sandboxed iframes)
        try {
            window.history.pushState({}, '', href);
        } catch (err) {
            console.warn('Navigation history update prevented by environment:', err);
        }
        
        // If it was a hash change that needs to trigger a listener (like switching tabs)
        if (href === '#birthday') {
             // Attempt to trigger standard hashchange
             try {
                window.dispatchEvent(new HashChangeEvent('hashchange'));
             } catch (e) {
                // Ignore errors constructing event
             }
             // Backup: Dispatch custom event for robust internal handling
             window.dispatchEvent(new CustomEvent('switch-to-birthday-tab'));
        }

    } else {
        // Fallback for lazy loaded or completely missing elements
        window.location.href = href;
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 pointer-events-none ${
          scrolled ? 'py-3' : 'py-5 md:py-8'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between pointer-events-auto">
          
          {/* Logo */}
          <div className={`transition-all duration-500 transform-gpu ${scrolled ? 'bg-slate-900/80 backdrop-blur-xl shadow-lg rounded-full px-4 py-2' : ''}`}>
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="relative z-50 group cursor-pointer block" aria-label="Mini City Home">
              <div className="font-[Fredoka] text-2xl lg:text-3xl font-black tracking-wide flex items-center gap-1">
                  <span className="text-white drop-shadow-md">Mini</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-sm">City</span>
              </div>
            </a>
          </div>

          {/* Desktop Nav - Optimized without heavy physics */}
          <div className={`hidden lg:flex items-center gap-1 transition-all duration-500 rounded-full px-2 py-1.5 transform-gpu ${scrolled ? 'bg-slate-900/80 backdrop-blur-xl shadow-lg' : ''}`}>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 group overflow-hidden ${
                  item.special 
                    ? 'bg-white text-slate-900 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95' 
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                  <span className="relative z-10 flex items-center gap-2">
                      {item.label}
                      {item.special && <Cake size={16} className="text-pink-500 animate-pulse" />}
                  </span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden pointer-events-auto">
               <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
                aria-expanded={mobileMenuOpen}
                className="w-12 h-12 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white shadow-lg relative z-[101] active:scale-95 transition-transform"
               >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
               </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99] bg-slate-950/98 backdrop-blur-xl flex flex-col items-center justify-center lg:hidden touch-none"
          >
            <div className="flex flex-col items-center gap-6 p-4 w-full max-w-sm h-full max-h-[80vh] justify-center overflow-y-auto">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.05 }}
                  className={`text-3xl font-black font-[Fredoka] flex items-center gap-3 p-3 w-full justify-center active:scale-95 transition-transform ${
                    item.special 
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500' 
                    : 'text-white hover:text-purple-300'
                  }`}
                >
                  {item.label}
                  {item.special && <Cake size={24} className="text-pink-500" />}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 w-full px-4"
              >
                <a 
                  href="tel:+36703494900"
                  className="flex items-center justify-center gap-3 bg-white text-slate-900 rounded-full py-4 px-6 font-bold text-lg shadow-xl w-full active:scale-95 transition-transform"
                >
                  <Phone size={20} className="text-purple-600" />
                  Hívás most
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;