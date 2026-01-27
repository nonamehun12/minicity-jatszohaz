import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Target, Gamepad2, Cake, Ruler, ShieldCheck, Castle } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    icon: Castle,
    title: "Óriás Játszóvár",
    description: "Több szintes beltéri labirintus csúszdákkal, akadálypályával és labdatengerrel.",
    color: "text-pink-500 bg-pink-100"
  },
  {
    icon: Target,
    title: "Szivacslabda Puskák",
    description: "Biztonságos és izgalmas csataélmény minden korosztálynak a játék arénában.",
    color: "text-red-500 bg-red-100"
  },
  {
    icon: Gamepad2,
    title: "Ingyenes Játékterem",
    description: "Autós és motoros játékgépek Free Play módban. Érme nélkül, korlátlanul!",
    color: "text-blue-500 bg-blue-100"
  },
  {
    icon: Cake,
    title: "Party Szobák",
    description: "Külön tematikus termek fiúknak és lányoknak a tökéletes szülinapi zsúrhoz.",
    color: "text-purple-500 bg-purple-100"
  },
  {
    icon: Ruler,
    title: "500 m² Terület",
    description: "Hatalmas, klimatizált beltéri játszótér a futkosáshoz és felfedezéshez.",
    color: "text-green-500 bg-green-100"
  },
  {
    icon: ShieldCheck,
    title: "Maximális Biztonság",
    description: "Puha burkolatok, lekerekített élek és szakképzett felügyelet a biztonságos játékért.",
    color: "text-orange-500 bg-orange-100"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 mb-6"
          >
            Miért a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Mini City?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            A Mini City nem csak egy egyszerű játszóház, hanem Nyíregyháza legmodernebb <strong>gyermek élményközpontja</strong> az Átrium Üzletházban. Tökéletes <strong>szülinapi zsúr helyszín</strong>, ahol a gyerekek felszabadultan játszhatnak a hatalmas beltéri játszótéren, a szülők pedig kényelmesen kikapcsolódhatnak.
          </motion.p>
        </div>

        {/* Grid Layout - Symmetrical 3x2 on Desktop, 2x3 on Tablet */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="h-full"
            >
              <motion.div
                whileHover={{ y: -10, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)" }}
                className="bg-white p-10 rounded-[2.5rem] shadow-lg text-center border border-slate-200 h-full flex flex-col items-center relative overflow-hidden group z-10 transform-gpu"
              >
                {/* Background blob on hover */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full ${feature.color.split(' ')[1]} opacity-20 group-hover:scale-150 transition-transform duration-500 ease-out`}></div>

                <motion.div 
                  className={`w-24 h-24 mx-auto rounded-3xl flex items-center justify-center mb-8 ${feature.color} shadow-md`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon size={42} strokeWidth={2} />
                </motion.div>
                <h3 className="font-bold text-2xl text-slate-800 mb-4">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed text-lg">{feature.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Testimonials - Balanced 2-column layout */}
        <div className="mt-32 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
             <h3 className="text-3xl font-bold text-slate-700">Vendégeink mondták</h3>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {[
              { text: "Szuper hely, még a felnőtteknek is szórakoztató. A gyerekek imádták a szivacslövőket, alig tudtuk hazavinni őket!", author: "Roland Gélégornya" },
              { text: "Tiszta, igényes, kedves kiszolgálás. A születésnapi zsúr szervezése profi volt, minden terhet levettek a vállunkról.", author: "Alexandra Vajás" }
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ x: i % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-10 rounded-[2rem] shadow-xl border border-slate-200 italic text-slate-600 relative h-full flex flex-col justify-between group hover:border-purple-200 transition-colors transform-gpu"
              >
                 <span className="text-9xl text-purple-100/50 absolute -top-6 left-6 font-serif leading-none pointer-events-none group-hover:text-purple-100 transition-colors">"</span>
                 <p className="relative z-10 text-xl mb-8 font-medium leading-relaxed">{t.text}</p>
                 <div className="flex items-center justify-end gap-3">
                    <div className="w-8 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <p className="font-bold text-slate-800 not-italic text-lg">{t.author}</p>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;