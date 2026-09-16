import React from 'react';
import { Gift, Sparkles } from 'lucide-react';
import { BONUS_ITEMS } from '../data';

export const BonusSection: React.FC = () => {
  return (
    <section id="bonus" className="py-14 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1a1a1a] mb-2 tracking-tight">
            Y ESO NO ES TODO… <span className="text-[#e91e8c]">¡HAY MÁS!</span>
          </p>
          <p className="text-base sm:text-lg text-[#555] font-medium mb-3">
            También vas a recibir…
          </p>
          <div className="inline-flex items-center gap-2 bg-[#FCE4EC] text-[#c2185b] px-4 py-1.5 rounded-full font-bold text-sm sm:text-base border border-[#F8BBD0]">
            <Gift className="w-4 h-4 text-[#e91e8c]" />
            <span>🎁 8 Bonos Exclusivos Incluidos</span>
          </div>

          {/* Bonus Banner Mockup */}
          <div className="mt-8 max-w-2xl mx-auto">
            <img
              src="/toppers-pastel-personalizados.png"
              alt="Bonos Exclusivos Fábrica de Topos - Toppers de Pastel Personalizados"
              className="w-full h-auto object-contain rounded-xl drop-shadow-md"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Bonus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {BONUS_ITEMS.map((bonus) => (
            <div
              key={bonus.id}
              className="bg-[#FAF7F9] rounded-2xl border border-pink-100 p-6 flex flex-col sm:flex-row gap-5 items-center shadow-xs hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="w-32 sm:w-36 h-32 sm:h-36 flex-shrink-0 bg-white rounded-xl p-2 border border-pink-100 shadow-xs flex items-center justify-center overflow-hidden">
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  className="w-full h-full object-contain hover:scale-105 transition-transform"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Text */}
              <div className="flex-1 text-center sm:text-left">
                <span className="inline-block text-[11px] font-bold text-[#c2185b] bg-[#FCE4EC] px-2.5 py-0.5 rounded-full mb-1.5 border border-pink-200">
                  {bonus.tag}
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-[#1a1a1a] mb-1.5 leading-snug">
                  {bonus.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555] leading-relaxed mb-3">
                  {bonus.description}
                </p>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold">
                  <span className="text-gray-400 line-through">De {bonus.originalPrice}</span>
                  <span className="text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">
                    GRATIS HOY 🎁
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="text-center p-6 bg-gradient-to-r from-pink-50 via-[#FCE4EC] to-pink-50 rounded-2xl border border-pink-200 shadow-xs">
          <p className="text-lg sm:text-xl font-extrabold text-[#1a1a1a] flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-[#e91e8c]" />
            <span>...¡Y MUCHO MÁS EN EL COMBO COMPLETO!</span>
          </p>
        </div>
      </div>
    </section>
  );
};
