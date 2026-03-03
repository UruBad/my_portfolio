<template>
  <Section :id="'experience'" :title="t('section.experience.title')">
    <p>
      {{ t('placeholder.experience') }}
    </p>
  </Section>
</template>

<script setup lang="ts">
import Section from '@/shared/ui/Section/Section.vue';
import { useI18n } from '@/shared/lib/i18n/useI18n';

const { t } = useI18n();
</script>

