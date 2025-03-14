<script lang="ts" setup>
const colorMode = useColorMode();
const items = ref(["Backlog", "Todo", "In Progress", "Done"]);
const value = ref("Backlog");

import { LineChart, AreaChart, DonutChart, BarChart } from 'vue-chrts'

const LLMFields = {
  total_tokens: { name: "Tokens", color: "#00dc82" },
};

const ClaudeData = [
  {
    model: "claude",
    prompt_tokens: 150,
    completion_tokens: 300,
    total_tokens: 450,
    timestamp: "2023-10-26T10:00:00Z",
  },
  {
    model: "claude",
    prompt_tokens: 50,
    completion_tokens: 100,
    total_tokens: 150,
    timestamp: "2023-10-26T10:15:00Z",
  },
  {
    model: "claude",
    prompt_tokens: 200,
    completion_tokens: 50,
    total_tokens: 0.0,
    timestamp: "2023-10-26T10:30:00Z",
  },
  {
    model: "claude",
    prompt_tokens: 100,
    completion_tokens: 200,
    total_tokens: 0,
    timestamp: "2023-10-27T11:00:00Z",
  },
  {
    model: "claude",
    prompt_tokens: 300,
    completion_tokens: 150,
    total_tokens: 0,
    timestamp: "2023-10-28T12:00:00Z",
  },
  {
    model: "claude",
    prompt_tokens: 75,
    completion_tokens: 125,
    total_tokens: 0,
    timestamp: "2023-10-29T13:00:00Z",
  },
  {
    model: "claude",
    prompt_tokens: 120,
    completion_tokens: 180,
    total_tokens: 300,
    timestamp: "2023-10-30T14:00:00Z",
  },
  {
    model: "claude",
    prompt_tokens: 250,
    completion_tokens: 350,
    total_tokens: 320,
    timestamp: "2023-10-31T15:00:00Z",
  },
  {
    model: "claude",
    prompt_tokens: 80,
    completion_tokens: 90,
    total_tokens: 0,
    timestamp: "2023-11-01T16:00:00Z",
  },
  {
    model: "claude",
    prompt_tokens: 400,
    completion_tokens: 200,
    total_tokens: 0,
    timestamp: "2023-11-02T17:00:00Z",
  },
  {
    model: "claude",
    prompt_tokens: 60,
    completion_tokens: 140,
    total_tokens: 0,
    timestamp: "2023-11-03T18:00:00Z",
  },
  {
    model: "claude",
    prompt_tokens: 180,
    completion_tokens: 220,
    total_tokens: 0,
    timestamp: "2023-11-04T19:00:00Z",
  },
  {
    model: "claude",
    prompt_tokens: 350,
    completion_tokens: 450,
    total_tokens: 300,
    timestamp: "2023-11-05T20:00:00Z",
  },
  {
    model: "claude",
    prompt_tokens: 90,
    completion_tokens: 110,
    total_tokens: 0,
    timestamp: "2023-11-06T21:00:00Z",
  },
  {
    model: "claude",
    prompt_tokens: 220,
    completion_tokens: 280,
    total_tokens: 0,
    timestamp: "2023-11-07T22:00:00Z",
  },
  {
    model: "claude",
    prompt_tokens: 450,
    completion_tokens: 550,
    total_tokens: 680,
    timestamp: "2023-11-08T23:00:00Z",
  },
  {
    model: "claude",
    prompt_tokens: 110,
    completion_tokens: 190,
    total_tokens: 0,
    timestamp: "2023-11-09T00:00:00Z",
  },
  {
    model: "claude",
    prompt_tokens: 280,
    completion_tokens: 320,
    total_tokens: 0,
    timestamp: "2023-11-10T01:00:00Z",
  },
  {
    model: "claude",
    prompt_tokens: 550,
    completion_tokens: 450,
    total_tokens: 0,
    timestamp: "2023-11-11T02:00:00Z",
  },
  {
    model: "claude",
    prompt_tokens: 190,
    completion_tokens: 210,
    total_tokens: 0,
    timestamp: "2023-11-12T03:00:00Z",
  },
  {
    model: "claude",
    prompt_tokens: 320,
    completion_tokens: 380,
    total_tokens: 0,
    timestamp: "2023-11-13T04:00:00Z",
  },
  {
    model: "claude",
    prompt_tokens: 650,
    completion_tokens: 350,
    total_tokens: 250,
    timestamp: "2023-11-14T05:00:00Z",
  },
  {
    model: "claude",
    prompt_tokens: 210,
    completion_tokens: 290,
    total_tokens: 0,
    timestamp: "2023-11-15T06:00:00Z",
  },
  {
    model: "claude",
    prompt_tokens: 380,
    completion_tokens: 420,
    total_tokens: 380,
    timestamp: "2023-11-16T07:00:00Z",
  },
  {
    model: "claude",
    prompt_tokens: 700,
    completion_tokens: 300,
    total_tokens: 410,
    timestamp: "2023-11-17T08:00:00Z",
  },
  {
    model: "claude",
    prompt_tokens: 290,
    completion_tokens: 310,
    total_tokens: 600,
    timestamp: "2023-11-18T09:00:00Z",
  },
];

