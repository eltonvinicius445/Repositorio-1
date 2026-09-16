import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-[#111111] text-[#999] py-12 px-4 sm:px-6 border-t border-white/10 text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Security badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400 font-medium">
          <div className="flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-emerald-400" />
            <span>Ambiente 100% Encriptado y Seguro</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Privacidad y Datos Protegidos</span>
          </div>
        </div>

        {/* Legal notice */}
        <p className="text-xs leading-relaxed text-[#777] max-w-2xl mx-auto">
          Copyright © 2026 | Fábrica de Topos. Todos los derechos reservados.
        </p>

        <p className="text-[11px] text-[#555]">
          Este sitio web no está afiliado a Facebook ni a ninguna entidad de Meta Inc. Una vez que sales de Facebook, la responsabilidad no es de ellos sino de nuestro sitio.
        </p>
      </div>
    </footer>
  );
};
