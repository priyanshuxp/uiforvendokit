import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { ArcCarousel } from './components/ArcCarousel';
import { ModuleDetailModal } from './components/ModuleDetailModal';
import { RequestDemoModal } from './components/RequestDemoModal';
import { ContactUsModal } from './components/ContactUsModal';
import { modulesData } from './data/modulesData';
import { ModuleItem } from './types';

export default function App() {
  const [activeBackgroundColor, setActiveBackgroundColor] = useState<string>(modulesData[0].color);
  const [selectedModule, setSelectedModule] = useState<ModuleItem | null>(null);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState<boolean>(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-between relative text-[#0b1c30] transition-colors duration-700 overflow-x-hidden selection:bg-[#0058be]/15 selection:text-[#0058be]"
      id="main-body"
    >
      {/* Dynamic Background Transition Layer */}
      <div
        id="bg-transition-layer"
        className="fixed inset-0 pointer-events-none z-[-1] opacity-65 transition-colors duration-700"
        style={{
          backgroundColor: activeBackgroundColor,
        }}
      />

      {/* Subtle Top Gradient Layer */}
      <div className="fixed inset-0 pointer-events-none z-[-2] bg-gradient-to-b from-white via-white/85 to-transparent opacity-90 h-[500px]" />

      {/* Main Single-View Layout (Hero + Responsive Arc Carousel) */}
      <main className="flex-grow flex flex-col items-center justify-center w-full relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-8 sm:pb-12">
        {/* Hero Section with Shopify Alternative Content and 2 CTA Buttons */}
        <HeroSection
          onRequestDemo={() => setIsDemoModalOpen(true)}
          onContactUs={() => setIsContactModalOpen(true)}
        />

        {/* Arc Carousel with 5 cards displayed on mobile */}
        <ArcCarousel
          modules={modulesData}
          onSelectModule={(module) => setSelectedModule(module)}
          onActiveColorChange={(color) => setActiveBackgroundColor(color)}
        />
      </main>

      {/* Request Demo Interactive Modal */}
      <RequestDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      {/* Contact Us Interactive Modal */}
      <ContactUsModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      {/* Detailed Module Modal (deep dive on any clicked card) */}
      <ModuleDetailModal
        module={selectedModule}
        allModules={modulesData}
        onClose={() => setSelectedModule(null)}
        onSelectModule={(m) => setSelectedModule(m)}
        onOpenGetStarted={() => {
          setSelectedModule(null);
          setIsDemoModalOpen(true);
        }}
      />
    </div>
  );
}
