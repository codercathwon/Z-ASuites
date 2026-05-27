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
    <section id="checkout" className="py-24 md:py-32 bg-za-cream relative">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
          >
            <h2 className="text-4xl md:text-6xl font-serif text-za-espresso leading-none mb-6">
              Check-Out Protocol
            </h2>
            <div className="text-za-walnut tracking-[0.2em] text-xs uppercase font-sans flex items-center justify-center gap-4">
               <div className="w-12 h-[1px] bg-za-sand"></div>
               BY 12:00 NOON
               <div className="w-12 h-[1px] bg-za-sand"></div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="relative bg-za-warm-white p-8 md:p-12 shadow-sm rounded-sm border border-za-sand/20"
        >
          <AnimatePresence>
            {showSuccess && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-20 flex items-center justify-center bg-za-warm-white/95 backdrop-blur-sm"
              >
                 <div className="text-center p-8 max-w-sm">
                    <div className="w-16 h-16 rounded-full bg-za-gold/10 text-za-gold flex items-center justify-center mx-auto mb-6">
                       <CheckCircle size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-3xl text-za-espresso mb-3">Thank You</h3>
                    <p className="font-sans text-sm text-za-charcoal/80 mb-6 leading-relaxed">
                      Your checklist is complete. We deeply appreciate your care for Z&A Suites. Safe travels onwards!
                    </p>
                    <button 
                       onClick={() => setCompletedSteps({})} 
                       className="text-xs uppercase tracking-[0.1em] text-za-walnut hover:text-za-espresso border-b border-za-walnut pb-1 transition-colors"
                    >
                       Reset Checklist
                    </button>
                 </div>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="font-sans text-sm md:text-base text-za-charcoal/80 text-center mb-10 leading-relaxed max-w-2xl mx-auto">
            To ensure a smooth transition for our next guests and secure the swift release of your security deposit, please complete the following steps before your departure.
          </p>

          <div className="space-y-6">
            {checkoutSteps.map((step) => {
              const isDone = completedSteps[step.id];
              return (
                <motion.div 
                  key={step.id}
                  variants={fadeUpVariant}
                  onClick={() => toggleStep(step.id)}
                  className={`group cursor-pointer flex flex-col md:flex-row gap-6 p-6 border transition-all duration-300 rounded-sm ${
                    isDone 
                      ? 'border-za-sand/30 bg-za-cream/30 opacity-60' 
                      : 'border-za-sand/50 bg-white hover:border-za-gold hover:shadow-md'
                  }`}
                >
                  <div className="flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                      isDone ? 'bg-za-sand/20 text-za-walnut' : 'bg-za-cream text-za-espresso group-hover:bg-za-gold/10 group-hover:text-za-gold'
                    }`}>
                      <step.icon strokeWidth={1.5} size={20} />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h4 className="font-serif text-xl text-za-espresso mb-2">
                       {step.title}
                    </h4>
                    <p className="font-sans text-xs md:text-sm text-za-charcoal/70 leading-relaxed">
                       {step.desc}
                    </p>
                  </div>

                  <div className="flex-shrink-0 flex items-center justify-start md:justify-center mt-2 md:mt-0">
                    <div className={`w-6 h-6 rounded-sm flex items-center justify-center transition-all border ${
                      isDone 
                        ? 'bg-za-gold border-za-gold text-white' 
                        : 'bg-transparent border-za-sand group-hover:border-za-gold text-transparent'
                    }`}>
                      <CheckCircle size={14} strokeWidth={2.5} className={isDone ? 'opacity-100' : 'opacity-0'} />
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
