<script lang="ts" setup>
const isList = ref(false);

const models = [
  { name: 'Gemini 2.5 Pro', pricing: 'FREE', badge: true },
  { name: 'GPT-4o', pricing: '$60.00 / 1M tokens', badge: false },
  { name: 'Claude 3.5 Sonnet', pricing: '$3.00 / 1M tokens', badge: false },
  { name: 'Claude 3 Opus', pricing: '$15.00 / 1M tokens', badge: false },
  { name: 'Mistral Large', pricing: '$8.00 / 1M tokens', badge: false },
  { name: 'Llama 3 70B', pricing: 'FREE', badge: true },
  { name: 'Mixtral 8x7B', pricing: '$2.50 / 1M tokens', badge: false },
  { name: 'Command R+', pricing: '$5.00 / 1M tokens', badge: false }
];
</script>
<template>
  <section class="space-y-8">
    <header class="flex items-center justify-between">
      <div>
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
        />
        <UButton
          icon="i-lucide-align-justify"
          size="xl"
          color="neutral"
          :variant="isList ? 'soft' : 'ghost'"
          trailing
          @click="isList = true"
        />
      </nav>
    </header>

    <UCard variant="subtle">
      <div class="grid gap-4" :class="isList ? 'grid-cols-1' : 'grid-cols-4'">
        <UCard v-for="model in models" :key="model.name" variant="subtle">
          <template #header>
            <header class="flex items-center justify-between">
              <h2 class="text-lg font-bold">{{ model.name }}</h2>
              <UBadge v-if="model.badge" color="primary" variant="subtle" size="sm">{{ model.pricing }}</UBadge>
              <span v-else class="text-sm">{{ model.pricing }}</span>
            </header>
          </template>
          <template v-if="!isList" #footer>
            <footer class="flex items-center justify-between">
              <UButton variant="subtle" color="neutral">View</UButton>
            </footer>
          </template>
        </UCard>
      </div>
    </UCard>
  </section>
</template>
