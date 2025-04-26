<script lang="ts" setup>
// https://nl.pinterest.com/pin/449163762855614335/
const colorMode = useColorMode();

const value = ref(50);

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
      <nav class="h-full p-4 space-y-6 col-span-1 lg:col-span-3">
        <NuxtLink to="/" class="flex items-center justify-start gap-4 mt-4">
          <div
            class="bg-(--ui-bg-muted) rounded flex items-center justify-center w-9 h-9 p-1 rounded-full"
          >
            <UIcon name="i-lucide-layout-dashboard" />
          </div>
          <h1 class="text-xl tracking-tight font-semibold">Nuxt Charts</h1>
        </NuxtLink>

        <UInput
          v-model="searchQuery"
          placeholder="Search..."
          icon="i-heroicons-magnifying-glass"
          size="xl"
          class="w-full hidden lg:block"
        />

        <div class="space-y-8">
          <div class="space-y-1">
            <div
              class="mb-2 text-xs font-bold tracking-wide text-(--ui-text-dimmed) uppercase"
            >
              Overview
            </div>
            <MenuItem
              to="/home"
              icon="i-lucide-layout-dashboard"
              label="Home"
            />
            <MenuItem to="/" icon="i-lucide-house" label="Dashboard" />
            <MenuItem to="/users" icon="i-lucide-users" label="Users" />
            <MenuItem to="/models" icon="i-lucide-share-2" label="Models" />
          </div>

          <div class="space-y-1">
            <div
              class="mb-2 text-xs font-bold tracking-wide text-(--ui-text-dimmed) uppercase"
            >
              Actions
            </div>
            <MenuItem
              to="/home"
              icon="i-lucide-layout-dashboard"
              label="Reports"
            />
            <MenuItem to="/users" icon="i-lucide-users" label="Tasks" />
            <MenuItem to="/models" icon="i-lucide-share-2" label="Exports" />
          </div>

          <div class="space-y-1">
            <div
              class="mb-2 text-xs font-bold tracking-wide text-(--ui-text-dimmed) uppercase"
            >
              Accounts
            </div>
            <div>
              <div class="flex gap-2 px-3 py-2">
                <img class="w-5" src="/analytics.svg" alt="" />
                <div
                  class="text-(--ui-text-muted) hover:text-(--ui-text) font-medium"
                >
                  Google Analytics
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="absolute left-0 bottom-0 p-4 w-full space-y-8">
          <UCard variant="soft" class="bg-(--ui-bg-elevated)/50">
            <div>
              <h4 class="font-semibold mb-2">Used space</h4>
              <p class="text-(--ui-text-muted) text-sm">
                Your team has used 80% of your available space. Need more?
              </p>
              <div class="my-4">
                <UProgress v-model="value" />
              </div>
              <div class="space-x-3">
                <UButton variant="link" color="neutral" class="px-0"
                  >Dismiss</UButton
                >
                <UButton variant="link" color="primary" class="px-0"
                  >Upgrade</UButton
                >
              </div>
            </div>
          </UCard>

          <div>
            <MenuItem to="/settings" icon="i-lucide-share-2" label="Settings" />
            <MenuItem
              to="/auth/reset"
              icon="i-lucide-log-out"
              label="Log out"
            />
          </div>
        </div>
      </nav>
    </aside>

    <main class="p-8 lg:pl-(--side-bar-width) mx-auto max-w-[2040px]">
      <NuxtPage />
    </main>
  </UApp>
</template>
