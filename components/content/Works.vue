<script setup lang="ts">
import type { Project } from "~/types/Project";

const { locale } = useI18n();

const { data: projects } = await useAsyncData(
  "projects",
  () =>
    queryContent("/projects").locale(locale.value).sort({ release: -1 }).find(),
  {
    watch: [locale],
  }
);
</script>

<template>
  <div class="snap-center"></div>
  <section class="mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20">
    <h1
      class="font-testimonial text-white-shadow text-center text-4xl font-bold"
    >
      <ContentSlot :use="$slots.title" />
    </h1>
    <h2 class="text-center text-lg font-light italic text-muted">
      <ContentSlot :use="$slots.subtitle" />
    </h2>
    <Divider class="mt-2" />
    <div class="grid grid-cols-1">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.name"
        :project="project as Project"
        :index="index"
      />
    </div>
  </section>
</template>

<style scoped></style>
