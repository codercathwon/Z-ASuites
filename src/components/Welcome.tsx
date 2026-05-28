import { motion, useScroll, useTransform } from 'motion/react';
import { fadeUpVariant, staggerContainer } from '../lib/animations';
import { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';

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
      <div className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#2C2420]/50 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#402F24]/30 via-transparent to-[#4A3728]/80 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop" 
            alt="Room Ambience" 
            className="w-full h-full object-cover filter brightness-90 sepia-[0.2]"
          />
        </motion.div>

        <div className="relative z-20 w-full px-6 flex flex-col pt-32 pb-24 md:pb-32">
          <div className="max-w-6xl mx-auto w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="flex items-center gap-6 w-full max-w-sm mb-12"
            >
               <div className="h-[1px] flex-1 bg-za-cream/70"></div>
               <span className="font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase text-za-cream">about this space</span>
               <div className="h-[1px] flex-1 bg-za-cream/70"></div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="flex flex-col w-full mb-12"
            >
              <h2 className="font-serif font-semibold text-[14vw] md:text-[10vw] lg:text-[8vw] leading-[0.8] text-za-white tracking-tighter drop-shadow-xl break-words">
                ABOUT
              </h2>
              <h2 className="font-serif font-semibold text-[14vw] md:text-[10vw] lg:text-[8vw] leading-[0.8] text-za-white tracking-tighter drop-shadow-2xl break-words">
                US
              </h2>
              <p className="font-serif italic text-xl md:text-3xl text-za-cream mt-6 max-w-3xl font-light drop-shadow-lg">
                Our little corner of calm in the heart of Davao City.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-6 text-za-cream/95 font-sans font-medium text-lg md:text-xl leading-relaxed max-w-2xl text-justify"
              >
                <p>
                  We designed this home with love, inspired by our daughters Zoe & Alexa, to feel like a place where you can truly <strong className="font-bold text-white">relax, recharge, and feel at home</strong>. Every detail — from the soft linens to the warm wooden accents and gentle greenery is meant to create a sense of peace, calm, and simplicity.
                </p>
                <p>
                  Whether you're here for shopping, work, or exploring the city, our cozy studio type condo offers a quiet retreat just a <strong className="font-bold text-white">5-minute walk from SM City Davao (Ecoland)</strong> & a walking distance from <strong className="font-bold text-white">Davao Global Township</strong>, yet tucked away in a peaceful spot for restful nights.
                </p>
              </motion.div>


            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-20 md:mt-32 max-w-3xl"
            >
              <p className="font-sans text-lg md:text-xl leading-relaxed text-za-cream/95 text-justify">
                In <strong className="font-bold italic text-white">Z&A Suites</strong> we wanted to create a home where every guest feels seen, comfortable, and cared for — a peaceful retreat you can enjoy just like family. We hope you'll feel at ease, unwind, and take a little piece of calm with you when you leave.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
