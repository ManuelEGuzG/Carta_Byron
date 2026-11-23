import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crosshair, Swords, X, Flame } from 'lucide-react';
import GameCard from './GameCard';

export interface GameClip {
  id: string;
  game: 'Free Fire' | 'Clash Royale';
  mode: string;
  title: string;
  tag: string;
  roast: string;
  imageUrl: string;
}

const GAMING_CLIPS: GameClip[] = [
  {
    id: 'ff-1',
    game: 'Free Fire',
    mode: 'BR',
    title: 'Me duele la espalda',
    tag: 'Acarreado',
    roast: 'Pana, si no me pongo la capa de nuevo te tocaba ver el lobby desde temprano JAJAJA.',
    imageUrl: '/images/Screenshot_2026-11-23-00-29-32-670_com.dts.freefireth.jpg',
  },
  {
    id: 'ff-2',
    game: 'Free Fire',
    mode: 'BR',
    title: 'Mi hermano ¿como que 0?',
    tag: 'Le gané',
    roast: 'Buen intento, bro, pero en esa ronda el marcador no dejó espacio a dudas.',
    imageUrl: '/images/Screenshot_2026-11-23-00-29-24-953_com.dts.freefireth.jpg',
  },
  {
    id: 'ff-3',
    game: 'Free Fire',
    mode: 'Rescate en apuros',
    title: 'Aqui si me caí',
    tag: 'Lo saqué del apuro',
    roast: 'Tranquilo, compa, que para eso está el respaldo... aunque te costó caro.',
    imageUrl: '/images/Screenshot_2026-11-23-00-29-14-765_com.dts.freefireth.jpg',
  },
  {
    id: 'ff-4',
    game: 'Free Fire',
    mode: 'Ronda cerrada',
    title: 'Nuestro primer Booyah',
    tag: 'Ganamos',
    roast: 'Marca un antes y un despues JAJAJAJA, vamos progresando',
    imageUrl: '/images/Screenshot_2026-11-23-00-29-04-463_com.dts.freefireth.jpg',
  },
  {
    id: 'ff-5',
    game: 'Free Fire',
    mode: 'Mala partida',
    title: 'Aqui si nos majaron a los dos',
    tag: 'Pifeada',
    roast: 'Mientras tú caías, yo te seguía en la caia jajajaja. Así es la cosa, compa.',
    imageUrl: '/images/Screenshot_2026-11-23-00-28-59-517_com.dts.freefireth.jpg',
  },
  {
    id: 'cr-1',
    game: 'Clash Royale',
    mode: 'Duelo 1v1',
    title: 'La partida mas pareja, full skills',
    tag: 'Le gané',
    roast: 'Tiraste todo el elixir y aun así la torre cayó limpia, bro. Sin llorar JAJAJAJA.',
    imageUrl: '/images/Screenshot_2026-11-23-00-25-56-082_com.supercell.clashroyale.jpg',
  },
  {
    id: 'cr-2',
    game: 'Clash Royale',
    mode: '1v1',
    title: 'Aqui si me humillastes',
    tag: 'Perdí',
    roast: 'Pana, yo defendiendo con lo justo y vos mirando cómo se caía el lado izquierdo, me humillates',
    imageUrl: '/images/Screenshot_2026-11-23-00-25-35-947_com.supercell.clashroyale.jpg',
  },
];

type FilterTab = 'todos' | 'Free Fire' | 'Clash Royale';

export default function GamingSection() {
  const [activeTab, setActiveTab] = useState<FilterTab>('todos');
  const [selectedClip, setSelectedClip] = useState<GameClip | null>(null);

  const filteredClips =
    activeTab === 'todos'
      ? GAMING_CLIPS
      : GAMING_CLIPS.filter((clip) => clip.game === activeTab);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-20 space-y-12">
      {/* Encabezado y filtros con más presencia */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 border-t border-slate-800/60 pt-16"
      >
        <div className="space-y-3 max-w-2xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 drop-shadow-sm"
          >
            Carreadas historicas JAJA
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight"
          >
            Partidas y Capturas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-lg"
          >
            Aquí van las pruebas de cuando toca acarrear o ganar el duelo, bro. Todo con respeto, es solo por joder JAJAJA.
          </motion.p>
        </div>

        {/* Pestañas mejoradas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-flex flex-wrap gap-2 rounded-xl bg-gradient-to-r from-slate-900/80 to-slate-950/60 border border-slate-800/80 p-1.5 backdrop-blur-sm shadow-lg self-start lg:self-auto"
        >
          {(
            [
              { id: 'todos', label: 'Todos los clips', icon: null },
              { id: 'Free Fire', label: 'Free Fire', icon: Crosshair },
              { id: 'Clash Royale', label: 'Clash Royale', icon: Swords },
            ] as const
          ).map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <motion.button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as FilterTab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`cursor-pointer inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                  active
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/50'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                <span>{tab.label}</span>
              </motion.button>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Cuadrícula de capturas con mejor layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {filteredClips.map((clip, index) => (
          <GameCard
            key={clip.id}
            clip={clip}
            index={index}
            onSelect={setSelectedClip}
          />
        ))}
      </div>

      {/* Fallback si no hay clips */}
      {filteredClips.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-16"
        >
          <p className="text-slate-400">No hay clips para este filtro aún, bro.</p>
        </motion.div>
      )}

      {/* Modal para ampliar captura con diseño mejorado */}
      <AnimatePresence>
        {selectedClip && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedClip(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl rounded-3xl bg-gradient-to-br from-[#111827]/98 via-[#0D1322]/96 to-[#070A12]/98 border border-slate-700/60 overflow-hidden shadow-2xl"
            >
              <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
                <img
                  src={selectedClip.imageUrl}
                  alt={selectedClip.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                
                <motion.button
                  type="button"
                  onClick={() => setSelectedClip(null)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Cerrar vista ampliada"
                  className="cursor-pointer absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br from-slate-900/90 to-slate-950/80 border border-slate-700/80 text-slate-200 hover:text-amber-300 flex items-center justify-center transition-all shadow-lg"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              <div className="p-7 sm:p-9 space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-amber-600/15 text-amber-300 border border-amber-500/50 shadow-lg shadow-amber-500/10"
                  >
                    {selectedClip.game}
                  </motion.span>
                  <span className="text-xs font-semibold text-slate-400">
                    {selectedClip.tag}
                  </span>
                  <span className="text-xs text-slate-500 opacity-70">
                    {selectedClip.mode}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                    {selectedClip.title}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-300 italic leading-relaxed border-l-3 border-amber-500/60 pl-5">
                    "{selectedClip.roast}"
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}