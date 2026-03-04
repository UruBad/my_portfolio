<template>
  <Section :id="'projects'" :title="t('section.projects.title')">
    <div v-if="projects.length === 0" class="projects__empty">
      <p>
        {{ t('placeholder.projects') }}
      </p>
    </div>
  </Section>
</template>

<script setup lang="ts">
import { projects } from '@/entities/projects/model/projects';
import Section from '@/shared/ui/Section/Section.vue';
import { useI18n } from '@/shared/lib/i18n/useI18n';

const { t } = useI18n();
</script>

<style scoped lang="scss">
.projects__empty {
  opacity: 0.85;
}
</style>


