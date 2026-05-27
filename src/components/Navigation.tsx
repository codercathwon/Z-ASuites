import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Leaf } from 'lucide-react';

const mainLinks = [
  { name: 'Welcome', href: '#welcome' },
  { name: 'Your Space', href: '#property' },
  { name: 'Gallery', href: '#gallery' },
];

const dropdownLinks = [
  { name: 'House Rules', href: '#house-rules' },
  { name: 'Check-out', href: '#checkout' },
  { name: 'Local Guide', href: '#local-guide' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      
      const totalScroll = document.body.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 h-[2px] bg-za-gold z-[100] origin-left"
        style={{ scaleX: scrollProgress / 100 }}
      />
      
      <header 
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? 'bg-za-cream/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#hero" className="flex items-center gap-4 group">
             <div className="w-14 h-14 rounded-full border-[1px] border-za-gold/40 bg-[#402F24] shadow-md flex items-center justify-center shrink-0 overflow-hidden relative transition-transform duration-500 group-hover:scale-105">
                {/* Image placeholder for the user's uploaded logo */}
                <img src="./logo.jpeg" alt="Z&A Suites" className="absolute inset-0 w-full h-full object-cover z-10" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                
                {/* Fallback CSS logo mimicking the elegant bronze Z&A logo */}
                <div className="flex flex-col items-center justify-center pt-[2px] z-0">
                  <div className="flex items-end leading-none">
                    <span className="font-serif text-2xl text-[#D4AF37] tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>Z&amp;A</span>
                  </div>
                  <span className="font-sans text-[6px] text-za-cream/90 tracking-[0.3em] uppercase mt-1 ml-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>Suites</span>
                </div>
             </div>
             <div className="flex flex-col">
               <span className={`font-serif text-2xl tracking-wide hidden sm:block transition-colors leading-none ${isScrolled ? 'text-za-espresso group-hover:text-za-walnut' : 'text-white'}`} style={{ fontFamily: "'Playfair Display', serif" }}>Z&A</span>
               <span className={`font-sans text-[9px] tracking-[0.2em] uppercase hidden sm:block mt-2 ${isScrolled ? 'text-za-walnut' : 'text-white/80'}`}>Suites Davao</span>
             </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {mainLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`group relative font-sans text-[11px] tracking-widest-plus uppercase transition-colors ${isScrolled ? 'text-za-walnut hover:text-za-espresso' : 'text-white/90 hover:text-white'}`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-za-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            
            <div 
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              onFocus={() => setIsDropdownOpen(true)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                  setIsDropdownOpen(false);
                }
              }}
            >
              <button 
                className={`flex items-center gap-1 font-sans text-[11px] tracking-widest-plus uppercase transition-colors rounded-sm focus:outline-none focus:ring-2 focus:ring-za-gold/50 ${isScrolled ? 'text-za-walnut hover:text-za-espresso' : 'text-white/90 hover:text-white'}`}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                Information <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="absolute top-full right-0 mt-4 w-48 bg-za-cream/95 backdrop-blur-md shadow-xl border border-za-espresso/10 rounded-md overflow-hidden py-2"
                    role="menu"
                  >
                    {dropdownLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        role="menuitem"
                        className="block px-4 py-2 font-sans text-[11px] tracking-widest-plus uppercase text-za-walnut hover:bg-za-espresso/5 hover:text-za-espresso transition-colors focus:bg-za-espresso/5 focus:outline-none focus:text-za-espresso"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {link.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`lg:hidden p-2 -mr-2 transition-colors ${isScrolled ? 'text-za-espresso' : 'text-white'}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-za-espresso flex flex-col justify-center px-8"
          >
            <button 
              onClick={closeMenu}
              className="absolute top-6 right-6 text-za-cream p-2"
              aria-label="Close menu"
            >
              <X size={32} strokeWidth={1} />
            </button>

            <nav className="flex flex-col space-y-6 text-center">
              {[...mainLinks, ...dropdownLinks].map((link, i) => (
                <motion.a 
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.2, duration: 0.4 }}
                  className="font-serif text-3xl md:text-4xl text-za-cream hover:text-za-gold transition-colors tracking-wide"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-12 left-0 right-0 text-center"
            >
              <span className="font-serif text-xl tracking-widest text-za-cream/50 flex items-center justify-center gap-2">
                <Leaf size={16} /> Z&A Suites
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
