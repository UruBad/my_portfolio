<template>
  <Section :id="'hero'">
    <div class="hero">
      <div class="hero__text">
        <p class="hero__kicker">
          {{ profileLocation }}
        </p>
        <h1 class="hero__title">
          {{ profileName }}
        </h1>
        <p class="hero__role">
          {{ profileRole }}
        </p>
        <p class="hero__summary">
          {{ profileSummary }}
        </p>
        <div class="hero__actions">
          <DownloadResumeButton />
          <a
            class="hero__ghost-button"
            :href="`mailto:${contacts.email}`"
          >
            {{ t('hero.cta.email') }}
          </a>
          <a
            class="hero__ghost-button hero__ghost-button--icon"
            :href="contacts.githubUrl"
            target="_blank"
            rel="noreferrer"
          >
            {{ t('hero.cta.github') }}
          </a>
        </div>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { DownloadResumeButton } from '@/features/download-resume';
import { profile } from '@/entities/person';
import { contacts } from '@/entities/contacts';
import Section from '@/shared/ui/Section/Section.vue';
import { useI18n } from '@/shared/lib/i18n';

const { t, locale } = useI18n();

const profileName = computed(() => profile.fullName[locale.value]);
const profileLocation = computed(() => profile.location[locale.value]);
const profileRole = computed(() => profile.role[locale.value]);
const profileSummary = computed(() => profile.summary[locale.value]);
</script>

<style scoped lang="scss">
.hero {
  display: flex;
  align-items: center;
  min-height: 60vh;
}

.hero__text {
  max-width: 640px;
}

.hero__kicker {
  margin: 0 0 8px;
  font-size: 0.85rem;
  opacity: 0.7;
}

.hero__title {
  margin: 0 0 8px;
  font-size: 2.4rem;
}

.hero__role {
  margin: 0 0 16px;
  font-weight: 600;
  font-size: 1.1rem;
  opacity: 0.85;
}

.hero__summary {
  margin: 0 0 24px;
  max-width: 48rem;
  line-height: 1.6;
  opacity: 0.85;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.hero__ghost-button {
  border-radius: 999px;
  padding: 9px 16px;
  border: 1px solid var(--border-color-soft);
  background: transparent;
  color: inherit;
  font-size: 0.9rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
  opacity: 0.85;
  transition:
    background-color 0.15s ease,
    opacity 0.15s ease;
}

.hero__ghost-button:hover {
  opacity: 1;
  background-color: var(--accent-color-soft);
}

.hero__ghost-button--icon {
  font-weight: 500;
}

@media (max-width: 768px) {
  .hero {
    min-height: 0;
  }

  .hero__title {
    font-size: 2rem;
  }
}
</style>


