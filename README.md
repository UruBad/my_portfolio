## Portfolio (Vue 3 + TypeScript + FSD)

Одностраничное портфолио на Vue 3 с TypeScript и Sass. Архитектура — Feature-Sliced Design (FSD). Поддержка RU/EN, светлая и тёмная тема, анимации секций.

### Стек
- Vue 3 (Composition API, `<script setup>`)
- TypeScript
- Vite
- Sass (SCSS)

### Структура `src`
- `app` — корень приложения, глобальные стили
- `pages` — страница портфолио
- `widgets` — header, footer, секции (Hero, About, Experience, Skills, Projects, Education, Services, Contacts)
- `features` — переключатель языка, темы, кнопка скачивания резюме
- `entities` — данные профиля, контактов, опыта, навыков, образования, услуг, проектов
- `shared` — UI-примитивы, конфиг i18n/темы, composables

### Локальный запуск
```bash
npm install
npm run dev
```

Откройте http://localhost:5173 (для GitHub Pages локально: `npm run dev -- --base /portfolio/`).

### Сборка
```bash
npm run build
```

Артефакт в каталоге `dist/`. Для GitHub Pages в `vite.config.ts` задано `base: '/portfolio/'` — замените на `'/'`, если репозиторий будет `username.github.io`.

### Деплой на GitHub Pages

1. В репозитории: **Settings → Pages → Build and deployment**: Source = **GitHub Actions**.
2. При пуше в ветку `main` workflow `.github/workflows/deploy-pages.yml` собирает проект и публикует его на Pages.
3. Сайт будет доступен по адресу: `https://<username>.github.io/portfolio/`.

Если репозиторий называется `portfolio`, базовый путь уже настроен. Для корневого сайта (`username.github.io`) измените `base` в `vite.config.ts` на `'/'` и пересоберите.

### Резюме (PDF)
Кнопка «Скачать резюме» отдаёт файл `public/binary/resume.pdf`. Исходный PDF лежит в `tasks/resume.pdf` — при обновлении резюме скопируйте его в `public/binary/resume.pdf`:
```bash
cp tasks/resume.pdf public/binary/resume.pdf
```

