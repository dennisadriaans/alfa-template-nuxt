<script lang="ts" setup>
import type { TableColumn } from "@nuxt/ui";
import { UsersData, type User } from "~/data/UsersData";

const UBadge = resolveComponent("UBadge");
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
  <div class="space-y-4">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <StatusCard variant="subtle" name="Total Sessions" :value="526" />
      <StatusCard variant="subtle" name="Session duration" :value="'2:24'" />
      <StatusCard variant="subtle" name="Page per session" :value="316" />
    </div>
    <div>
      <UCard>
        <DataTable :data="data" :columns="columns" :page-size="20" />
      </UCard>
    </div>
  </div>
</template>
