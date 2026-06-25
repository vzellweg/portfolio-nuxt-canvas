<script setup lang="ts">
import type { ContactEmail } from '~/types/ContactEmail'

const appConfig = useAppConfig()
const { t } = useI18n()

const email = ref('')
const message = ref('')
const phone = ref('')
const fullname = ref('')
const subject = ref('')

const loading = ref(false)

const contactData = computed(() => {
  return {
    email: email.value,
    message: message.value,
    phone: phone.value,
    fullname: fullname.value,
    subject: subject.value,
  } as ContactEmail
})

async function submitForm() {
  loading.value = true
  try {
    await $fetch('/api/sendEmail', {
      method: 'POST',
      body: contactData.value,
    })
    email.value = ''
    message.value = ''
    phone.value = ''
    fullname.value = ''
    subject.value = ''
    toast.success(t('contact.success'))
  }
  catch {
    toast.error(t('contact.error'))
  }
  loading.value = false
}
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
        name="subtitle"
        mdc-unwrap="p"
      />
    </h2>
    <Divider class="mb-8 mt-2" />
    <div class="flex flex-col sm:items-center sm:justify-between">
      <form
        class="flex w-full max-w-[40rem] flex-col gap-3"
        @submit.prevent="submitForm"
      >
        <!-- Fullname -->
        <UFormField
          label="Fullname"
          required
        >
          <UInput
            id="full-name"
            v-model="fullname"
            class="w-full"
            type="text"
            required
            name="fullname"
            autocomplete="name"
            variant="none"
            placeholder="John Doe"
          />
        </UFormField>

        <!-- Email -->
        <UFormField
          label="Email"
          required
        >
          <UInput
            id="email"
            v-model="email"
            class="w-full"
            type="email"
            required
            name="email"
            autocomplete="email"
            variant="none"
            placeholder="john.doe@gmail.com"
          />
        </UFormField>

        <!-- Phone -->
        <UFormField
          label="Phone"
        >
          <UInput
            id="phone"
            v-model="phone"
            class="w-full"
            type="text"
            name="phone"
            autocomplete="tel"
            variant="none"
            placeholder="123-456-7890"
          />
        </UFormField>

        <!-- Subject -->
        <UFormField
          label="Subject"
          required
        >
          <UInput
            id="subject"
            v-model="subject"
            class="w-full"
            variant="none"
            type="text"
            name="subject"
            :placeholder="$t('contact.subject')"
          />
        </UFormField>

        <!-- Message -->
        <UFormField
          label="Message"
          required
        >
          <UTextarea
            id="message"
            v-model="message"
            class="w-full"
            autoresize
            variant="none"
            required
            name="message"
            :rows="4"
            placeholder="Lets work together!"
          />
        </UFormField>
        <div class="flex justify-center">
          <UButton
            :loading
            type="submit"
            color="neutral"
            loading-icon="i-lucide-loader"
            block
          >
            {{ $t("contact.submit") }}
          </UButton>
        </div>
      </form>
      <Divider class="my-10" />
      <div class="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
        <div class="flex flex-col gap-3">
          <dd class="flex items-center gap-3 text-gray-400">
            <UIcon
              name="i-heroicons-phone"
              class="size-6"
              aria-hidden="true"
            />
            <span>
              {{ appConfig.phone }}
            </span>
          </dd>
          <dd class="flex items-center gap-3 text-gray-400">
            <UIcon
              name="i-heroicons-envelope"
              class="size-6"
              aria-hidden="true"
            />
            <UTooltip
              :text="$t('global.email')"
              :kbds="['meta', 'o']"
            >
              <NuxtLink
                :to="`mailto:${appConfig.email}`"
                class="cursor-pointer transition-colors duration-300 hover:text-main"
              >
                {{ appConfig.email }}
              </NuxtLink>
            </UTooltip>
          </dd>
        </div>
        <div>
          <!-- Meeting scheduler in development -->
          <!-- <MeetingButton /> -->
        </div>
      </div>
    </div>
  </section>
</template>
