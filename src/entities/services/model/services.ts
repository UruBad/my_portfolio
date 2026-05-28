import type { ServiceItem } from '@/shared/types';

export const services: ServiceItem[] = [
  {
    title: {
      ru: 'Vue 3 / Nuxt — разработка и архитектура',
      en: 'Vue 3 / Nuxt — development & architecture',
    },
    description: {
      ru: 'Проектирование и реализация фронтенд-систем на Vue 3 + TypeScript + Pinia. От нуля до production: структура модулей, composable-слой, router guards, SSR через Nuxt.',
      en: 'Designing and building frontend systems on Vue 3 + TypeScript + Pinia. From scratch to production: module structure, composable layer, router guards, SSR via Nuxt.',
    },
  },
  {
    title: {
      ru: 'Microfrontend-архитектура (Module Federation)',
      en: 'Microfrontend architecture (Module Federation)',
    },
    description: {
      ru: 'Проектирование microfrontend-архитектуры с Webpack Module Federation: разбивка на независимые бандлы, shared-состояние, стратегии деплоя без координации команд.',
      en: 'Designing microfrontend architecture with Webpack Module Federation: splitting into independent bundles, shared state, team-independent deploy strategies.',
    },
  },
  {
    title: {
      ru: 'Миграция Vue 2 → Vue 3 + TypeScript',
      en: 'Vue 2 → Vue 3 + TypeScript migration',
    },
    description: {
      ru: 'Пошаговый перевод legacy Vue 2 / Options API кода на Vue 3 Composition API + TypeScript. Включая Vuex → Pinia и планирование границ модулей при переходе на microfrontends.',
      en: 'Step-by-step migration of legacy Vue 2 / Options API code to Vue 3 Composition API + TypeScript. Including Vuex → Pinia and planning module boundaries during microfrontend adoption.',
    },
  },
  {
    title: {
      ru: 'White-label тематизация интерфейсов',
      en: 'White-label UI theming',
    },
    description: {
      ru: 'Построение token-based систем тематизации (CSS custom properties + Vite config), позволяющих партнёрам запускать брендированные версии продукта без дублирования кода и с нулевым FOUC.',
      en: 'Building token-based theming systems (CSS custom properties + Vite config) that let partners ship branded product versions without code duplication and with zero FOUC.',
    },
  },
];
