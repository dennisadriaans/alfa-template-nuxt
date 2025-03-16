<script lang="ts" setup>
const colorMode = useColorMode();
const route = useRoute();

const items = ref(["Backlog", "Todo", "In Progress", "Done"]);
const value = ref("Backlog");

const isDark = computed(() => colorMode.value === "dark");

function setColorMode() {
  colorMode.value = isDark.value ? "light" : "dark";
}
</script>
<template>
  <UApp>
    <NuxtLoadingIndicator />

    <div
      class="w-full h-16 fixed flex items-center justify-between left-0 top-0 bg-card border-b border-(--ui-border) px-6"
    >
      <div class="flex items-center">
        <div class="flex items-center gap-2">
          <div class="w-3 h-3 rounded-xs bg-white"></div>
          <div class="text-xl tracking-tighter">Dashboard Alfa</div>
        </div>

        <div class="flex items-center gap-2 ml-20 text-neutral-500">
          <UButton
            color="neutral"
            variant="ghost"
            icon="i-lucide-chart-no-axes-column"
            >Usage</UButton
          >
          <div>/</div>
          <USelect
            v-model="value"
            :items="items"
            variant="subtle"
            color="neutral"
            size="sm"
            class="ml-2"
          />
        </div>
      </div>
      <div class="flex items-center gap-4">
        <UIcon
          name="i-lucide-moon-star"
          class="cursor-pointer"
          size="18"
          @click="setColorMode"
        />
        <!-- <UIcon
          name="i-lucide-circle-user-round"
          size="18"
          class="cursor-pointer"
        /> -->
      </div>
    </div>

    <div
      class="max-w-(--side-bar-width) w-full h-screen fixed left-0 top-16 bg-card border-r border-(--ui-border)"
    >
      <div class="p-4">
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
      </div>
    </div>

    <div
      class="w-[calc(100%-var(--side-bar-width))] mt-16 p-8 ml-(--side-bar-width)"
    >
      <NuxtPage />
    </div>
  </UApp>
</template>
