<template>
  <div class="page-portfolio">
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <SkillsSection />
    <ProjectsSection />
    <EducationSection />
    <ServicesSection />
    <ContactsSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/widgets/hero/ui/HeroSection.vue';
import AboutSection from '@/widgets/about/ui/AboutSection.vue';
import ExperienceSection from '@/widgets/experience/ui/ExperienceSection.vue';
import SkillsSection from '@/widgets/skills/ui/SkillsSection.vue';
import ProjectsSection from '@/widgets/projects/ui/ProjectsSection.vue';
import EducationSection from '@/widgets/education/ui/EducationSection.vue';
import ServicesSection from '@/widgets/services/ui/ServicesSection.vue';
import ContactsSection from '@/widgets/contacts/ui/ContactsSection.vue';
</script>

