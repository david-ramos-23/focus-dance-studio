import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../src/hooks/useLanguage';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-carbonBlack px-6 pt-20">

      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-carbonBlack/40" />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center justify-center text-center">



        {/* Tagline and Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl"
        >
          <h2 className="font-sub text-sandNeutral text-sm md:text-base tracking-[0.2em] uppercase mb-6 font-bold">
            {t('hero.tagline')}
          </h2>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] text-warmWhite mb-8">
            {t('hero.title').split(' ')[0]} <br />
            {t('hero.title').split(' ')[1]} <span className="italic font-light text-neutralGrey">{t('hero.title').split(' ')[2]}</span>
          </h1>

          <p className="font-sans text-lg md:text-xl text-warmWhite/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#schedule"
              className="bg-deepGreen hover:bg-deepGreen/80 text-white px-8 py-4 text-center rounded-sm font-display font-semibold tracking-wide transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              {t('hero.cta_schedule')}
            </a>
            <a
              href="#classes"
              className="border-2 border-warmWhite text-warmWhite hover:bg-warmWhite hover:text-carbonBlack px-8 py-4 text-center rounded-sm font-display font-semibold tracking-wide transition-all duration-300"
            >
              {t('hero.cta_classes')}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-warmWhite opacity-50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;