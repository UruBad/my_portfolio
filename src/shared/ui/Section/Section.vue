<template>
  <section :id="id" ref="target" :class="sectionClass">
    <div class="section__inner">
      <header v-if="title" class="section__header">
        <h2 class="section__title">
          {{ title }}
        </h2>
      </header>
      <div class="section__content">
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { useInViewAnimation } from '@/shared/lib/viewport';

interface Props {
  id: string;
  title?: string;
}

defineProps<Props>();

const { target, isInView } = useInViewAnimation();

const sectionClass = computed(() => ({
  section: true,
  'section--visible': isInView.value,
}));
</script>

<style scoped lang="scss">
.section {
  padding: 80px 0;
  opacity: 0;
  transform: translateY(32px);
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.section--visible {
  opacity: 1;
  transform: translateY(0);
}

.section__inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 16px;
}

.section__title {
  margin: 0 0 24px;
  font-size: 2rem;
}

@media (prefers-reduced-motion: reduce) {
  .section {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>


