import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { fadeUpVariant } from '../lib/animations';
import { Coffee, ShoppingBag, Leaf, Map } from 'lucide-react';

const categories = [
  { id: 'dining', label: 'Dining', icon: Coffee },
  { id: 'shopping', label: 'Shopping', icon: ShoppingBag },
  { id: 'leisure', label: 'Leisure', icon: Leaf },
  { id: 'getting-around', label: 'Getting Around', icon: Map },
];

const places = {
  'dining': [
    { name: 'Lamano Fine Dining Restaurant', desc: 'Premium fine dining experience.', time: 'Nearby' },
    { name: 'The Ranch Steak House', desc: 'Sizzling steaks and hearty meals.', time: 'Nearby' },
    { name: 'Dulce Cafe', desc: 'Perfect spot for coffee and sweet treats.', time: 'Nearby' },
    { name: 'Crabs & Co. Seafood Buffet', desc: 'Fresh local seafood in a buffet spread.', time: 'Nearby' },
    { name: "Coco's South Bistro", desc: 'Classic comfort food in a cozy setting.', time: 'Nearby' },
    { name: "King's Tuna", desc: 'Renowned for fresh tuna dishes.', time: 'Nearby' },
    { name: 'Swiss Deli & Restaurant', desc: 'Hearty European comfort food and deli.', time: '5 min drive' },
    { name: 'Yellow Cab Pizza', desc: 'New York style pizza, open late.', time: '5 min walk' },
    { name: 'Cafe Tavera', desc: 'Local favorites in a cozy setting.', time: '10 min drive' },
    { name: 'Matina Town Square (MTS)', desc: 'Live music, diverse food stalls, and bars.', time: '8 min drive' }
  ],
  'shopping': [
    { name: 'SM City Davao (Ecoland)', desc: 'Major mall with groceries, dining, and retail.', time: '5 min walk' },
    { name: 'Davao Global Township', desc: 'Upcoming lifestyle and commercial district.', time: 'Walking distance' },
    { name: 'S&R Membership Shopping', desc: 'Bulk goods and imported items (membership req).', time: '10 min drive' }
  ],
  'leisure': [
    { name: 'Crocodile Park', desc: 'Wildlife encounters and river walks.', time: '15 min drive' },
    { name: 'Jack\'s Ridge', desc: 'City views, dining, and historic trails.', time: '10 min drive' },
    { name: 'Coastal Road', desc: 'Perfect for morning jogs or sunset walks.', time: '10 min drive' }
  ],
  'getting-around': [
    { name: 'Taxi Stand', desc: 'Available at SM Ecoland entrances.', time: '5 min walk' },
    { name: 'Jeepney Route', desc: 'Quimpo Blvd routes accessible outside the condo.', time: '2 min walk' },
    { name: 'Grab/Foodpanda', desc: 'Deliveries directly to the lobby.', time: 'Available' }
  ]
};

export function LocalGuide() {
  const [activeTab, setActiveTab] = useState('dining');

  return (
    <section id="local-guide" className="py-24 md:py-32 bg-za-cream relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-40 mix-blend-multiply pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-12 md:mb-16 gap-8 text-center md:text-left">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="max-w-xl w-full flex flex-col items-center md:items-start"
          >
            <h2 className="font-serif font-semibold text-[14vw] sm:text-[5.5rem] md:text-[6rem] lg:text-[7rem] leading-[0.8] text-za-espresso tracking-tighter drop-shadow-sm uppercase w-full break-words">
              THE
            </h2>
            <h2 className="font-serif font-semibold text-[14vw] sm:text-[5.5rem] md:text-[6rem] lg:text-[7rem] leading-[0.8] text-za-espresso tracking-tighter drop-shadow-sm uppercase w-full break-words">
              LOCALE
            </h2>
            <p className="font-serif italic text-xl md:text-3xl text-za-walnut mt-6 max-w-3xl font-light w-full">
              A curated guide to our locale.
            </p>
          </motion.div>
          
          <p className="font-sans text-za-charcoal/80 text-sm md:text-base max-w-sm border-t md:border-t-0 md:border-l border-za-sand/50 pt-6 md:pt-0 pb-2 md:pb-0 md:pl-6">
            Discover the best dining, shopping, and leisurely spots just moments away from your door. Handpicked to elevate your stay.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar justify-start gap-4 mb-12 pb-4 -mx-6 px-6 md:mx-0 md:px-0">
           {categories.map(cat => (
             <button
               key={cat.id}
               onClick={() => setActiveTab(cat.id)}
               className={`flex items-center gap-3 px-6 py-4 rounded-sm transition-all whitespace-nowrap flex-shrink-0 relative overflow-hidden group ${
                 activeTab === cat.id 
                   ? 'bg-za-espresso text-za-warm-white shadow-md' 
                   : 'bg-za-warm-white border border-za-sand/30 text-za-charcoal hover:border-za-walnut/50'
               }`}
             >
               <div className={`absolute inset-0 bg-za-gold/10 transform origin-left transition-transform duration-300 ${activeTab === cat.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
               <cat.icon size={18} strokeWidth={1.5} className="relative z-10" />
               <span className="font-sans text-xs uppercase tracking-[0.2em] relative z-10">{cat.label}</span>
             </button>
           ))}
        </div>

        {/* Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
               {(places as any)[activeTab].map((place: any, i: number) => (
                 <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    key={i} 
                    className="bg-white p-8 rounded-sm shadow-sm border border-za-sand/20 hover:border-za-gold/50 hover:shadow-md transition-all duration-300 group flex flex-col h-full relative"
                 >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-za-sand/10 rounded-bl-full transition-colors group-hover:bg-za-gold/10" />
                    
                    <h4 className="font-serif text-xl md:text-2xl text-za-espresso mb-3 pr-8 relative z-10">{place.name}</h4>
                    <p className="font-sans text-sm text-za-charcoal/80 leading-relaxed mb-8 flex-grow relative z-10">{place.desc}</p>
                    
                    <div className="flex items-center gap-3 text-za-walnut font-sans text-[11px] font-medium tracking-widest uppercase mt-auto pt-5 border-t border-za-sand/20 relative z-10">
                       <span className="w-1.5 h-1.5 rounded-full bg-za-gold group-hover:scale-[1.8] group-hover:bg-za-espresso transition-all duration-300 shadow-[0_0_8px_rgba(193,154,107,0.4)]" />
                       {place.time}
                    </div>
                 </motion.div>
               ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
