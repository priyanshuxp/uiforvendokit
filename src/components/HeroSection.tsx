import React from 'react';
import { ArrowRight, Calendar, MessageSquare, Zap, Shield, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onRequestDemo: () => void;
  onContactUs: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onRequestDemo,
  onContactUs,
}) => {
  return (
    <div className="text-center w-full max-w-4xl mx-auto mb-8 sm:mb-10 relative pt-2 sm:pt-4">
      {/* Main Headline - perfectly formatted on 2 balanced lines across mobile and desktop */}
      <h1 className="font-display text-[30px] xs:text-[36px] sm:text-[50px] md:text-[60px] lg:text-[66px] font-extrabold text-[#0b1c30] mb-3 sm:mb-5 leading-[1.15] tracking-tight">
        <span>Next-Generation </span>
        <span className="font-serif-italic text-[#0058be] font-medium">Commerce</span>
        <br />
        <span>Built Without </span>
        <span className="font-serif-italic text-[#0058be] font-medium">Limits</span>
      </h1>

      {/* Subtitle */}
      <p className="text-xs xs:text-sm sm:text-base md:text-lg text-[#545f73] max-w-2xl mx-auto mb-6 sm:mb-8 font-normal leading-relaxed px-2">
        The high-performance commerce platform with headless storefronts, native creator commission splits, multi-warehouse 3PL routing, and zero transaction fee lock-in.
      </p>

      {/* Primary Two 3D CTA Buttons - side by side on mobile and desktop */}
      <div className="flex flex-row items-center justify-center gap-2.5 xs:gap-3 sm:gap-5 max-w-md mx-auto px-2 pb-2">
        <button
          type="button"
          onClick={onRequestDemo}
          id="btn-request-demo"
          className="flex-1 sm:flex-initial px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#1a73e8] via-[#0058be] to-[#00479e] text-white text-xs xs:text-sm sm:text-base font-bold flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-2.5 transition-all duration-150 h-[42px] xs:h-[46px] sm:h-[56px] whitespace-nowrap cursor-pointer group border-t border-t-white/40 border-b border-b-[#003673] shadow-[0_5px_0_#003366,0_12px_24px_rgba(0,88,190,0.32),inset_0_2px_2px_rgba(255,255,255,0.45)] hover:-translate-y-0.5 hover:shadow-[0_7px_0_#003366,0_16px_30px_rgba(0,88,190,0.38)] active:translate-y-[4px] active:shadow-[0_1px_0_#003366,0_4px_12px_rgba(0,88,190,0.22)]"
        >
          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-100 group-hover:scale-110 transition-transform drop-shadow" />
          <span className="tracking-wide drop-shadow-sm">Request demo</span>
          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5 group-hover:translate-x-1 transition-transform drop-shadow hidden xs:inline-block" />
        </button>

        <button
          type="button"
          onClick={onContactUs}
          id="btn-contact-us"
          className="flex-1 sm:flex-initial px-4 xs:px-6 sm:px-8 py-2.5 xs:py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-b from-white to-[#f0f4f9] text-[#0b1c30] text-xs xs:text-sm sm:text-base font-bold flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-2.5 transition-all duration-150 h-[42px] xs:h-[46px] sm:h-[56px] whitespace-nowrap cursor-pointer group border-t border-t-white border-x border-x-slate-200 border-b border-b-slate-300 shadow-[0_5px_0_#cbd5e1,0_10px_20px_rgba(15,23,42,0.06),inset_0_2px_2px_rgba(255,255,255,1)] hover:-translate-y-0.5 hover:shadow-[0_7px_0_#cbd5e1,0_14px_24px_rgba(15,23,42,0.1)] hover:text-[#0058be] active:translate-y-[4px] active:shadow-[0_1px_0_#cbd5e1,0_3px_8px_rgba(15,23,42,0.05)]"
        >
          <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#545f73] group-hover:text-[#0058be] transition-colors" />
          <span className="tracking-wide">Contact us</span>
        </button>
      </div>

      {/* Highlights line below buttons */}
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-5 text-[11px] sm:text-xs text-[#727785] font-medium">
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" /> 14-day full access sandbox
        </span>
        <span className="flex items-center gap-1.5">
          <Zap className="w-3.5 h-3.5 text-[#0058be]" /> 1-Click Shopify store migration
        </span>
        <span className="flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-emerald-600" /> No credit card required
        </span>
      </div>
    </div>
  );
};
