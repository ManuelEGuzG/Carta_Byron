import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Flame, CheckCircle2, Heart } from 'lucide-react';

export default function MessageCard() {
  const [prayerConfirmed, setPrayerConfirmed] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 sm:pt-16 pb-20">
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl bg-gradient-to-br from-[#111827]/95 via-[#0D1322]/90 to-[#070A12]/95 border border-slate-800/50 shadow-2xl p-8 sm:p-14 space-y-10 backdrop-blur-sm"
      >
        {/* Encabezado premium de la carta */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-8 border-b border-slate-800/60">
          <motion.div variants={itemVariants}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 drop-shadow-sm">
              De pana a pana
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 leading-tight">
              Qué tal, bro.
            </h2>
          </motion.div>
          <motion.span
            variants={itemVariants}
            className="text-[11px] font-bold uppercase tracking-widest text-amber-300 bg-gradient-to-r from-amber-500/20 to-amber-600/10 border border-amber-500/40 px-4 py-2 rounded-full backdrop-blur-sm shadow-lg shadow-amber-500/5 self-start sm:self-auto"
          >
            Byron Josué
          </motion.span>
        </div>

        {/* Apertura */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-5 text-[15px] sm:text-base leading-[1.9] text-slate-300"
        >
          <motion.p variants={itemVariants}>
            Bro, espero que estés bien. Me tocó tu papelito en el amigo secreto y de verdad estuve orando por vos y por lo que pusiste ahí. No es solo cumplir con el detalle, sino respaldarte de verdad como pana.
          </motion.p>
        </motion.div>

        {/* Bloques de oración con más detalle */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-5"
        >
          {/* Hermano */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -2 }}
            className="group rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-950/50 border border-slate-800/80 hover:border-amber-500/40 p-6 sm:p-8 space-y-3 shadow-lg hover:shadow-amber-500/10 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/25 to-orange-600/15 border border-amber-500/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Por tu hermano
              </h3>
            </div>
            <p className="text-sm sm:text-[15px] leading-[1.85] text-slate-300 pl-13 sm:pl-0">
              Estuve pidiéndole a Dios por tu hermano, para que lo guarde y lo cuide en todo momento. Confío en que Dios tiene el control de sus tiempos y que, cuando llegue el momento en que sea su voluntad en cual sea la situacion en la que se encuentre en este momento, sea para servirle y glorificar su nombre.
            </p>
          </motion.div>

          {/* Amigos */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -2 }}
            className="group rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-950/50 border border-slate-800/80 hover:border-sky-500/40 p-6 sm:p-8 space-y-3 shadow-lg hover:shadow-sky-500/10 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500/25 to-blue-600/15 border border-sky-500/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Users className="w-5 h-5 text-sky-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Por tus amigos y amigas
              </h3>
            </div>
            <p className="text-sm sm:text-[15px] leading-[1.85] text-slate-300">
              También oré por tus amigos y amigas, tanto dentro como fuera de la iglesia, para que Dios sane y proteja sus vidas y pueda curar todas aquellas heridas que aún permanezcan abiertas en sus corazones. Seguí siendo ese apoyo real y motivación para ellos, porque no cualquiera pide por sus amigos antes que por uno mismo.
            </p>
          </motion.div>

          {/* Por él */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -2 }}
            className="group rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-950/50 border border-slate-800/80 hover:border-red-500/40 p-6 sm:p-8 space-y-3 shadow-lg hover:shadow-red-500/10 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500/25 to-rose-600/15 border border-red-500/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Heart className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Por vos, bro
              </h3>
            </div>
            <p className="text-sm sm:text-[15px] leading-[1.85] text-slate-300">
              Y claro que también oré por vos. Espero de corazón que Dios te ayude, te dé paz, te abra puertas y te respalde en cada paso. No te deprimas, que aquí tenés un pana que te apoya en lo serio y también te vacila en la cancha o en las partidas, y ahora te basureo por Instagram.
            </p>
          </motion.div>
        </motion.div>

        {/* Firma y confirmación */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Firme contigo,</p>
            <p className="font-signature text-4xl text-amber-400 mt-1">
              Tu amigo secreto
            </p>
          </div>

          <motion.button
            type="button"
            onClick={() => setPrayerConfirmed((prev) => !prev)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer inline-flex items-center justify-center gap-2.5 rounded-xl px-6 py-3 text-xs sm:text-sm font-bold transition-all border backdrop-blur-sm shadow-lg ${
              prayerConfirmed
                ? 'bg-gradient-to-r from-emerald-500/20 to-green-600/15 border-emerald-500/50 text-emerald-300 shadow-emerald-500/20'
                : 'bg-gradient-to-r from-slate-900/80 to-slate-800/60 hover:from-slate-800 hover:to-slate-700 border-slate-700/80 text-slate-200'
            }`}
          >
            <CheckCircle2 className="w-5 h-5" />
            <span className="tracking-wide">
              {prayerConfirmed ? '✓ Oración recibida, bro' : 'Marcar oración'}
            </span>
          </motion.button>
        </motion.div>
      </motion.article>
    </div>
  );
}