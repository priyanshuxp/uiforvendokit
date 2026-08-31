import React, { useState } from 'react';
import { Store, Menu, X, ArrowUpRight } from 'lucide-react';
import { NavTab } from '../types';

interface HeaderProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  onOpenGetStarted: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  onOpenGetStarted,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: NavTab) => {
    onSelectTab(tab);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-[#f8f9ff]/80 backdrop-blur-md sticky top-0 z-50 border-b border-[#e2e8f0]/60 transition-colors duration-200">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0058be] transition-transform duration-200 group-hover:scale-105 shadow-sm">
            <Store className="w-5 h-5 text-[#0058be]" />
          </div>
          <span className="font-display font-extrabold text-2xl tracking-tight text-[#0b1c30]">
            Vendokit
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-9">
          <button
            onClick={() => handleNavClick('home')}
            className={`text-sm font-semibold transition-colors duration-200 relative py-1 cursor-pointer ${
              currentTab === 'home'
                ? 'text-[#0058be]'
                : 'text-[#545f73] hover:text-[#0058be]'
            }`}
          >
            Home
            {currentTab === 'home' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0058be] rounded-full" />
            )}
          </button>

          <button
            onClick={() => handleNavClick('features')}
            className={`text-sm font-medium transition-colors duration-200 relative py-1 cursor-pointer ${
              currentTab === 'features'
                ? 'text-[#0058be] font-semibold'
                : 'text-[#545f73] hover:text-[#0058be]'
            }`}
          >
            Features
            {currentTab === 'features' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0058be] rounded-full" />
            )}
          </button>

          <button
            onClick={() => handleNavClick('pricing')}
            className={`text-sm font-medium transition-colors duration-200 relative py-1 cursor-pointer ${
              currentTab === 'pricing'
                ? 'text-[#0058be] font-semibold'
                : 'text-[#545f73] hover:text-[#0058be]'
            }`}
          >
            Pricing
            {currentTab === 'pricing' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0058be] rounded-full" />
            )}
          </button>
        </nav>

        {/* Right Action */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenGetStarted}
            className="bg-gradient-to-b from-[#0058be] to-[#004aa0] text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:scale-95 transition-transform duration-150 shadow-[0px_4px_20px_rgba(0,88,190,0.3)] border border-white/20 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Get Started</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-[#0b1c30] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pt-3 pb-6 bg-[#f8f9ff]/95 backdrop-blur-lg border-b border-[#e2e8f0] flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-4 duration-200">
          <button
            onClick={() => handleNavClick('home')}
            className={`text-left text-base py-2 font-medium ${
              currentTab === 'home' ? 'text-[#0058be] font-bold' : 'text-[#545f73]'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('features')}
            className={`text-left text-base py-2 font-medium ${
              currentTab === 'features' ? 'text-[#0058be] font-bold' : 'text-[#545f73]'
            }`}
          >
            Features
          </button>
          <button
            onClick={() => handleNavClick('pricing')}
            className={`text-left text-base py-2 font-medium ${
              currentTab === 'pricing' ? 'text-[#0058be] font-bold' : 'text-[#545f73]'
            }`}
          >
            Pricing
          </button>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenGetStarted();
            }}
            className="w-full bg-gradient-to-b from-[#0058be] to-[#004aa0] text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2 shadow-md"
          >
            <span>Get Started</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </header>
  );
};
