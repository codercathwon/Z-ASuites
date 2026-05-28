import { motion } from 'motion/react';
import { fadeUpVariant, staggerContainer } from '../lib/animations';
import { Bed, Users, Square, Wifi, ShowerHead, Car, Tv, Wind, CheckCircle2, Dumbbell, Baby, Palmtree, Utensils } from 'lucide-react';

const features = [
  { icon: Square, label: 'Studio Type Unit' },
  { icon: Bed, label: 'Queen-Sized Bed' },
  { icon: Users, label: 'Up to 4 Guests' },
  { icon: ShowerHead, label: 'Hot & Cold Shower' },
  { icon: Wifi, label: 'Unlimited WiFi' },
  { icon: Tv, label: 'Board Games' },
  { icon: Utensils, label: 'Fully Equipped Kitchen' },
  { icon: CheckCircle2, label: 'Fully Furnished' },
  { icon: Car, label: 'Paid Parking Available' },
  { icon: Palmtree, label: 'Resort Style Amenities (Coming Soon)' },
  { icon: Baby, label: "Kid's Playground (Coming Soon)" },
  { icon: Dumbbell, label: 'Fitness Gym (Coming Soon)' },
];

export function Property() {
  return (
    <section id="property" className="py-24 bg-za-warm-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* About the Space */}
        <div className="text-center mb-20 flex flex-col items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="w-full flex flex-col items-center"
          >
            <h2 className="font-serif font-semibold text-[13vw] md:text-[9vw] lg:text-[7vw] leading-[0.8] text-za-espresso tracking-tighter drop-shadow-xl uppercase w-full break-words">
              YOUR
            </h2>
            <h2 className="font-serif font-semibold text-[13vw] md:text-[9vw] lg:text-[7vw] leading-[0.8] text-za-espresso tracking-tighter drop-shadow-2xl uppercase w-full break-words">
              SPACE
            </h2>
            <p className="font-serif italic text-xl md:text-3xl text-za-walnut mt-6 max-w-3xl font-light">
              Step into a thoughtfully curated haven where warm light meets raw textures. 
              The suite is designed for quiet mornings and restful evenings.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 max-w-5xl mx-auto mb-20"
        >
          {features.map((feature, i) => (
            <motion.div 
              key={i} 
              variants={fadeUpVariant}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-za-gold border-[1px] border-za-gold/30 bg-transparent transition-transform duration-300 hover:scale-105">
                <feature.icon strokeWidth={1} size={22} className="text-za-gold" />
              </div>
              <span className="font-sans text-[10px] md:text-[11px] tracking-widest text-za-charcoal font-medium uppercase px-2">{feature.label}</span>
            </motion.div>
          ))}

          {/* Check-In / Check-Out Boxes inside the grid */}
          <motion.div variants={fadeUpVariant} className="col-span-2 flex flex-col items-center justify-center text-center space-y-2 py-8 bg-[#fdfbf9] border border-za-sand/20 rounded-sm">
             <div className="font-sans text-[9px] md:text-[10px] tracking-[0.2em] font-medium uppercase text-za-walnut">Check-In</div>
             <div className="font-serif text-2xl md:text-3xl text-za-espresso">2:00 PM</div>
          </motion.div>
          <motion.div variants={fadeUpVariant} className="col-span-2 flex flex-col items-center justify-center text-center space-y-2 py-8 bg-[#fdfbf9] border border-za-sand/20 rounded-sm">
             <div className="font-sans text-[9px] md:text-[10px] tracking-[0.2em] font-medium uppercase text-za-walnut">Check-Out</div>
             <div className="font-serif text-2xl md:text-3xl text-za-espresso">12:00 NN</div>
          </motion.div>
        </motion.div>

        {/* Map */}
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-50px" }}
           variants={fadeUpVariant}
           className="max-w-5xl mx-auto"
        >
          <div className="rounded-sm overflow-hidden border border-za-sand/50 h-[400px] md:h-[500px] relative shadow-sm shadow-za-espresso/5 bg-za-cream">
             {/* Note: Iframe styling with css filter for sepia/warmth */}
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.5694709405234!2d125.5847!3d7.059722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0!2zN8KwMDMnMzUuMCJOIDEyNcKwMzUnMDQuOSJF!5e0!3m2!1sen!2sph!4v1700000000000!5m2!1sen!2sph"
                className="absolute inset-0 w-full h-full border-0 filter sepia-[0.2] contrast-[0.95] brightness-[1.05]"
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Map to Z&A Suites"
              />
          </div>
          <div className="mt-6 text-center">
             <a 
                href="https://maps.app.goo.gl/mM19cWEFAbZ4USed9" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center space-x-2 bg-za-espresso text-za-cream px-6 py-3 rounded-none font-sans text-xs font-bold tracking-[0.15em] uppercase hover:bg-za-charcoal transition-colors hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Get Directions</span>
             </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
