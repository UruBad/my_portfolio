import type { ServiceItem } from '@/shared/types/common';

export const services: ServiceItem[] = [
  {
    title: {
      ru: 'Разработка SPA и фронтенда',
      en: 'SPA & frontend development',
    },
    description: {
      ru: 'Создание современных одностраничных приложений на Vue 3 / React с чистой архитектурой и вниманием к UX.',
      en: 'Building modern single‑page applications in Vue 3 / React with clean architecture and solid UX.',
    },
  },
  {
    title: {
      ru: 'Миграция и рефакторинг фронтенда',
      en: 'Frontend migration & refactoring',
    },
    description: {
      ru: 'Перенос легаси‑проектов на современные стеки, устранение технического долга, улучшение читаемости и поддержки кода.',
      en: 'Migrating legacy frontends to modern stacks, reducing technical debt and improving maintainability.',
    },
  },
  {
    title: {
      ru: 'Оптимизация производительности',
      en: 'Performance optimisation',
    },
    description: {
      ru: 'Анализ узких мест, оптимизация загрузки и рендеринга, улучшение Lighthouse‑показателей.',
      en: 'Analysing bottlenecks, optimising load and rendering, improving Lighthouse metrics.',
    },
  },
  {
    title: {
      ru: 'Аудит фронтенда и архитектуры',
      en: 'Frontend & architecture audit',
    },
    description: {
      ru: 'Разбор архитектуры, структуры кода и процессов, рекомендации по развитию фронтенда продукта.',
      en: 'Reviewing frontend architecture and codebase, giving practical recommendations on how to evolve the product.',
    },
  },
];

