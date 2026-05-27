import { motion } from 'motion/react';
import { fadeUpVariant } from '../lib/animations';
import { ArrowUpRight } from 'lucide-react';

export function Farewell() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="farewell" className="relative min-h-screen bg-za-cream overflow-hidden flex flex-col justify-end border-t border-za-sand/20">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#2A2421]/60 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A2421] to-transparent z-10 opacity-70" />
        <img 
          src="/view 1.jpg" 
          alt="Z&A Suites Farewell Background" 
          className="w-full h-full object-cover filter brightness-[0.7] sepia-[0.4]"
        />
      </div>
      
      {/* Arch Card Layer */}
      <div className="w-full max-w-5xl mx-auto px-4 md:px-8 relative z-10 flex flex-col justify-end h-full">
         <motion.div 
           initial={{ y: 200, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
           viewport={{ once: true }}
           className="bg-za-warm-white pt-24 pb-12 px-6 md:px-16 text-center rounded-t-full relative shadow-[0_-20px_60px_rgba(42,36,33,0.3)] flex flex-col items-center"
         >
           {/* Decorative Border Inside Arch */}
           <div className="absolute inset-x-8 inset-t-8 bottom-0 rounded-t-full border-t border-l border-r border-za-sand/40 hidden md:block pointer-events-none"></div>

            <motion.h2 
              variants={fadeUpVariant}
              className="text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] leading-[0.9] font-serif text-za-espresso mb-8 tracking-tighter uppercase relative z-10"
            >
              Farewell <br />
              <span className="italic font-light lowercase text-za-gold">safe travels</span> <br />
              Onwards
            </motion.h2>

            <motion.div 
              variants={fadeUpVariant}
              className="font-sans text-za-charcoal/80 font-light text-xs md:text-sm tracking-widest uppercase leading-relaxed max-w-sm mx-auto space-y-4 mb-16 relative z-10"
            >
               <p>
                 We wish you a wonderful journey and hope to welcome you back home soon.
               </p>
            </motion.div>

            <motion.div 
              variants={fadeUpVariant}
              className="relative z-10 mb-20"
            >
               <a 
                 href="https://maps.app.goo.gl/mM19cWEFAbZ4USed9" 
                 target="_blank" 
                 rel="noreferrer"
                 className="inline-flex items-center space-x-3 text-za-espresso border-b border-za-espresso pb-2 font-sans text-[10px] tracking-[0.2em] font-medium uppercase hover:text-za-gold hover:border-za-gold transition-colors group"
               >
                 <span>Leave a Review</span>
                 <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </a>
            </motion.div>

            {/* Closing Mark */}
            <motion.div
               variants={fadeUpVariant}
               className="flex flex-col items-center relative z-10"
            >
               <div className="flex items-center justify-center w-16 h-16 rounded-full border border-za-gold/30 bg-za-cream mb-6">
                 <div className="font-serif text-xl text-za-espresso tracking-widest">Z&A</div>
               </div>
               
               <div className="font-sans text-[9px] tracking-[0.4em] uppercase text-za-walnut">Suites Davao</div>
               
               <button 
                 onClick={scrollToTop}
                 className="mt-14 w-12 h-12 rounded-full border border-za-sand flex items-center justify-center text-za-espresso hover:bg-za-espresso hover:text-za-cream hover:scale-110 transition-all duration-300 cursor-pointer shadow-sm relative overflow-hidden group"
                 aria-label="Back to top"
               >
                  <div className="absolute inset-0 bg-za-gold/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 group-hover:-translate-y-1 transition-transform duration-300"><path d="m18 15-6-6-6 6"/></svg>
               </button>
            </motion.div>
         </motion.div>
      </div>
    </footer>
  );
}
