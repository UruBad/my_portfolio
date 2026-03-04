<template>
  <button
    type="button"
    class="download-resume"
    @click="download"
  >
    {{ t('hero.cta.resume') }}
  </button>
</template>

<script setup lang="ts">
import { useDownloadResume } from '@/features/download-resume/lib/useDownloadResume';
import { useI18n } from '@/shared/lib/i18n/useI18n';

const { download } = useDownloadResume();
const { t } = useI18n();
</script>

<style scoped lang="scss">
.download-resume {
  border: none;
  border-radius: 999px;
  padding: 10px 18px;
  background: linear-gradient(135deg, #6366f1, #a855f7);
  color: #f9fafb;
  font-size: 0.9rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.45);
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease,
    filter 0.15s ease;
}

.download-resume:hover {
  transform: translateY(-1px);
  filter: brightness(1.05);
  box-shadow: 0 16px 35px rgba(15, 23, 42, 0.6);
}
</style>

