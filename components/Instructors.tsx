import React from 'react';
import { INSTRUCTORS } from '../constants';
import { motion } from 'framer-motion';

const Instructors: React.FC = () => {
  return (
    <section id="instructors" className="py-24 bg-warmWhite dark:bg-carbonBlack">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-carbonBlack dark:text-warmWhite mb-4">PROFESORES</h2>
          <p className="font-sans text-neutralGrey dark:text-sandNeutral max-w-2xl">
            Mentores apasionados. Artistas en activo. Nuestro equipo está seleccionado para corregir, inspirar y elevar tu danza.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {INSTRUCTORS.map((instructor, index) => (
            <motion.div
              key={instructor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="overflow-hidden mb-6 relative bg-neutralGrey/5 dark:bg-warmWhite/5 rounded-sm">
                <img
                  src={instructor.imageUrl}
                  alt={instructor.name}
                  className="w-full h-auto object-contain grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbonBlack/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              <h3 className="font-display text-2xl font-bold text-carbonBlack dark:text-warmWhite mb-1 group-hover:text-deepGreen transition-colors">{instructor.name}</h3>
              <p className="text-xs font-bold tracking-widest text-deepGreen dark:text-sandNeutral uppercase mb-3">{instructor.role}</p>
              <p className="font-sans text-sm text-neutralGrey leading-relaxed border-l-2 border-neutralGrey/30 pl-3">
                {instructor.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;