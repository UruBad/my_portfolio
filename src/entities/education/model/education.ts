import type { CourseItem, EducationItem } from '@/shared/types/common';

export const education: EducationItem[] = [
  {
    institution: 'Северо‑Кавказский горно‑металлургический институт (ГТУ), Владикавказ',
    degree: {
      ru: 'Высшее образование',
      en: 'Higher education',
    },
    faculty: {
      ru: 'Факультет информационных технологий, АСОИУ',
      en: 'Faculty of Information Technologies, Automated Information Processing & Control Systems',
    },
    year: 2011,
  },
];

export const courses: CourseItem[] = [
  {
    title: {
      ru: 'React — The Complete Guide 2023',
      en: 'React — The Complete Guide 2023',
    },
    provider: 'Udemy',
    year: 2023,
  },
  {
    title: {
      ru: 'React и Next.js — с нуля',
      en: 'React & Next.js — from scratch',
    },
    provider: 'Purpleschool',
    year: 2023,
  },
  {
    title: {
      ru: 'Nest.js с нуля',
      en: 'Nest.js from scratch',
    },
    provider: 'Purpleschool',
    year: 2023,
  },
];

