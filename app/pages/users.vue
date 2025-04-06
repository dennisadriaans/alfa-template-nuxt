<script lang="ts" setup></script>

<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between">
      <div class="space-y-1">
        <h2 class="text-2xl font-bold">Models</h2>
        <p class="text-(--ui-text-muted)">Manage your users</p>
      </div>
    </div>
    <UCard variant="subtle">
      <DataTable />
    </UCard>
  </div>
</template>
