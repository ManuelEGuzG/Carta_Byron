import { motion } from 'framer-motion';
import { ChevronRight, Shield, Sparkles } from 'lucide-react';

interface CoverPageProps {
  onOpenMessage: () => void;
}

export default function CoverPage({ onOpenMessage }: CoverPageProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-2xl"
      >
        {/* Card principal con refinamiento premium */}
        <div className="relative">
          {/* Brillo decorativo mejorado */}
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-amber-500/10 to-orange-500/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tl from-blue-500/8 to-sky-500/4 rounded-full blur-3xl"
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative rounded-3xl bg-gradient-to-br from-[#111827]/98 via-[#1a2235]/95 to-[#0F172A]/98 border border-slate-700/50 shadow-2xl p-8 sm:p-14 backdrop-blur-sm"
          >
            {/* Icono con animación flotante */}
            <motion.div
              className="flex justify-center mb-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="p-6 bg-gradient-to-br from-amber-500/30 to-orange-600/15 rounded-2xl border border-amber-500/50 shadow-2xl shadow-amber-500/20"
              >
                <Shield className="w-12 h-12 text-amber-400" />
              </motion.div>
            </motion.div>

            {/* Contenido principal */}
            <div className="text-center space-y-8">
              {/* Etiqueta con animación */}
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-black tracking-[0.25em] text-amber-400 uppercase drop-shadow-sm"
              >
                <Sparkles className="w-4 h-4" />
                AMIGO SECRETO
                <Sparkles className="w-4 h-4" />
              </motion.span>

              {/* Título principal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-3"
              >
                <h1 className="text-5xl sm:text-7xl font-black text-white drop-shadow-lg leading-tight">
                  Respuesta para
                </h1>
                <div className="bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400 bg-clip-text text-transparent text-5xl sm:text-7xl font-black drop-shadow-lg">
                  Byron Josué
                </div>
              </motion.div>

              {/* Divisor animado */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-transparent via-amber-500/60 to-transparent origin-center"
              />

              {/* Descripción con mejor espaciado */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="space-y-5"
              >
                <p className="text-base sm:text-lg leading-relaxed text-slate-300 max-w-xl mx-auto font-medium">
                  Pana, me tocó tu papelito en el amigo secreto. Quise hacer algo más trabajado y serio para responderte como se debe, porque una carta entre panas se me hace muy LGBT JAJAJAJAJA.
                </p>

                <div className="rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-950/50 border border-slate-800/80 p-6 sm:p-7 space-y-3 backdrop-blur-sm">
                  <p className="text-sm sm:text-[15px] leading-relaxed text-slate-300">
                    Adentro tenés mi palabra de <span className="text-amber-300 font-semibold">oración por tu hermano</span>, por <span className="text-sky-300 font-semibold">tus amigos</span> y <span className="text-red-300 font-semibold">por vos</span>.
                  </p>
                  <p className="text-sm sm:text-[15px] leading-relaxed text-slate-400">
                    Y te puse unas imagenes de nuestro largo papu team.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Botón principal mejorado */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <motion.button
                type="button"
                onClick={onOpenMessage}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="w-full cursor-pointer rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-black text-base sm:text-lg py-5 px-8 shadow-2xl hover:shadow-amber-500/40 transition-all flex items-center justify-center gap-3 overflow-hidden group"
              >
                {/* Efecto de fondo animated */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-blue-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl" />

                {/* Contenido */}
                <span className="relative">Entrar</span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronRight className="w-5 h-5 relative" />
                </motion.div>
              </motion.button>
            </motion.div>

            {/* Footer descriptivo */}
            <motion.p
              className="text-center text-xs sm:text-sm text-slate-500 mt-8 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              Toca el botón para ver la carta completa.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}