import React, { useState } from 'react';
import { Check, X, Trophy, Zap, Gift, ShieldCheck } from 'lucide-react';
import { CHECKOUT_URLS } from '../data';
import { DownsellModal } from './DownsellModal';

export const PricingSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="ofertas" className="py-16 md:py-24 px-4 sm:px-6 bg-[#FAF7F9] scroll-mt-14">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1a1a1a] uppercase tracking-wide">
            ¡Elige el Mejor Plan Para Ti!
          </h2>
          <div className="w-16 h-1 bg-[#e91e8c] mx-auto mt-3 rounded-full" />
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Plano Básico */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="mb-4">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider bg-gray-100 px-3 py-1 rounded-full">
                  Plan Inicial
                </span>
                <h3 className="text-2xl font-black text-[#1a1a1a] mt-2">
                  Plan Básico
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Ideal para probar los primeros modelos esenciales
                </p>
              </div>

              {/* Mockup Preview in Basic Plan (as requested) */}
              <div className="my-3 max-w-[240px] mx-auto">
                <img
                  src="https://caminhovivamelhor.com.br/wp-content/uploads/2026/08/kt-mockups-capa.webp"
                  alt="Mockup Plan Básico"
                  className="w-full h-auto object-contain drop-shadow-md"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Price */}
              <div className="my-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                <div className="text-xs font-semibold text-gray-400 line-through">
                  De US$ 37,00
                </div>
                <div className="text-3xl sm:text-4xl font-black text-[#1a1a1a]">
                  US$ 5<span className="text-xl">,00</span>
                </div>
                <div className="text-xs text-gray-500 font-medium mt-1">
                  Acceso inmediato
                </div>
              </div>

              {/* Feature List */}
              <ul className="space-y-3 text-sm text-gray-700 mb-8">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[3]" />
                  <span>100 Moldes Básicos Listos para Imprimir y Vender</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[3]" />
                  <span>Acceso inmediato a los archivos</span>
                </li>
                <li className="flex items-start gap-2.5 text-gray-400">
                  <X className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span className="line-through">Sin bonos exclusivos incluidos</span>
                </li>
                <li className="flex items-start gap-2.5 text-gray-400">
                  <X className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                  <span className="line-through">Sin Área de Miembros VIP</span>
                </li>
              </ul>
            </div>

            {/* Basic CTA triggers upgrade popup */}
            <button
              id="btn-plano-basico"
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full py-4 px-6 bg-gray-100 hover:bg-gray-200 text-gray-800 font-extrabold text-sm sm:text-base uppercase tracking-wider rounded-xl transition-all cursor-pointer border border-gray-300 text-center"
            >
              QUIERO SOLO EL BÁSICO
            </button>
          </div>

          {/* Plano Completo (Featured) */}
          <div className="lg:col-span-7 relative bg-white rounded-3xl p-6 sm:p-8 md:p-10 border-3 border-[#E91E8C] shadow-2xl ring-4 ring-pink-100">
            {/* Best seller floating tag */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs sm:text-sm font-black uppercase px-4 py-1 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
              <Trophy className="w-4 h-4 text-amber-200" />
              <span>🏆 Más elegido</span>
            </div>

            <div className="text-center pt-2 mb-6">
              <span className="inline-block text-xs font-bold text-[#c2185b] bg-[#FCE4EC] px-3 py-1 rounded-full mb-2">
                +5.489 personas eligieron esta oferta
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1a1a1a] tracking-tight">
                PLAN COMPLETO
              </h3>

              {/* Highlight Badges */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-3">
                <span className="inline-flex items-center gap-1 bg-[#FCE4EC] text-[#c2185b] text-xs font-bold px-3 py-1 rounded-full border border-pink-200">
                  <Gift className="w-3.5 h-3.5" />
                  <span>TODOS LOS BONOS INCLUIDOS</span>
                </span>
                <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full border border-amber-300">
                  <Zap className="w-3.5 h-3.5 fill-amber-500 text-amber-600" />
                  <span>3x MÁS CONTENIDO</span>
                </span>
              </div>
            </div>

            {/* Mockup Preview */}
            <div className="my-4 max-w-sm mx-auto">
              <img
                src="https://caminhovivamelhor.com.br/wp-content/uploads/2026/08/kt-mockups-capa.webp"
                alt="Plan Completo Fábrica de Topos"
                className="w-full h-auto object-contain drop-shadow-md"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Price Highlight */}
            <div className="my-6 p-5 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-50 rounded-2xl border-2 border-pink-200 text-center">
              <div className="text-sm font-bold text-gray-400 line-through">
                De US$ 113,00
              </div>
              <div className="text-4xl sm:text-5xl font-black text-[#C2185B] my-1">
                US$ 10<span className="text-2xl">,00</span>
              </div>
              <div className="inline-block bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-extrabold px-3 py-1 rounded-full border border-emerald-300">
                🎉 ¡Ahorras US$ 103,00 hoy!
              </div>
            </div>

            {/* Features list */}
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#2c2c2c] font-medium mb-8">
              <li className="flex items-start gap-2 font-bold text-[#1a1a1a]">
                <Check className="w-4 h-4 text-[#e91e8c] flex-shrink-0 mt-0.5 stroke-[3]" />
                <span>+1000 Moldes Profesionales Listos para Vender (topos, pirámides, cajitas, tubetes...)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#e91e8c] flex-shrink-0 mt-0.5 stroke-[3]" />
                <span>Área de Miembros Exclusiva y Soporte</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#e91e8c] flex-shrink-0 mt-0.5 stroke-[3]" />
                <span>Moldes Limpios Editables</span>
              </li>
              <li className="flex items-start gap-2 text-[#c2185b] font-semibold">
                <Gift className="w-4 h-4 text-[#e91e8c] flex-shrink-0 mt-0.5" />
                <span>🎁 BONO: Topos de Torta Premium 3D</span>
              </li>
              <li className="flex items-start gap-2 text-[#c2185b] font-semibold">
                <Gift className="w-4 h-4 text-[#e91e8c] flex-shrink-0 mt-0.5" />
                <span>🎁 BONO: Moldes Limpios Editables</span>
              </li>
              <li className="flex items-start gap-2 text-[#c2185b] font-semibold">
                <Gift className="w-4 h-4 text-[#e91e8c] flex-shrink-0 mt-0.5" />
                <span>🎁 BONO: Diseños Para Tubetes y Dulceros</span>
              </li>
              <li className="flex items-start gap-2 text-[#c2185b] font-semibold">
                <Gift className="w-4 h-4 text-[#e91e8c] flex-shrink-0 mt-0.5" />
                <span>🎁 BONO: Capacillos y Bases de Postres</span>
              </li>
              <li className="flex items-start gap-2 text-[#c2185b] font-semibold">
                <Gift className="w-4 h-4 text-[#e91e8c] flex-shrink-0 mt-0.5" />
                <span>🎁 BONO: Bolsitas Temáticas de Fiesta</span>
              </li>
              <li className="flex items-start gap-2 text-emerald-700 font-bold">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[3]" />
                <span>+4 BONOS EXTRA SORPRESA 🎁</span>
              </li>
              <li className="flex items-start gap-2 text-emerald-700 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5 stroke-[3]" />
                <span>Garantía de 7 Días + Acceso Vitalicio</span>
              </li>
            </ul>

            {/* Complete Plan CTA button */}
            <a
              id="btn-plano-completo"
              href={CHECKOUT_URLS.complete}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-5 px-8 bg-gradient-to-r from-[#C2185B] via-[#E91E8C] to-[#C2185B] text-white text-lg sm:text-xl font-black uppercase tracking-wider rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all text-center border-b-4 border-[#880E4F]"
            >
              QUIERO EL PLAN COMPLETO
            </a>

            {/* Payment security badges */}
            <div className="mt-5 text-center">
              <img
                src="https://caminhovivamelhor.com.br/wp-content/uploads/2025/07/png-de-pagamento-2.png"
                alt="Formas de Pago Seguras"
                className="max-w-[260px] sm:max-w-[300px] h-auto mx-auto object-contain"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <p className="text-xs text-[#e91e8c] font-black uppercase mt-3 tracking-wide">
                ¡APROVECHA AHORA: Esta promoción es por tiempo LIMITADO!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Upgrade / Downsell Modal */}
      <DownsellModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
