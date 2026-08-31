import React from 'react';
import { Store } from 'lucide-react';
import { NavTab } from '../types';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
  onOpenPrivacyModal?: () => void;
  onOpenTermsModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTab,
  onOpenPrivacyModal,
  onOpenTermsModal,
}) => {
  return (
    <footer className="bg-white border-t border-[#c2c6d6]/60 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 py-8 max-w-7xl mx-auto gap-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#0058be]">
            <Store className="w-5 h-5 text-[#0058be]" />
          </div>
          <span className="font-display font-bold text-xl text-[#0b1c30]">
            Vendokit
          </span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-6">
          <button
            onClick={() => onSelectTab('home')}
            className="text-xs font-medium text-[#545f73] hover:text-[#0058be] underline decoration-1 underline-offset-4 transition-all cursor-pointer"
          >
            Product
          </button>
          <button
            onClick={() => onSelectTab('features')}
            className="text-xs font-medium text-[#545f73] hover:text-[#0058be] underline decoration-1 underline-offset-4 transition-all cursor-pointer"
          >
            Features
          </button>
          <button
            onClick={() => onSelectTab('pricing')}
            className="text-xs font-medium text-[#545f73] hover:text-[#0058be] underline decoration-1 underline-offset-4 transition-all cursor-pointer"
          >
            Pricing
          </button>
          <button
            onClick={onOpenPrivacyModal}
            className="text-xs font-medium text-[#545f73] hover:text-[#0058be] underline decoration-1 underline-offset-4 transition-all cursor-pointer"
          >
            Privacy
          </button>
          <button
            onClick={onOpenTermsModal}
            className="text-xs font-medium text-[#545f73] hover:text-[#0058be] underline decoration-1 underline-offset-4 transition-all cursor-pointer"
          >
            Terms
          </button>
        </nav>

        {/* Copyright */}
        <div className="text-xs text-[#545f73] text-center md:text-right font-normal">
          © 2024 Vendokit. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
