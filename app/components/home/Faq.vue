<script setup lang="ts">
import type { Faq } from '~/types/Faq'

const { data: faq } = await useAsyncData('faq', () => queryCollection('faq').first())

const items = computed(() =>
  faq.value?.faqQuestions.map((entry: Faq) => ({
    label: entry.title,
    value: entry.title.toLowerCase(),
    questions: entry.questions,
  })) ?? [],
)
</script>

<template>
  <div class="flex flex-col items-center justify-center space-y-8">
    <div class="flex flex-col items-center justify-center gap-2">
      <h3 class="font-testimonial text-white-shadow text-4xl font-bold">
        {{ faq!.title }}
      </h3>
      <p class="text-center text-sm font-light text-muted">
        {{ faq!.subtitle }}
      </p>
    </div>
    <div>
      <UTabs
        :items="items"
        class="w-full"
      >
        <template #content="{ item }">
          <FAQ
            :questions="item.questions"
            class="mt-8 max-w-lg"
          />
        </template>
      </UTabs>
    </div>
  </div>
</template>
