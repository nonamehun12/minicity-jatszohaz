import React from 'react';
import { Sparkles, Star, Gamepad2, MapPin } from 'lucide-react';

const SocialShareCard: React.FC = () => {
  return (
    <div className="w-[1200px] h-[630px] bg-[#020617] relative overflow-hidden flex flex-col items-center justify-center shrink-0 shadow-2xl">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-20%] w-[900px] h-[900px] bg-purple-600/40 rounded-full blur-[150px] mix-blend-screen opacity-80" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[900px] h-[900px] bg-blue-600/40 rounded-full blur-[150px] mix-blend-screen opacity-80" />
        <div className="absolute top-[30%] left-[60%] w-[600px] h-[600px] bg-pink-500/30 rounded-full blur-[130px] mix-blend-screen opacity-70" />
        
        {/* Noise Pattern - Using SVG Data URI instead of external image */}
        <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E')]" />
      </div>

      {/* Decorative Floating Elements - Symmetrical and Balanced */}
      <div className="absolute top-16 left-16 text-white/5 transform -rotate-12">
        <Gamepad2 size={120} />
      </div>
      <div className="absolute bottom-16 right-16 text-white/5 transform rotate-12">
        <Star size={120} fill="currentColor" />
      </div>
      <div className="absolute top-16 right-16 text-white/5 transform rotate-12">
        <div className="w-24 h-24 rounded-full border-[6px] border-white/10" />
      </div>
      <div className="absolute bottom-16 left-16 text-white/5 transform -rotate-12">
        <div className="w-24 h-24 rounded-3xl border-[6px] border-white/10 rotate-45" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center transform scale-110">
         <div className="flex items-center gap-6 mb-4">
            <Sparkles className="text-yellow-400 w-16 h-16 drop-shadow-[0_0_15px_rgba(250,204,21,0.6)]" fill="currentColor" />
         </div>
         
         {/* Logo Construction */}
         <div className="font-[Fredoka] text-[160px] font-black tracking-tighter flex items-center gap-1 leading-none">
            <span className="text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">Mini</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 drop-shadow-[0_10px_30px_rgba(236,72,153,0.4)] pb-4">City</span>
         </div>
         
         <div className="mt-2 flex items-center gap-6">
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-purple-200/50 to-transparent rounded-full" />
            <div className="flex items-center gap-3 text-purple-100 font-[Quicksand] text-3xl font-bold tracking-[0.25em] uppercase drop-shadow-md">
                <MapPin size={28} className="text-purple-400" />
                Nyíregyháza
            </div>
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-purple-200/50 to-transparent rounded-full" />
         </div>
      </div>
      
      {/* Bottom tagline */}
      <div className="absolute bottom-12 text-white/30 font-[Fredoka] text-xl tracking-wider font-medium">
        www.minicityjatszohaz.hu
      </div>
    </div>
  );
};

export default SocialShareCard;