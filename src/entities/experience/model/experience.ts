import type { ExperienceItem } from '@/shared/types';

export const experience: ExperienceItem[] = [
  {
    company: 'Магнит, Розничная сеть',
    location: 'Татарстан, Россия',
    position: 'Senior Frontend Developer',
    start: '2026-03',
    description: {
      ru: 'Работаю над B2B‑платформой продавцов Магнит Маркет (ребрендинг KazanExpress) — одним из крупнейших e‑commerce маркетплейсов России с 12 000+ активных продавцов.\n\n• Владею модулем маркетинга end‑to‑end: движок акций, таймеры обратного отсчёта и флоу промокодов, которыми ежедневно пользуются тысячи продавцов. Сократил time‑to‑feature в модуле на ~30% после выделения общих Pinia‑stores и выравнивания командных конвенций.\n\n• Участвую в миграции Vue 2 → Vue 3 + TypeScript + Pinia в microfrontend‑архитектуре. Участвовал в архитектурных решениях по границам модулей — выбрали Module Federation вместо iframe для сохранения общего состояния и снижения дублирования по 5+ независимо задеплоенным бандлам.\n\n• Участвую в разработке чат‑модуля (real‑time флоу продавец ↔ поддержка).\n\n• Онбординг 1 джуниора: код‑ревью, стандарты дизайна компонентов, парное программирование на сложных стейт‑флоах.',
      en: 'Working on the B2B seller platform of Magnit Market (rebranded from KazanExpress) — one of Russia\'s largest e-commerce platforms with 12 000+ active sellers.\n\n• Own the marketing module end-to-end: promotions engine, countdown timers, and promo code flows used daily by thousands of sellers. Reduced time-to-feature in this module by ~30% after extracting shared Pinia stores and aligning team conventions.\n\n• Contributing to the Vue 2 → Vue 3 + TypeScript + Pinia microfrontend migration. Participated in architectural decisions on module boundaries — chose Module Federation over iframe approach to preserve shared state and reduce duplication across 5+ independently deployed bundles.\n\n• Contributing to the chat module (real-time seller ↔ support flows).\n\n• Onboarding 1 junior frontend developer: code reviews, component design standards, pair-programming on complex state flows.',
    },
  },
  {
    company: 'emcd.io',
    location: 'Сингапур',
    position: 'Senior Frontend Developer',
    start: '2025-02',
    end: '2026-03',
    description: {
      ru: 'emcd.io — глобальная крипто‑экосистема: майнинг‑пул + кошелёк + сбережения, 400 000+ пользователей в 100+ странах на 25 языках.\n\n• Спроектировал и построил фронтенд‑архитектуру white‑label admin‑платформы — партнёры могут запускать брендированные версии мониторинг‑дашборда без дублирования кода. Выбрал token‑based тематизацию (CSS custom properties + Vite config) вместо runtime‑переключения тем для фиксированного размера бандла и устранения FOUC.\n\n• Построил Vue 3 интерфейсы для мониторинга хэшрейта, таблиц майнеров и истории выплат — компоненты обрабатывают real‑time данные 66 500+ активных майнеров.\n\n• Реализовал JWT auth‑слой: rotation access/refresh токенов, silent renewal, route guards по ролям — ноль auth‑инцидентов за 12 месяцев после релиза.\n\n• Выстроил процесс код‑ревью: authored внутренний чеклист (именование, composable‑границы, обработка API‑ошибок), сократил цикл ревью с ~2 дней до same‑day для рутинных изменений.\n\n• Менторил 2 middle‑разработчиков: еженедельные 1:1 ревью, разборы архитектуры, структурированная обратная связь по дизайну компонентов.',
      en: 'emcd.io is a global crypto ecosystem: mining pool + wallet + savings, serving 400 000+ users across 100+ countries in 25 languages.\n\n• Designed and built the frontend architecture for a white-label admin platform — enabling partner companies to run branded versions of the monitoring dashboard without code duplication. Chose a token-based theming system (CSS custom properties + Vite config) over runtime theme switching to keep bundle size flat and eliminate FOUC.\n\n• Built responsive Vue 3 interfaces for hashrate monitoring, miner worker tables, and payout history — components processing real-time data for 66 500+ active miners.\n\n• Implemented JWT authentication layer: access/refresh token rotation, silent renewal, and role-based route guards — zero auth-related incidents in 12 months post-release.\n\n• Established frontend code review process: authored internal checklist (naming, composable boundaries, API error handling), reduced PR review cycle from ~2 days to same-day for routine changes.\n\n• Mentored 2 mid-level frontend developers: weekly 1:1 code reviews, architecture walkthroughs, and structured feedback on component design.',
    },
  },
  {
    company: 'Uzum Market',
    location: 'Ташкент, Узбекистан',
    position: 'Senior Frontend Developer',
    start: '2023-11',
    end: '2025-02',
    description: {
      ru: 'Uzum Market — маркетплейс №1 в Узбекистане: 14 000+ продавцов, 16M MAU, 19M заказов/год, GMV $345M (FY2024).\n\n• Владел маркетинговым модулем для продавцов (акции, таймеры, промокоды) — 14 000+ продавцов запускают ежедневные кампании. Реализовал 8 крупных фич за 14 месяцев, каждая с полным циклом дизайн → код → QA → деплой.\n\n• Участвовал в миграции Vue 2 → Vue 3 + Pinia в microfrontend‑архитектуре в команде из 5 человек. Module Federation выбран вместо single‑SPA после оценки изоляции бандлов — каждая команда деплоится независимо.\n\n• Улучшил Time‑to‑Interactive дашборда продавца с ~4.8s до ~2.9s за счёт lazy‑loading тяжёлых таблиц и откладывания некритичных API‑вызовов.\n\n• Участвовал в разработке чат‑модуля для коммуникации продавцов с поддержкой.\n\n• Провёл структурированное код‑ревью для 2 джуниоров: определил командные паттерны для composables, error boundaries и валидации форм.',
      en: 'Uzum Market is Uzbekistan\'s #1 e-commerce marketplace: 14 000+ active sellers, 16M MAU, 19M orders/year, GMV $345M (FY2024).\n\n• Owned the seller-facing marketing module (promotions, timers, promo codes) used by 14 000+ sellers to run daily campaigns. Delivered 8 major features in 14 months, each with full design → code → QA → deploy cycle.\n\n• Contributed to Vue 2 → Vue 3 + Pinia microfrontend migration across a 5-person frontend team. Module Federation chosen over single-SPA after evaluating bundle isolation and team autonomy — each squad deploys independently without release coordination.\n\n• Improved Time-to-Interactive of the seller dashboard from ~4.8s to ~2.9s by lazy-loading heavy table components and deferring non-critical API calls.\n\n• Participated in chat module development serving seller-to-support communication at scale.\n\n• Conducted structured code reviews for 2 junior developers: defined team-wide patterns for composables, error boundaries, and form validation.',
    },
  },
  {
    company: 'RosComputing',
    location: 'Москва, Россия',
    position: 'Middle-Senior Frontend Web Developer',
    start: '2017-06',
    end: '2023-11',
    description: {
      ru: 'Разработка и поддержка внутренних платформ для государственных и корпоративных клиентов, включая портал Московского городского суда — система с жёсткими требованиями к корректности и аудиту.\n\n• Спроектировал и реализовал RBAC admin UI с нуля: 12+ ролей пользователей, динамические проверки прав на уровне роутов и компонентов, аудит‑логирование действий в UI‑слое.\n\n• Разработал компонент планировщика/календаря (расписание судебных заседаний) на 1 000+ записей — кастомный virtual scrolling для render time < 100ms.\n\n• Владел фронтенд‑архитектурой 3 независимых модулей: реестр дел, документооборот, система уведомлений. Каждый модуль деплоился и версионировался независимо через отдельные Vuex namespace.\n\n• Снизил regression rate багов в модуле документов на ~40% после введения слоя валидации форм и unit‑тестов (Vue Test Utils + Jest).\n\n• Вырос от middle до senior за 4 года: взял на себя архитектурное владение, провёл онбординг 2 новых разработчиков, мигрировал code style с Options API (JS) на Options API (TS).',
      en: 'Built and maintained internal platforms for government and enterprise clients, including the Moscow City Court portal — a high-stakes system with strict correctness and audit requirements.\n\n• Designed and implemented RBAC-based admin UI from scratch: 12+ user roles, dynamic permission checks on route and component level, and audit-ready action logging integrated into the UI layer.\n\n• Developed a scheduling/planner component (court session calendar) handling 1 000+ entries per view — custom virtual scrolling to keep render time under 100ms.\n\n• Owned frontend architecture for 3 independent modules: case registry, document management, and notification system. Each module deployed and versioned independently via separate Vuex namespaces.\n\n• Reduced bug regression rate in the document module by ~40% after introducing a form validation layer and component-level unit tests (Vue Test Utils + Jest).\n\n• Grew from mid-level to senior over 4 years: took on architecture ownership, led onboarding of 2 new frontend developers, and drove code style migration from Options API (JS) to Options API (TS).',
    },
  },
  {
    company: 'LuxTao',
    position: 'Junior-Middle Software Developer',
    start: '2011-09',
    end: '2017-06',
    description: {
      ru: 'Разработка программного обеспечения на начальном и среднем уровне.',
      en: 'Software development at junior and middle levels.',
    },
  },
];
