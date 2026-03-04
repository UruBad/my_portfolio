<template>
  <div class="language-switcher" role="group" aria-label="Language switcher">
    <button
      v-for="loc in supportedLocales"
      :key="loc"
      type="button"
      class="language-switcher__button"
      :class="{ 'language-switcher__button--active': loc === locale }"
      @click="onChange(loc)"
    >
      {{ t(labelKey(loc)) }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import type { Locale } from '@/shared/config/i18n/locales';
import { useI18n } from '@/shared/lib/i18n';

const { locale: currentLocale, supportedLocales, setLocale, t } = useI18n();

const locale = computed(() => currentLocale.value);

function labelKey(loc: Locale): string {
  return loc === 'ru' ? 'common.language.ru' : 'common.language.en';
}

function onChange(loc: Locale) {
  if (loc !== currentLocale.value) {
    setLocale(loc);
  }
}
</script>

<style scoped lang="scss">
.language-switcher {
  display: inline-flex;
  padding: 2px;
  border-radius: 999px;
  background-color: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(148, 163, 184, 0.5);
  color: #e5e7eb;
}

.language-switcher__button {
  border: none;
  background: transparent;
  color: inherit;
  font-size: 0.75rem;
  padding: 4px 8px;
  border-radius: 999px;
  cursor: pointer;
  opacity: 0.7;
  transition: background-color 0.15s ease, opacity 0.15s ease;
}

.language-switcher__button--active {
  background: linear-gradient(135deg, #6366f1, #a855f7);
  opacity: 1;
}

[data-theme='light'] .language-switcher {
  background-color: rgba(15, 23, 42, 0.06);
  border-color: rgba(148, 163, 184, 0.8);
  color: #020617;
}

[data-theme='light'] .language-switcher__button--active {
  color: #f9fafb;
}
</style>