const OpenAIData = [
  {
    model: "open-ai",
    prompt_tokens: 75,
    completion_tokens: 125,
    total_tokens: 0,
    timestamp: "2023-10-26T11:00:00Z",
  },
  {
    model: "open-ai",
    prompt_tokens: 300,
    completion_tokens: 200,
    total_tokens: 0,
    timestamp: "2023-10-26T11:15:00Z",
  },
  {
    model: "open-ai",
    prompt_tokens: 1000,
    completion_tokens: 700,
    total_tokens: 0,
    timestamp: "2023-10-26T11:30:00Z",
  },
  {
    model: "open-ai",
    prompt_tokens: 150,
    completion_tokens: 250,
    total_tokens: 0,
    timestamp: "2023-10-27T12:00:00Z",
  },
  {
    model: "open-ai",
    prompt_tokens: 400,
    completion_tokens: 300,
    total_tokens: 0,
    timestamp: "2023-10-28T13:00:00Z",
  },
  {
    model: "open-ai",
    prompt_tokens: 100,
    completion_tokens: 150,
    total_tokens: 0,
    timestamp: "2023-10-29T14:00:00Z",
  },
  {
    model: "open-ai",
    prompt_tokens: 200,
    completion_tokens: 200,
    total_tokens: 0,
    timestamp: "2023-10-30T15:00:00Z",
  },
  {
    model: "open-ai",
    prompt_tokens: 500,
    completion_tokens: 400,
    total_tokens: 0,
    timestamp: "2023-10-31T16:00:00Z",
  },
  {
    model: "open-ai",
    prompt_tokens: 120,
    completion_tokens: 180,
    total_tokens: 0,
    timestamp: "2023-11-01T17:00:00Z",
  },
  {
    model: "open-ai",
    prompt_tokens: 600,
    completion_tokens: 350,
    total_tokens: 0,
    timestamp: "2023-11-02T18:00:00Z",
  },
  {
    model: "open-ai",
    prompt_tokens: 80,
    completion_tokens: 170,
    total_tokens: 0,
    timestamp: "2023-11-03T19:00:00Z",
  },
  {
    model: "open-ai",
    prompt_tokens: 350,
    completion_tokens: 250,
    total_tokens: 0,
    timestamp: "2023-11-04T20:00:00Z",
  },
  {
    model: "open-ai",
    prompt_tokens: 700,
    completion_tokens: 500,
    total_tokens: 0,
    timestamp: "2023-11-05T21:00:00Z",
  },
  {
    model: "open-ai",
    prompt_tokens: 130,
    completion_tokens: 220,
    total_tokens: 0,
    timestamp: "2023-11-06T22:00:00Z",
  },
  {
    model: "open-ai",
    prompt_tokens: 450,
    completion_tokens: 350,
    total_tokens: 0,
    timestamp: "2023-11-07T23:00:00Z",
  },
  {
    model: "open-ai",
    prompt_tokens: 900,
    completion_tokens: 600,
    total_tokens: 0,
    timestamp: "2023-11-08T00:00:00Z",
  },
  {
    model: "open-ai",
    prompt_tokens: 170,
    completion_tokens: 230,
    total_tokens: 0,
    timestamp: "2023-11-09T01:00:00Z",
  },
  {
    model: "open-ai",
    prompt_tokens: 550,
    completion_tokens: 450,
    total_tokens: 0,
    timestamp: "2023-11-10T02:00:00Z",
  },
  {
    model: "open-ai",
    prompt_tokens: 1100,
    completion_tokens: 800,
    total_tokens: 0,
    timestamp: "2023-11-11T03:00:00Z",
  },
  {
    model: "open-ai",
    prompt_tokens: 230,
    completion_tokens: 270,
    total_tokens: 0,
    timestamp: "2023-11-12T04:00:00Z",
  },
  {
    model: "open-ai",
    prompt_tokens: 650,
    completion_tokens: 550,
    total_tokens: 0,
    timestamp: "2023-11-13T05:00:00Z",
  },
  {
    model: "open-ai",
    prompt_tokens: 1300,
    completion_tokens: 700,
    total_tokens: 0,
    timestamp: "2023-11-14T06:00:00Z",
  },
  {
    model: "open-ai",
    prompt_tokens: 270,
    completion_tokens: 330,
    total_tokens: 0,
    timestamp: "2023-11-15T07:00:00Z",
  },
  {
    model: "open-ai",
    prompt_tokens: 750,
    completion_tokens: 650,
    total_tokens: 210,
    timestamp: "2023-11-16T08:00:00Z",
  },
  {
    model: "open-ai",
    prompt_tokens: 1500,
    completion_tokens: 500,
    total_tokens: 260,
    timestamp: "2023-11-17T09:00:00Z",
  },
  {
    model: "open-ai",
    prompt_tokens: 330,
    completion_tokens: 370,
    total_tokens: 190,
    timestamp: "2023-11-18T10:00:00Z",
  },
];

