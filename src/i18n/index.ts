import esTranslations from './es.json';
import enTranslations from './en.json';
import caTranslations from './ca.json';

export type Language = 'es' | 'en' | 'ca';

export interface Translations {
    [key: string]: any;
}

const translations: Record<Language, Translations> = {
    es: esTranslations,
    en: enTranslations,
    ca: caTranslations,
};

// Detect browser language
export const detectBrowserLanguage = (): Language => {
    if (typeof window === 'undefined') return 'es';

    const browserLang = navigator.language.split('-')[0] as Language;
    const supportedLangs: Language[] = ['es', 'en', 'ca'];

    return supportedLangs.includes(browserLang) ? browserLang : 'es';
};

// Get saved language from localStorage
export const getSavedLanguage = (): Language | null => {
    if (typeof window === 'undefined') return null;

    const saved = localStorage.getItem('language') as Language | null;
    return saved && ['es', 'en', 'ca'].includes(saved) ? saved : null;
};

// Save language to localStorage
export const saveLanguage = (lang: Language): void => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('language', lang);
    }
};

// Get translation by key
export const getTranslation = (lang: Language, key: string): string => {
    const keys = key.split('.');
    let value: any = translations[lang];

    for (const k of keys) {
        if (value && typeof value === 'object') {
            value = value[k];
        } else {
            return key; // Return key if translation not found
        }
    }

    return typeof value === 'string' ? value : key;
};

export default translations;
