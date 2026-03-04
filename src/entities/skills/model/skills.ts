import type { SkillCategory } from '@/shared/types/common';

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
      { name: 'React', level: 'confident' },
      { name: 'Next.js', level: 'confident' },
      { name: 'Redux', level: 'confident' },
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
      { name: 'Адаптивная верстка', level: 'core' },
      { name: 'Кроссбраузерная верстка', level: 'core' },
      { name: 'REST API integration', level: 'core' },
    ],
  },
];

