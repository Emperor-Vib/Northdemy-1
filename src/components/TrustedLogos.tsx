import React from 'react';
import { ShieldCheck, Award, Building, Landmark, Globe, CheckCircle2 } from 'lucide-react';

export const TrustedLogos: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 mt-12 sm:mt-16 pb-10 sm:pb-12 text-center select-none">
      {/* Title from northdemy.com */}
      <div className="text-[10px] sm:text-[11px] uppercase font-bold tracking-[0.25em] text-zinc-400 mb-6 sm:mb-7">
        TRUSTED BY GLOBAL ECOSYSTEM LEADERS & ENTERPRISE PARTNERS
      </div>

      {/* Partner Strip */}
      <div className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 md:gap-x-14 gap-y-4 text-zinc-400">
        <div className="flex items-center gap-2 hover:text-white transition-colors duration-200 cursor-pointer">
          <Landmark className="w-4 h-4 text-blue-400" />
          <span className="font-bold text-xs tracking-wide">Federal ICT Ministry</span>
        </div>

        <div className="flex items-center gap-2 hover:text-white transition-colors duration-200 cursor-pointer">
          <Building className="w-4 h-4 text-indigo-400" />
          <span className="font-bold text-xs tracking-wide">Jigawa State Tech Initiative</span>
        </div>

        <div className="flex items-center gap-2 hover:text-white transition-colors duration-200 cursor-pointer">
          <Globe className="w-4 h-4 text-cyan-400" />
          <span className="font-bold text-xs tracking-wide">TechServe Nigeria</span>
        </div>

        <div className="flex items-center gap-2 hover:text-white transition-colors duration-200 cursor-pointer">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span className="font-bold text-xs tracking-wide">FinSecure Ltd</span>
        </div>

        <div className="flex items-center gap-2 hover:text-white transition-colors duration-200 cursor-pointer">
          <Award className="w-4 h-4 text-amber-400" />
          <span className="font-bold text-xs tracking-wide">ISO Certified Standards</span>
        </div>

        <div className="flex items-center gap-2 hover:text-white transition-colors duration-200 cursor-pointer">
          <CheckCircle2 className="w-4 h-4 text-purple-400" />
          <span className="font-bold text-xs tracking-wide">NITDA Ecosystem</span>
        </div>
      </div>
    </div>
  );
};
