<script setup lang="ts">
const { locale } = useI18n()

const { data: projects } = await useAsyncData('projects', () => queryContent('/projects').locale(locale.value).sort({ release: -1 }).find(), {
  watch: [locale],
})
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
        class="flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 hover:bg-secondary hover:text-main"
        :to="{path: '/works', hash: `#${project.id}`}"
        :aria-label="'go to ' + project.name + ' project website'"
        >
          <div class="flex grow flex-col">
            <div class="flex grow items-center">
              <span class="whitespace-nowrap">
                {{ project.name }}
              </span>
              <div class="mx-2 h-[0.1px] w-full bg-muted" />
              <span class="whitespace-nowrap text-muted">
                {{ project.release === "soon" ? $t("global.soon") + "..." : project.release }}
              </span>
            </div>
            <div class="flex text-muted ps-5 items-center">
              <p class="whitespace-nowrap text-sm">{{project.role}}</p>
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
