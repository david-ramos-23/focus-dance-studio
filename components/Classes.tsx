import React, { useState } from 'react';
import { CLASSES } from '../constants';
import { DanceStyle } from '../types';
import { motion } from 'framer-motion';
import { ArrowUpRight, Search } from 'lucide-react';

const Classes: React.FC = () => {
  const [filter, setFilter] = useState<DanceStyle | 'All'>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClasses = CLASSES.filter(cls => {
    const matchesStyle = filter === 'All' || cls.style === filter;
    const matchesSearch = cls.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          cls.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStyle && matchesSearch;
  });

  // Unique styles for filter buttons
  const styles = ['All', ...Object.values(DanceStyle).filter(s => s !== DanceStyle.ALL)];

  return (
    <section id="classes" className="py-24 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div>
            <h2 className="font-display text-4xl font-bold text-carbonBlack dark:text-warmWhite mb-2">CLASES</h2>
            <p className="font-sans text-neutralGrey">Explora nuestras disciplinas.</p>
          </div>
          
          <div className="relative w-full md:w-auto">
             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutralGrey" size={18} />
             <input 
               type="text" 
               placeholder="Buscar clase o profesor..." 
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="pl-10 pr-4 py-2 border-b border-neutralGrey bg-transparent text-carbonBlack dark:text-warmWhite focus:outline-none focus:border-deepGreen w-full md:w-64"
             />
          </div>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-3 mb-12">
          {styles.map((style) => (
            <button
              key={style}
              onClick={() => setFilter(style as DanceStyle | 'All')}
              className={`px-4 py-1.5 rounded-full text-sm border transition-all duration-300 font-medium ${
                filter === style 
                  ? 'bg-deepGreen border-deepGreen text-white' 
                  : 'bg-transparent border-neutralGrey text-neutralGrey hover:border-carbonBlack hover:text-carbonBlack dark:hover:border-warmWhite dark:hover:text-warmWhite'
              }`}
            >
              {style === 'All' ? 'Todas' : style}
            </button>
          ))}
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClasses.map((cls) => (
            <motion.div
              key={cls.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-warmWhite dark:bg-carbonBlack border border-neutralGrey/10 p-8 hover:border-deepGreen/50 transition-colors duration-300 shadow-sm hover:shadow-lg"
            >
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="text-deepGreen" />
              </div>

              <span className="text-xs font-bold tracking-widest text-deepGreen dark:text-sandNeutral uppercase mb-2 block">{cls.style}</span>
              <h3 className="font-display text-2xl font-bold text-carbonBlack dark:text-warmWhite mb-1">{cls.name}</h3>
              <p className="text-sm text-neutralGrey mb-6">{cls.level}</p>
              
              <div className="flex items-center justify-between border-t border-neutralGrey/20 pt-4 mt-auto">
                 <div className="flex flex-col">
                    <span className="text-xs text-neutralGrey uppercase">Profesor</span>
                    <span className="font-medium text-sm text-carbonBlack dark:text-warmWhite">{cls.instructor}</span>
                 </div>
                 <div className="flex flex-col text-right">
                    <span className="text-xs text-neutralGrey uppercase">Horario</span>
                    <span className="font-medium text-sm text-carbonBlack dark:text-warmWhite">{cls.day} {cls.time}</span>
                 </div>
              </div>

              <a 
                href="https://focus.kydemy.com/#/login?redirect=/kydemy" 
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label={`Reservar ${cls.name}`}
              ></a>
            </motion.div>
          ))}
        </div>

        {filteredClasses.length === 0 && (
          <div className="text-center py-20 text-neutralGrey">
            <p>No se encontraron clases con los filtros seleccionados.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Classes;