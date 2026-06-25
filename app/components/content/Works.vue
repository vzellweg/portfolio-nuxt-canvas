<script setup lang="ts">
import type { Project } from '~/types/Project'

const { data: projects } = await useAsyncData('works-projects', () =>
  queryCollection('projects').order('release', 'DESC').all(),
)
</script>

<template>
  <div class="snap-center" />
  <section class="mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20">
    <h1
      class="font-testimonial text-white-shadow text-center text-4xl font-bold"
    >
      <slot
        name="title"
        mdc-unwrap="p"
      />
    </h1>
    <h2 class="text-center text-lg font-light italic text-muted">
      <slot
        name="subtitle"
        mdc-unwrap="p"
      />
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
