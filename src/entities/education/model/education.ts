import type { CourseItem, EducationItem } from '@/shared/types';

export const education: EducationItem[] = [
  {
    institution: 'СКГМИ (ГТУ) — Северо‑Кавказский горно‑металлургический институт, Владикавказ',
    degree: {
      ru: 'Специализация',
      en: 'Specialisation',
    },
    faculty: {
      ru: 'Автоматизированная обработка информации',
      en: 'Automated Information Processing',
    },
    year: 2011,
  },
];

export const courses: CourseItem[] = [
  {
    title: {
      ru: 'Nest.js с нуля',
      en: 'Nest.js from scratch',
    },
    provider: 'Purpleschool',
    year: 2023,
  },
];
