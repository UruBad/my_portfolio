<template>
  <Section :id="'projects'" :title="t('section.projects.title')">
    <div v-if="projects.length === 0" class="projects__empty">
      <p>{{ t('placeholder.projects') }}</p>
    </div>
    <div v-else class="projects">
      <article
        v-for="(project, index) in projects"
        :key="project.title.ru"
        class="projects__card"
        @click="openLightbox(index)"
      >
        <div v-if="project.imageUrl" class="projects__image-wrapper">
          <img
            :src="project.imageUrl"
            :alt="projectTitle(project)"
            class="projects__image"
            loading="lazy"
          />
          <div class="projects__image-overlay">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
            </svg>
          </div>
        </div>
        <div class="projects__body">
          <h3 class="projects__title">{{ projectTitle(project) }}</h3>
          <p class="projects__description">{{ projectDescription(project) }}</p>
          <div v-if="project.techStack?.length" class="projects__stack">
            <span
              v-for="tech in project.techStack"
              :key="tech"
              class="projects__tech"
            >{{ tech }}</span>
          </div>
        </div>
      </article>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition name="lightbox">
        <div
          v-if="lightboxIndex !== null"
          class="lightbox"
          @click.self="closeLightbox"
          @keydown.esc="closeLightbox"
          @keydown.left="prevSlide"
          @keydown.right="nextSlide"
          tabindex="-1"
          ref="lightboxEl"
        >
          <button class="lightbox__close" @click="closeLightbox" aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>

          <button
            v-if="projectsWithImage.length > 1"
            class="lightbox__nav lightbox__nav--prev"
            @click="prevSlide"
            aria-label="Previous"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <div class="lightbox__content">
            <div class="lightbox__image-wrap">
              <img
                :src="currentProject.imageUrl"
                :alt="projectTitle(currentProject)"
                class="lightbox__image"
              />
            </div>
            <div class="lightbox__info">
              <h2 class="lightbox__title">{{ projectTitle(currentProject) }}</h2>
              <p class="lightbox__description">{{ projectDescription(currentProject) }}</p>
              <div v-if="currentProject.techStack?.length" class="lightbox__stack">
                <span
                  v-for="tech in currentProject.techStack"
                  :key="tech"
                  class="lightbox__tech"
                >{{ tech }}</span>
              </div>
              <div class="lightbox__links">
                <a
                  v-if="currentProject.liveUrl"
                  :href="currentProject.liveUrl"
                  target="_blank"
                  rel="noreferrer"
                  class="lightbox__link"
                >{{ liveUrlLabel(currentProject.liveUrl) }} →</a>
                <a
                  v-if="currentProject.githubUrl"
                  :href="currentProject.githubUrl"
                  target="_blank"
                  rel="noreferrer"
                  class="lightbox__link"
                >GitHub →</a>
              </div>
              <div v-if="projectsWithImage.length > 1" class="lightbox__counter">
                {{ lightboxIndex + 1 }} / {{ projectsWithImage.length }}
              </div>
            </div>
          </div>

          <button
            v-if="projectsWithImage.length > 1"
            class="lightbox__nav lightbox__nav--next"
            @click="nextSlide"
            aria-label="Next"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      </Transition>
    </Teleport>
  </Section>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue';

import { projects } from '@/entities/projects';
import type { ProjectItem } from '@/shared/types';
import { Section } from '@/shared/ui/Section';
import { useI18n } from '@/shared/lib/i18n';

const { t, locale } = useI18n();

const projectsWithImage = computed(() => projects.filter(p => p.imageUrl));

const lightboxIndex = ref<number | null>(null);
const lightboxEl = ref<HTMLElement | null>(null);

const currentProject = computed<ProjectItem>(() =>
  projectsWithImage.value[lightboxIndex.value ?? 0]
);

function projectTitle(project: ProjectItem): string {
  return project.title[locale.value];
}

function projectDescription(project: ProjectItem): string {
  return project.shortDescription[locale.value];
}

function openLightbox(cardIndex: number) {
  const project = projects[cardIndex];
  if (!project.imageUrl) return;
  const imgIndex = projectsWithImage.value.indexOf(project);
  lightboxIndex.value = imgIndex;
  document.body.style.overflow = 'hidden';
  nextTick(() => lightboxEl.value?.focus());
}

