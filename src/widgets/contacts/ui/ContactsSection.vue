<template>
  <Section :id="'contacts'" :title="t('section.contacts.title')">
    <div class="contacts">
      <dl class="contacts__list">
        <div class="contacts__item">
          <dt class="contacts__label">
            {{ labelPhone }}
          </dt>
          <dd class="contacts__value">
            <a :href="`tel:${contacts.phone}`">
              {{ contacts.phone }}
            </a>
          </dd>
        </div>
        <div class="contacts__item">
          <dt class="contacts__label">
            {{ labelEmail }}
          </dt>
          <dd class="contacts__value">
            <a :href="`mailto:${contacts.email}`">
              {{ contacts.email }}
            </a>
          </dd>
        </div>
        <div class="contacts__item">
          <dt class="contacts__label">
            GitHub
          </dt>
          <dd class="contacts__value">
            <a
              :href="contacts.githubUrl"
              target="_blank"
              rel="noreferrer"
            >
              {{ contacts.githubUrl }}
            </a>
          </dd>
        </div>
        <div class="contacts__item">
          <dt class="contacts__label">
            {{ labelLocation }}
          </dt>
          <dd class="contacts__value">
            {{ contactsLocation }}
          </dd>
        </div>
      </dl>
    </div>
  </Section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { contacts } from '@/entities/contacts/model/contacts';
import Section from '@/shared/ui/Section/Section.vue';
import { useI18n } from '@/shared/lib/i18n/useI18n';

const { t, locale } = useI18n();

const contactsLocation = computed(() => contacts.location[locale.value]);

const labelPhone = computed(() => (locale.value === 'ru' ? 'Телефон' : 'Phone'));
const labelEmail = computed(() => (locale.value === 'ru' ? 'Email' : 'Email'));
const labelLocation = computed(() => (locale.value === 'ru' ? 'Город' : 'Location'));
</script>

<style scoped lang="scss">
.contacts__list {
  margin: 0;
  padding: 0;
}

.contacts__item {
  display: grid;
  grid-template-columns: minmax(0, 140px) minmax(0, 1fr);
  gap: 8px 16px;
  margin-bottom: 8px;
}

.contacts__label {
  margin: 0;
  font-weight: 600;
}

.contacts__value {
  margin: 0;
}

.contacts__value a {
  color: inherit;
  text-decoration: none;
  border-bottom: 1px dashed rgba(148, 163, 184, 0.7);
}

.contacts__value a:hover {
  border-bottom-style: solid;
}

@media (max-width: 640px) {
  .contacts__item {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>


