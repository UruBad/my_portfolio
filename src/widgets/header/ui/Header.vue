<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__brand">
        <span class="header__logo">UB</span>
        <span class="header__title">
          {{ t('brand.name') }}
        </span>
      </div>
      <button
        type="button"
        class="header__burger"
        aria-label="Open menu"
        :aria-expanded="navOpen"
        @click="navOpen = !navOpen"
      >
        <span class="header__burger-bar" />
        <span class="header__burger-bar" />
        <span class="header__burger-bar" />
      </button>
      <nav
        class="header__nav"
        :class="{ 'header__nav--open': navOpen }"
        aria-label="Main navigation"
      >
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          class="header__link"
          :class="{ 'header__link--active': activeSection === item.id }"
          @click="onNavClick($event, item.id)"
        >
          {{ t(item.key) }}
        </a>
      </nav>
      <div class="header__controls">
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

import LanguageSwitcher from '@/features/language-switcher/ui/LanguageSwitcher.vue';
import ThemeToggle from '@/features/theme-toggle/ui/ThemeToggle.vue';
import { useI18n } from '@/shared/lib/i18n/useI18n';

const { t } = useI18n();

const navItems = [
  { id: 'hero', key: 'nav.hero' },
  { id: 'about', key: 'nav.about' },
  { id: 'experience', key: 'nav.experience' },
  { id: 'skills', key: 'nav.skills' },
  { id: 'projects', key: 'nav.projects' },
  { id: 'education', key: 'nav.education' },
  { id: 'services', key: 'nav.services' },
  { id: 'contacts', key: 'nav.contacts' },
];

const activeSection = ref<string>('hero');
const navOpen = ref(false);

function onNavClick(e: MouseEvent, id: string) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  navOpen.value = false;
}

let observer: IntersectionObserver | null = null;

onMounted(() => {
  const sectionIds = navItems.map((i) => i.id);

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const id = entry.target.id;
        if (sectionIds.includes(id)) {
          activeSection.value = id;
        }
      }
    },
    { rootMargin: '-20% 0px -60% 0px', threshold: 0 },
  );

  sectionIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer?.observe(el);
  });

  const hash = window.location.hash.slice(1);
  if (hash && sectionIds.includes(hash)) {
    activeSection.value = hash;
    const el = document.getElementById(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>

<style scoped lang="scss">
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(16px);
  background: var(--header-bg);
}

.header__inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.header__brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
}

.header__logo {
  width: 32px;
  height: 32px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #6366f1, #a855f7);
  font-size: 0.85rem;
}

.header__title {
  font-size: 0.95rem;
  opacity: 0.9;
}

.header__nav {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 0.85rem;
}

.header__controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.header__link {
  color: inherit;
  text-decoration: none;
  opacity: 0.75;
  padding: 4px 8px;
  border-radius: 999px;
  transition: opacity 0.15s ease, background-color 0.15s ease;
}

.header__link:hover,
.header__link--active {
  opacity: 1;
  background-color: var(--accent-color-soft);
}

.header__link--active {
  font-weight: 600;
}

.header__burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  padding: 0;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.15s ease;
}

.header__burger:hover {
  background-color: var(--accent-color-soft);
}

.header__burger-bar {
  display: block;
  width: 20px;
  height: 2px;
  background: currentColor;
  border-radius: 1px;
}

@media (max-width: 768px) {
  .header__inner {
    flex-wrap: wrap;
    gap: 8px;
  }

  .header__burger {
    display: flex;
    order: 2;
    margin-left: auto;
  }

  .header__nav {
    order: 3;
    width: 100%;
    max-height: 0;
    overflow: hidden;
    flex-direction: column;
    align-items: stretch;
    transition: max-height 0.25s ease;
  }

  .header__nav--open {
    max-height: 320px;
  }

  .header__controls {
    order: 1;
  }
}
</style>

