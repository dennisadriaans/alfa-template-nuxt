<script setup lang="ts">
defineProps<{
  name: string;
  value: number | string;
}>();

const categories: Record<string, BulletLegendItemInterface> = {
  users: { name: "Users", color: "#4ade80" },
};

const data = [
  {
    date: "Jan 23",
    users: 234,
    sessions: 1432,
    churn: 5.2,
  },
  {
    date: "Feb 23",
    users: 431,
    sessions: 1032,
    churn: 4.3,
  },
  {
    date: "Mar 23",
    users: 543,
    sessions: 1089,
    churn: 5.1,
  },
  {
    date: "Apr 23",
    users: 489,
    sessions: 988,
    churn: 5.4,
  },
  {
    date: "May 23",
    users: 391,
    sessions: 642,
    churn: 5.5,
  },
  {
    date: "Jun 23",
    users: 582,
    sessions: 786,
    churn: 4.8,
  },
  {
    date: "Jul 23",
    users: 482,
    sessions: 673,
    churn: 4.5,
  },
  {
    date: "Aug 23",
    users: 389,
    sessions: 761,
    churn: 0,
  },
  {
    date: "Sep 23",
    users: 521,
    sessions: 793,
    churn: 0,
  },
  {
    date: "Oct 23",
    users: 434,
    sessions: 543,
    churn: 0,
  },
  {
    date: "Nov 23",
    users: 332,
    sessions: 678,
    churn: 0,
  },
  {
    date: "Dec 23",
    users: 275,
    sessions: 873,
    churn: 0,
  },
];
</script>

<template>
  <UCard>
    <div class="text-sm text-(--ui-text-muted)">
      {{ name }}
    </div>
    <div class="mt-2 flex items-center justify-between">
      <p class="text-3xl font-medium">
        {{ value }}
      </p>

      <div class="text-sm text-(--ui-text-muted)">
        {{ name }}
      </div>
    </div>
    <div class="mt-4">
      <AreaChart
        :data="data"
        :categories="categories"
        :min-max-ticks-only="true"
        :y-num-ticks="1"
        :x-formatter="(i: number) => ``"
        :y-formatter="(i) => ''"
        :hide-legend="true"
        :height="60"
      />
      <div
        class="mt-1 flex items-center justify-between text-sm text-(--ui-text-dimmed)"
      >
        <div>
          {{ data[0]?.date }}
        </div>
        <div>
          {{ data[data.length - 1]?.date }}
        </div>
      </div>
    </div>
  </UCard>
</template>
