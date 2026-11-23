import { ArrowLeft, Gift } from 'lucide-react';
import { motion } from 'framer-motion';
import MessageCard from './MessageCard';
import GamingSection from './GamingSection';

interface MainContentProps {
  onBackToCover: () => void;
}

export default function MainContent({ onBackToCover }: MainContentProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#070A12] via-[#0F172A] to-[#070A12]">
      {/* Barra superior premium */}
      <header className="sticky top-0 z-40 bg-gradient-to-b from-[#0F172A]/95 via-[#070A12]/90 to-transparent backdrop-blur-2xl border-b border-gradient-to-r from-amber-500/20 via-transparent to-amber-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
          <motion.div
            className="flex items-center gap-3 min-w-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/25 to-amber-600/15 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 shadow-lg shadow-amber-500/10">
              <Gift className="w-5 h-5" />
            </div>
            <div className="truncate">
              <p className="text-sm sm:text-base font-bold text-white truncate">Amigo Secreto</p>
              <p className="text-[11px] sm:text-xs text-slate-400 truncate">Para Byron Josué</p>
            </div>
          </motion.div>

          <motion.button
            type="button"
            onClick={onBackToCover}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer inline-flex items-center gap-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 px-3.5 py-2 text-xs sm:text-sm font-semibold text-slate-200 transition-all shrink-0 shadow-lg hover:shadow-amber-500/10"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Portada</span>
            <span className="sm:hidden">Atrás</span>
          </motion.button>
        </div>
      </header>

      {/* Cuerpo principal */}
      <main className="flex-1">
        <MessageCard />
        <GamingSection />
      </main>

      {/* Pie de página premium */}
      <footer className="border-t border-slate-800/80 bg-gradient-to-t from-[#050810] to-[#070A12] py-10 sm:py-12 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Hecho con <span className="text-amber-400 font-semibold">fe</span>, <span className="text-blue-400 font-semibold">respaldo</span> y buen <span className="text-amber-300 font-semibold">vacilón</span> para{' '}
            <span className="text-amber-300 font-bold">Byron Josué</span>.
          </p>
        </motion.div>
      </footer>
    </div>
  );
}