function closeLightbox() {
  lightboxIndex.value = null;
  document.body.style.overflow = '';
}

function prevSlide() {
  if (lightboxIndex.value === null) return;
  lightboxIndex.value =
    (lightboxIndex.value - 1 + projectsWithImage.value.length) % projectsWithImage.value.length;
}

function liveUrlLabel(url: string): string {
  if (url.includes('npmjs.com')) return 'npmjs.com';
  return locale.value === 'ru' ? 'Открыть сайт' : 'Visit site';
}

function nextSlide() {
  if (lightboxIndex.value === null) return;
  lightboxIndex.value = (lightboxIndex.value + 1) % projectsWithImage.value.length;
}

watch(lightboxIndex, (val) => {
  if (val !== null) nextTick(() => lightboxEl.value?.focus());
});
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
  cursor: pointer;
  transition: border-color 0.2s, transform 0.2s;

  &:hover {
    border-color: var(--border-color);
    transform: translateY(-2px);
  }
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
  transition: transform 0.3s ease;

  .projects__card:hover & {
    transform: scale(1.03);
  }
}

.projects__image-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.35);
  color: #fff;
  opacity: 0;
  transition: opacity 0.2s;

  .projects__card:hover & {
    opacity: 1;
  }
}

.projects__body {
  padding: 10px 12px 12px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.projects__title {
  margin: 0;
  font-size: 0.95rem;
}

.projects__description {
  margin: 0;
  font-size: 0.85rem;
  opacity: 0.9;
  flex: 1;
}

.projects__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 6px;
}

.projects__tech {
  font-size: 0.75rem;
  padding: 2px 7px;
  border-radius: 999px;
  background: var(--bg-color);
  border: 1px solid var(--border-color-soft);
  opacity: 0.85;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.88);
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
}

.lightbox__close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
  z-index: 10;

  &:hover {
    background: rgba(255, 255, 255, 0.16);
  }
}

.lightbox__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
  z-index: 10;

  &:hover {
    background: rgba(255, 255, 255, 0.16);
  }

  &--prev { left: 16px; }
  &--next { right: 16px; }
}

.lightbox__content {
  display: flex;
  align-items: stretch;
  gap: 0;
  max-width: min(1100px, calc(100vw - 120px));
  max-height: calc(100vh - 80px);
  border-radius: 16px;
  overflow: hidden;
  background: #12141f;
}

.lightbox__image-wrap {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  align-items: center;
  background: #000;
  max-height: calc(100vh - 80px);
}

.lightbox__image {
  display: block;
  max-width: 100%;
  max-height: calc(100vh - 80px);
  object-fit: contain;
}

.lightbox__info {
  width: 280px;
  flex-shrink: 0;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  border-left: 1px solid rgba(255, 255, 255, 0.08);
  background: #12141f;
}

.lightbox__title {
  margin: 0;
  font-size: 1.1rem;
  color: #f1f5f9;
  line-height: 1.3;
}

.lightbox__description {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.6;
  color: rgba(241, 245, 249, 0.72);
  flex: 1;
}

.lightbox__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.lightbox__tech {
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(241, 245, 249, 0.8);
}

.lightbox__links {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.lightbox__link {
  font-size: 0.875rem;
  color: rgba(241, 245, 249, 0.55);
  text-decoration: none;
  transition: color 0.15s;

  &:hover {
    color: #f1f5f9;
  }
}

.lightbox__counter {
  font-size: 0.8rem;
  color: rgba(241, 245, 249, 0.35);
  margin-top: auto;
}

/* Transition */
.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.2s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

@media (max-width: 680px) {
  .lightbox__content {
    flex-direction: column;
    max-width: calc(100vw - 32px);
    max-height: calc(100vh - 48px);
  }

  .lightbox__info {
    width: auto;
    border-left: none;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding: 16px;
  }

  .lightbox__nav {
    top: auto;
    bottom: 16px;
    transform: none;

    &--prev { left: 16px; }
    &--next { right: 16px; }
  }
}
</style>
