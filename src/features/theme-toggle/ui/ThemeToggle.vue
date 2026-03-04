<template>
  <button
    type="button"
    class="theme-toggle"
    :aria-label="label"
    @click="toggleTheme"
  >
    <span v-if="theme === 'dark'">🌙</span>
    <span v-else>☀️</span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { useTheme } from '@/shared/lib/theme';

const { theme, toggleTheme } = useTheme();

const label = computed(() =>
  theme.value === 'dark' ? 'Switch to light theme' : 'Switch to dark theme',
);
</script>

<style scoped lang="scss">
.theme-toggle {
  border: none;
  background: var(--accent-color-soft);
  color: inherit;
  border-radius: 999px;
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.85rem;
  transition: background-color 0.15s ease, transform 0.15s ease;
}

.theme-toggle:hover {
  background: var(--accent-color);
  transform: translateY(-1px);
}
</style>

