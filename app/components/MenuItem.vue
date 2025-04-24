<script lang="ts" setup>
defineProps<{
  to: string;
  icon: string;
  label: string;
}>();

const route = useRoute();
</script>

<template>
  <NuxtLink class="block" :to="to">
    <UButton
      color="neutral"
      variant="link"
      size="xl"
      class="w-full transition"
      :active="route.path === to"
      active-variant="soft"
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
