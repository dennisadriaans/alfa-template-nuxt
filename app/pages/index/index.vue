<script lang="ts" setup>
import {
  BarChart,
  LineChart,
  CurveType,
  PaginationPosition,
  type BulletLegendItemInterface,
} from "vue-chrts";

import type { TableColumn } from "@nuxt/ui";
const UBadge = resolveComponent("UBadge");

import { UsersData, type User } from "~/UsersData";
import { ClaudeData, OpenAIData, GeminiData, UsageData } from "~/LLMData";

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

const LLMFields = {
  total_tokens: { name: "Tokens", color: "#00DC82" },
};

const items = ref(["Backlog", "Todo", "In Progress", "Done"]);
const value = ref("Backlog");

const categories: Record<string, BulletLegendItemInterface> = {
  "Sonnet 3.7": { name: "Sonnet 3.7", color: "#00DC82" },
  "GPT-4o": { name: "GPT-4o", color: "#41B883" },
  "Gemini 2.5 Pro": { name: "Gemini 2.5 Pro", color: "#34495E" },
};

function formatDate(timestamp?: number | string) {
  if (!timestamp) return "";
  const options = {
    month: "short",
    day: "numeric",
  };

  const date = new Date(timestamp);
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  return `${formattedDate}`;
}
</script>
<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-4">
        <USelect
          v-model="value"
          :items="items"
          variant="subtle"
          icon="i-lucide-calendar-fold"
          color="neutral"
        />
      </div>
    </div>

    <div class="grid grid-cols-12 gap-4">
      <UCard variant="subtle" class="col-span-4">
        <h2 class="text-xl dark:text-white my-2 font-medium">Sonnet 3.7</h2>

        <div class="flex items-baseline gap-2 justify-start space-y-1 mb-4">
          <h4 class="text-neutral-500 text-sm">Total Tokens: 2,381</h4>
        </div>

        <BarChart
          :data="ClaudeData"
          :height="250"
          :categories="LLMFields"
          :y-axis="['total_tokens']"
          :x-num-ticks="6"
          :radius="0"
          :y-formatter="(i: number) => i"
          :x-formatter="(i: number): string => formatDate(ClaudeData[i]?.timestamp)"
        />
      </UCard>

      <UCard variant="subtle" class="col-span-4">
        <h2 class="text-xl dark:text-white my-2 font-medium">GPT-4o</h2>

        <div class="flex items-baseline gap-2 justify-start space-y-1 mb-4">
          <h4 class="text-neutral-500 text-sm">Total Tokens: 2,381</h4>
        </div>

        <BarChart
          :data="OpenAIData"
          :height="250"
          :categories="LLMFields"
          :y-axis="['total_tokens']"
          :x-num-ticks="6"
          :radius="0"
          :y-formatter="(i: number) => i"
          :x-formatter="(i: number): string => formatDate(OpenAIData[i]?.timestamp)"
        />
      </UCard>
      <UCard variant="subtle" class="col-span-4">
        <h2 class="text-xl dark:text-white my-2 font-medium">Gemini 2.5 Pro</h2>

        <div class="flex items-baseline gap-2 justify-start space-y-1 mb-4">
          <h4 class="text-neutral-500 text-sm">Total Tokens: 2,381</h4>
        </div>

        <BarChart
          :data="GeminiData"
          :height="250"
          :categories="LLMFields"
          :y-axis="['total_tokens']"
          :x-num-ticks="6"
          :radius="0"
          :y-formatter="(i: number) => i"
          :x-formatter="(i: number): string => formatDate(GeminiData[i]?.timestamp)"
        />
      </UCard>

      <UCard variant="subtle" class="col-span-6">
        <h2 class="text-xl dark:text-white my-2 font-medium">Daily Requests</h2>

        <LineChart
          :data="UsageData"
          :height="400"
          :pagination-poisition="PaginationPosition.Bottom"
          :categories="categories"
          :y-num-ticks="8"
          :x-formatter="(i: number): string => `${[i]?.date}`"
          :curve-type="CurveType.MonotoneX"
        />
      </UCard>
      <UCard variant="subtle" class="col-span-6">
        <DataTable :data="data" :columns="columns" :hide-filters="true" />
      </UCard>
    </div>
  </div>
</template>
