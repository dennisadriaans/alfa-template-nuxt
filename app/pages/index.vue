<script lang="ts" setup>
const route = useRoute();
</script>
<template>
  <div>
    <div class="flex items-center justify-between">
      <h2 class="text-2xl font-bold">Nuxt Admin Dashboard 👋</h2>
    </div>

    <div
      class="mt-8 mb-4 pb-4 border-b border-(--ui-border) space-y-4 space-x-2"
    >
      <NuxtLink to="/">
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
      <NuxtLink to="/code">
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
      <NuxtLink to="/settings">
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
    </div>

    <NuxtPage />
  </div>
</template>
