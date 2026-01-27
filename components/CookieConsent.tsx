import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CookieConsent: React.FC<{ onOpenPrivacy: () => void }> = ({ onOpenPrivacy }) => {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    // Check local storage on mount
    if (localStorage.getItem('minicity_cookie_consent')) {
      setAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('minicity_cookie_consent', 'true');
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <motion.aside 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-0 left-0 w-full z-[1000] bg-slate-900/95 backdrop-blur-md border-t border-white/10 p-4 md:px-8 shadow-2xl"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-300 text-sm text-center md:text-left leading-relaxed">
          Ez a weboldal sütiket (cookie-kat) használ a felhasználói élmény javítása érdekében és a forgalom elemzésére.
          További információért olvassa el az <button onClick={onOpenPrivacy} className="text-purple-400 underline hover:text-purple-300">Adatkezelési Tájékoztatót</button>.
        </p>
        <button 
          onClick={handleAccept}
          className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-6 rounded-full text-sm transition-colors shadow-lg hover:shadow-purple-500/25 whitespace-nowrap"
        >
          Rendben, elfogadom
        </button>
      </div>
    </motion.aside>
  );
};

export default CookieConsent;