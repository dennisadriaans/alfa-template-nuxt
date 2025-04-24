<script lang="ts" setup>
const route = useRoute();
</script>
<template>
  <div class="space-y-6 px-8">
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">Dashboard</h2>
      <div
        class="inline-flex items-center justify-start border border-(--ui-border) rounded-lg"
      >
        <NuxtLink to="/">
          <UButton
            :active="route.path === '/'"
            active-variant="soft"
            size="lg"
            variant="link"
            color="neutral"
            >All sessions</UButton
          >
        </NuxtLink>
        <NuxtLink to="/traffic">
          <UButton
            :active="route.path === '/traffic'"
            active-variant="soft"
            size="lg"
            variant="link"
            color="neutral"
            >Direct traffic</UButton
          >
        </NuxtLink>

        <UButton size="lg" variant="link" color="neutral"
          >Organic traffic</UButton
        >
        <UButton size="lg" variant="link" color="neutral">Paid traffic</UButton>
        <UButton size="lg" variant="link" color="neutral">Mobile users</UButton>
        <UButton size="lg" variant="link" color="neutral"
          >Returning users</UButton
        >
      </div>
    </div>
    <NuxtPage />
  </div>
</template>
