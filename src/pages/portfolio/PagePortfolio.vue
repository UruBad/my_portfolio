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
import { HeroSection } from '@/widgets/hero';
import { AboutSection } from '@/widgets/about';
import { ExperienceSection } from '@/widgets/experience';
import { SkillsSection } from '@/widgets/skills';
import { ProjectsSection } from '@/widgets/projects';
import { EducationSection } from '@/widgets/education';
import { ServicesSection } from '@/widgets/services';
import { ContactsSection } from '@/widgets/contacts';
</script>

