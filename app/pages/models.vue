<script lang="ts" setup>
const isList = ref(false);
</script>
<template>
  <section class="space-y-4">
    <header class="flex items-center justify-between">
      <div class="space-y-1">
        <h2 class="text-2xl font-bold">Models</h2>
        <p class="text-(--ui-text-muted)">Manage your models</p>
      </div>
      <nav class="max-w-xs flex gap-2">
        <UButton
          icon="i-lucide-layout-grid"
          color="neutral"
          :variant="isList ? 'ghost' : 'soft'"
          size="xl"
          trailing
          @click="isList = false"
        ></UButton>
        <UButton
          icon="i-lucide-align-justify"
          size="xl"
          color="neutral"
          :variant="isList ? 'soft' : 'ghost'"
          trailing
          @click="isList = true"
        ></UButton>
      </nav>
    </header>

    <div class="grid gap-4" :class="isList ? 'grid-cols-1' : 'grid-cols-5'">
      <UCard variant="subtle">
        <template #header>
          <header class="flex items-center justify-between">
            <h2 class="text-lg font-bold">Gemini 2.5 Pro</h2>
            <UBadge color="primary" variant="subtle" size="sm">FREE</UBadge>
          </header>
        </template>
        <template v-if="!isList" #footer>
          <footer class="flex items-center justify-between">
            <UButton variant="subtle" color="neutral">View</UButton>
          </footer>
        </template>
      </UCard>
      <UCard variant="subtle">
        <template #header>
          <header class="flex items-center justify-between">
            <h2 class="text-lg font-bold">GPT-4o</h2>
            <span class="text-sm">$60.00 / 1M tokens</span>
          </header>
        </template>
        <template v-if="!isList" #footer>
          <footer class="flex items-center justify-between">
            <UButton variant="subtle" color="neutral">View</UButton>
          </footer>
        </template>
      </UCard>
    </div>
  </section>
</template>
