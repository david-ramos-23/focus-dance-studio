import React from 'react';
import { motion } from 'framer-motion';

interface LiquidChromeProps {
  className?: string;
  delay?: number;
}

const LiquidChrome: React.FC<LiquidChromeProps> = ({ className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: 0.8, 
        scale: 1,
        borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "30% 60% 70% 40% / 50% 60% 30% 60%", "60% 40% 30% 70% / 60% 30% 70% 40%"] 
      }}
      transition={{ 
        duration: 8, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay: delay
      }}
      className={`absolute overflow-hidden pointer-events-none ${className}`}
    >
        {/* Simulating chrome using gradients */}
        <div className="w-full h-full bg-gradient-to-br from-neutralGrey/30 via-warmWhite/50 to-neutralGrey/30 dark:from-carbonBlack/30 dark:via-neutralGrey/20 dark:to-carbonBlack/30 backdrop-blur-xl border border-white/20 dark:border-white/5 shadow-2xl"></div>
    </motion.div>
  );
};

export default LiquidChrome;