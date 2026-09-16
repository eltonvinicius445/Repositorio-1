import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface GuaranteeSectionProps {
  onCtaClick: () => void;
}

export const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({ onCtaClick }) => {
  return (
    <section id="garantia" className="py-14 md:py-20 px-4 sm:px-6 bg-[#FAF7F9] border-t border-pink-100">
      <div className="max-w-3xl mx-auto text-center">
        {/* Seal Image */}
        <div className="mb-6 flex justify-center">
          <img
            src="/garantia-7-dias.png"
            alt="Sello Garantía Incondicional 7 Días"
            className="w-36 sm:w-44 h-auto object-contain drop-shadow-md hover:scale-105 transition-transform"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1a1a1a] tracking-tight mb-4 uppercase">
          GARANTÍA TOTAL DE 7 DÍAS
        </h2>

        {/* Text */}
        <p className="text-base sm:text-lg text-[#4a4a4a] leading-relaxed max-w-2xl mx-auto mb-8">
          Si accedes a la plataforma y sientes que este material no es para ti, simplemente solicitas tu reembolso dentro de los 7 días. Te devolvemos el 100% de tu dinero sin preguntas complicadas ni burocracia.
        </p>

        {/* CTA Button */}
        <div>
          <button
            id="guarantee-cta-button"
            type="button"
            onClick={onCtaClick}
            className="w-full sm:w-auto min-w-[280px] sm:min-w-[340px] px-8 py-4 bg-gradient-to-r from-[#C2185B] via-[#E91E8C] to-[#C2185B] text-white text-base sm:text-lg font-extrabold uppercase tracking-wider rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer border-b-4 border-[#880E4F] flex items-center justify-center gap-2 mx-auto"
          >
            <ShieldCheck className="w-5 h-5" />
            <span>COMPRAR SIN RIESGO</span>
          </button>
        </div>
      </div>
    </section>
  );
};
