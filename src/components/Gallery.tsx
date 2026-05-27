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
    <section id="gallery" className="py-24 bg-[#14110F]">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariant}
          className="text-center mb-16"
        >
          <div className="text-za-gold/80 tracking-[0.3em] text-xs md:text-sm uppercase font-sans mb-4">Gallery</div>
          <h2 className="text-4xl md:text-5xl font-serif text-za-cream">A Look Inside</h2>
        </motion.div>

        {/* Masonry/Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 lg:gap-6">
          {P.GALLERY.map((url, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              custom={i % 3} // Stagger columns
              className={`relative overflow-hidden rounded-sm cursor-pointer group bg-za-sand/20 aspect-square md:aspect-[4/5] ${
                i === 0 || i === 4 ? 'col-span-2 md:col-span-2 aspect-[2/1] md:aspect-[16/9]' : '' // Make some items span 2 cols
              }`}
              onClick={() => openLightbox(i)}
            >
              <img 
                src={url} 
                alt={`Z&A Suites Interior ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-za-charcoal/0 group-hover:bg-za-charcoal/10 transition-colors duration-300" />
            </motion.div>
          ))}
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
