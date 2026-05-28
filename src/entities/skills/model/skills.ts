import type { SkillCategory } from '@/shared/types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages-platforms',
    title: {
      ru: 'Языки и платформы',
      en: 'Languages & Platforms',
    },
    skills: [
      { name: 'JavaScript', level: 'core' },
      { name: 'TypeScript', level: 'core' },
      { name: 'Node.js', level: 'confident' },
      { name: 'HTML5', level: 'core' },
      { name: 'CSS3 / SCSS', level: 'core' },
    ],
  },
  {
    id: 'frameworks',
    title: {
      ru: 'Фреймворки и библиотеки',
      en: 'Frameworks & Libraries',
    },
    skills: [
      { name: 'Vue 3', level: 'core' },
      { name: 'Nuxt', level: 'core' },
      { name: 'Pinia', level: 'core' },
      { name: 'Vue Router', level: 'core' },
      { name: 'Vuex', level: 'confident' },
      { name: 'NestJS', level: 'confident' },
    ],
  },
  {
    id: 'architecture',
    title: {
      ru: 'Архитектура',
      en: 'Architecture',
    },
    skills: [
      { name: 'Microfrontends / Module Federation', level: 'core' },
      { name: 'White-label theming', level: 'core' },
      { name: 'JWT auth / RBAC', level: 'core' },
      { name: 'Frontend architecture', level: 'core' },
      { name: 'Code review & DX', level: 'core' },
    ],
  },
  {
    id: 'tooling',
    title: {
      ru: 'Инструменты и инфраструктура',
      en: 'Tooling & Infrastructure',
    },
    skills: [
      { name: 'Vite', level: 'core' },
      { name: 'Git', level: 'core' },
      { name: 'GitHub Actions', level: 'confident' },
      { name: 'GitLab CI', level: 'confident' },
      { name: 'Docker', level: 'confident' },
      { name: 'PostgreSQL', level: 'familiar' },
      { name: 'Prisma', level: 'familiar' },
    ],
  },
];
