import React, { useState, useEffect } from 'react';
import { KIT_CAROUSEL_IMAGES } from '../data';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';

export const KitCarouselSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const total = KIT_CAROUSEL_IMAGES.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  return (
    <section id="kits-carousel" className="py-12 md:py-16 bg-[#FCE4EC]/50 border-y border-[#F8BBD0]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#1a1a1a] uppercase tracking-wide">
            Mira algunos modelos que vas a armar en minutos
          </h2>
          <div className="w-16 h-1 bg-[#e91e8c] mx-auto mt-3 rounded-full" />
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Main Visual Display */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {/* Show a window of 4 items based on currentIndex */}
            {[0, 1, 2, 3].map((offset) => {
              const item = KIT_CAROUSEL_IMAGES[(currentIndex + offset) % total];
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedImage(item.src)}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-pink-100 transition-all duration-300 hover:-translate-y-1 cursor-pointer aspect-square"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/90 text-[#e91e8c] p-2 rounded-full shadow-md">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6">
            <button
              id="carousel-prev"
              type="button"
              onClick={prevSlide}
              aria-label="Modelo anterior"
              className="p-2.5 rounded-full bg-white text-[#c2185b] shadow-md hover:bg-[#e91e8c] hover:text-white transition-all cursor-pointer border border-pink-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Indicator Dots */}
            <div className="flex items-center gap-1.5 overflow-x-auto py-2">
              {KIT_CAROUSEL_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Ir al modelo ${idx + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx
                      ? 'w-6 bg-[#e91e8c]'
                      : 'w-2 bg-pink-200 hover:bg-pink-300'
                  }`}
                />
              ))}
            </div>

            <button
              id="carousel-next"
              type="button"
              onClick={nextSlide}
              aria-label="Siguiente modelo"
              className="p-2.5 rounded-full bg-white text-[#c2185b] shadow-md hover:bg-[#e91e8c] hover:text-white transition-all cursor-pointer border border-pink-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-xs"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-xl max-h-[85vh] bg-white rounded-2xl p-2 shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedImage}
              alt="Modelo ampliado"
              className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
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
