<template>
  <Section :id="'skills'" :title="t('section.skills.title')">
    <div class="skills">
      <div
        v-for="category in categories"
        :key="category.id"
        class="skills__category"
      >
        <h3 class="skills__category-title">
          {{ categoryTitle(category) }}
        </h3>
        <ul class="skills__tags">
          <li
            v-for="skill in category.skills"
            :key="skill.name"
            class="skills__tag"
          >
            {{ skill.name }}
          </li>
        </ul>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import { skillCategories } from '@/entities/skills/model/skills';
import type { SkillCategory } from '@/shared/types/common';
import Section from '@/shared/ui/Section/Section.vue';
import { useI18n } from '@/shared/lib/i18n/useI18n';

const { t, locale } = useI18n();

const categories = skillCategories;

function categoryTitle(category: SkillCategory): string {
  return category.title[locale.value];
}
</script>

<style scoped lang="scss">
.skills {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.skills__category-title {
  margin: 0 0 8px;
  font-size: 0.95rem;
  opacity: 0.9;
}

.skills__tags {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skills__tag {
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 0.8rem;
  background-color: var(--accent-color-soft);
}
</style>


