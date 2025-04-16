<script lang="ts" setup>
import { ClaudeData, OpenAIData, GeminiData, UsageData } from "~/LLMData";

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
</script>
<template>
  <div class="space-y-8">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <UCard variant="subtle" class="col-span-1 lg:col-span-3">
        <template #header>
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-2xl my-2 font-bold">10,291</h2>
              <h4 class="text-sm text-(--ui-text-muted)">
                Total requests last 30 days
              </h4>
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
          :height="300"
          :legend-position="LegendPosition.Bottom"
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
          :height="160"
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
          :height="160"
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
          :height="160"
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
  </div>
</template>
