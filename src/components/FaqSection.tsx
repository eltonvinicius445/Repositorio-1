import React, { useState } from 'react';
import { FAQS } from '../data';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIdx(prev => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-14 md:py-20 px-4 sm:px-6 bg-white border-t border-pink-100">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FCE4EC] text-[#c2185b] px-4 py-1.5 rounded-full font-bold text-xs uppercase mb-3 border border-[#F8BBD0]">
            <HelpCircle className="w-4 h-4" />
            <span>Resuelve tus Dudas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1a1a1a] tracking-tight">
            Preguntas Frecuentes
          </h2>
          <div className="w-16 h-1 bg-[#e91e8c] mx-auto mt-3 rounded-full" />
        </div>

        {/* Accordion Items */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#FAF7F9] rounded-2xl border border-pink-100 overflow-hidden transition-colors shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 font-bold text-sm sm:text-base text-[#1a1a1a] hover:text-[#e91e8c] transition-colors cursor-pointer"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0 text-[#e91e8c] shadow-xs transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#e91e8c] text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#555] leading-relaxed border-t border-pink-50 pt-3">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
