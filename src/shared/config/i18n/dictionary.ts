import type { Locale } from '@/shared/config/i18n/locales';
import ru from '@/shared/config/i18n/ru.json';
import en from '@/shared/config/i18n/en.json';

type Messages = Record<string, string>;

export const messages: Record<Locale, Messages> = {
  ru,
  en,
};

