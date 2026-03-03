import { computed, reactive } from 'vue';

import { DEFAULT_LOCALE, SUPPORTED_LOCALES, type Locale } from '@/shared/config/i18n/locales';
import { messages } from '@/shared/config/i18n/dictionary';

const STORAGE_KEY = 'portfolio_locale';

function detectInitialLocale(): Locale {
  if (typeof window === 'undefined') {
    return DEFAULT_LOCALE;
  }

  const fromStorage = window.localStorage.getItem(STORAGE_KEY);
  if (fromStorage && (SUPPORTED_LOCALES as readonly string[]).includes(fromStorage)) {
    return fromStorage as Locale;
  }

  const navLang = window.navigator.language.toLowerCase();
  if (navLang.startsWith('ru')) {
    return 'ru';
  }

  return 'en';
}

const state = reactive({
  locale: detectInitialLocale(),
});

function setLocale(locale: Locale) {
  state.locale = locale;

  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, locale);
  }
}

function translate(key: string): string {
  const dict = messages[state.locale] ?? {};

  return dict[key] ?? key;
}

export function useI18n() {
  const locale = computed(() => state.locale);

  return {
    locale,
    setLocale,
    t: translate,
    supportedLocales: SUPPORTED_LOCALES,
  };
}

