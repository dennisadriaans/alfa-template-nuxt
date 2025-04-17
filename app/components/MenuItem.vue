<script lang="ts" setup>
defineProps<{
  to: string;
  icon: string;
  label: string;
}>();

const route = useRoute();
</script>

<template>
  <NuxtLink class="-ml-1" :to="to">
    <UButton
      color="neutral"
      variant="link"
      size="lg"
      class="w-full transition"
      :class="route.path === to ? ' bg-(--ui-bg-elevated) text-neutral' : ''"
      :icon="icon"
      :ui="{
        leadingIcon: `mr-1 text-lg ${
          route.path === to ? '' : 'text-(--ui-text-dimmed)'
        }`,
      }"
      >{{ label }}</UButton
    >
  </NuxtLink>
</template>
