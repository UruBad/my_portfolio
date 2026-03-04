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
      { name: 'CSS3', level: 'core' },
    ],
  },
  {
    id: 'frameworks',
    title: {
      ru: 'Фреймворки и библиотеки',
      en: 'Frameworks & Libraries',
    },
    skills: [
      { name: 'Vue.js / Vue 3', level: 'core' },
      { name: 'Vuex', level: 'confident' },
      { name: 'Pinia', level: 'confident' },
      { name: 'Vue Router', level: 'confident' },
      { name: 'Nuxt.js', level: 'familiar' },
      { name: 'NestJS', level: 'familiar' },
    ],
  },
  {
    id: 'tooling',
    title: {
      ru: 'Инструменты и инфраструктура',
      en: 'Tooling & Infrastructure',
    },
    skills: [
      { name: 'Git', level: 'core' },
      { name: 'Docker', level: 'confident' },
      { name: 'Jira', level: 'confident' },
      { name: 'PostgreSQL', level: 'familiar' },
    ],
  },
  {
    id: 'ui',
    title: {
      ru: 'Верстка и UI',
      en: 'Layout & UI',
    },
    skills: [
      { name: 'Sass / SCSS', level: 'core' },
      { name: 'Responsive layout', level: 'core' },
      { name: 'Cross‑browser layout', level: 'core' },
      { name: 'REST API integration', level: 'core' },
    ],
  },
];

