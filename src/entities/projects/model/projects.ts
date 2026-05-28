import type { ProjectItem } from '@/shared/types';

export const projects: ProjectItem[] = [
  {
    title: {
      ru: 'relopick.online — сервис сравнения городов',
      en: 'relopick.online — city comparison tool',
    },
    shortDescription: {
      ru: 'Fullstack сайд-проект, спроектированный и реализованный с нуля: выбор города для переезда по параметрам (климат, стоимость жизни, инфраструктура). Самостоятельно закрыл весь цикл: продукт, дизайн, фронтенд, бэкенд, деплой.',
      en: 'Fullstack side project designed and built end-to-end: city selection for relocation by parameters (climate, cost of living, infrastructure). Independently covered the full cycle: product, design, frontend, backend, deploy.',
    },
    techStack: ['Nuxt 4', 'TypeScript', 'NestJS', 'PostgreSQL', 'Prisma'],
    liveUrl: 'https://relopick.online',
    imageUrl: '/my_portfolio/images/relopick.png',
  },
  {
    title: {
      ru: '@urubad/earth-globe — npm-пакет',
      en: '@urubad/earth-globe — npm package',
    },
    shortDescription: {
      ru: 'Самостоятельный npm-пакет — интерактивный 3D-глобус на Vue 3, извлечённый из relopick.online в отдельную переиспользуемую библиотеку. Опубликован на npmjs.com.',
      en: 'Standalone npm package — an interactive 3D globe for Vue 3, extracted from relopick.online into a reusable library. Published on npmjs.com.',
    },
    techStack: ['Vue 3', 'TypeScript', 'Three.js'],
    liveUrl: 'https://www.npmjs.com/package/@urubad/earth-globe',
    githubUrl: 'https://github.com/UruBad/earth-globe',
    imageUrl: '/my_portfolio/images/earth-globe.png',
  },
  {
    title: {
      ru: 'emcd.io — White-label витрина партнёра',
      en: 'emcd.io — Partner white-label storefront',
    },
    shortDescription: {
      ru: 'Брендированная витрина для партнёрских компаний emcd.io. Token-based тематизация (CSS custom properties + Vite) позволяет партнёрам запускать кастомный бренд без дублирования кода.',
      en: 'Branded storefront for emcd.io partner companies. Token-based theming (CSS custom properties + Vite) lets partners run a custom brand with zero code duplication.',
    },
    techStack: ['Vue 3', 'TypeScript', 'Vite'],
    imageUrl: '/my_portfolio/images/wl.png',
  },
  {
    title: {
      ru: 'emcd.io — White-label витрина (тёмная тема)',
      en: 'emcd.io — White-label storefront (dark theme)',
    },
    shortDescription: {
      ru: 'Тёмный вариант брендированной витрины. Переключение между темами без flash-of-unstyled-content — за счёт статических CSS-токенов, собираемых Vite на этапе сборки.',
      en: 'Dark theme variant of the branded storefront. No flash-of-unstyled-content on theme switch — achieved via static CSS tokens compiled by Vite at build time.',
    },
    techStack: ['Vue 3', 'TypeScript', 'Vite'],
    imageUrl: '/my_portfolio/images/wl2.png',
  },
  {
    title: {
      ru: 'emcd.io — White-label витрина (светлая тема)',
      en: 'emcd.io — White-label storefront (light theme)',
    },
    shortDescription: {
      ru: 'Светлый вариант той же white-label витрины. Один кодовой базой покрывает неограниченное число брендов — партнёр меняет только конфигурацию токенов.',
      en: 'Light theme variant of the same white-label storefront. One codebase covers unlimited brands — a partner only swaps the token config.',
    },
    techStack: ['Vue 3', 'TypeScript', 'Vite'],
    imageUrl: '/my_portfolio/images/wl3.png',
  },
  {
    title: {
      ru: 'emcd.io — White-label витрина (акцентная тема)',
      en: 'emcd.io — White-label storefront (accent theme)',
    },
    shortDescription: {
      ru: 'Вариант с кастомным акцентным цветом бренда. Иллюстрирует гибкость token-based подхода: любой корпоративный цвет применяется точечно без побочных эффектов.',
      en: 'Variant with a custom brand accent colour. Demonstrates the flexibility of token-based theming: any corporate colour is applied precisely without side effects.',
    },
    techStack: ['Vue 3', 'TypeScript', 'Vite'],
    imageUrl: '/my_portfolio/images/wl4.png',
  },
  {
    title: {
      ru: 'emcd.io — White-label витрина (компактный лейаут)',
      en: 'emcd.io — White-label storefront (compact layout)',
    },
    shortDescription: {
      ru: 'Компактный вариант лейаута витрины для партнёров с большим числом товарных категорий. Responsive-сетка адаптируется без медиазапросов через CSS Grid auto-fit.',
      en: 'Compact layout variant for partners with a large number of product categories. Responsive grid adapts without extra media queries via CSS Grid auto-fit.',
    },
    techStack: ['Vue 3', 'TypeScript', 'SCSS'],
    imageUrl: '/my_portfolio/images/wl5.png',
  },
  {
    title: {
      ru: 'emcd.io — Панель администратора (обзор)',
      en: 'emcd.io — Admin panel overview',
    },
    shortDescription: {
      ru: 'Главный экран white-label admin-платформы emcd.io: сводка по хэшрейту, активным майнерам и выплатам. Обрабатывает real-time данные 66 500+ активных майнеров.',
      en: 'Main screen of the emcd.io white-label admin platform: hashrate summary, active miners, and payout overview. Processes real-time data for 66 500+ active miners.',
    },
    techStack: ['Vue 3', 'TypeScript', 'Pinia'],
    imageUrl: '/my_portfolio/images/wl-admin.jpeg',
  },
  {
    title: {
      ru: 'emcd.io — Панель администратора (детали воркеров)',
      en: 'emcd.io — Admin panel worker detail',
    },
    shortDescription: {
      ru: 'Детальный экран майнер-воркеров: таблицы с фильтрацией, историей хэшрейта и статусами. JWT-авторизация с rotation токенов — ноль auth-инцидентов за 12 месяцев.',
      en: 'Miner worker detail screen: filterable tables, hashrate history and status indicators. JWT auth with token rotation — zero auth-related incidents in 12 months post-release.',
    },
    techStack: ['Vue 3', 'TypeScript', 'Pinia'],
    imageUrl: '/my_portfolio/images/wl-admin2.jpeg',
  },
  {
    title: {
      ru: 'emcd.io — Дашборд мониторинга майнинга',
      en: 'emcd.io — Mining monitoring dashboard',
    },
    shortDescription: {
      ru: 'Дашборд мониторинга майнинговых мощностей в реальном времени. Компоненты построены под высокую частоту обновления данных без деградации производительности.',
      en: 'Real-time mining hashrate monitoring dashboard. Components are built for high data update frequency without performance degradation.',
    },
    techStack: ['Vue 3', 'TypeScript', 'Vite'],
    imageUrl: '/my_portfolio/images/monitoring1.png',
  },
  {
    title: {
      ru: 'emcd.io — История выплат майнерам',
      en: 'emcd.io — Miner payout history',
    },
    shortDescription: {
      ru: 'Экран истории выплат с фильтрацией по пулу, периоду и кошельку. Виртуальный скроллинг таблицы выдерживает тысячи записей без потери отзывчивости интерфейса.',
      en: 'Payout history screen with filtering by pool, period, and wallet. Virtual table scrolling handles thousands of records without losing UI responsiveness.',
    },
    techStack: ['Vue 3', 'TypeScript', 'Pinia'],
    imageUrl: '/my_portfolio/images/monitoring2.png',
  },
];

