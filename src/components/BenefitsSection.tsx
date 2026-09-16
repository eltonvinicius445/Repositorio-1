import React from 'react';
import { Clock, Target, CheckCircle2, DollarSign, ShoppingCart } from 'lucide-react';

interface BenefitsSectionProps {
  onCtaClick: () => void;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ onCtaClick }) => {
  const pillars = [
    {
      title: 'Más Tiempo Libre',
      desc: 'Pasa más tiempo con tu familia mientras tus pedidos se resuelven en solo minutos.',
      icon: Clock,
      color: 'bg-rose-50 text-[#e91e8c] border-pink-200'
    },
    {
      title: 'Comienza Sin Experiencia',
      desc: 'Diseñado paso a paso para que cualquier persona cree piezas profesionales desde el primer día.',
      icon: Target,
      color: 'bg-pink-50 text-[#c2185b] border-pink-200'
    },
    {
      title: 'Arma en Menos de 5 Minutos',
      desc: 'Corta con tijeras o máquina y entrega pedidos hermosos sin estrés.',
      icon: CheckCircle2,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200'
    },
    {
      title: 'Venta Rápida y Fácil',
      desc: 'Alta demanda en Colombia por mamás, pasteleras y decoradoras locales.',
      icon: DollarSign,
      color: 'bg-green-50 text-green-600 border-green-200'
    },
    {
      title: 'Independencia Total',
      desc: 'Genera tus propios ingresos trabajando desde tu casa con tus propios horarios.',
      icon: ShoppingCart,
      color: 'bg-purple-50 text-[#e91e8c] border-purple-200'
    }
  ];

  return (
    <section id="beneficios" className="py-14 md:py-20 px-4 sm:px-6 bg-[#FAF7F9] border-t border-pink-100">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1a1a1a] max-w-3xl mx-auto leading-tight mb-12">
          Recibirás un material único{' '}
          <span className="underline decoration-[#e91e8c] decoration-wavy decoration-2">
            totalmente práctico y organizado
          </span>{' '}
          para facilitar tu producción y ventas
        </h2>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-pink-100/80 shadow-xs hover:shadow-md transition-shadow flex flex-col items-center text-center group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 border ${item.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#1a1a1a] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div>
          <button
            id="benefits-cta-button"
            type="button"
            onClick={onCtaClick}
            className="w-full sm:w-auto min-w-[280px] sm:min-w-[340px] px-8 py-4 bg-gradient-to-r from-[#C2185B] via-[#E91E8C] to-[#C2185B] text-white text-base sm:text-lg font-extrabold uppercase tracking-wider rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer border-b-4 border-[#880E4F]"
          >
            QUIERO ACCESO INMEDIATO AHORA
          </button>
        </div>
      </div>
    </section>
  );
};
