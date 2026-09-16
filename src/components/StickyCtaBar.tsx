import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';

interface StickyCtaBarProps {
  onCtaClick: () => void;
}

export const StickyCtaBar: React.FC<StickyCtaBarProps> = ({ onCtaClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 500px and not at the very bottom
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Barra fixa de oferta rápida"
      className="fixed bottom-0 left-0 right-0 z-40 p-3 sm:p-4 bg-white/95 backdrop-blur-md border-t border-pink-200 shadow-2xl transition-transform duration-300 transform translate-y-0"
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <div className="hidden sm:flex w-10 h-10 rounded-full bg-[#FCE4EC] items-center justify-center text-[#e91e8c]">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs sm:text-sm font-extrabold text-[#1a1a1a]">
              Fábrica de Topos de Cumpleaños
            </p>
            <p className="text-[11px] sm:text-xs text-[#e91e8c] font-bold">
              Oferta con 8 Bonos Exclusivos desde US$ 5
            </p>
          </div>
        </div>

        <button
          id="sticky-bar-cta"
          type="button"
          onClick={onCtaClick}
          className="w-full sm:w-auto px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#C2185B] to-[#E91E8C] text-white text-xs sm:text-sm font-black uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
        >
          <span>QUIERO MIS MOLDES</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};
