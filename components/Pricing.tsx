import React from 'react';
import { PRICING } from '../constants';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-carbonBlack dark:text-warmWhite mb-4">TARIFAS</h2>
          <p className="text-neutralGrey">Invierte en tu formación.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {PRICING.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 md:p-10 border ${
                plan.recommended 
                  ? 'border-deepGreen bg-warmWhite dark:bg-carbonBlack shadow-xl z-10 scale-105' 
                  : 'border-neutralGrey/20 bg-transparent hover:border-neutralGrey/50'
              } transition-all duration-300`}
            >
              {plan.recommended && (
                <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-deepGreen text-white text-xs font-bold tracking-widest uppercase px-4 py-1">
                  Recomendado
                </span>
              )}

              <h3 className="font-display text-2xl font-bold text-carbonBlack dark:text-warmWhite mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold text-deepGreen dark:text-sandNeutral">{plan.price}</span>
                <span className="text-neutralGrey ml-2">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-carbonBlack dark:text-warmWhite">
                    <Check size={16} className="text-deepGreen flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="https://focus.kydemy.com/#/login?redirect=/kydemy" 
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-3 px-6 font-semibold transition-colors duration-300 ${
                  plan.recommended
                    ? 'bg-deepGreen text-white hover:bg-carbonBlack'
                    : 'bg-transparent border border-carbonBlack dark:border-warmWhite text-carbonBlack dark:text-warmWhite hover:bg-carbonBlack hover:text-white dark:hover:bg-warmWhite dark:hover:text-carbonBlack'
                }`}
              >
                SELECCIONAR
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;