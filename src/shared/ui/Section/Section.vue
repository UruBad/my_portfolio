<template>
  <section :id="id" class="section">
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
interface Props {
  id: string;
  title?: string;
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.section {
  padding: 80px 0;
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
</style>

