<script lang="ts" setup>
const colorMode = useColorMode();
const route = useRoute();

const items = ref(["Dennis Adriaansen", "Todo", "In Progress", "Done"]);
const value = ref("Dennis Adriaansen");

const isDark = computed(() => colorMode.value === "dark");

function setColorMode() {
  colorMode.value = isDark.value ? "light" : "dark";
}
</script>
<template>
  <UApp>
    <NuxtLoadingIndicator />

    <aside
      class="max-w-(--side-bar-width) w-full h-screen fixed left-0 top-0 bg-card border-r border-(--ui-border)"
    >
      <nav class="p-4 space-y-8">
        <header class="flex items-center justify-center gap-2 mt-4">
          <span class="w-3 h-3 rounded-xs bg-white"></span>
          <h1 class="text-xl tracking-tighter">Dashboard Alfa</h1>
        </header>

        <USelect v-model="value" :items="items" class="w-full" />

        <NuxtLink to="/">
          <UButton
            color="neutral"
            variant="ghost"
            size="lg"
            class="w-full"
            icon="i-lucide-house"
            >Dashboard</UButton
          >
        </NuxtLink>
        <NuxtLink to="/users">
          <UButton
            color="neutral"
            variant="ghost"
            size="lg"
            class="w-full"
            icon="i-lucide-users"
            >Users</UButton
          >
        </NuxtLink>
        <NuxtLink to="/models">
          <UButton
            color="neutral"
            variant="ghost"
            size="lg"
            class="w-full"
            icon="i-lucide-share-2"
            >Models</UButton
          >
        </NuxtLink>
      </nav>
    </aside>

    <main
      class="w-[calc(100%-var(--side-bar-width))] p-8 ml-(--side-bar-width)"
    >
      <NuxtPage />
    </main>
  </UApp>
</template>
