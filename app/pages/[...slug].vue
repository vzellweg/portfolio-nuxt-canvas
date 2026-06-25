<script setup lang="ts">
const route = useRoute()

const { data: doc } = await useAsyncData(`content-${route.path}`, async () => {
  const page = await queryCollection('pages').path(route.path).first()
  if (page)
    return page
  return await queryCollection('articles').path(route.path).first()
})

if (!doc.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const layoutName = computed(() => (doc.value?.layout as string | undefined) || 'default')

useHead({
  title: () => doc.value?.title,
})
</script>

<template>
  <NuxtLayout
    :name="layoutName"
    :page="doc"
  >
    <ContentRenderer
      v-if="doc"
      :value="doc"
    />
  </NuxtLayout>
</template>
