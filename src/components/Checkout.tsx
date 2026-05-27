import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { fadeUpVariant, staggerContainer } from '../lib/animations';
import { Power, Trash2, Home, Key, MapPin, CheckCircle } from 'lucide-react';

const checkoutSteps = [
  { 
    id: 'power', 
    icon: Power, 
    title: 'Appliances & Lights', 
    desc: 'Please ensure all lights, air conditioning units, and appliances (including the TV and kitchen equipment) are turned off before your departure to conserve energy.' 
  },
  { 
    id: 'trash', 
    icon: Trash2, 
    title: 'Trash Disposal', 
    desc: 'Kindly gather all your trash and take it down to the designated garbage disposal area in the building. Please empty the refrigerator of any leftover perishable food.' 
  },
  { 
    id: 'clean', 
    icon: Home, 
    title: 'Tidy Space', 
    desc: 'While we completely handle the deep cleaning, we deeply appreciate it when guests leave the space tidy. Please wash any used dishes and return furniture to its original layout.' 
  },
  { 
    id: 'lock', 
    icon: Key, 
    title: 'Secure the Suite', 
    desc: 'Please double-check that all windows are closed. When leaving, firmly close the main door and ensure the smart lock is fully engaged.' 
  },
  { 
    id: 'notice', 
    icon: MapPin, 
    title: 'Departure Notice', 
    desc: 'Once you have safely checked out, please send us a quick text message or message on our booking platform so our cleaning staff can prepare the suite for the next guest.' 
  },
];

export function Checkout() {
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('za-completed-steps');
    if (saved) {
      setCompletedSteps(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('za-completed-steps', JSON.stringify(completedSteps));
    const isAllDone = checkoutSteps.every(step => completedSteps[step.id]);
    if (isAllDone && checkoutSteps.length > 0) {
      setShowSuccess(true);
    } else {
      setShowSuccess(false);
    }
  }, [completedSteps]);

  const toggleStep = (id: string) => {
    setCompletedSteps(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="checkout" className="py-24 md:py-32 bg-[#FAF9F6] relative border-t border-za-sand/20">
      
      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-[10%] w-px bg-za-sand/10 hidden lg:block"></div>
      <div className="absolute top-0 bottom-0 right-[10%] w-px bg-za-sand/10 hidden lg:block"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="w-full flex flex-col items-center"
          >
            <h2 className="font-serif font-semibold text-[11vw] md:text-[8vw] leading-[0.8] text-za-espresso tracking-tighter uppercase w-full">
              DEPARTURE
            </h2>
            <h2 className="font-serif font-semibold text-[11vw] md:text-[8vw] leading-[0.8] text-za-espresso tracking-tighter uppercase w-full">
              PROTOCOL
            </h2>
            <p className="font-serif italic text-xl md:text-3xl text-za-charcoal mt-6 max-w-3xl font-light mb-4">
              Check-out by 12:00 noon.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="relative bg-white p-8 md:p-14 shadow-[0_20px_60px_-15px_rgba(44,36,32,0.05)] rounded-sm border border-za-sand/30"
        >
          {/* Subtle ornate corners */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-za-sand/40 hidden md:block"></div>
          <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-za-sand/40 hidden md:block"></div>
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-za-sand/40 hidden md:block"></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-za-sand/40 hidden md:block"></div>

          <AnimatePresence>
            {showSuccess && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="absolute inset-0 z-20 flex items-center justify-center bg-white/95 backdrop-blur-md"
              >
                 <div className="text-center p-8 max-w-sm">
                    <div className="w-20 h-20 rounded-full border border-za-gold/30 flex items-center justify-center mx-auto mb-6 relative">
                       <div className="absolute inset-2 rounded-full bg-za-gold/10 flex items-center justify-center">
                          <CheckCircle size={32} strokeWidth={1} className="text-za-gold" />
                       </div>
                    </div>
                    <h3 className="font-serif text-3xl md:text-4xl text-za-espresso mb-4 italic">Thank You</h3>
                    <p className="font-sans text-sm text-za-charcoal/80 mb-8 leading-relaxed">
                      Your checklist is complete. We deeply appreciate your care for Z&A Suites. Safe travels onwards!
                    </p>
                    <button 
                       onClick={() => setCompletedSteps({})} 
                       className="font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-za-walnut hover:text-za-gold border-b border-za-walnut/30 hover:border-za-gold pb-1 transition-colors"
                    >
                       Reset Checklist
                    </button>
                 </div>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="font-sans text-sm md:text-base text-za-charcoal/70 text-center mb-12 leading-relaxed max-w-2xl mx-auto">
            To ensure a smooth transition for our next guests and secure the swift release of your security deposit, please complete the following steps before your departure.
          </p>

          <div className="space-y-4">
            {checkoutSteps.map((step) => {
              const isDone = completedSteps[step.id];
              return (
                <motion.div 
                  key={step.id}
                  variants={fadeUpVariant}
                  onClick={() => toggleStep(step.id)}
                  className={`group cursor-pointer flex flex-col md:flex-row gap-6 p-6 md:p-8 transition-all duration-500 rounded-none relative overflow-hidden ${
                    isDone 
                      ? 'bg-za-sand/5 grayscale-[0.5] opacity-70' 
                      : 'bg-white hover:bg-za-warm-white'
                  }`}
                >
                  {/* Custom divider top */}
                  <div className="absolute top-0 left-6 right-6 h-px bg-za-sand/20"></div>

                  <div className="flex-shrink-0 relative z-10">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isDone ? 'bg-za-sand/20 text-za-walnut' : 'bg-za-cream text-za-espresso group-hover:scale-110 group-hover:bg-za-gold/10 group-hover:text-za-gold'
                    }`}>
                      <step.icon strokeWidth={1} size={24} />
                    </div>
                  </div>
                  
                  <div className="flex-grow relative z-10">
                    <h4 className={`font-serif text-xl md:text-2xl mb-2 transition-colors ${isDone ? 'text-za-charcoal/60' : 'text-za-espresso group-hover:text-za-gold'}`}>
                       {step.title}
                    </h4>
                    <p className={`font-sans text-xs md:text-sm leading-relaxed transition-colors ${isDone ? 'text-za-charcoal/50' : 'text-za-charcoal/80'}`}>
                       {step.desc}
                    </p>
                  </div>

                  <div className="flex-shrink-0 flex items-center justify-start md:justify-center mt-2 md:mt-0 relative z-10">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 border ${
                      isDone 
                        ? 'bg-za-gold border-za-gold text-white scale-110' 
                        : 'bg-transparent border-za-sand group-hover:border-za-gold/50 text-transparent'
                    }`}>
                      <CheckCircle size={16} strokeWidth={2} className={`transition-all duration-500 ${isDone ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
