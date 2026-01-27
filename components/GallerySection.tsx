import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Instagram, Facebook } from 'lucide-react';

// References to local files in public/uploads/gallery/
// SEO Optimized alt tags added for improved search visibility
const galleryItems = [
  { type: 'image', src: "/uploads/gallery/image-1.jpg", alt: "Mini City Játszóház Nyíregyháza - Beltéri játékélmény" },
  { type: 'image', src: "/uploads/gallery/image-2.jpg", alt: "Óriás Játszóvár és Csúszda Nyíregyháza" },
  { type: 'image', src: "/uploads/gallery/image-3.jpg", alt: "Labdatenger és akadálypálya gyerekeknek" },
  { type: 'image', src: "/uploads/gallery/image-4.jpg", alt: "Szülinapi zsúr helyszín Nyíregyháza - Mini City" },
  { type: 'image', src: "/uploads/gallery/image-5.jpg", alt: "Csúszdapark és gyerekprogramok" },
  { type: 'image', src: "/uploads/gallery/image-6.jpg", alt: "Ingyenes játékgépek és szórakozás" },
  { type: 'image', src: "/uploads/gallery/image-7.jpg", alt: "Vidám hangulat a nyíregyházi játszóházban" },
  { type: 'image', src: "/uploads/gallery/image-8.jpg", alt: "Baba sarok a legkisebbeknek" },
  { type: 'image', src: "/uploads/gallery/image-9.jpg", alt: "Boldog gyerekek a Mini City Játszóházban" },
];

const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="py-24 md:py-32 relative transform-gpu">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-purple-100 to-pink-100 text-purple-600 rounded-2xl mb-6 shadow-sm"
          >
            <Camera size={32} />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-800 mb-6">Képgaléria</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Ízelítő a mindennapjainkból és a fergeteges hangulatból. Nézd meg, milyen a játék nálunk!
          </p>
        </div>

        {/* Symmetrical Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white aspect-[4/3] will-change-transform border border-slate-200 relative group"
            >
              <div className="absolute inset-0 bg-slate-200 animate-pulse -z-10" />

              <img
                src={item.src}
                alt={item.alt}
                width={800}
                height={600}
                loading={index < 3 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={index < 3 ? "high" : "auto"}
                title={item.alt}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                // Add a graceful fallback in case the file isn't uploaded yet so the layout doesn't break
                onError={(e) => {
                  e.currentTarget.src = `https://placehold.co/800x600/e2e8f0/475569?text=Mini+City+Kép+${index + 1}`;
                }}
                className="w-full h-full object-cover relative z-10 hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>

        {/* Social Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-16">
          <a
            href="https://www.instagram.com/mini_city_jatszohaz"
            target="_blank"
            rel="noreferrer"
            className="group w-full sm:w-auto text-center inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white rounded-full font-bold text-lg shadow-lg shadow-pink-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Instagram size={24} />
            Kövess Instagramon
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61579641141928"
            target="_blank"
            rel="noreferrer"
            className="group w-full sm:w-auto text-center inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1877F2] text-white rounded-full font-bold text-lg shadow-lg shadow-blue-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <Facebook size={24} />
            Kövess Facebookon
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;