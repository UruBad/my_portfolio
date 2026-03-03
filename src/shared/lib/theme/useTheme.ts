import { computed, reactive, watchEffect } from 'vue';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'portfolio_theme';

function detectInitialTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  const fromStorage = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (fromStorage === 'light' || fromStorage === 'dark') {
    return fromStorage;
  }

  const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

const state = reactive({
  theme: detectInitialTheme(),
});

function applyTheme(theme: Theme) {
  if (typeof document === 'undefined') return;

  document.documentElement.setAttribute('data-theme', theme);
}

applyTheme(state.theme);

watchEffect(() => {
  applyTheme(state.theme);

  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, state.theme);
  }
});

export function useTheme() {
  const theme = computed(() => state.theme);

  function setTheme(next: Theme) {
    state.theme = next;
  }

  function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
  }

  return {
    theme,
    setTheme,
    toggleTheme,
  };
}

