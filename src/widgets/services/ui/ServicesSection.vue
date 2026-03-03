<template>
  <Section :id="'services'" :title="t('section.services.title')">
    <p>
      {{ t('placeholder.services') }}
    </p>
  </Section>
</template>

<script setup lang="ts">
import Section from '@/shared/ui/Section/Section.vue';
import { useI18n } from '@/shared/lib/i18n/useI18n';

const { t } = useI18n();
</script>

