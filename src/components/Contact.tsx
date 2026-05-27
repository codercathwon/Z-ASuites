import { motion } from 'motion/react';
import { fadeUpVariant, staggerContainer } from '../lib/animations';
import { Phone, Instagram, Facebook, ArrowUpRight } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-za-cream relative border-t border-za-sand/30">
      <div className="absolute left-0 top-0 w-64 h-64 bg-za-gold/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-za-moss/5 rounded-full blur-3xl translate-y-1/4 translate-x-1/4 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="bg-za-warm-white border border-za-sand/50 p-10 md:p-16 shadow-[0_10px_40px_-15px_rgba(44,36,32,0.1)] relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-za-sand via-za-gold to-za-sand opacity-50"></div>
          
          <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
            
            <motion.div variants={fadeUpVariant} className="flex-1 text-center md:text-left">
              <div className="flex items-center gap-4 justify-center md:justify-start mb-6">
                <div className="h-[1px] w-8 bg-za-walnut"></div>
                <div className="text-za-walnut tracking-[0.2em] text-xs uppercase font-sans">Reach Out</div>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-za-espresso mb-6 leading-tight">
                Always at your <br/><span className="italic text-za-gold">service</span>
              </h2>
              <p className="font-sans text-za-charcoal/80 leading-relaxed text-sm md:text-base">
                Whether you need fresh linens, local recommendations, or urgent assistance, we are just a message away. Your comfort is our priority.
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="flex-1 w-full space-y-4">
              
              {/* Phone */}
              <motion.a 
                variants={fadeUpVariant}
                href="tel:+639283739056"
                className="flex items-center justify-between p-4 md:p-5 rounded-sm bg-white border border-za-sand/30 hover:border-za-gold hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-za-cream flex items-center justify-center text-za-espresso group-hover:bg-za-gold group-hover:text-white transition-colors shadow-sm">
                    <Phone size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-sans text-[10px] md:text-xs tracking-widest uppercase text-za-walnut/70 mb-1">Call / Text</div>
                    <div className="font-serif text-xl md:text-2xl text-za-charcoal tracking-wide">0928 373 9056</div>
                  </div>
                </div>
              </motion.a>

              {/* Facebook */}
              <motion.a 
                variants={fadeUpVariant}
                href="https://www.facebook.com/people/ZA-Suites-Davao/61589716517103/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 md:p-5 rounded-sm bg-white border border-za-sand/30 hover:border-[#1877F2]/40 hover:shadow-md transition-all group"
              >
                 <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-za-cream flex items-center justify-center text-za-espresso group-hover:bg-[#1877F2] group-hover:text-white transition-colors shadow-sm">
                    <Facebook size={20} strokeWidth={1.5} />
                  </div>
                  <div className="font-sans text-base md:text-lg text-za-charcoal font-medium">
                    Facebook Page
                  </div>
                </div>
                <ArrowUpRight size={20} className="text-za-sand group-hover:text-[#1877F2] transition-colors" />
              </motion.a>

              <div className="grid grid-cols-2 gap-4">
                {/* Instagram */}
                <motion.a 
                  variants={fadeUpVariant}
                  href="https://www.instagram.com/za_suites.davao"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center gap-3 p-5 rounded-sm bg-white border border-za-sand/30 hover:border-[#E1306C]/40 hover:shadow-md transition-all group text-center"
                >
                   <div className="w-10 h-10 rounded-full bg-za-cream flex items-center justify-center text-za-espresso group-hover:bg-gradient-to-tr from-[#F56040] to-[#C13584] group-hover:text-white transition-colors shadow-sm">
                     <Instagram size={18} strokeWidth={1.5} />
                   </div>
                   <div className="font-sans text-sm text-za-charcoal font-medium">
                     Instagram
                   </div>
                </motion.a>
                
                {/* TikTok */}
                <motion.a 
                  variants={fadeUpVariant}
                  href="https://www.tiktok.com/@za.suites"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center gap-3 p-5 rounded-sm bg-white border border-za-sand/30 hover:border-black/40 hover:shadow-md transition-all group text-center"
                >
                   <div className="w-10 h-10 rounded-full bg-za-cream flex items-center justify-center text-za-espresso group-hover:bg-black group-hover:text-white transition-colors shadow-sm">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                   </div>
                   <div className="font-sans text-sm text-za-charcoal font-medium">
                     TikTok
                   </div>
                </motion.a>
              </div>

            </motion.div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
