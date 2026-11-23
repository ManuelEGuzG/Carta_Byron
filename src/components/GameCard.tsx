import { motion } from 'framer-motion';
import { Maximize2, Trophy } from 'lucide-react';
import type { GameClip } from './GamingSection';

interface GameCardProps {
  clip: GameClip;
  index: number;
  onSelect: (clip: GameClip) => void;
}

export default function GameCard({ clip, index, onSelect }: GameCardProps) {
  const isFireFire = clip.game === 'Free Fire';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      onClick={() => onSelect(clip)}
      className="group cursor-pointer rounded-2xl bg-gradient-to-br from-[#111827]/90 via-[#0D1322]/85 to-[#070A12]/80 border border-slate-800/80 hover:border-amber-500/60 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-amber-500/20 transition-all flex flex-col"
    >
      {/* Contenedor de captura con más depth */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
        <img
          src={clip.imageUrl}
          alt={clip.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Gradiente más pronunciado */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1322]/90 via-black/40 to-transparent group-hover:via-black/50 transition-all" />

        {/* Brillo decorativo en hover */}
        <div className="absolute -inset-1 bg-gradient-to-br from-amber-500/0 to-transparent group-hover:from-amber-500/15 transition-all rounded-2xl" />

        {/* Etiqueta competitiva con animación */}
        <motion.span
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.08 + 0.2 }}
          className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-950/90 to-slate-950/70 backdrop-blur-md border border-amber-500/50 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-amber-300 shadow-lg"
        >
          <Trophy className="w-3.5 h-3.5 text-amber-400" />
          {clip.tag}
        </motion.span>

        {/* Botón visual de ampliar con animación mejorada */}
        <motion.span
          whileHover={{ scale: 1.15, rotate: 90 }}
          className="absolute bottom-4 right-4 inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-slate-900/90 to-slate-950/80 border border-slate-700/80 text-slate-300 group-hover:text-amber-300 group-hover:border-amber-500/60 transition-colors shadow-lg"
        >
          <Maximize2 className="w-4 h-4" />
        </motion.span>
      </div>

      {/* Contenido de vacilón con mejor tipografía */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 opacity-70">
              {clip.mode}
            </span>
            <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
              isFireFire
                ? 'bg-orange-500/15 text-orange-300 border border-orange-500/40'
                : 'bg-purple-500/15 text-purple-300 border border-purple-500/40'
            }`}>
              {clip.game}
            </span>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors leading-tight">
            {clip.title}
          </h4>
        </div>

        <div className="pt-2 border-t border-slate-800/60">
          <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
            "{clip.roast}"
          </p>
        </div>
      </div>

      {/* Indicador de interactividad */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none border border-gradient-to-r from-amber-500/0 via-amber-500/0 to-amber-500/0 group-hover:border-gradient-to-r group-hover:from-amber-500/20 group-hover:via-transparent group-hover:to-amber-500/20 transition-all" />
    </motion.div>
  );
}