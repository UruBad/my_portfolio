<template>
  <Section :id="'education'" :title="t('section.education.title')">
    <p>
      {{ t('placeholder.education') }}
    </p>
  </Section>
</template>

<script setup lang="ts">
import Section from '@/shared/ui/Section/Section.vue';
import { useI18n } from '@/shared/lib/i18n/useI18n';

const { t } = useI18n();
</script>

