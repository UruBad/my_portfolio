<template>
  <footer class="footer">
    <div class="footer__inner">
      <span class="footer__text">
        © {{ year }} Uru Badtiev. All rights reserved.
      </span>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<style scoped lang="scss">
.footer {
  border-top: 1px solid rgba(148, 163, 184, 0.3);
}

.footer__inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 16px;
  font-size: 0.8rem;
  opacity: 0.7;
}
</style>

