import { motion } from 'motion/react';
import { fadeUpVariant } from '../lib/animations';
import { ArrowUpRight } from 'lucide-react';

export function Farewell() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="farewell" className="relative min-h-screen bg-za-cream overflow-hidden flex flex-col justify-end">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#4A3728]/40 mix-blend-multiply z-10" />
        <img 
          src="/view 1.jpg" 
          alt="Z&A Suites Farewell Background" 
          className="w-full h-full object-cover filter brightness-[0.8] sepia-[0.3]"
        />
      </div>
      
      {/* Arch Card Layer */}
      <div className="w-full max-w-4xl mx-auto px-4 md:px-8 relative z-10 flex flex-col justify-end h-full">
         <motion.div 
           initial={{ y: 150, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           viewport={{ once: true }}
           className="bg-za-warm-white pt-24 pb-12 px-6 md:px-16 text-center rounded-t-full relative shadow-2xl flex flex-col items-center"
         >
           {/* Decorative Border Inside Arch */}
           <div className="absolute inset-4 rounded-t-full border border-za-sand/30 pointer-events-none"></div>

            <motion.h2 
              variants={fadeUpVariant}
              className="text-[4rem] md:text-[6rem] lg:text-[7rem] leading-[0.9] font-serif text-za-espresso mb-8 tracking-tighter uppercase relative z-10"
            >
              Thank You <br />
              <span className="italic font-light lowercase text-za-walnut">for staying</span> <br />
              With Us
            </motion.h2>

            <motion.div 
              variants={fadeUpVariant}
              className="font-sans text-za-charcoal font-light text-xs md:text-sm tracking-widest uppercase leading-relaxed max-w-md mx-auto space-y-4 mb-16 relative z-10"
            >
               <p>
                 We wish you safe travels and hope to welcome you back home soon.
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
                 className="inline-flex items-center space-x-3 text-za-gold border-b border-za-gold pb-2 font-sans text-[10px] tracking-[0.2em] font-medium uppercase hover:text-za-espresso hover:border-za-espresso transition-colors group"
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
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-[1px] bg-za-sand/50"></div>
                  <div className="font-serif text-2xl text-za-espresso tracking-widest">Z&amp;A</div>
                  <div className="w-12 h-[1px] bg-za-sand/50"></div>
               </div>
               <div className="font-sans text-[9px] tracking-[0.3em] uppercase text-za-walnut">Suites Davao</div>
               
               <button 
                 onClick={scrollToTop}
                 className="mt-12 w-10 h-10 rounded-full border border-za-sand flex items-center justify-center text-za-espresso hover:bg-za-espresso hover:text-za-cream transition-colors cursor-pointer"
                 aria-label="Back to top"
               >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
               </button>
            </motion.div>
         </motion.div>
      </div>
    </footer>
  );
}
