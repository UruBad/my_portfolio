<template>
  <Section :id="'projects'" :title="t('section.projects.title')">
    <div v-if="projects.length === 0" class="projects__empty">
      <p>
        {{ t('placeholder.projects') }}
      </p>
    </div>
    <div v-else class="projects">
      <article
        v-for="project in projects"
        :key="project.title.ru"
        class="projects__card"
      >
        <div
          v-if="project.imageUrl"
          class="projects__image-wrapper"
        >
          <img
            :src="project.imageUrl"
            :alt="projectTitle(project)"
            class="projects__image"
            loading="lazy"
          />
        </div>
        <div class="projects__body">
          <h3 class="projects__title">
            {{ projectTitle(project) }}
          </h3>
          <p class="projects__description">
            {{ projectDescription(project) }}
          </p>
        </div>
      </article>
    </div>
  </Section>
</template>

<script setup lang="ts">
import { projects } from '@/entities/projects';
import type { ProjectItem } from '@/shared/types';
import { Section } from '@/shared/ui/Section';
import { useI18n } from '@/shared/lib/i18n';

const { t, locale } = useI18n();

function projectTitle(project: ProjectItem): string {
  return project.title[locale.value];
}

function projectDescription(project: ProjectItem): string {
  return project.shortDescription[locale.value];
}
</script>

<style scoped lang="scss">
.projects__empty {
  opacity: 0.85;
}

.projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
}

.projects__card {
  border-radius: 16px;
  overflow: hidden;
  background-color: var(--bg-elevated-color);
  border: 1px solid var(--border-color-soft);
  display: flex;
  flex-direction: column;
}

.projects__image-wrapper {
  position: relative;
  padding-top: 56.25%;
  overflow: hidden;
}

.projects__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.projects__body {
  padding: 10px 12px 12px;
}

.projects__title {
  margin: 0 0 4px;
  font-size: 0.95rem;
}

.projects__description {
  margin: 0;
  font-size: 0.85rem;
  opacity: 0.9;
}
</style>


