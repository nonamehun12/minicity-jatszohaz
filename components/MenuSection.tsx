import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, CupSoda, Utensils, Sparkles } from 'lucide-react';
import { MenuSection as MenuSectionType } from '../types';

const menuData: MenuSectionType[] = [
  {
    title: "Kávék & Forró Italok",
    items: [
      { name: "Espresso", price: "500 Ft" },
      { name: "Tejeskávé", price: "600 Ft" },
      { name: "Habos kávé", price: "700 Ft" },
      { name: "Cappuccino / Latte", price: "700 Ft" },
      { name: "Forró Csoki / Tea", price: "500 Ft" },
    ]
  },
  {
    title: "Hűsítők",
    items: [
      { name: "Jégkása (3dl / 4dl / 5dl)", price: "900 - 1200 - 1500 Ft" },
      { name: "Üdítők (0,5l)", price: "600 Ft", description: "Pepsi, Schweppes, Lipton" },
      { name: "Szentkirályi víz", price: "300 Ft" },
      { name: "Toma gyümölcslevek", price: "500 Ft" },
    ]
  },
  {
    title: "Harapnivalók",
    items: [
      { name: "Mini City fánk", price: "400 Ft" },
      { name: "Folyamatosan változó kínálat", price: "" },
    ]
  }
];

const MenuSection: React.FC = () => {
  return (
    <section id="menu" className="py-32 relative transform-gpu">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block p-3 rounded-full bg-orange-100 text-orange-500 mb-4">
              <Utensils size={24} />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 mb-6">Büfé & Kávézó</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Töltsd fel az energiaraktárakat játék közben!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 items-start">
          {menuData.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white/90 backdrop-blur-md rounded-[2.5rem] shadow-xl border border-slate-200 p-8 h-full flex flex-col hover:shadow-2xl transition-all duration-300 group will-change-transform"
            >
              <div className="flex items-center gap-5 mb-8 border-b border-slate-100 pb-6">
                <div className={`p-5 rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300 ${
                  index === 0 ? 'bg-amber-100 text-amber-700' : 
                  index === 1 ? 'bg-blue-100 text-blue-700' : 
                  'bg-pink-100 text-pink-700'
                }`}>
                  {index === 0 ? <Coffee size={32} strokeWidth={2} /> : index === 1 ? <CupSoda size={32} strokeWidth={2} /> : <Sparkles size={32} strokeWidth={2} />}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 leading-tight">{section.title}</h3>
              </div>

              <div className="space-y-6 flex-grow">
                {section.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-start group/item cursor-default">
                    <div className="pr-4">
                      <p className="font-bold text-slate-700 text-lg group-hover/item:text-purple-600 transition-colors">{item.name}</p>
                      {item.description && <p className="text-sm text-slate-400 mt-1 font-medium">{item.description}</p>}
                    </div>
                    {item.price && (
                      <div className="font-bold text-slate-900 bg-slate-50 px-4 py-2 rounded-xl text-base whitespace-nowrap group-hover/item:bg-purple-100 group-hover/item:text-purple-700 transition-colors shadow-sm">
                        {item.price}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
             <p className="text-slate-500 text-sm font-medium bg-white/60 backdrop-blur-sm inline-flex items-center gap-2 px-6 py-3 rounded-full shadow-sm border border-white">
               <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
               Betétdíjas termékek esetén +50 Ft díjat számítunk fel.
             </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;