import React from 'react';
import { CLASSES, SCHEDULE_DAYS } from '../constants';
import { motion } from 'framer-motion';

const Schedule: React.FC = () => {
  return (
    <section id="schedule" className="py-24 bg-warmWhite dark:bg-carbonBlack relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16 text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-carbonBlack dark:text-warmWhite mb-4">HORARIO SEMANAL</h2>
          <p className="font-sans text-neutralGrey dark:text-sandNeutral">Encuentra tu momento. Reserva tu espacio.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {SCHEDULE_DAYS.map((day, index) => {
            const daysClasses = CLASSES.filter(c => c.day === day).sort((a, b) => a.time.localeCompare(b.time));
            
            return (
              <motion.div 
                key={day}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-neutral-900 border border-neutralGrey/20 p-4 rounded-sm flex flex-col h-full min-h-[300px]"
              >
                <h3 className="font-display text-xl font-bold text-carbonBlack dark:text-warmWhite mb-6 pb-2 border-b border-deepGreen">{day}</h3>
                
                <div className="flex flex-col gap-4">
                  {daysClasses.length > 0 ? (
                    daysClasses.map(cls => (
                      <div key={cls.id} className="group cursor-pointer">
                        <div className="flex justify-between items-baseline mb-1">
                          <span className="font-mono text-sm font-semibold text-deepGreen dark:text-sandNeutral">{cls.time}</span>
                          <span className="text-xs text-neutralGrey uppercase">{cls.level}</span>
                        </div>
                        <h4 className="font-sans font-medium text-carbonBlack dark:text-warmWhite group-hover:text-deepGreen transition-colors">{cls.name}</h4>
                        <p className="text-xs text-neutralGrey italic mt-1">{cls.instructor}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-neutralGrey/50 italic py-4">Sin clases programadas</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
            <a 
              href="https://focus.kydemy.com/#/login?redirect=/kydemy" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-b border-carbonBlack dark:border-warmWhite text-carbonBlack dark:text-warmWhite pb-1 hover:text-deepGreen hover:border-deepGreen transition-all font-display uppercase tracking-widest text-sm"
            >
              Ir al calendario completo
            </a>
        </div>
      </div>
    </section>
  );
};

export default Schedule;