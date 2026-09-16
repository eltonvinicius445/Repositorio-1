import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export const HeaderBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { minutes: 15, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header id="header-top-banner" className="bg-[#1a1a1a] text-white py-2.5 px-4 sticky top-0 z-50 shadow-md border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 text-center text-xs sm:text-sm md:text-base font-bold tracking-wide uppercase">
        <span className="inline-flex items-center justify-center text-lg animate-bounce">
          ⏰
        </span>
        <span className="text-white">¡OFERTA VÁLIDA SOLO POR HOY — ACCESO INMEDIATO!</span>
        <div className="hidden sm:inline-flex items-center gap-1.5 ml-2 bg-[#e91e8c] text-white px-2.5 py-0.5 rounded-full text-xs font-semibold shadow-inner">
          <Clock className="w-3.5 h-3.5" />
          <span>
            {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
          </span>
        </div>
      </div>
    </header>
  );
};
