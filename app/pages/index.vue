<script lang="ts" setup>
import { ClaudeData, OpenAIData, GeminiData, UsageData } from "~/LLMData";
const UBadge = resolveComponent("UBadge");

const LLMFields = {
  total_tokens: { name: "Tokens", color: "#00DC82" },
};

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

const items = ref(["30 days", "7 days"]);
const value = ref("30 days");

const LLMUsageData = [
  {
    id: 1,
    timestamp: '2025-04-23T10:00:00Z',
    user_id: 'user123',
    model: 'GPT-4o',
    prompt_tokens: 130,
    completion_tokens: 200,
    cost_eur: 0.05,
    status: 'completed',
  },
  {
    id: 2,
    timestamp: '2025-04-23T10:15:30Z',
    user_id: 'user456',
    model: 'Sonnet 3.7',
    prompt_tokens: 50,
    completion_tokens: 100,
    cost_eur: 0.02,
    status: 'completed',
  },
  {
    id: 3,
    timestamp: '2025-04-23T10:30:45Z',
    user_id: 'user123',
    model: 'GPT-4o',
    prompt_tokens: 300,
    completion_tokens: 500,
    cost_eur: 0.15,
    status: 'completed',
  },
  {
    id: 4,
    timestamp: '2025-04-23T10:45:10Z',
    user_id: 'user789',
    model: 'Gemini 2.5 Pro',
    prompt_tokens: 75,
    completion_tokens: 120,
    cost_eur: 0.03,
    status: 'pending',
  },
  {
    id: 5,
    timestamp: '2025-04-23T11:00:00Z',
    user_id: 'user456',
    model: 'Sonnet 3.7',
    prompt_tokens: 200,
    completion_tokens: 0,
    cost_eur: 0.08,
    status: 'completed',
  },
  {
    id: 6,
    timestamp: '2025-04-23T11:15:20Z',
    user_id: 'user901',
    model: 'GPT-4o',
    prompt_tokens: 180,
    completion_tokens: 250,
    cost_eur: 0.07,
    status: 'completed',
  },
  {
    id: 7,
    timestamp: '2025-04-23T11:30:05Z',
    user_id: 'user234',
    model: 'Gemini 2.5 Pro',
    prompt_tokens: 90,
    completion_tokens: 150,
    cost_eur: 0.04,
    status: 'completed',
  },
  {
    id: 8,
    timestamp: '2025-04-23T11:45:55Z',
    user_id: 'user567',
    model: 'Sonnet 3.7',
    prompt_tokens: 110,
    completion_tokens: 180,
    cost_eur: 0.06,
    status: 'failed',
  },
  {
    id: 9,
    timestamp: '2025-04-23T12:00:30Z',
    user_id: 'user901',
    model: 'GPT-4o',
    prompt_tokens: 220,
    completion_tokens: 310,
    cost_eur: 0.10,
    status: 'completed',
  },
  {
    id: 10,
    timestamp: '2025-04-23T12:15:15Z',
    user_id: 'user234',
    model: 'Gemini 2.5 Pro',
    prompt_tokens: 60,
    completion_tokens: 90,
    cost_eur: 0.025,
    status: 'pending',
  },
];

const data = ref(LLMUsageData);

interface LLMUsage {
  id: number;
  timestamp: string;
  user_id: string;
  model: string;
  prompt_tokens: number;
  completion_tokens: number;
  cost_eur: number;
  status: 'completed' | 'pending' | 'failed';
}

interface TableColumn<T> {
  accessorKey: keyof T;
  header: string | (() => ReturnType<typeof h>);
  cell?: (props: { row: any }) => ReturnType<typeof h> | string | number;
}

