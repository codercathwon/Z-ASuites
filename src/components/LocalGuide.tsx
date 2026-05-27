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
    { name: 'Swiss Deli & Restaurant', desc: 'Hearty European comfort food and deli.', time: '5 min drive' },
    { name: 'Yellow Cab Pizza', desc: 'New York style pizza, open late.', time: '5 min walk (SM Ecoland)' },
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
    <section id="local-guide" className="py-24 bg-za-cream">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariant}
          className="text-center mb-12"
        >
          <div className="text-za-walnut tracking-widest-plus text-xs md:text-sm uppercase font-sans mb-4">Neighborhood</div>
          <h2 className="text-4xl md:text-5xl font-serif text-za-espresso">Local Area Guide</h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar justify-start md:justify-center gap-2 mb-12 pb-4 -mx-6 px-6 md:mx-0 md:px-0">
           {categories.map(cat => (
             <button
               key={cat.id}
               onClick={() => setActiveTab(cat.id)}
               className={`flex items-center gap-2 px-5 py-3 rounded-none border font-sans text-xs uppercase tracking-[0.15em] transition-all whitespace-nowrap flex-shrink-0 ${
                 activeTab === cat.id 
                   ? 'bg-za-espresso text-za-cream border-za-espresso shadow-sm' 
                   : 'bg-za-warm-white text-za-charcoal border-za-sand/30 hover:border-za-walnut'
               }`}
             >
               <cat.icon size={16} strokeWidth={1.5} />
               {cat.label}
             </button>
           ))}
        </div>

        {/* Content */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            >
               {(places as any)[activeTab].map((place: any, i: number) => (
                 <div key={i} className="bg-za-warm-white p-6 rounded-sm border border-za-sand/20 hover:border-za-sand/60 hover:shadow-sm transition-all group">
                    <h4 className="font-serif text-xl md:text-2xl text-za-espresso mb-2">{place.name}</h4>
                    <p className="font-sans text-sm text-za-charcoal font-light mb-4 line-clamp-2">{place.desc}</p>
                    
                    <div className="flex items-center gap-2 text-za-walnut font-sans text-xs tracking-wide uppercase mt-auto pt-4 border-t border-za-sand/10">
                       <div className="w-1.5 h-1.5 rounded-full bg-za-gold group-hover:scale-150 transition-transform" />
                       {place.time}
                    </div>
                 </div>
               ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
