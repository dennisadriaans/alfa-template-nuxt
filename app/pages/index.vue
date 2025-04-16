<script lang="ts" setup>
const route = useRoute();
const searchQuery = ref("");
</script>
<template>
  <div>
    <div class="flex flex-col lg:flex-row gap-4 mb-6 justify-between">
      <div class="flex items-center gap-4">
        <div class="hidden lg:flex items-center">
          <UIcon name="i-lucide-panel-left-close" :size="20" />
        </div>
        <h2 class="text-2xl font-bold">Nuxt Admin Dashboard 👋</h2>
      </div>
      <UInput
        v-model="searchQuery"
        placeholder="Search..."
        icon="i-heroicons-magnifying-glass"
        class="w-full sm:w-64 hidden lg:block"
      />
    </div>

    <!-- <div
      class="mt-8 mb-2 pb-4 space-y-4 space-x-2 flex items-center justify-start"
    >
      <NuxtLink to="/" class="mb-0">
        <UButton
          :active="route.path === '/'"
          icon="i-lucide-chart-line"
          size="md"
          color="neutral"
          variant="ghost"
          active-variant="subtle"
          >Data</UButton
        >
      </NuxtLink>
      <NuxtLink to="/code" class="mb-0">
        <UButton
          :active="route.path === '/code'"
          icon="i-lucide-code-xml"
          size="md"
          color="neutral"
          variant="ghost"
          active-variant="subtle"
          >Code</UButton
        >
      </NuxtLink>
      <NuxtLink to="/settings" class="mb-0">
        <UButton
          :active="route.path === '/settings'"
          icon="i-lucide-settings"
          size="md"
          color="neutral"
          variant="ghost"
          active-variant="subtle"
          >Settings</UButton
        >
      </NuxtLink>
    </div> -->

    <NuxtPage />
  </div>
</template>
