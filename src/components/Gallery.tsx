import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { fadeUpVariant } from '../lib/animations';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { P } from '../lib/images';

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  // Touch swipe support (simple implementation)
  const [touchStart, setTouchStart] = useState<number | null>(null);
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    
    if (distance > 50) nextImage();
    if (distance < -50) prevImage();
    setTouchStart(null);
  };

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.documentElement.classList.add('lightbox-open');
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.documentElement.classList.remove('lightbox-open');
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % P.GALLERY.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + P.GALLERY.length) % P.GALLERY.length);
    }
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#1A1614] relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-za-gold/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col items-center justify-center text-center mb-20 w-full">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="w-full flex flex-col items-center"
          >
            <h2 className="font-serif font-semibold text-[13vw] md:text-[8vw] lg:text-[7vw] leading-[0.8] text-za-cream tracking-tighter drop-shadow-xl uppercase w-full break-words">
              THE SUITE
            </h2>
            <h2 className="font-serif font-semibold text-[13vw] md:text-[8vw] lg:text-[7vw] leading-[0.8] text-za-cream tracking-tighter drop-shadow-2xl uppercase w-full break-words">
              IN DETAIL
            </h2>
            <p className="font-serif italic text-xl md:text-3xl text-za-gold mt-6 max-w-3xl font-light">
              Explore the carefully curated spaces of Z&A Suites.
            </p>
          </motion.div>
        </div>

        {/* Masonry/Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {P.GALLERY.map((url, i) => {
            // Complex asymmetric grid layout
            let colSpanClass = "";
            let aspectClass = "";
            
            if (i === 0) {
              colSpanClass = "md:col-span-8";
              aspectClass = "aspect-[16/9] md:aspect-[2/1]";
            } else if (i === 1) {
              colSpanClass = "md:col-span-4";
              aspectClass = "aspect-square md:aspect-[4/5]";
            } else if (i === 2) {
              colSpanClass = "md:col-span-4";
              aspectClass = "aspect-square md:aspect-[3/4]";
            } else if (i === 3) {
              colSpanClass = "md:col-span-4";
              aspectClass = "aspect-square md:aspect-[3/4]";
            } else {
              colSpanClass = "md:col-span-4";
              aspectClass = "aspect-square md:aspect-[3/4]";
            }

            return (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "50px" }}
                variants={fadeUpVariant}
                custom={i}
                className={`relative overflow-hidden cursor-pointer group bg-[#2A2421] ${colSpanClass} ${aspectClass}`}
                onClick={() => openLightbox(i)}
              >
                <img 
                  src={url} 
                  alt={`Z&A Suites Interior ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1614]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <div className="w-10 h-10 rounded-full border border-za-cream/30 flex items-center justify-center backdrop-blur-sm bg-black/20">
                    <span className="text-za-cream text-sm">+</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#2C2420]/95 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-za-cream/70 hover:text-za-cream p-2 z-50 transition-colors"
              aria-label="Close image"
            >
              <X size={32} strokeWidth={1} />
            </button>

            <button 
              onClick={prevImage}
              className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 text-za-cream/50 hover:text-za-cream p-4 z-50 transition-colors hidden md:block"
              aria-label="Previous image"
            >
              <ChevronLeft size={48} strokeWidth={1} />
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-za-cream/50 hover:text-za-cream p-4 z-50 transition-colors hidden md:block"
              aria-label="Next image"
            >
              <ChevronRight size={48} strokeWidth={1} />
            </button>

            <div className="relative max-w-6xl w-full h-full p-4 md:p-12 flex items-center justify-center pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={P.GALLERY[selectedIndex]}
                  alt="Full size view"
                  className="max-w-full max-h-full object-contain pointer-events-auto"
                  onClick={(e) => e.stopPropagation()}
                />
              </AnimatePresence>
            </div>

            <div className="absolute bottom-6 left-0 right-0 text-center text-za-cream/70 font-sans tracking-widest text-sm pointer-events-none">
              {selectedIndex + 1} / {P.GALLERY.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
