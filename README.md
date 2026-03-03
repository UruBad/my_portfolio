## Portfolio (Vue 3 + TypeScript + FSD)

Фронтенд-проект портфолио на Vue 3 с TypeScript и Sass, архитектура организована по FSD (Feature-Sliced Design).

### Стек
- Vue 3 (Composition API, `<script setup>`)
- TypeScript
- Vite
- Sass (SCSS)

### Структура `src`
- `app` — оболочка приложения (`App.vue`, глобальные стили, провайдеры).
- `pages` — страницы (сейчас одна: `portfolio`).
- `widgets` — крупные композиционные блоки страницы (header, footer, секции).
- `shared` — переиспользуемые примитивы (например, базовый компонент `Section`).

### Запуск (после установки зависимостей)
```bash
npm install
npm run dev
```

Сборка:
```bash
npm run build
```