const GeminiData = [
  {
    model: "gemini",
    prompt_tokens: 500,
    completion_tokens: 1000,
    total_tokens: 0,
    timestamp: "2023-10-26T12:00:00Z",
  },
  {
    model: "gemini",
    prompt_tokens: 100,
    completion_tokens: 200,
    total_tokens: 0,
    timestamp: "2023-10-26T12:15:00Z",
  },
  {
    model: "gemini",
    prompt_tokens: 2000,
    completion_tokens: 1500,
    total_tokens: 0,
    timestamp: "2023-10-26T12:30:00Z",
  },
  {
    model: "gemini",
    prompt_tokens: 700,
    completion_tokens: 1200,
    total_tokens: 0,
    timestamp: "2023-10-27T13:00:00Z",
  },
  {
    model: "gemini",
    prompt_tokens: 300,
    completion_tokens: 500,
    total_tokens: 0,
    timestamp: "2023-10-28T14:00:00Z",
  },
  {
    model: "gemini",
    prompt_tokens: 1200,
    completion_tokens: 900,
    total_tokens: 0,
    timestamp: "2023-10-29T15:00:00Z",
  },
  {
    model: "gemini",
    prompt_tokens: 600,
    completion_tokens: 800,
    total_tokens: 0,
    timestamp: "2023-10-30T16:00:00Z",
  },
  {
    model: "gemini",
    prompt_tokens: 400,
    completion_tokens: 600,
    total_tokens: 0,
    timestamp: "2023-10-31T17:00:00Z",
  },
  {
    model: "gemini",
    prompt_tokens: 1500,
    completion_tokens: 1100,
    total_tokens: 0,
    timestamp: "2023-11-01T18:00:00Z",
  },
  {
    model: "gemini",
    prompt_tokens: 800,
    completion_tokens: 1300,
    total_tokens: 0,
    timestamp: "2023-11-02T19:00:00Z",
  },
  {
    model: "gemini",
    prompt_tokens: 250,
    completion_tokens: 450,
    total_tokens: 0,
    timestamp: "2023-11-03T20:00:00Z",
  },
  {
    model: "gemini",
    prompt_tokens: 1800,
    completion_tokens: 1200,
    total_tokens: 0,
    timestamp: "2023-11-04T21:00:00Z",
  },
  {
    model: "gemini",
    prompt_tokens: 900,
    completion_tokens: 1400,
    total_tokens: 20,
    timestamp: "2023-11-05T22:00:00Z",
  },
  {
    model: "gemini",
    prompt_tokens: 350,
    completion_tokens: 550,
    total_tokens: 21,
    timestamp: "2023-11-06T23:00:00Z",
  },
  {
    model: "gemini",
    prompt_tokens: 2200,
    completion_tokens: 1300,
    total_tokens: 10,
    timestamp: "2023-11-07T00:00:00Z",
  },
  {
    model: "gemini",
    prompt_tokens: 1000,
    completion_tokens: 1500,
    total_tokens: 0,
    timestamp: "2023-11-08T01:00:00Z",
  },
  {
    model: "gemini",
    prompt_tokens: 450,
    completion_tokens: 650,
    total_tokens: 0,
    timestamp: "2023-11-09T02:00:00Z",
  },
  {
    model: "gemini",
    prompt_tokens: 2500,
    completion_tokens: 1400,
    total_tokens: 0,
    timestamp: "2023-11-10T03:00:00Z",
  },
  {
    model: "gemini",
    prompt_tokens: 1100,
    completion_tokens: 1600,
    total_tokens: 30,
    timestamp: "2023-11-11T04:00:00Z",
  },
  {
    model: "gemini",
    prompt_tokens: 550,
    completion_tokens: 750,
    total_tokens: 40,
    timestamp: "2023-11-12T05:00:00Z",
  },
  {
    model: "gemini",
    prompt_tokens: 2800,
    completion_tokens: 1500,
    total_tokens: 50,
    timestamp: "2023-11-13T06:00:00Z",
  },
  {
    model: "gemini",
    prompt_tokens: 1200,
    completion_tokens: 1700,
    total_tokens: 0,
    timestamp: "2023-11-14T07:00:00Z",
  },
  {
    model: "gemini",
    prompt_tokens: 650,
    completion_tokens: 850,
    total_tokens: 0,
    timestamp: "2023-11-15T08:00:00Z",
  },
  {
    model: "gemini",
    prompt_tokens: 3100,
    completion_tokens: 1600,
    total_tokens: 0,
    timestamp: "2023-11-16T09:00:00Z",
  },
  {
    model: "gemini",
    prompt_tokens: 1300,
    completion_tokens: 1800,
    total_tokens: 0,
    timestamp: "2023-11-17T10:00:00Z",
  },
  {
    model: "gemini",
    prompt_tokens: 750,
    completion_tokens: 950,
    total_tokens: 0,
    timestamp: "2023-11-18T11:00:00Z",
  },
];

