import { useState, useEffect } from 'react';
import { Lang, translations } from './translations';

const STORAGE_KEY = 'gavrilov_lang';

const RU_COUNTRIES = new Set([
  'RU', 'BY', 'KZ', 'KG', 'TJ', 'TM', 'UZ', 'AZ', 'AM', 'GE', 'MD', 'UA',
]);

const ES_COUNTRIES = new Set([
  'ES', 'MX', 'AR', 'CO', 'CL', 'PE', 'VE', 'EC', 'BO', 'PY', 'UY', 'CU',
  'DO', 'GT', 'HN', 'SV', 'NI', 'CR', 'PA', 'GQ',
]);

function detectLang(): Lang {
  const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
  if (saved && ['en', 'ru', 'es'].includes(saved)) return saved;

  const browserLang = navigator.language?.slice(0, 2).toLowerCase();
  if (browserLang === 'ru') return 'ru';
  if (browserLang === 'es') return 'es';

  return 'en';
}

async function detectLangByIP(): Promise<Lang> {
  const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
  if (saved && ['en', 'ru', 'es'].includes(saved)) return saved;

  try {
    const res = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(3000) });
    const data = await res.json();
    const country: string = data.country_code ?? '';
    if (RU_COUNTRIES.has(country)) return 'ru';
    if (ES_COUNTRIES.has(country)) return 'es';
  } catch (_err) {
    // geo detection failed — fall back to browser lang
  }

  const browserLang = navigator.language?.slice(0, 2).toLowerCase();
  if (browserLang === 'ru') return 'ru';
  if (browserLang === 'es') return 'es';

  return 'en';
}

export function useLanguage() {
  const [lang, setLangState] = useState<Lang>(detectLang);

  useEffect(() => {
    detectLangByIP().then(detected => {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) setLangState(detected);
    });
  }, []);

  const setLang = (l: Lang) => {
    localStorage.setItem(STORAGE_KEY, l);
    setLangState(l);
  };

  const t = translations[lang];

  return { lang, setLang, t };
}