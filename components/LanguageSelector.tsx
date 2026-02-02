import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useLanguage } from '../src/hooks/useLanguage';
import { Language } from '../src/i18n';

const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'ca', label: 'Català', flag: '🏴' },
];

const LanguageSelector: React.FC = () => {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const currentLang = languages.find(l => l.code === language) || languages[0];

    return (
        <div className="relative">
            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-sm hover:bg-neutralGrey/10 dark:hover:bg-warmWhite/10 transition-colors"
                aria-label="Select language"
            >
                <Globe size={18} className="text-carbonBlack dark:text-warmWhite" />
                <span className="text-sm font-medium text-carbonBlack dark:text-warmWhite">
                    {currentLang.flag} {currentLang.code.toUpperCase()}
                </span>
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <div
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Menu */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute right-0 mt-2 w-48 bg-warmWhite dark:bg-carbonBlack border border-neutralGrey/20 rounded-sm shadow-xl z-50 overflow-hidden"
                        >
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => {
                                        setLanguage(lang.code);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${language === lang.code
                                        ? 'bg-deepGreen text-white'
                                        : 'hover:bg-neutralGrey/10 dark:hover:bg-warmWhite/10 text-carbonBlack dark:text-warmWhite'
                                        }`}
                                >
                                    <span className="text-xl">{lang.flag}</span>
                                    <span className="font-medium">{lang.label}</span>
                                    {language === lang.code && (
                                        <span className="ml-auto text-xs">✓</span>
                                    )}
                                </button>
                            ))}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default LanguageSelector;
