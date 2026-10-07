import React from 'react';
import { ArrowRight, Check, Play } from 'lucide-react';

interface HeroHeaderProps {
  // Empty for pure headline block
}

export const HeroHeader: React.FC<HeroHeaderProps> = () => {
  return (
    <div className="relative flex flex-col items-center text-center w-full max-w-6xl mx-auto px-4 z-10">
      {/* Soft Ambient Radial Glow behind "NORTHDEMY" */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] sm:w-[760px] h-[220px] sm:h-[300px] bg-blue-600/15 blur-[110px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Top Pill Badge */}
      <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0c1426] border border-[#1e3a8a]/70 text-[#60a5fa] text-xs font-medium shadow-sm mb-4 sm:mb-6 select-none animate-in fade-in slide-in-from-top-1 duration-300">
        <div className="w-3.5 h-3.5 rounded-full bg-blue-600/30 border border-blue-400/40 flex items-center justify-center">
          <Check className="w-2.5 h-2.5 text-blue-300 stroke-[3]" />
        </div>
        <span>Northern Nigeria · Innovation · Skills</span>
      </div>

      {/* Giant "NORTHDEMY" Headline (Exact replacement of TRANSFER in same place) */}
      <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[112px] xl:text-[124px] font-black tracking-[-0.035em] leading-none select-none group cursor-default">
        <span
          className="transfer-headline inline-block font-sans drop-shadow-[0_12px_28px_rgba(0,0,0,0.6)] uppercase transition-all duration-500 group-hover:drop-shadow-[0_15px_35px_rgba(37,99,235,0.4)] group-hover:scale-[1.01]"
          style={{
            background: 'linear-gradient(92deg, #ffffff 0%, #ffffff 46%, #b4cdfe 62%, #5b8aff 78%, #2960f6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          NORTHDEMY
        </span>
      </h1>
    </div>
  );
};

interface HeroCenterActionsProps {
  onApplyNow: () => void;
  onSeeHowItWorks: () => void;
}

export const HeroCenterActions: React.FC<HeroCenterActionsProps> = ({
  onApplyNow,
  onSeeHowItWorks,
}) => {
  return (
    <div className="flex flex-col items-center text-center px-2 py-4">
      {/* Subtitle (Exact replacement requested: TECHNOLOGY HUB IN NORTHERN NIGERIA EMPOWERING INNOVATION) */}
      <p className="text-zinc-300 text-sm sm:text-base font-medium max-w-sm sm:max-w-md leading-relaxed text-balance uppercase tracking-wide">
        TECHNOLOGY HUB IN NORTHERN NIGERIA EMPOWERING INNOVATION
      </p>

      {/* CTAs */}
      <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-3.5">
        {/* Primary CTA */}
        <button
          onClick={onApplyNow}
          className="cyber-button bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full flex items-center gap-2 shadow-xl shadow-blue-600/30 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
        >
          <span>Apply Now</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        {/* Secondary Ghost CTA */}
        <button
          onClick={onSeeHowItWorks}
          className="bg-transparent hover:bg-white/[0.06] border border-zinc-700/80 hover:border-cyan-400 text-white text-xs sm:text-sm font-semibold px-5.5 py-3 rounded-full flex items-center gap-2.5 transition-all hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
        >
          <span className="w-4 h-4 rounded-full border border-white/40 flex items-center justify-center">
            <Play className="w-2 h-2 fill-white text-white ml-0.5" />
          </span>
          <span>See how it works</span>
        </button>
      </div>
    </div>
  );
};
