<script lang="ts" setup>
import type { TableColumn } from "@nuxt/ui";
import { UsersData, type User } from "~/data/UsersData";
const UBadge = resolveComponent("UBadge");

/* You will typically use useFetch in real life scenarios here. */
const data = ref(UsersData);

const columns: TableColumn<User>[] = [
  {
    accessorKey: "id",
    header: "#",
    cell: ({ row }) => `#${row.getValue("id")}`,
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      return new Date(row.getValue("date")).toLocaleString("en-US", {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      return h(
        UBadge,
        { color: "primary", variant: "subtle" },
        { default: () => status }
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: () => h("div", { class: "text-right" }, "Amount"),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("amount"));

      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(amount);

      return h("div", { class: "text-right font-medium" }, formatted);
    },
  },
];
</script>

<template>
  <div class="space-y-6 px-8">
    <div class="space-y-1">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-bold">Users</h2>
        <UInput
          v-model="searchQuery"
          placeholder="Search..."
          icon="i-lucide-search"
          class="hidden lg:block"
        />
      </div>
      <p class="text-(--ui-text-muted)">Manage your users</p>
    </div>
    <UCard variant="subtle">
      <DataTable :data="data" :columns="columns" :page-size="20" />
    </UCard>
  </div>
</template>
