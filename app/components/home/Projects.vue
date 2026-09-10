<script setup lang="ts">
const { data: projects } = await useAsyncData('home-projects', () =>
  queryCollection('projects').order('release', 'DESC').all(),
)
</script>

<template>
  <div class="flex w-full flex-col gap-6">
    <h3 class="font-testimonial text-white-shadow text-xl font-bold">
      {{ $t("navigation.works") }}
    </h3>
    <div class="flex w-full flex-col gap-4">
      <NuxtLink
        v-for="project in projects?.filter((work) => work.featured)"
        :key="project.id"
        role="link"
        class="group flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 transition-colors duration-200 hover:bg-[var(--bg-secondary)] hover:text-main focus-visible:bg-[var(--bg-secondary)] focus-visible:text-main focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/30"
        :to="{ path: '/works', hash: `#${project.anchor || project.id}` }"
        :aria-label="'go to ' + project.name + ' project website'"
      >
        <div class="flex grow flex-col">
          <div class="flex grow items-center">
            <span class="whitespace-nowrap">
              {{ project.name }}
            </span>
            <div class="mx-2 h-px w-full bg-white/15 transition-colors duration-200 group-hover:bg-white/40 group-focus-visible:bg-white/40" />
            <span class="whitespace-nowrap text-muted transition-colors duration-200 group-hover:text-zinc-200 group-focus-visible:text-zinc-200">
              {{ project.release === "soon" ? $t("global.soon") + "..." : project.release }}
            </span>
          </div>
          <div class="flex items-center ps-5 text-muted transition-colors duration-200 group-hover:text-zinc-200 group-focus-visible:text-zinc-200">
            <p class="whitespace-nowrap text-sm">{{ project.role }}</p>
            <div class="mx-2 w-full" />
            <p class="whitespace-nowrap text-xs italic">{{ project.tags.join(", ") }}</p>
          </div>
        </div>
      </NuxtLink>
    </div>
    <div @click="useRouter().push('/works')">
      <span class="font-testimonial text-white-shadow cursor-pointer text-sm">
        {{ $t("global.see_more") }}
      </span>
    </div>
  </div>
</template>

<style scoped></style>
