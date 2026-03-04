<template>
  <Section :id="'about'" :title="t('section.about.title')">
    <div class="about">
      <p class="about__summary">
        {{ profileSummary }}
      </p>
      <ul class="about__list">
        <li>
          <strong>{{ profileRole }}</strong>
        </li>
        <li>
          {{ profileLocation }}
        </li>
        <li>
          {{ availabilityText }}
        </li>
      </ul>
    </div>
  </Section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { profile } from '@/entities/person';
import { Section } from '@/shared/ui/Section';
import { useI18n } from '@/shared/lib/i18n';

const { t, locale } = useI18n();

const profileSummary = computed(() => profile.summary[locale.value]);
const profileRole = computed(() => profile.role[locale.value]);
const profileLocation = computed(() => profile.location[locale.value]);

const availabilityText = computed(() =>
  locale.value === 'ru'
    ? 'Готов к полной, частичной и проектной занятости, возможны редкие командировки.'
    : 'Open to full-time, part-time and project work; occasional business trips are fine.',
);
</script>

<style scoped lang="scss">
.about__summary {
  margin: 0 0 16px;
  max-width: 46rem;
  line-height: 1.7;
}

.about__list {
  margin: 0;
  padding-left: 18px;
  list-style: disc;
  line-height: 1.6;
  opacity: 0.9;
}
</style>


