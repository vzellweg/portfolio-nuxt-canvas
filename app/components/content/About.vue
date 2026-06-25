<script setup lang="ts">
const { data: stack } = await useAsyncData('stack', () => queryCollection('stack').first())
</script>

<template>
  <section class="mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20">
    <h1 class="font-testimonial text-white-shadow text-center text-4xl font-bold">
      <slot
        name="title"
        mdc-unwrap="p"
      />
    </h1>
    <h2 class="text-center text-lg font-light italic text-muted">
      <slot
        name="description"
        mdc-unwrap="p"
      />
    </h2>
    <Divider class="mb-8 mt-2" />
    <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <AboutProfilePicture />
      <div class="relative flex flex-col gap-3 sm:ml-4">
        <h3 class="text-lg text-muted">
          Intro
        </h3>
        <div class="flex flex-col gap-4 text-main">
          <slot name="intro" />
        </div>
        <!-- Remove signature for now -->
        <!-- <AboutSignature class="absolute -bottom-24 right-0 hidden w-40 sm:block" />
        <AboutSignature class="black absolute -bottom-24 -right-2 w-32 sm:hidden" /> -->
      </div>
    </div>
    <Divider class="my-8" />
    <slot name="experiences" />
    <Divider class="my-8" />
    <div class="flex flex-col gap-3">
      <div class="mb-6 flex flex-col gap-1">
        <h3 class="text-white-shadow font-testimonial text-3xl font-bold">
          <slot
            name="stack_title"
            mdc-unwrap="p"
          />
        </h3>
        <p class="text-sm text-muted">
          <slot
            name="stack_description"
            mdc-unwrap="p"
          />
        </p>
      </div>
      <div class="flex flex-wrap gap-4">
        <AboutStackItem
          v-for="item in stack!.items"
          :key="item.name"
          :item
        />
      </div>
    </div>
  </section>
</template>
