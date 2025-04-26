<script lang="ts" setup>
const route = useRoute();
</script>
<template>
  <div class="space-y-6 px-8">
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">Dashboard</h2>
      <div
        class="inline-flex items-center justify-start border border-(--ui-border) rounded-lg"
      >
        <NuxtLink to="/">
          <UButton
            :active="route.path === '/'"
            active-variant="soft"
            size="lg"
            variant="link"
            color="neutral"
            >All sessions</UButton
          >
        </NuxtLink>
        <NuxtLink to="/traffic">
          <UButton
            :active="route.path === '/traffic'"
            active-variant="soft"
            size="lg"
            variant="link"
            color="neutral"
            >Direct traffic</UButton
          >
        </NuxtLink>

        <UButton size="lg" variant="link" color="neutral"
          >Organic traffic</UButton
        >
        <UButton size="lg" variant="link" color="neutral">Paid traffic</UButton>
        <UButton size="lg" variant="link" color="neutral">Mobile users</UButton>
        <UButton size="lg" variant="link" color="neutral"
          >Returning users</UButton
        >
      </div>
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
                <p class="text-xl font-medium">6</p>
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
          :height="300"
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
