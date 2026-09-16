import React, { useState, useRef } from 'react';
import { Check, Sparkles, Play, Pause, Volume2, VolumeX, Image as ImageIcon, RotateCcw } from 'lucide-react';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  const [activeMedia, setActiveMedia] = useState<'video' | 'mockup'>('video');
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const features = [
    { label: 'Corte con tijera o plotter', icon: '✂️' },
    { label: 'Archivos 100% listos para imprimir', icon: '📄' },
    { label: 'De cero a tus primeras ventas', icon: '🚀' },
    { label: 'Desde el celular o computador', icon: '📱' },
    { label: 'Acceso Inmediato y Vitalicio', icon: '♾️' },
    { label: 'Soporte personalizado por WhatsApp', icon: '💬' },
    { label: '+8 Bonos Exclusivos Incluidos', icon: '🎁', highlight: true },
  ];

  return (
    <section id="hero" className="relative pt-6 pb-12 md:pt-10 md:pb-16 px-4 sm:px-6 bg-gradient-to-b from-[#FFF5F8] via-[#FFFFFF] to-[#FAF7F9]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1a1a1a] tracking-tight leading-[1.18] mb-4">
          Crea Topos de Torta Profesionales en{' '}
          <span className="text-[#e91e8c]">Menos de 5 Minutos</span> con el Método 3 Toques
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-[#4a4a4a] max-w-2xl mx-auto font-normal leading-relaxed mb-6">
          Sin programas difíciles. Sin diseñar desde cero. El sistema paso a paso para que cualquier mujer en Colombia gane dinero desde su casa con papelería para fiestas.
        </p>

        {/* Media Selector Tabs (Video / Mockup) */}
        <div className="inline-flex items-center bg-[#fce4ec] p-1 rounded-full text-xs font-semibold mb-4 text-[#c2185b] border border-[#f8bbd0]">
          <button
            id="tab-video"
            type="button"
            onClick={() => setActiveMedia('video')}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full transition-all cursor-pointer ${
              activeMedia === 'video'
                ? 'bg-[#e91e8c] text-white shadow-sm'
                : 'text-[#880e4f] hover:text-[#e91e8c]'
            }`}
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Vídeo Demostrativo</span>
          </button>
          <button
            id="tab-mockup"
            type="button"
            onClick={() => setActiveMedia('mockup')}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full transition-all cursor-pointer ${
              activeMedia === 'mockup'
                ? 'bg-[#e91e8c] text-white shadow-sm'
                : 'text-[#880e4f] hover:text-[#e91e8c]'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Ver Mockup Completo</span>
          </button>
        </div>

        {/* Responsive Video / Mockup Container: 
            Adjusted proportionally to max-w-[760px] (700-800px on desktop)
            16:9 aspect ratio, 100% on mobile, centered with generous padding/margin */}
        <div className="w-full max-w-[760px] mx-auto my-4 md:my-6">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white bg-black ring-1 ring-black/10">
            {activeMedia === 'video' ? (
              <div className="relative w-full h-full bg-black group">
                <video
                  ref={videoRef}
                  id="hero-main-video"
                  src="https://res.cloudinary.com/ivx3d6kf/video/upload/v1789086444/videoplayback.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  preload="auto"
                  onClick={togglePlay}
                >
                  <source src="https://res.cloudinary.com/ivx3d6kf/video/upload/v1789086444/videoplayback.mp4" type="video/mp4" />
                  Tu navegador no soporta reproducción de video HTML5.
                </video>

                {/* Sound Toggle Floating Button */}
                <button
                  type="button"
                  onClick={toggleMute}
                  className="absolute top-3 right-3 z-20 px-3 py-1.5 bg-black/70 hover:bg-black/90 text-white rounded-full text-xs font-bold flex items-center gap-1.5 backdrop-blur-xs transition-all shadow-md cursor-pointer border border-white/20"
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="w-4 h-4 text-pink-400" />
                      <span>Activar Sonido</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4 text-emerald-400" />
                      <span>Silenciar</span>
                    </>
                  )}
                </button>

                {/* Bottom Overlay Controls */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 flex items-center justify-between text-white text-xs opacity-90 transition-opacity">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={togglePlay}
                      className="p-1.5 rounded-full bg-white/20 hover:bg-white/40 transition-colors cursor-pointer"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                    </button>
                    <span className="font-semibold tracking-wide text-xs">
                      Fábrica de Topos • Catálogo en Video
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] bg-pink-600/80 px-2 py-0.5 rounded text-white font-bold">
                      100% HD
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-pink-50 to-white flex items-center justify-center p-2">
                <img
                  id="hero-mockup-cover"
                  src="https://caminhovivamelhor.com.br/wp-content/uploads/2026/08/kt-mockups-capa.webp"
                  alt="Kits de Fiesta Listos para Armar y Vender"
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
          </div>
          <p className="text-xs text-[#757575] mt-2 font-medium">
            {activeMedia === 'video'
              ? '▶️ Mira cómo es de fácil imprimir, armar y vender tus primeros topos de torta'
              : '📦 Más de 1000 archivos temáticos organizados y listos para cortar'}
          </p>
        </div>

        {/* Feature List */}
        <div className="max-w-xl mx-auto my-6 text-left">
          <ul className="space-y-2.5 sm:space-y-3">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 text-sm sm:text-base font-semibold text-[#2c2c2c] bg-white/80 backdrop-blur-xs p-2.5 sm:p-3 rounded-xl border border-[#fce4ec] shadow-xs"
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#fce4ec] text-[#e91e8c] flex items-center justify-center font-bold">
                  <Check className="w-4 h-4 stroke-[3]" />
                </span>
                <span className={item.highlight ? 'text-[#e91e8c] font-bold flex items-center gap-1.5' : ''}>
                  {item.label}
                  {item.highlight && <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400 inline" />}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Primary CTA Button */}
        <div className="mt-8 mb-6">
          <button
            id="hero-cta-button"
            type="button"
            onClick={onCtaClick}
            className="w-full sm:w-auto min-w-[300px] sm:min-w-[360px] px-8 py-4 sm:py-5 bg-gradient-to-r from-[#C2185B] via-[#E91E8C] to-[#C2185B] text-white text-lg sm:text-xl font-extrabold uppercase tracking-wider rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer border-b-4 border-[#880E4F]"
          >
            QUIERO MI FÁBRICA DE TOPOS
          </button>
        </div>

        {/* Instant delivery guarantee bar */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-medium text-[#4a4a4a] bg-white px-4 py-2.5 rounded-full border border-gray-200 shadow-xs">
          <span className="flex items-center gap-1.5 font-semibold text-[#1a1a1a]">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
              alt="WhatsApp"
              className="w-4 h-4 object-contain"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            WhatsApp
          </span>
          <span className="text-gray-300">•</span>
          <span className="flex items-center gap-1.5 font-semibold text-[#1a1a1a]">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
              alt="Email"
              className="w-4 h-4 object-contain"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            Correo Electrónico
          </span>
          <span className="text-gray-300">•</span>
          <span>Recibes todo de inmediato en tu WhatsApp y en tu correo electrónico</span>
        </div>
      </div>
    </section>
  );
};
