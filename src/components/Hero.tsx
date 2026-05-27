import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { fadeUpVariant, staggerContainer } from '../lib/animations';
import { Home, MapPin, Key, Image as ImageIcon, FileText, CheckSquare, Compass, Phone, Star } from 'lucide-react';
import { P } from '../lib/images';

const navItems = [
  { icon: Home, label: 'Welcome', href: '#welcome' },
  { icon: MapPin, label: 'Directions', href: '#property' },
  { icon: Key, label: 'The Space', href: '#property' },
  { icon: ImageIcon, label: 'Gallery', href: '#gallery' },
  { icon: FileText, label: 'House Rules', href: '#house-rules' },
  { icon: CheckSquare, label: 'Check-Out', href: '#checkout' },
  { icon: Compass, label: 'Local Guide', href: '#local-guide' },
  { icon: Phone, label: 'Contact', href: '#contact' },
  { icon: Star, label: 'Review', href: '#farewell' },
];

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-za-charcoal">
      {/* Background Image Parallax */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-za-charcoal/40 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-za-cream via-transparent to-za-charcoal/60 z-10" />
        <img 
          src={P.HERO_BG}
          alt="Z&A Suites Luxury Interior" 
          className="w-full h-full object-cover filter sepia-[0.15]"
        />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 w-full">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-center w-full max-w-4xl pt-32"
        >
          {/* Header text */}
          <motion.div variants={fadeUpVariant} className="mb-16 flex flex-col items-center">
            <span className="font-sans text-[10px] md:text-sm tracking-[0.4em] uppercase text-za-cream mb-6 drop-shadow-md">
              Davao City
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-za-white tracking-tight font-normal mb-8 drop-shadow-lg max-w-4xl leading-tight">
              Luxury that <span className="italic font-light text-za-gold drop-shadow-sm font-['Cormorant_Garamond']">feels like</span> home.
            </h1>
            <div className="flex items-center gap-6 w-full max-w-[280px]">
               <div className="h-[1px] flex-1 bg-za-gold/50"></div>
               <span className="font-sans text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-za-gold/90 drop-shadow-sm">
                 Explore Z&A Suites
               </span>
               <div className="h-[1px] flex-1 bg-za-gold/50"></div>
            </div>
          </motion.div>
          
          {/* Icon Grid (Bento style on desktop, grid on mobile) */}
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-y-12 gap-x-6 md:gap-x-12 w-full mt-4 bg-za-cream/95 backdrop-blur-md p-8 md:p-12 md:rounded-[2rem] shadow-2xl border border-za-cream/20"
          >
             {navItems.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  onClick={scrollTo(item.href)}
                  variants={fadeUpVariant}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center group cursor-pointer"
                >
                   <div className="text-za-espresso group-hover:text-za-gold transition-colors duration-500 mb-4 bg-za-white/50 p-4 rounded-full shadow-sm group-hover:shadow-md ring-1 ring-za-sand/20">
                      <item.icon strokeWidth={1} size={28} className="md:w-8 md:h-8" />
                   </div>
                   <span className="font-sans text-[9px] md:text-[10px] tracking-widest text-center text-za-espresso/80 uppercase leading-tight group-hover:text-za-charcoal transition-colors">
                      {item.label}
                   </span>
                </motion.a>
             ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
