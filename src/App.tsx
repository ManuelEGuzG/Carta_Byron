import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CoverPage from './components/CoverPage';
import MainContent from './components/MainContent';

type ViewState = 'cover' | 'main';

export default function App() {
  const [view, setView] = useState<ViewState>('cover');

  const handleOpenMessage = () => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    setView('main');
  };

  const handleBackToCover = () => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    setView('cover');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#070A12] via-[#0D1420] to-[#070A12] text-slate-100 relative overflow-x-hidden">
      {/* Iluminación ambiental sofisticada */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        {/* Luz superior dorada */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-b from-amber-500/8 via-amber-500/[0.03] to-transparent blur-[140px]" />
        
        {/* Luz inferior azul */}
        <div className="absolute -bottom-32 right-0 w-[600px] h-[400px] rounded-full bg-gradient-to-t from-sky-500/6 via-sky-500/[0.02] to-transparent blur-[140px]" />
        
        {/* Luz lateral sutil */}
        <div className="absolute top-1/3 -left-32 w-[500px] h-[300px] rounded-full bg-gradient-to-r from-blue-500/4 to-transparent blur-[120px]" />
      </div>

      {/* Efecto de grid sutil */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(217, 119, 6, 0.03) 1px, transparent 1px),
              radial-gradient(circle at 80% 80%, rgba(96, 165, 250, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {view === 'cover' ? (
            <motion.div
              key="cover"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <CoverPage onOpenMessage={handleOpenMessage} />
            </motion.div>
          ) : (
            <motion.div
              key="main"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <MainContent onBackToCover={handleBackToCover} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}