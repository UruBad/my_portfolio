<template>
  <Section :id="'services'" :title="t('section.services.title')">
    <div class="services">
      <article
        v-for="service in services"
        :key="service.title.ru"
        class="services__card"
      >
        <h3 class="services__title">
          {{ service.title[locale] }}
        </h3>
        <p class="services__description">
          {{ service.description[locale] }}
        </p>
      </article>
    </div>
  </Section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { services } from '@/entities/services';
import { Section } from '@/shared/ui/Section';
import { useI18n } from '@/shared/lib/i18n';

const { t, locale: currentLocale } = useI18n();

const locale = computed(() => currentLocale.value);
</script>

<style scoped lang="scss">
.services {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.services__card {
  padding: 16px 14px;
  border-radius: 16px;
  background-color: var(--bg-elevated-color);
  border: 1px solid var(--border-color-soft);
}

.services__title {
  margin: 0 0 8px;
  font-size: 0.95rem;
}

.services__description {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.9;
  line-height: 1.6;
}
</style>


