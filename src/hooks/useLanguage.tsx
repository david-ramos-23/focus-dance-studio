import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { Language, detectBrowserLanguage, getSavedLanguage, saveLanguage, getTranslation } from '../i18n';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguageState] = useState<Language>(() => {
        // Priority: saved > browser > default
        return getSavedLanguage() || detectBrowserLanguage();
    });

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        saveLanguage(lang);
    };

    const t = (key: string): string => {
        return getTranslation(language, key);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextType => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
