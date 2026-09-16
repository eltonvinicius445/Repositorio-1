import React from 'react';
import { Check, Sparkles } from 'lucide-react';

export const WhatYouGetSection: React.FC = () => {
  const categories = [
    'Infantil',
    'Fechas Especiales',
    'Equipos de Fútbol',
    'Cumpleaños',
    'Personajes Famosos',
    'Masculino y Femenino',
    'Y mucho más...',
  ];

  return (
    <section id="o-que-voce-ira-receber" className="py-14 md:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header Badges */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#FCE4EC] border border-[#E91E8C] text-[#c2185b] font-bold text-xs uppercase px-4 py-1 rounded-full mb-3 shadow-xs">
            ACCESO INMEDIATO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1a1a1a] tracking-tight uppercase">
            LO QUE VAS A RECIBIR
          </h2>
          <div className="w-16 h-1 bg-[#e91e8c] mx-auto mt-3 rounded-full" />
        </div>

        {/* Item 01 Card */}
        <div className="bg-[#FAF7F9] rounded-2xl border border-pink-100 p-6 sm:p-8 md:p-10 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Text & Categories */}
            <div className="flex-1 order-2 md:order-1 text-center md:text-left">
              <span className="inline-block text-xs font-bold text-white bg-[#C2185B] px-3 py-1 rounded-full mb-3">
                ITEM 01
              </span>
              <p className="text-xs sm:text-sm font-extrabold text-[#e91e8c] uppercase tracking-wider mb-1">
                BIBLIOTECA TEMÁTICA COMPLETA
              </p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#1a1a1a] mb-4 leading-snug">
                Encuentra el tema que buscas en <span className="text-[#e91e8c]">SEGUNDOS</span>
              </h3>
              <p className="text-[#4a4a4a] text-sm sm:text-base leading-relaxed mb-6">
                Tendrás acceso a nuestra biblioteca organizada por temas y personajes. Solo buscas el tema, descargas con un clic y ya está todo listo para imprimir, cortar y entregar los topos de torta más pedidos del mercado.
              </p>

              {/* Tags Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs sm:text-sm font-semibold text-[#2c2c2c]">
                {categories.map((cat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-1.5 bg-white border border-pink-100 px-3 py-2 rounded-lg shadow-xs"
                  >
                    <Check className="w-4 h-4 text-[#e91e8c] flex-shrink-0 stroke-[3]" />
                    <span className="truncate">{cat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mockup Image */}
            <div className="w-full md:w-[45%] order-1 md:order-2 flex justify-center">
              <img
                src="https://caminhovivamelhor.com.br/wp-content/uploads/2026/08/png-mockup-material-kitfestas-apagar.webp"
                alt="Biblioteca Temática Completa Fábrica de Topos"
                className="w-full max-w-[380px] h-auto object-contain drop-shadow-lg"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Item 02 Card */}
        <div className="bg-[#FAF7F9] rounded-2xl border border-pink-100 p-6 sm:p-8 md:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Mockup Image */}
            <div className="w-full md:w-[45%] flex justify-center">
              <img
                src="https://caminhovivamelhor.com.br/wp-content/uploads/2026/08/APAGAR-CU.webp"
                alt="Kits Complementarios Decorativos"
                className="w-full max-w-[380px] h-auto object-contain drop-shadow-lg"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block text-xs font-bold text-white bg-[#C2185B] px-3 py-1 rounded-full mb-3">
                ITEM 02
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#1a1a1a] mb-4 flex items-center justify-center md:justify-start gap-2">
                <span>🎁 KITS COMPLEMENTARIOS 🎁</span>
              </h3>
              <p className="text-[#4a4a4a] text-sm sm:text-base leading-relaxed mb-6">
                Ten acceso también a todos los moldes necesarios para una fiesta completa que <strong className="text-[#e91e8c]">encanta en los mínimos detalles</strong> (tubetes, dulceros y cajitas).
              </p>
              <div className="inline-flex items-center gap-2 bg-[#FCE4EC] text-[#c2185b] px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-[#F8BBD0]">
                <Sparkles className="w-4 h-4 text-[#e91e8c]" />
                <span>Formatos probados para corte rápido sin desperdicio de papel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
