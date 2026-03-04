<template>
  <Section :id="'education'" :title="t('section.education.title')">
    <div class="education">
      <div class="education__block">
        <h3 class="education__subtitle">
          {{ locale === 'ru' ? 'Высшее образование' : 'Higher education' }}
        </h3>
        <ul class="education__list">
          <li
            v-for="item in education"
            :key="item.institution + item.year"
          >
            <p class="education__institution">
              {{ item.institution }}
            </p>
            <p class="education__line">
              {{ item.degree[locale] }} · {{ item.faculty[locale] }} · {{ item.year }}
            </p>
          </li>
        </ul>
      </div>

      <div class="education__block">
        <h3 class="education__subtitle">
          {{ locale === 'ru' ? 'Курсы и сертификаты' : 'Courses & certificates' }}
        </h3>
        <ul class="education__list">
          <li
            v-for="course in courses"
            :key="course.title.ru + course.year"
          >
            <p class="education__line">
              <strong>{{ course.title[locale] }}</strong> · {{ course.provider }} · {{ course.year }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </Section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { courses, education } from '@/entities/education';
import { Section } from '@/shared/ui/Section';
import { useI18n } from '@/shared/lib/i18n';

const { t, locale: currentLocale } = useI18n();

const locale = computed(() => currentLocale.value);
</script>

<style scoped lang="scss">
.education__subtitle {
  margin: 0 0 8px;
  font-size: 0.95rem;
  opacity: 0.9;
}

.education__list {
  margin: 0 0 12px;
  padding-left: 18px;
}

.education__institution {
  margin: 0;
  font-weight: 600;
}

.education__line {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.9;
}
</style>


