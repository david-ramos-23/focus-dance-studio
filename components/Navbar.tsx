import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Clases', href: '#classes' },
    { name: 'Horario', href: '#schedule' },
    { name: 'Profesores', href: '#instructors' },
    { name: 'Tarifas', href: '#pricing' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-warmWhite/80 dark:bg-carbonBlack/80 backdrop-blur-md py-4 border-b border-neutralGrey/20' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#" className="flex flex-col group">
          <div className="font-display font-bold text-2xl tracking-tight text-carbonBlack dark:text-warmWhite flex items-center">
            <span className="w-8 h-8 rounded-full border border-carbonBlack dark:border-warmWhite flex items-center justify-center mr-2 text-sm italic group-hover:bg-deepGreen group-hover:text-white group-hover:border-deepGreen transition-colors duration-300">
              ∞
            </span>
            FOCUS <span className="font-light ml-1">DANCE STUDIO</span>
          </div>
          <span className="text-[0.65rem] uppercase tracking-widest text-neutralGrey pl-11 -mt-1 font-sans font-medium group-hover:text-deepGreen transition-colors">
            By Alonso & Noelia
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm uppercase tracking-widest font-sub font-medium text-carbonBlack/80 dark:text-warmWhite/80 hover:text-deepGreen dark:hover:text-sandNeutral transition-colors relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-deepGreen dark:after:bg-sandNeutral after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-neutralGrey/10 transition-colors text-carbonBlack dark:text-warmWhite"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a 
            href="https://focus.kydemy.com/#/login?redirect=/kydemy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-deepGreen text-white px-6 py-2 rounded-sm font-display font-semibold hover:bg-carbonBlack transition-colors duration-300"
          >
            PORTAL <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleDarkMode}
            className="p-1 text-carbonBlack dark:text-warmWhite"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-carbonBlack dark:text-warmWhite"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-warmWhite dark:bg-carbonBlack overflow-hidden flex flex-col items-center justify-center gap-8 md:hidden shadow-xl border-t border-neutralGrey/20"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-display font-bold text-carbonBlack dark:text-warmWhite hover:text-deepGreen transition-colors"
              >
                {link.name}
              </a>
            ))}
             <a 
              href="https://focus.kydemy.com/#/login?redirect=/kydemy" 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 bg-deepGreen text-white px-8 py-3 rounded-sm font-display font-semibold"
            >
              RESERVAR <ArrowUpRight size={18} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;