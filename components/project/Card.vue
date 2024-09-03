<script setup lang="ts">
import type { PropType } from 'vue'

import type { Project } from '~/types/Project'

defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
})
const img = useImage()

const cardElement = ref<HTMLElement | null>(null);
const scrollY = ref(0);

const handleScroll = () => {
  if(typeof window === 'undefined') return;
  scrollY.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const computedOpacity = computed(() => {
  // log is necesarry to trigger the reactivity, possibly having to do with the fact that its listening to `window`
  // TODO: find a more elegant solution
  console.log(Math.trunc(scrollY.value/100));
  if (!cardElement.value) return 1;

  const rect = cardElement.value.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const cardCenterY = rect.top + rect.height / 2;
  const distanceFromCenter = Math.abs(windowHeight / 2 - cardCenterY); 
  const distanceFromCenterRegion = Math.max(0, distanceFromCenter - windowHeight / 4);

  const opacity = Math.max(0.2, 1 - distanceFromCenterRegion / (windowHeight / 4));
  return opacity;
});
</script>

<template>
  <div :id="project.id" class="snap-center py-16" :style="{ opacity: computedOpacity }" ref="cardElement">
    <div
      class="group relative flex flex-col gap-1 rounded-lg border border-white/10 bg-zinc-900/80 p-1 shadow-2xl shadow-zinc-950/50 backdrop-blur-sm mb-5" :class="{ '2xl:mt-16': index !== 0 }">
      <div class="flex gap-1 px-1 py-[2px]">
        <div
          class="size-2 rounded-full bg-red-500/90 transition-all duration-300 group-hover:bg-red-500/90 sm:bg-white/10" />
        <div
          class="size-2 rounded-full bg-yellow-500/90 transition-all duration-300 group-hover:bg-yellow-500/90 sm:bg-white/10" />
        <div
          class="size-2 rounded-full bg-green-500/90 transition-all duration-300 group-hover:bg-green-500/90 sm:bg-white/10" />
      </div>
      <div class="flex h-96 justify-center overflow-hidden rounded-lg">
        <NuxtImg :placeholder="img(`${project.image}`)" width="1536" :alt="project.name + ' project image'"
          class="h-full rounded-lg object-cover transition-all duration-300 hover:scale-105" :src="project.image"
          :aria-label="project.name + ' project image'" />
      </div>
      <div class="absolute bottom-0 flex w-full justify-center">
        <div
          class="rounded-t-lg border-x border-t border-white/10 border-b-transparent px-4 py-[5px] shadow-md backdrop-blur-xl bg-black/30 sm:w-2/3">
          <div class="flex items-center justify-between gap-2">
            <div class="flex items-center gap-2">
              <component :is="project.logo" v-if="project.name !== 'Sekoïa'" :alt="project.name + ' logo'"
                :aria-label="project.name + ' logo'" :font-controlled="false" class="size-5 text-white/90" />
              <div class="flex items-center">
                <span class="whitespace-nowrap text-sm font-semibold text-white/90">
                  {{ project.name }}
                </span>
              </div>
            </div>
            <div class="flex gap-6 items-center">
              <span class="whitespace-nowrap text-xs text-neutral-300 font-semibold">
                {{ project.release === "soon" ? $t("global.soon") + "..." : project.release }}
              </span>
              <!-- create a link button for the project -->
              <!-- <div
                class="flex items-center justify-center rounded-full border border-transparent p-1 shadow-md backdrop-blur-md transition-all duration-500 group-hover:-rotate-45 group-hover:border-white/10">
                <UIcon name="i-heroicons-arrow-right" class="size-3 text-white" />
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <p>{{ project.description }}</p>
  </div>
</template>