const columns: TableColumn<LLMUsage>[] = [
  {
    accessorKey: "id",
    header: "#",
    cell: ({ row }) => `#${row.getValue("id")}`,
  },
  {
    accessorKey: "timestamp",
    header: "Timestamp",
    cell: ({ row }) => {
      return new Date(row.getValue("timestamp")).toLocaleString("en-US", {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
    },
  },
  {
    accessorKey: "user_id",
    header: "User ID",
  },
  {
    accessorKey: "model",
    header: "Model",
  },
  {
    accessorKey: "prompt_tokens",
    header: () => h("div", { class: "text-right" }, "Prompt Tokens"),
    cell: ({ row }) => h("div", { class: "text-right" }, row.getValue("prompt_tokens")),
  },
  {
    accessorKey: "completion_tokens",
    header: () => h("div", { class: "text-right" }, "Completion Tokens"),
    cell: ({ row }) => h("div", { class: "text-right" }, row.getValue("completion_tokens")),
  },
  {
    accessorKey: "cost_eur",
    header: () => h("div", { class: "text-right" }, "Cost (EUR)"),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("cost_eur"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "EUR",
      }).format(amount);
      return h("div", { class: "text-right font-medium" }, formatted);
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      const colorMap = {
        completed: 'green',
        pending: 'yellow',
        failed: 'red',
      };
      return h(
        UBadge,
        { color: colorMap[status] || 'primary', variant: "subtle" },
        { default: () => status }
      );
    },
  },
];
</script>
<template>
  <div class="space-y-6">
    <div class="space-y-1">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-bold">Dashboard</h2>
        <UInput
          v-model="searchQuery"
          placeholder="Search..."
          icon="i-heroicons-magnifying-glass"
          class="w-full sm:w-64 hidden lg:block"
        />
      </div>
      <p class="text-(--ui-text-muted)">Monitor LLM Usage</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <UCard variant="subtle" class="col-span-1 lg:col-span-3">
        <template #header>
          <div class="flex items-center justify-between">
            <div class="flex gap-8">
              <div>
                <p class="text-xl font-medium">616</p>
                <p class="mb-1 text-sm text-(--ui-text-muted)">Requests</p>
              </div>
              <div>
                <p class="text-xl font-medium">2.1s</p>
                <p class="mb-1 text-sm text-(--ui-text-muted)">Response Time</p>
              </div>
              <div>
                <p class="text-xl font-medium">
                  6
                </p>
                <p class="mb-1 text-sm text-(--ui-text-muted)">Models Used</p>
              </div>
            </div>
            <div>
              <USelect
                v-model="value"
                :items="items"
                icon="i-lucide-calendar-fold"
                color="neutral"
              />
            </div>
          </div>
        </template>
        <LineChart
          :data="UsageData"
          :height="260"
          :legend-position="LegendPosition.Top"
          :categories="categories"
          :y-num-ticks="2"
          :x-formatter="(i: number): string => `${UsageData[i]?.date}`"
          :curve-type="CurveType.MonotoneX"
        />
      </UCard>

      <UCard variant="subtle" class="col-span-1">
        <h2 class="text-xl my-2 font-medium">Sonnet 3.7</h2>

        <div class="flex items-baseline gap-2 justify-start space-y-1 mb-4">
          <h4 class="text-sm text-(--ui-text-muted)">Total Tokens: 2,381</h4>
        </div>

        <BarChart
          :data="ClaudeData"
          :height="130"
          :categories="LLMFields"
          :y-axis="['total_tokens']"
          :x-num-ticks="6"
          :y-num-ticks="4"
          :radius="0"
          :y-formatter="(i: number) => i"
          :x-formatter="(i: number): string => formatDate(ClaudeData[i]?.timestamp)"
        />
      </UCard>

      <UCard variant="subtle" class="col-span-1">
        <h2 class="text-xl my-2 font-medium">GPT-4o</h2>

        <div class="flex items-baseline gap-2 justify-start space-y-1 mb-4">
          <h4 class="text-sm text-(--ui-text-muted)">Total Tokens: 2,381</h4>
        </div>

        <BarChart
          :data="OpenAIData"
          :height="130"
          :categories="LLMFields"
          :y-axis="['total_tokens']"
          :x-num-ticks="6"
          :y-num-ticks="2"
          :radius="0"
          :y-formatter="(i: number) => i"
          :x-formatter="(i: number): string => formatDate(OpenAIData[i]?.timestamp)"
        />
      </UCard>
      <UCard variant="subtle" class="col-span-1">
        <h2 class="text-xl my-2 font-medium">Gemini 2.5 Pro</h2>

        <div class="flex items-baseline gap-2 justify-start space-y-1 mb-4">
          <h4 class="text-sm text-(--ui-text-muted)">Total Tokens: 2,381</h4>
        </div>

        <BarChart
          :data="GeminiData"
          :height="130"
          :categories="LLMFields"
          :y-axis="['total_tokens']"
          :x-num-ticks="6"
          :y-num-ticks="4"
          :radius="0"
          :y-formatter="(i: number) => i"
          :x-formatter="(i: number): string => formatDate(GeminiData[i]?.timestamp)"
        />
      </UCard>
    </div>

    <UCard variant="subtle" class="col-span-1">
      <DataTable :data="data" :columns="columns" :page-size="5" />
    </UCard>
  </div>
</template>
