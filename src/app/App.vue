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
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import PagePortfolio from '@/pages/portfolio/PagePortfolio.vue';
</script>

