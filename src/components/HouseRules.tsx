import { motion } from 'motion/react';
import { fadeUpVariant, staggerContainer } from '../lib/animations';
import { Cigarette, Wind, Wine, AlertTriangle, AlertCircle, Search, Flame } from 'lucide-react';

// Using icons as closest representations for specific requested items
const prohibited = [
  { icon: Cigarette, label: 'No Smoking' },
  { icon: Wind, label: 'No Vaping' },
  { icon: Wine, label: 'No Alcohol' },
  { icon: AlertTriangle, label: 'No Illegal Drugs & Substances' },
  { icon: AlertCircle, label: 'No Durian' }, // Closest abstract warning for specific fruit
  { icon: Search, label: 'No Dried Fish / Seafood' }, 
  { icon: AlertCircle, label: 'No Marang' },
  { icon: Flame, label: 'No Smelly Food (cooking or bringing)' },
];

export function HouseRules() {
  return (
    <section id="house-rules" className="py-24 md:py-32 bg-za-warm-white text-za-charcoal relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20 md:mb-28 flex flex-col items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="w-full flex flex-col items-center"
          >
            <h2 className="font-serif font-semibold text-[11vw] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] leading-[0.8] text-[#9A3B36] tracking-tighter uppercase w-full break-words">
              STRICTLY
            </h2>
            <h2 className="font-serif font-semibold text-[11vw] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] leading-[0.8] text-[#9A3B36] tracking-tighter uppercase w-full break-words">
              PROHIBITED
            </h2>
            <p className="font-serif italic text-xl md:text-3xl text-[#9A3B36] mt-6 max-w-3xl font-light">
              Inside the property.
            </p>
          </motion.div>
        </div>

        {/* Prohibited Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 md:gap-x-12 md:gap-y-16 mb-24 max-w-4xl mx-auto"
        >
          {prohibited.map((item, i) => (
            <motion.div 
              key={i}
              variants={fadeUpVariant}
              className="group flex flex-col items-center justify-start text-center"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 mb-6 rounded-full border-[2px] border-[#9A3B36] flex items-center justify-center text-za-charcoal relative overflow-hidden bg-za-cream shadow-sm group-hover:scale-105 transition-transform duration-500">
                {/* Diagonal line */}
                <div className="absolute w-[120%] h-[2px] bg-[#9A3B36] -rotate-45 transform origin-center z-10"></div>
                <item.icon strokeWidth={1} size={36} className="z-0 opacity-80" />
              </div>
              <span className="font-sans text-[10px] md:text-xs tracking-widest uppercase font-medium text-za-espresso max-w-[140px] leading-relaxed">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Notices */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="space-y-6 max-w-3xl mx-auto border-t border-za-sand/30 pt-16"
        >
          <motion.div 
            variants={fadeUpVariant}
            className="p-8 text-center"
          >
            <p className="font-sans font-light text-za-charcoal text-sm md:text-base leading-relaxed">
              <span className="text-[#9A3B36] font-medium mr-2 tracking-widest uppercase text-[10px]">Please Note:</span>
              To maintain the quality of the space for all guests, violations are subject to a minimum fee of ₱5,000. Illegal activities may result in immediate eviction and legal action.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeUpVariant}
            className="p-8 bg-za-cream rounded-sm border border-za-sand/20 text-center flex flex-col sm:flex-row items-center gap-6 justify-center shadow-sm"
          >
             <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-[#9A3B36]">
                <Wind size={32} strokeWidth={1} />
             </div>
            <p className="font-sans font-light text-za-charcoal text-sm md:text-base leading-relaxed text-left">
              Our smoke detector is highly sensitive and connected to the water sprinkler system. <strong className="font-medium text-[#9A3B36]">Please do not smoke or vape</strong> anywhere inside the property.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
