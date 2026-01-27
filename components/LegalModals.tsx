import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Scale } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'impressum' | null;
  onClose: () => void;
}

const LegalModals: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  // Early return if closed or type is missing
  if (!isOpen || !type) return null;

  const content = {
    impressum: {
      title: "Impresszum",
      icon: <Scale className="w-6 h-6 text-purple-500" />,
      text: (
        <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
          <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
            <h3 className="font-bold text-slate-800 text-lg mb-2">Szolgáltató adatai</h3>
            <ul className="space-y-2">
              <li>
                <strong>Cégnév:</strong> BORSOD GASZTRO Kft.<br />
                <span className="text-xs text-slate-500">(BORSOD GASZTRO Vendéglátóipari és Szolgáltató Korlátolt Felelősségű Társaság)</span>
              </li>
              <li><strong>Székhely:</strong> 1035 Budapest, Miklós u. 1. 8. em. 43.</li>
              <li><strong>Telephely (Játszóház):</strong> 4400 Nyíregyháza, Rákóczi utca 18-20.</li>
              <li><strong>Adószám:</strong> 14511682-2-41</li>
              <li><strong>Cégjegyzékszám:</strong> 01-09-964122</li>
              <li><strong>E-mail:</strong> info.minicity25@gmail.com</li>
              <li><strong>Telefon:</strong> +36 70 349 4900</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-slate-800 text-lg mb-2">Tárhelyszolgáltató</h3>
            <p>
              <strong>Név:</strong> Vercel Inc.<br />
              <strong>Cím:</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA<br />
              <strong>Weboldal:</strong> www.vercel.com
            </p>
          </div>

          <div>
            <h3 className="font-bold text-slate-800 text-lg mb-2">Jogvita</h3>
            <p>
              A szolgáltató és a felhasználó közötti jogviták rendezésére a felek elsősorban békés úton törekednek. Amennyiben ez nem vezet eredményre, a jogvitákra a szolgáltatás teljesítésének helye (Nyíregyháza) szerinti illetékes bíróság, vagy a cég székhelye szerinti bíróság az irányadó a hatályos jogszabályok szerint.
            </p>
          </div>
        </div>
      )
    },
    privacy: {
      title: "Adatkezelési Tájékoztató",
      icon: <FileText className="w-6 h-6 text-green-500" />,
      text: (
        <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
          <p className="italic text-xs">Utolsó frissítés: 2025. május 21.</p>

          <div className="bg-green-50 p-4 rounded-xl border border-green-100">
            <h3 className="font-bold text-slate-800 text-lg mb-2">Röviden, tömören</h3>
            <p>
              A weboldal használata során az Ön személyes adatainak védelme kiemelten fontos számunkra.
              Az adatokat bizalmasan kezeljük, és harmadik félnek nem adjuk át, kivéve ha arra törvény kötelez.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-slate-800 text-base mb-1">1. Az adatkezelő</h3>
            <p><strong>BORSOD GASZTRO Kft.</strong> (lásd Impresszum a részletes cégadatokért).</p>
          </div>

          <div>
            <h3 className="font-bold text-slate-800 text-base mb-1">2. Milyen adatokat gyűjtünk?</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Kapcsolatfelvétel:</strong> Ha e-mailt ír vagy telefonál nekünk, a megadott adatait (név, telefonszám, email) a válaszadás céljából kezeljük.</li>
              <li><strong>Sütik (Cookies):</strong> A weboldal működéséhez elengedhetetlen sütiket, valamint látogatottsági statisztikákat (pl. Google Analytics) használunk névtelen formában.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-slate-800 text-base mb-1">3. Az adatkezelés célja</h3>
            <p>A weboldal kényelmes használatának biztosítása, statisztikai elemzés a szolgáltatás javítása érdekében, valamint ügyfélszolgálati kommunikáció.</p>
          </div>

          <div>
            <h3 className="font-bold text-slate-800 text-base mb-1">4. Az Ön jogai</h3>
            <p>Ön bármikor kérheti adatai törlését, módosítását vagy tájékoztatást kérhet az általunk kezelt adatairól az <code>info.minicity25@gmail.com</code> címen.</p>
          </div>

          <div>
            <h3 className="font-bold text-slate-800 text-base mb-1">5. Kamera rendszer</h3>
            <p>Tájékoztatjuk, hogy a játszóház területén vagyonvédelmi és biztonsági okokból kamerarendszer üzemel. A felvételeket a hatályos jogszabályoknak megfelelően tároljuk.</p>
          </div>
        </div>
      )
    }
  };

  // Safely access content based on type
  const activeContent = content[type];

  // Critical Safety Check: If activeContent is undefined (e.g. type mismatch), don't render.
  if (!activeContent) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white w-full max-w-2xl max-h-[85vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-50 rounded-lg">
                {activeContent.icon}
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800">{activeContent.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
            {activeContent.text}
          </div>

          {/* Footer */}
          <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-slate-800 text-white font-bold rounded-full hover:bg-slate-700 transition-colors text-sm"
            >
              Bezárás
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LegalModals;