function formatDate(timestamp) {
  const options = {
    month: "short",
    day: "numeric",
  };

  const date = new Date(timestamp);
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  return `${formattedDate}`;
}

function setColorMode() {
  colorMode.value = isDark.value ? "light" : "dark";
}
</script>
<template>
  <div>
    <div
      class="w-full h-16 fixed flex items-center justify-between left-0 top-0 bg-card border-b-2 border-(--ui-border) px-6"
    >
      <div class="flex items-center">
        <div class="flex items-center gap-2">
          <div class="w-3 h-3 rounded-xs bg-white"></div>
          <div class="text-xl tracking-tighter">Dashboard Alfa</div>
        </div>

        <div class="flex items-center gap-2 ml-20 text-neutral-500">
          <UButton
            color="neutral"
            variant="ghost"
            icon="i-lucide-chart-no-axes-column"
            >Usage</UButton
          >
          <div>/</div>
          <USelect
            v-model="value"
            :items="items"
            variant="subtle"
            color="neutral"
            size="sm"
          />
        </div>
      </div>
      <div class="flex items-center gap-4">
        <UIcon
          name="i-lucide-moon-star"
          class="cursor-pointer"
          size="18"
          @click="setColorMode"
        />
        <!-- <UIcon
          name="i-lucide-circle-user-round"
          size="18"
          class="cursor-pointer"
        /> -->
      </div>
    </div>

    <div
      class="max-w-(--side-bar-width) w-full h-screen fixed left-0 top-16 bg-card border-r-2 border-(--ui-border)"
    >
      <div class="p-4">
        <UButton
          color="neutral"
          variant="ghost"
          size="lg"
          class="w-full text-neutral-500"
          icon="i-lucide-house"
          >Dashboard</UButton
        >
        <UButton
          color="neutral"
          variant="ghost"
          size="lg"
          class="w-full"
          icon="i-lucide-users"
          >Users</UButton
        >
        <UButton
          color="neutral"
          variant="ghost"
          size="lg"
          class="w-full text-neutral-500"
          icon="i-lucide-share-2"
          >Models</UButton
        >
      </div>
    </div>

    <div class="w-[calc(100%-var(--side-bar-width))] mt-16 p-8 ml-(--side-bar-width)">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-bold">Nuxt Admin Dashboard 👋</h2>
      </div>

      <div class="mt-8 mb-4 border-b border-(--ui-border) space-y-4 space-x-2">
        <UButton active icon="i-lucide-chart-line" size="md" color="neutral" variant="ghost" active-variant="subtle">Data</UButton>
        <UButton icon="i-lucide-code-xml" size="md" color="neutral" variant="ghost">Code</UButton>
        <UButton icon="i-lucide-settings" size="md" color="neutral" variant="ghost">Settings</UButton>
      </div>

      <div class="flex items-center justify-between my-4">
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
      
      <div class="grid grid-cols-3 gap-4">
        <UCard variant="subtle">
          <h2 class="text-xl text-white/75 my-2 font-medium mb-6">
            Sonnet 3.7
          </h2>

          <div class="space-y-1">
            <h4 class="text-lg text-white/50">Total Tokens</h4>
            <h3 class="text-xl font-semibold">2,381</h3>
          </div>

          <BarChart
            :data="ClaudeData"
            :height="250"
            :categories="LLMFields"
            :y-axis="['total_tokens']"
            :xNumTicks="6"
            :radius="0"
            :y-formatter="(i: number) => i"
            :x-formatter="(i: number): string => formatDate(ClaudeData[i].timestamp)"
          />
        </UCard>

        <UCard variant="subtle">
          <h2 class="text-xl text-white/75 my-2 font-medium mb-6">GPT-4o</h2>

          <div class="space-y-1">
            <h4 class="text-lg text-white/50">Total Tokens</h4>
            <h3 class="text-xl font-semibold">2,381</h3>
          </div>

          <BarChart
            :data="OpenAIData"
            :height="250"
            :categories="LLMFields"
            :y-axis="['total_tokens']"
            :xNumTicks="6"
            :radius="0"
            :y-formatter="(i: number) => i"
            :x-formatter="(i: number): string => formatDate(ClaudeData[i].timestamp)"
          />
        </UCard>
        <UCard variant="subtle">
          <h2 class="text-xl text-white/75 my-2 font-medium mb-6">Flash 2.0</h2>

          <div class="space-y-1">
            <h4 class="text-lg text-white/50">Total Tokens</h4>
            <h3 class="text-xl font-semibold">2,381</h3>
          </div>

          <BarChart
            :data="GeminiData"
            :height="250"
            :categories="LLMFields"
            :y-axis="['total_tokens']"
            :xNumTicks="6"
            :radius="0"
            :y-formatter="(i: number) => i"
            :x-formatter="(i: number): string => formatDate(ClaudeData[i].timestamp)"
          />
        </UCard>
      </div>
    </div>
  </div>
</template>
