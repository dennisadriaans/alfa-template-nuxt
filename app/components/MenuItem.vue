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
      variant="ghost"
      size="lg"
      class="w-full"
      :class="route.path === to ? ' bg-(--ui-bg)' : 'text-(--ui-text-dimmed) hover:text-(--ui-text-muted)'"
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
