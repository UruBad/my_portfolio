<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__brand">
        <span class="header__logo">UB</span>
        <span class="header__title">
          {{ t('brand.name') }}
        </span>
      </div>
      <nav class="header__nav" aria-label="Main navigation">
        <a href="#hero" class="header__link">
          {{ t('nav.hero') }}
        </a>
        <a href="#about" class="header__link">
          {{ t('nav.about') }}
        </a>
        <a href="#experience" class="header__link">
          {{ t('nav.experience') }}
        </a>
        <a href="#skills" class="header__link">
          {{ t('nav.skills') }}
        </a>
        <a href="#projects" class="header__link">
          {{ t('nav.projects') }}
        </a>
        <a href="#education" class="header__link">
          {{ t('nav.education') }}
        </a>
        <a href="#services" class="header__link">
          {{ t('nav.services') }}
        </a>
        <a href="#contacts" class="header__link">
          {{ t('nav.contacts') }}
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
import LanguageSwitcher from '@/features/language-switcher/ui/LanguageSwitcher.vue';
import ThemeToggle from '@/features/theme-toggle/ui/ThemeToggle.vue';
import { useI18n } from '@/shared/lib/i18n/useI18n';

const { t } = useI18n();
</script>

<style scoped lang="scss">
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(16px);
  background: linear-gradient(90deg, rgba(5, 8, 22, 0.9), rgba(5, 8, 22, 0.7));
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

.header__link:hover {
  opacity: 1;
  background-color: rgba(148, 163, 184, 0.16);
}

@media (max-width: 768px) {
  .header__inner {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }

  .header__nav {
    justify-content: flex-start;
  }

  .header__controls {
    justify-content: flex-end;
  }
}
</style>

