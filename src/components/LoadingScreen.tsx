import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Attempt to play a ding sound
    const playDing = () => {
      // Using a short, pleasant bell/ding sound
      const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
      audio.volume = 0.5;
      audio.play().catch((err) => {
        console.log('Audio playback prevented by browser policy:', err);
      });
    };

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
      playDing();
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#f8f5f0] flex flex-col items-center justify-center overflow-hidden"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-[2px] border-[#C19A6B]/40 bg-[#402F24] shadow-2xl flex items-center justify-center overflow-hidden relative mb-8">
              <img 
                src="/logo.jpeg" 
                alt="Z&A Suites" 
                className="absolute inset-0 w-full h-full object-cover z-10" 
                onError={(e) => { e.currentTarget.style.display = 'none'; }} 
              />
              <div className="flex flex-col items-center justify-center pt-[2px] z-0">
                <span className="font-serif font-semibold text-[#E5D3B3] text-2xl sm:text-4xl leading-none tracking-tight">Z&A</span>
                <span className="font-sans font-medium text-[#C19A6B] text-[8px] sm:text-[10px] tracking-[0.2em] leading-tight opacity-90 mt-1">SUITES</span>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-center"
            >
              <h1 className="font-serif text-2xl sm:text-3xl text-[#2C1810] mb-3">Z&A Suites</h1>
              <div className="flex items-center justify-center gap-1.5">
                <motion.div 
                  className="w-1.5 h-1.5 rounded-full bg-[#C19A6B]"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                />
                <motion.div 
                  className="w-1.5 h-1.5 rounded-full bg-[#C19A6B]"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                />
                <motion.div 
                  className="w-1.5 h-1.5 rounded-full bg-[#C19A6B]"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                />
              </div>
              <p className="font-sans text-sm text-gray-500 mt-4 tracking-widest uppercase">Preparing Your Stay</p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
