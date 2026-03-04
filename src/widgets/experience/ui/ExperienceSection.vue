<template>
  <Section :id="'experience'" :title="t('section.experience.title')">
    <ul class="experience">
      <li
        v-for="item in experience"
        :key="item.company + item.start"
        class="experience__item"
      >
        <div class="experience__meta">
          <h3 class="experience__position">
            {{ item.position }}
          </h3>
          <p class="experience__company">
            {{ item.company }}<span v-if="item.location"> · {{ item.location }}</span>
          </p>
          <p class="experience__period">
            {{ formatPeriod(item.start, item.end) }}
          </p>
        </div>
        <p class="experience__description">
          {{ descriptionText(item) }}
        </p>
      </li>
    </ul>
  </Section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { experience } from '@/entities/experience';
import type { ExperienceItem } from '@/shared/types';
import { Section } from '@/shared/ui/Section';
import { useI18n } from '@/shared/lib/i18n';

const { t, locale } = useI18n();

function descriptionText(item: ExperienceItem): string {
  return item.description[locale.value];
}

function formatPeriod(start: string, end?: string): string {
  const [startYear, startMonth] = start.split('-');
  const startLabel = `${startMonth}.${startYear}`;

  if (!end) {
    return locale.value === 'ru' ? `${startLabel} — по настоящее время` : `${startLabel} — present`;
  }

  const [endYear, endMonth] = end.split('-');
  const endLabel = `${endMonth}.${endYear}`;

  return `${startLabel} — ${endLabel}`;
}
</script>

<style scoped lang="scss">
.experience {
  list-style: none;
  margin: 0;
  padding: 0;
  border-left: 1px solid var(--border-color-soft);
}

.experience__item {
  padding-left: 16px;
  margin-bottom: 24px;
  position: relative;
}

.experience__item::before {
  content: '';
  position: absolute;
  left: -5px;
  top: 8px;
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: var(--accent-color);
}

.experience__position {
  margin: 0 0 4px;
  font-weight: 600;
}

.experience__company {
  margin: 0 0 4px;
  font-size: 0.9rem;
  opacity: 0.9;
}

.experience__period {
  margin: 0 0 8px;
  font-size: 0.8rem;
  opacity: 0.65;
}

.experience__description {
  margin: 0;
  line-height: 1.6;
}
</style>


