import { motion, useScroll, useTransform } from 'motion/react';
import { fadeUpVariant } from '../lib/animations';
import { useRef } from 'react';

export function Welcome() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-100, 150]);

  return (
    <section id="welcome" ref={containerRef} className="relative w-full">
      {/* Immersive Parallax Header */}
      <div className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#2C2420]/40 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#2C2420]/70 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop" 
            alt="Room Ambience" 
            className="w-full h-full object-cover filter brightness-90 sepia-[0.1]"
          />
        </motion.div>

        <div className="relative z-20 w-full px-6 flex flex-col items-center text-center mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="flex items-center gap-6 w-full max-w-xl mb-12"
          >
             <div className="h-[1px] flex-1 bg-za-cream/50"></div>
             <span className="font-sans text-[10px] md:text-sm tracking-[0.3em] uppercase text-za-cream/90">about this space</span>
             <div className="h-[1px] flex-1 bg-za-cream/50"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center w-full"
          >
            <h2 className="font-serif text-[14vw] md:text-[9vw] leading-[0.8] text-za-cream tracking-tighter mb-2 opacity-95 drop-shadow-xl whitespace-nowrap">
              Z&A SUITES
            </h2>
            <h2 className="font-serif text-[14vw] md:text-[9vw] leading-[0.8] text-transparent tracking-tighter drop-shadow-2xl whitespace-nowrap" style={{ WebkitTextStroke: '1.5px rgba(245, 240, 232, 0.6)' }}>
              DAVAO CITY
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl text-za-cream mt-16 max-w-3xl font-light drop-shadow-lg"
          >
            Luxury that <span className="italic font-['Cormorant_Garamond'] text-za-gold font-normal">feels like</span> home.
          </motion.p>
        </div>
      </div>

      {/* Welcome Body */}
      <div className="bg-[#FAF9F6] w-full py-24 md:py-32 relative z-20 border-t border-za-sand/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h3 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true, margin: "-50px" }}
             className="text-4xl md:text-5xl font-serif text-za-espresso leading-tight mb-8"
          >
            We're so <span className="italic font-['Cormorant_Garamond'] text-za-gold font-medium">glad</span> you're here.
          </motion.h3>
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ duration: 1.2, delay: 0.2 }}
             viewport={{ once: true, margin: "-50px" }}
             className="w-16 h-[1px] bg-za-gold mx-auto mb-10"
          />
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ duration: 1.2, delay: 0.4 }}
             viewport={{ once: true, margin: "-50px" }}
             className="space-y-8 text-[#5C5449] font-sans font-light text-base md:text-lg leading-loose max-w-2xl mx-auto text-justify md:text-center"
          >
            <p>
              Welcome to Z&A Suites. We designed this home with love, inspired to feel like a place where you can truly relax, recharge, and feel at home.
            </p>
            <p>
              Every detail—from the soft linens to the warm wooden accents and gentle greenery—is meant to create a sense of peace, calm, and simplicity. Whether you're here for shopping, work, or exploring the city, our space is yours to enjoy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
