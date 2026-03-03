import type { Locale } from '@/shared/config/i18n/locales';

type Messages = Record<string, string>;

export const messages: Record<Locale, Messages> = {
  ru: {
    'brand.name': 'Портфолио',

    'nav.hero': 'Главная',
    'nav.about': 'Обо мне',
    'nav.experience': 'Опыт',
    'nav.skills': 'Навыки',
    'nav.projects': 'Проекты',
    'nav.education': 'Образование',
    'nav.services': 'Услуги',
    'nav.contacts': 'Контакты',

    'section.hero.title': 'Главная',
    'section.about.title': 'Обо мне',
    'section.experience.title': 'Опыт',
    'section.skills.title': 'Навыки',
    'section.projects.title': 'Проекты',
    'section.education.title': 'Образование и курсы',
    'section.services.title': 'Услуги',
    'section.contacts.title': 'Контакты',

    'common.language.ru': 'RU',
    'common.language.en': 'EN',

    'placeholder.hero': 'Здесь будет главный экран с кратким представлением и CTA.',
    'placeholder.about': 'Здесь будет раздел «Обо мне» с текстом из резюме.',
    'placeholder.experience': 'Здесь появится таймлайн опыта работы.',
    'placeholder.skills': 'Здесь будет карта навыков и технологий.',
    'placeholder.projects': 'Здесь будут карточки проектов и ссылки на GitHub.',
    'placeholder.education': 'Здесь будет раздел об образовании и курсах.',
    'placeholder.services': 'Здесь будет список услуг и типов задач, с которыми вы работаете.',
    'placeholder.contacts': 'Здесь будут контакты и быстрые действия.',
  },
  en: {
    'brand.name': 'Portfolio',

    'nav.hero': 'Hero',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.education': 'Education',
    'nav.services': 'Services',
    'nav.contacts': 'Contacts',

    'section.hero.title': 'Hero',
    'section.about.title': 'About',
    'section.experience.title': 'Experience',
    'section.skills.title': 'Skills',
    'section.projects.title': 'Projects',
    'section.education.title': 'Education & Courses',
    'section.services.title': 'Services',
    'section.contacts.title': 'Contacts',

    'common.language.ru': 'RU',
    'common.language.en': 'EN',

    'placeholder.hero': 'The hero section with intro and CTAs will appear here.',
    'placeholder.about': 'The “About” section based on your resume will be placed here.',
    'placeholder.experience': 'The experience timeline will appear here.',
    'placeholder.skills': 'Your skills and tech stack will be shown here.',
    'placeholder.projects': 'Project cards and GitHub links will be configured here.',
    'placeholder.education': 'Education and courses information will be placed here.',
    'placeholder.services': 'Service offerings and focus areas will be listed here.',
    'placeholder.contacts': 'Contacts and quick actions will be available here.',
  },
};

