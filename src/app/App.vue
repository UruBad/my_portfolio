<template>
  <div class="app">
    <Header />
    <main class="app__main">
      <PagePortfolio />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/widgets/header/ui/Header.vue';
import Footer from '@/widgets/footer/ui/Footer.vue';
import PagePortfolio from '@/pages/portfolio/PagePortfolio.vue';
</script>

