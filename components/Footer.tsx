
import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenImpressum: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenImpressum }) => {
  return (
    <footer id="contact" className="relative bg-slate-900 text-white pt-32 pb-12 overflow-hidden">
      
      {/* Wave Separator - Matched to bg-slate-100 */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] sm:h-[100px] fill-slate-100">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Kapcsolat</h3>
            <address className="flex flex-col gap-4 not-italic">
                <a 
                  href="https://www.google.com/maps/dir//Mini+City+Nyíregyháza+Rákóczi+utca+18-20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="bg-slate-800 p-3 rounded-xl text-purple-400 shadow-inner">
                      <MapPin className="shrink-0" />
                  </div>
                  <span className="text-gray-300 font-medium leading-relaxed">
                    Rákóczi utca 18–20, <br />
                    Nyíregyháza, 4400 <br />
                    <span className="text-sm text-gray-500 group-hover:text-purple-300 transition-colors">
                      (Átrium Bevásárlóközpont)<br />
                      (Bejárat a Víz utca felől)
                    </span>
                  </span>
                </a>

                <a 
                  href="tel:+36703494900"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-purple-900/40 to-slate-800 border border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 group active:scale-[0.98]"
                  title="Hívás indítása"
                >
                  <div className="bg-purple-600 p-3 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform">
                      <Phone className="shrink-0" size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-purple-300 font-bold uppercase tracking-wider mb-0.5">Hívj minket</span>
                    <span className="text-white font-bold text-lg tracking-wide">
                        +36 70 349 4900
                    </span>
                  </div>
                </a>

                <a 
                  href="mailto:info.minicity25@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-purple-900/40 to-slate-800 border border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 group active:scale-[0.98]"
                  title="Email küldése"
                >
                  <div className="bg-purple-600 p-3 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform">
                       <Mail className="shrink-0" size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-purple-300 font-bold uppercase tracking-wider mb-0.5">Írj nekünk</span>
                    <span className="text-white font-medium">
                        info.minicity25@gmail.com
                    </span>
                  </div>
                </a>
            </address>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-3xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">Nyitvatartás</h3>
            <div className="bg-white/5 rounded-3xl p-6 border border-white/5 shadow-inner">
                <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="text-gray-300">Hétfő - Péntek</span>
                    <span className="font-bold text-green-400 bg-green-400/10 px-3 py-1 rounded-lg">10:00 - 20:00</span>
                </li>
                <li className="flex justify-between items-center pb-2">
                    <span className="text-gray-300">Szombat - Vasárnap</span>
                    <span className="font-bold text-green-400 bg-green-400/10 px-3 py-1 rounded-lg">09:00 - 20:00</span>
                </li>
                </ul>
            </div>
            <div className="mt-6 p-4 bg-purple-900/20 border border-purple-500/20 rounded-2xl text-sm text-purple-200 flex items-center gap-3">
              <Clock className="shrink-0 w-5 h-5" />
              Ünnepnapokon a nyitvatartás változhat.
            </div>
          </div>

          {/* Map */}
          <div>
             <h3 className="text-3xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Megközelítés</h3>
             <div className="w-full h-48 bg-slate-800 rounded-3xl mb-6 overflow-hidden relative group shadow-lg border border-white/10 transform-gpu">
                <iframe 
                  src="https://maps.google.com/maps?q=Mini+City+Nyíregyháza+Rákóczi+utca+18-20&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                  title="Mini City Térkép"
                ></iframe>
                <a 
                    href="https://www.google.com/maps/dir//Mini+City+Nyíregyháza+Rákóczi+utca+18-20" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 flex items-center justify-center text-white font-bold z-10"
                >
                    <span className="bg-blue-600/90 hover:bg-blue-500 px-4 py-2 rounded-lg shadow-lg transition-colors text-xs backdrop-blur-sm flex items-center gap-2">
                      <MapPin size={14} /> Útvonal
                    </span>
                </a>
             </div>
             <div className="flex gap-4">
                 <a href="https://www.facebook.com/profile.php?id=61579641141928" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-[#1877F2] hover:text-white transition-all duration-300 group">
                    <Facebook size={20} className="text-gray-400 group-hover:text-white" />
                 </a>
                 <a href="https://www.instagram.com/mini_city_jatszohaz" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-gradient-to-tr hover:from-yellow-500 hover:to-purple-600 transition-all duration-300 group">
                    <Instagram size={20} className="text-gray-400 group-hover:text-white" />
                 </a>
             </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-500 font-medium text-sm">&copy; {new Date().getFullYear()} Mini City Játszóház. Minden jog fenntartva.</p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <button onClick={onOpenPrivacy} className="hover:text-purple-400 transition-colors">Adatkezelési Tájékoztató</button>
            <span className="text-gray-700 hidden md:inline">•</span>
            <button onClick={onOpenImpressum} className="hover:text-purple-400 transition-colors">Impresszum</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;