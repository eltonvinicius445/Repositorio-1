import React from 'react';
import { X, Check, Flame, ShieldCheck } from 'lucide-react';
import { CHECKOUT_URLS } from '../data';

interface DownsellModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownsellModal: React.FC<DownsellModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const features = [
    '+1000 Moldes Profesionales Listos para Vender (¡10x más que el básico!)',
    'Área de Miembros Exclusiva y Soporte Vitalicio',
    'Moldes Limpios Editables para Crear Cualquier Tema',
    '🎁 BONO: Topos de Torta Premium 3D',
    '🎁 BONO: Moldes Limpios Editables',
    '🎁 BONO: Diseños Para Tubetes y Dulceros',
    '🎁 BONO: Capacillos y Bases de Postres',
    '🎁 BONO: Bolsitas Temáticas de Fiesta',
    '🎁 +4 BONOS EXTRA SORPRESA',
    'Garantía Total de 7 Días + Acceso Vitalicio'
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-3 sm:p-4 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-amber-400 my-auto text-center"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Warning / Urgency Pill */}
        <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-4 py-1 rounded-full text-xs sm:text-sm font-black uppercase mb-3 border border-amber-300">
          <span>🚨</span>
          <span>¡Espera! Oferta Especial de Upgrade</span>
          <Flame className="w-4 h-4 text-amber-600 fill-amber-500 inline" />
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-black text-[#1a1a1a] mb-2 leading-snug">
          ¡Por solo <span className="text-[#e91e8c]">US$ 2 más</span>, llévate el <span className="text-[#C2185B]">PLAN COMPLETO</span>!
        </h3>
        <p className="text-xs sm:text-sm text-[#666] mb-4">
          Aprovecha esta oportunidad exclusiva antes de ir al pago:
        </p>

        {/* Price Box */}
        <div className="bg-pink-50/70 rounded-2xl p-4 border border-pink-200 mb-5">
          <div className="text-xs font-semibold text-gray-400 line-through">
            De US$ 10,00
          </div>
          <div className="text-3xl sm:text-4xl font-black text-[#C2185B]">
            US$ 7<span className="text-xl">,00</span>
          </div>
          <div className="text-xs text-emerald-600 font-bold mt-1">
            ⚡ Pagas solo US$ 2 más que el básico • Ahorras US$ 20 frente al precio regular
          </div>
        </div>

        {/* Features List */}
        <div className="text-left bg-gray-50 p-4 rounded-xl border border-gray-200 mb-6 max-h-48 overflow-y-auto">
          <ul className="space-y-2 text-xs text-gray-700 font-medium">
            {features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#e91e8c] flex-shrink-0 mt-0.5 stroke-[3]" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Primary CTA: Accept Upgrade */}
        <a
          id="modal-discount-cta"
          href={CHECKOUT_URLS.downsell}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-4 px-6 bg-gradient-to-r from-[#C2185B] via-[#E91E8C] to-[#C2185B] text-white text-base sm:text-lg font-black uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all border-b-4 border-[#880E4F] mb-3 text-center"
        >
          SÍ, QUIERO HACER EL UPGRADE
        </a>

        {/* Secondary link: Keep basic */}
        <a
          id="modal-basic-continue"
          href={CHECKOUT_URLS.basic}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs sm:text-sm text-gray-500 hover:text-gray-800 underline decoration-gray-400 hover:decoration-gray-700 transition-colors py-1"
        >
          No gracias, prefiero continuar con el Plan Básico por US$ 5
        </a>

        {/* Security badges */}
        <div className="flex items-center justify-center gap-2 mt-4 pt-4 border-t border-gray-100 text-[11px] text-gray-400 font-semibold">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Compra 100% Segura • Garantía de 7 Días</span>
        </div>
      </div>
    </div>
  );
};
