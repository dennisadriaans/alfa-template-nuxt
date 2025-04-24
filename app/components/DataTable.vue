<script setup lang="ts">
import type { TableColumn } from "@nuxt/ui";
import { ref, computed, watchEffect } from "vue";
import type { User } from "~/data/UsersData";

const props = defineProps<{
  data: User[];
  columns: TableColumn<User>[];
  hideFilters?: boolean;
  searchQuery?: string;
  statusFilter?: string;
  page?: number;
  pageSize?: number;
  pageSizeOptions?: number[];
}>();

const searchQuery = ref(props.searchQuery ?? "");
const statusFilter = ref(props.statusFilter ?? "");

const page = ref(props.page ?? 1);
const pageSize = ref(props.pageSize ?? 5);
const pageSizeOptions = props.pageSizeOptions ?? [5, 10, 15, 20];

// Get statuses for filter dropdown
const statusOptions = computed(() => {
  return [...new Set(props.data.map((item) => item.status))];
});

// Filter and paginate data
const filteredData = computed(() => {
  let result = [...props.data];

  // Apply search query filter (case insensitive)
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(
      (item) =>
        item.id.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query) ||
        new Date(item.date).toLocaleString().toLowerCase().includes(query) ||
        item.status.toLowerCase().includes(query) ||
        item.amount.toString().includes(query)
    );
  }

  // Apply status filter
  if (statusFilter.value) {
    result = result.filter((item) => item.status === statusFilter.value);
  }

  return result;
});

watchEffect(() => {
  if (searchQuery.value || statusFilter.value) {
    page.value = 1;
  }
});

const paginatedData = computed(() => {
  const startIndex = (page.value - 1) * pageSize.value;
  const endIndex = startIndex + pageSize.value;
  return filteredData.value.slice(startIndex, endIndex);
});

const handlePageChange = (newPage: number) => {
  page.value = newPage;
};

const resetFilters = () => {
  searchQuery.value = "";
  statusFilter.value = "";
  page.value = 1;
};
</script>

<template>
  <section class="flex flex-col gap-6">
    <header class="flex items-center justify-between">
      <div
        class="w-full flex items-center gap-4"
        :class="hideFilters ? 'justify-between' : ''"
      >
        <h2 class="font-medium text-lg">All Users</h2>
      </div>
      <nav
        v-if="!hideFilters"
        class="w-full flex flex-col lg:flex-row gap-4 items-start lg:justify-end"
      >
        <UInput
          v-model="searchQuery"
          placeholder="Search..."
          icon="i-heroicons-magnifying-glass"
          class="w-full sm:w-64"
        />

        <USelect
          v-model="statusFilter"
          :items="statusOptions"
          placeholder="Filter by status"
          class="w-full sm:w-48"
        />

        <UButton
          v-if="searchQuery || statusFilter"
          variant="ghost"
          icon="i-heroicons-x-mark"
          class="whitespace-nowrap"
          @click="resetFilters"
        >
          Clear filters
        </UButton>
        <UButton icon="i-lucide-plus" color="neutral" variant="subtle"
          >Add User</UButton
        >
      </nav>
    </header>

    <UTable :data="paginatedData" :columns="columns" />

    <footer
      class="flex flex-col sm:flex-row items-center justify-between gap-4"
    >
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2">
          <span class="text-sm text-(--ui-text-muted)">Rows per page:</span>
          <USelect
            v-model="pageSize"
            :items="pageSizeOptions"
            size="sm"
            class="w-16"
          />
        </div>
        <span class="text-sm text-(--ui-text-muted)">
          Showing {{ paginatedData.length }} of
          {{ filteredData.length }} results
        </span>
      </div>
      <nav class="flex items-center gap-4">
        <UPagination
          :default-page="page"
          :total="props.data.length"
          :items-per-page="pageSize"
          @update:page="handlePageChange"
        />
      </nav>
    </footer>
  </section>
</template>
