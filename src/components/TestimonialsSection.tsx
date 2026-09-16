import React, { useState } from 'react';
import { TESTIMONIALS } from '../data';
import { Heart, Maximize2, X, Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="depoimentos" className="py-14 md:py-20 px-4 sm:px-6 bg-white border-t border-pink-100">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-1 text-amber-400 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1a1a1a] tracking-tight">
            Lo que dicen nuestras clientas
          </h2>
          <p className="text-sm sm:text-base font-bold text-[#c2185b] mt-2 flex items-center justify-center gap-1.5">
            <Heart className="w-4 h-4 fill-current text-[#e91e8c]" />
            <span>Más de 6.195 mujeres ya lo han adquirido</span>
          </p>
          <div className="w-16 h-1 bg-[#e91e8c] mx-auto mt-3 rounded-full" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item.image)}
              className="group relative bg-[#FAF7F9] rounded-2xl overflow-hidden border border-pink-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
            >
              <div className="aspect-[9/16] sm:aspect-[3/4] w-full overflow-hidden bg-gray-50 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-3 bg-white border-t border-pink-100 flex items-center justify-between text-xs font-semibold text-[#666]">
                <span>Testimonio Real</span>
                <span className="text-[#e91e8c] flex items-center gap-1">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Ampliar</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox for customer review */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-xs"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-md max-h-[90vh] bg-white rounded-2xl p-2 shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/70 hover:bg-black text-white rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={activeImage}
              alt="Testimonio ampliado"
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}
    </section>
  );
};
