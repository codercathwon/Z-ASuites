import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { fadeUpVariant, staggerContainer } from '../lib/animations';
import { Check, Clock, Sparkles, Trash2, Coffee, Bath, Tv, CheckSquare, Lock, Wallet, Bell } from 'lucide-react';

const checkoutSteps = [
  { id: 'time', icon: Clock, title: 'Check-Out Time', desc: 'Vacate the property by 12:00 noon.' },
  { id: 'clean', icon: Sparkles, title: 'Cleanliness', desc: 'Tidy up, return furniture to original placement. Cleaning fee is not included in your rate.' },
  { id: 'trash', icon: Trash2, title: 'Trash Disposal', desc: 'Take trash to the bins. Dispose all perishables. Do not leave food in the refrigerator.' },
  { id: 'dishes', icon: Coffee, title: 'Dishes', desc: 'Wash all dishes and return to their original placement.' },
  { id: 'linens', icon: Bath, title: 'Linens', desc: 'Ensure all towels, blankets, and linens are complete and free from stains.' },
  { id: 'appliances', icon: Tv, title: 'Appliances', desc: 'Turn off the AC, all appliances, and all lights.' },
  { id: 'double', icon: CheckSquare, title: 'Double Check', desc: 'Do a full walk-through. Check you haven\'t left any personal belongings.' },
  { id: 'security', icon: Lock, title: 'Security', desc: 'Close all windows. Ensure the door is securely locked.' },
  { id: 'deposit', icon: Wallet, title: 'Security Deposit', desc: 'Refund will be processed by 3:00 PM provided there are no damages.' },
  { id: 'notice', icon: Bell, title: 'Check-Out Notice', desc: 'Inform the host that you are leaving.' },
];

export function Checkout() {
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  // Load from local storage
  useEffect(() => {
    const saved = localStorage.getItem('za-completed-steps');
    if (saved) {
      setCompletedSteps(JSON.parse(saved));
    }
  }, []);

  // Save and check completion
  useEffect(() => {
    localStorage.setItem('za-completed-steps', JSON.stringify(completedSteps));
    
    // Check if all steps done
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
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
          >
            <h2 className="text-[12vw] md:text-[6rem] lg:text-[7rem] font-serif text-za-espresso leading-none uppercase tracking-tighter mb-6 relative inline-block">
              Check-Out
              <span className="absolute -top-4 -right-8 text-3xl text-za-gold">✦</span>
            </h2>
            <div className="text-za-walnut tracking-[0.3em] text-[10px] md:text-xs uppercase font-sans flex items-center justify-center gap-4">
               <div className="w-8 h-[1px] bg-za-sand"></div>
               Instructions
               <div className="w-8 h-[1px] bg-za-sand"></div>
            </div>
          </motion.div>
        </div>

        {/* Steps List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-y-16 relative">
          
          <AnimatePresence>
            {showSuccess && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 z-20 flex items-center justify-center bg-za-cream/95 backdrop-blur-md rounded-sm"
              >
                 <div className="text-center p-12 bg-za-warm-white border border-za-gold/50 rounded-sm shadow-xl max-w-lg w-full">
                    <div className="w-20 h-20 rounded-full bg-za-gold text-za-white flex items-center justify-center mx-auto mb-8 shadow-lg shadow-za-gold/20">
                       <Check size={40} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-4xl md:text-5xl text-za-espresso mb-4">All Set!</h3>
                    <p className="font-sans text-za-charcoal/80 mb-8 tracking-wide">Safe travels. We hope to host you again. 🌿</p>
                    <button 
                       onClick={() => setCompletedSteps({})} 
                       className="text-xs uppercase tracking-[0.2em] text-za-walnut hover:text-za-espresso border-b border-za-walnut pb-1 transition-colors"
                    >
                       Reset Checklist
                    </button>
                 </div>
              </motion.div>
            )}
          </AnimatePresence>

          {checkoutSteps.map((step) => {
            const isDone = completedSteps[step.id];
            
            return (
              <motion.div 
                key={step.id}
                layout
                onClick={() => toggleStep(step.id)}
                className={`group cursor-pointer flex flex-col items-center text-center p-6 transition-all duration-300 ${
                  isDone ? 'opacity-40 grayscale hover:opacity-80' : 'opacity-100'
                }`}
              >
                 <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-za-sand flex items-center justify-center text-za-espresso mb-6 group-hover:scale-105 group-hover:border-za-gold transition-all bg-za-warm-white shadow-sm duration-500">
                    <step.icon strokeWidth={0.75} size={36} />
                 </div>
                 <h4 className="font-serif text-xl md:text-2xl text-za-espresso mb-3 tracking-wide">
                    {step.title}
                 </h4>
                 <p className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.1em] text-za-charcoal leading-relaxed max-w-[280px]">
                    {step.desc}
                 </p>
                 
                  <div className={`mt-8 w-6 h-6 flex items-center justify-center transition-colors ${
                    isDone ? 'bg-za-gold text-za-white' : 'bg-za-warm-white border border-za-sand text-transparent group-hover:border-za-walnut'
                  }`}>
                    <Check size={16} strokeWidth={2} className={isDone ? 'opacity-100' : 'opacity-0'} />
                  </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
