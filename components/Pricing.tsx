import React from 'react';
import { PRICING } from '../constants';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollPosition = container.scrollLeft + (container.offsetWidth / 2);

      let closestIndex = 0;
      let minDistance = Number.MAX_VALUE;

      // Encontrar qué tarjeta está más cerca del centro
      Array.from(container.children).forEach((child, index) => {
        if (index < PRICING.length) { // Ignorar el spacer final
          const card = child as HTMLElement;
          const cardCenter = card.offsetLeft + (card.offsetWidth / 2);
          const distance = Math.abs(scrollPosition - cardCenter);

          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
          }
        }
      });

      setActiveIndex(closestIndex);
    }
  };

  React.useEffect(() => {
    // Scroll automático al plan recomendado con delay
    const timer = setTimeout(() => {
      if (scrollContainerRef.current) {
        const recommendedIndex = PRICING.findIndex(p => p.recommended);
        if (recommendedIndex !== -1) {
          setActiveIndex(recommendedIndex);
          // El resto de la lógica de scroll inicial se mantiene, pero actualizamos el estado
        }

        const recommendedCard = scrollContainerRef.current.querySelector<HTMLElement>('[data-recommended="true"]');
        if (recommendedCard) {
          const containerWidth = scrollContainerRef.current.offsetWidth;
          const cardLeft = recommendedCard.offsetLeft;
          const cardWidth = recommendedCard.offsetWidth;

          const scrollLeft = cardLeft - (containerWidth / 2) + (cardWidth / 2);

          scrollContainerRef.current.scrollTo({
            left: scrollLeft,
            behavior: 'smooth'
          });
        }
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      const newScrollLeft = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-white dark:bg-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-carbonBlack dark:text-warmWhite mb-4">TARIFAS</h2>
          <p className="text-neutralGrey">Invierte en tu formación. Flexibilidad total.</p>
        </div>



        {/* Slider Area with Floating Navigation */}
        <div className="relative group">
          {/* Navigation Button Left */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-neutralGrey/20 text-carbonBlack dark:text-warmWhite hover:bg-white dark:hover:bg-neutral-700 transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          </button>

          {/* Navigation Button Right */}
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-neutralGrey/20 text-carbonBlack dark:text-warmWhite hover:bg-white dark:hover:bg-neutral-700 transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </button>

          {/* Slider Container */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-12 pt-8 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {PRICING.map((plan, index) => (
              <motion.div
                key={plan.id}
                data-recommended={plan.recommended}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`min-w-[85vw] md:min-w-[350px] lg:min-w-[380px] snap-center relative p-8 md:p-10 border flex flex-col h-auto flex-shrink-0 ${plan.recommended
                  ? 'border-deepGreen bg-warmWhite dark:bg-carbonBlack shadow-2xl z-10 scale-[1.02] md:scale-105 my-2'
                  : 'border-neutralGrey/20 bg-white dark:bg-neutral-900/50 hover:border-neutralGrey/50 my-6 scale-95 opacity-90 hover:opacity-100 hover:scale-100'
                  } rounded-sm transition-all duration-300`}
              >
                {plan.recommended && (
                  <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-deepGreen text-white text-xs font-bold tracking-widest uppercase px-4 py-1 shadow-lg">
                    Recomendado
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="font-display text-2xl font-bold text-carbonBlack dark:text-warmWhite mb-2">{plan.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-deepGreen dark:text-sandNeutral">{plan.price}</span>
                    <span className="text-neutralGrey ml-2 text-sm font-medium uppercase tracking-wide">{plan.period}</span>
                  </div>
                </div>

                <div className="flex-grow space-y-8">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutralGrey mb-4 border-b border-neutralGrey/10 pb-2">Incluye</p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-carbonBlack dark:text-warmWhite leading-snug">
                          <Check size={16} className="text-deepGreen flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.upgrades && plan.upgrades.length > 0 && (
                    <div className="bg-neutralGrey/5 dark:bg-white/5 p-4 rounded-sm -mx-2">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-deepGreen mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-deepGreen"></span>
                        Mejoras Disponibles
                      </p>
                      <ul className="space-y-2.5">
                        {plan.upgrades.map((upgrade, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-neutralGrey dark:text-neutral-400">
                            <span className="text-deepGreen font-bold text-xs mt-0.5">+</span>
                            <span className="leading-snug">{upgrade}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <a
                  href="https://focus.kydemy.com/#/login?redirect=/kydemy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-4 px-6 font-display font-bold tracking-wider uppercase text-sm mt-8 transition-all duration-300 transform hover:-translate-y-1 ${plan.recommended
                    ? 'bg-deepGreen text-white shadow-lg hover:shadow-deepGreen/30 hover:bg-carbonBlack'
                    : 'bg-transparent border-2 border-carbonBlack dark:border-warmWhite text-carbonBlack dark:text-warmWhite hover:bg-carbonBlack hover:text-white dark:hover:bg-warmWhite dark:hover:text-carbonBlack'
                    }`}
                >
                  Seleccionar
                </a>
              </motion.div>
            ))}

            {/* Spacer for last item scrolling */}
            <div className="min-w-[1px] opacity-0"></div>
          </div>

          {/* Mobile Swipe Hint */}
          <div className="md:hidden flex justify-center mt-4 gap-2">
            {PRICING.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const container = scrollContainerRef.current;
                    // Scroll to specific child index
                    const child = container.children[i] as HTMLElement;
                    if (child) {
                      const containerWidth = container.offsetWidth;
                      const cardLeft = child.offsetLeft;
                      const cardWidth = child.offsetWidth;
                      const scrollLeft = cardLeft - (containerWidth / 2) + (cardWidth / 2);
                      container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
                    }
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex
                  ? 'bg-deepGreen w-6'
                  : 'bg-neutralGrey/30 hover:bg-neutralGrey/50'
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;