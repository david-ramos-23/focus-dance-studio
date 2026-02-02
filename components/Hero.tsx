import React from 'react';
import { motion } from 'framer-motion';
import LiquidChrome from './LiquidChrome';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-warmWhite dark:bg-carbonBlack px-6 pt-20">
      
      {/* Background Liquid Elements */}
      <LiquidChrome className="w-[500px] h-[500px] top-10 -right-20 opacity-30" delay={0} />
      <LiquidChrome className="w-[400px] h-[400px] -bottom-20 -left-20 opacity-20" delay={2} />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <div className="md:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-sub text-deepGreen dark:text-sandNeutral text-sm tracking-[0.2em] uppercase mb-4 font-bold">
              Barcelona • Premium Dance Studio
            </h2>
            <h1 className="font-display text-6xl md:text-8xl font-bold leading-[0.9] text-carbonBlack dark:text-warmWhite mb-8">
              ELEVATE <br/>
              YOUR <span className="italic font-light text-neutralGrey">LEVEL</span>
            </h1>
            <p className="font-sans text-lg md:text-xl text-carbonBlack/70 dark:text-warmWhite/70 max-w-lg mb-10 leading-relaxed">
              Clases con intención. Profesores que corrigen de verdad. Un ambiente social que inspira. Un espacio diseñado para tu evolución.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#schedule" 
                className="bg-deepGreen hover:bg-carbonBlack dark:hover:bg-sandNeutral dark:hover:text-carbonBlack text-white px-8 py-4 text-center rounded-sm font-display font-semibold tracking-wide transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                VER HORARIOS
              </a>
              <a 
                href="#classes" 
                className="border border-carbonBlack dark:border-warmWhite text-carbonBlack dark:text-warmWhite hover:bg-carbonBlack hover:text-white dark:hover:bg-warmWhite dark:hover:text-carbonBlack px-8 py-4 text-center rounded-sm font-display font-semibold tracking-wide transition-all duration-300"
              >
                EXPLORAR ESTILOS
              </a>
            </div>
          </motion.div>
        </div>

        {/* Visual Content */}
        <div className="md:col-span-5 h-full relative hidden md:block">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, delay: 0.2 }}
             className="relative w-full aspect-[3/4]"
           >
              <div className="absolute inset-0 bg-neutralGrey/20 transform rotate-6 z-0 rounded-sm"></div>
              <img 
                src="https://images.unsplash.com/photo-1546427660-eb346c344dbc?q=80&w=1000" 
                alt="Dancers in motion" 
                className="relative z-10 w-full h-full object-cover rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
              />
           </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-carbonBlack dark:text-warmWhite opacity-50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;