import { motion } from 'motion/react';
import { fadeUpVariant, staggerContainer } from '../lib/animations';
import { Phone, Instagram, Facebook, ArrowUpRight } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-za-warm-white">
      <div className="max-w-xl mx-auto px-6">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="bg-za-cream border border-za-sand/30 rounded-sm p-8 md:p-12 shadow-sm"
        >
          <motion.div variants={fadeUpVariant} className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif text-za-espresso mb-2">Need anything?</h2>
            <p className="font-sans text-za-walnut font-light">We're here to help.</p>
          </motion.div>

          <motion.div variants={staggerContainer} className="space-y-4">
            
            {/* Phone */}
            <motion.a 
              variants={fadeUpVariant}
              href="tel:+639283739056"
              className="flex items-center justify-between p-5 md:p-6 rounded-sm bg-za-white border border-za-sand/20 hover:border-za-gold hover:shadow-sm transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-za-cream flex items-center justify-center text-za-espresso group-hover:bg-za-gold group-hover:text-za-white transition-colors">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-sans text-xs tracking-widest uppercase text-za-walnut mb-1">Call / Text</div>
                  <div className="font-serif text-xl md:text-2xl text-za-charcoal">0928 373 9056</div>
                </div>
              </div>
            </motion.a>

            {/* Facebook */}
            <motion.a 
              variants={fadeUpVariant}
              href="https://www.facebook.com/people/ZA-Suites-Davao/61589716517103/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-5 md:p-6 rounded-sm bg-za-white border border-za-sand/20 hover:border-[#1877F2]/50 hover:shadow-sm transition-all group"
            >
               <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-za-cream flex items-center justify-center text-za-espresso group-hover:bg-[#1877F2] group-hover:text-za-white transition-colors">
                  <Facebook size={20} strokeWidth={1.5} />
                </div>
                <div className="font-sans text-base md:text-lg text-za-charcoal tracking-wide">
                  Facebook Page
                </div>
              </div>
              <ArrowUpRight size={20} className="text-za-sand group-hover:text-[#1877F2] transition-colors" />
            </motion.a>

            {/* Instagram */}
            <motion.a 
              variants={fadeUpVariant}
              href="https://www.instagram.com/za_suites.davao"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-5 md:p-6 rounded-sm bg-za-white border border-za-sand/20 hover:border-[#E1306C]/50 hover:shadow-sm transition-all group"
            >
               <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-za-cream flex items-center justify-center text-za-espresso group-hover:bg-gradient-to-tr from-[#F56040] to-[#C13584] group-hover:text-za-white transition-colors">
                  <Instagram size={20} strokeWidth={1.5} />
                </div>
                <div className="font-sans text-base md:text-lg text-za-charcoal tracking-wide">
                  Instagram
                </div>
              </div>
              <ArrowUpRight size={20} className="text-za-sand group-hover:text-[#E1306C] transition-colors" />
            </motion.a>
            
            {/* TikTok */}
            <motion.a 
              variants={fadeUpVariant}
              href="https://www.tiktok.com/@za.suites"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-5 md:p-6 rounded-sm bg-za-white border border-za-sand/20 hover:border-black/50 hover:shadow-sm transition-all group"
            >
               <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-za-cream flex items-center justify-center text-za-espresso group-hover:bg-black group-hover:text-za-white transition-colors">
                   {/* Custom simple SVG for TikTok as lucide doesn't have it natively built in some older versions, or just use a generic play icon. Drawing a quick music note SVG */}
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                </div>
                <div className="font-sans text-base md:text-lg text-za-charcoal tracking-wide">
                  TikTok
                </div>
              </div>
              <ArrowUpRight size={20} className="text-za-sand group-hover:text-black transition-colors" />
            </motion.a>

          </motion.div>
          
          <motion.div variants={fadeUpVariant} className="mt-8 text-center">
             <p className="font-sans text-xs md:text-sm text-za-charcoal/60 bg-za-cream p-4 rounded-sm border border-za-sand/20">
               For urgent concerns, please call or message us directly on any platform above.
             </p>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
}
