<script lang="ts" setup>
const colorMode = useColorMode();

const items = ref(["Dennis Adriaansen"]);
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
      class="max-w-(--side-bar-width) w-full h-screen fixed left-0 top-0 bg-card border-r border-(--ui-border) hidden lg:block"
    >
      <nav class="h-full p-4 space-y-6  col-span-1 lg:col-span-3">
        <div class="flex items-center justify-start gap-4 mt-4">
          <div class="bg-(--ui-bg-muted) rounded-full p-2.5">
            <div class="w-2 h-2 rounded-xs bg-(--ui-primary)" />
          </div>
          <h1 class="text-xl">Dashboard Alfa</h1>
        </div>

        <!-- <USelect
          v-model="value"
          :items="items"
          variant="subtle"
          trailing-icon="i-lucide-chevrons-up-down"
          :trailing="true"
          size="lg"
          class="w-full"
        /> -->

        <div>
          <div class="mb-2 text-sm text-(--ui-text-muted)">Menu</div>
          <MenuItem to="/" icon="i-lucide-house" label="Dashboard" />
          <MenuItem to="/users" icon="i-lucide-users" label="Users" />
          <MenuItem to="/models" icon="i-lucide-share-2" label="Models" />
        </div>

        <div class="absolute left-0 bottom-0 p-4 w-full">
          <MenuItem to="/settings" icon="i-lucide-share-2" label="Settings" />
          <MenuItem to="/auth/reset" icon="i-lucide-log-out" label="Log out" />
        </div>
      </nav>
    </aside>

    <main
      class="p-8 lg:pl-(--side-bar-width-spaced) mx-auto max-w-[2040px]"
    >
      <NuxtPage />
    </main>
  </UApp>
</template>
