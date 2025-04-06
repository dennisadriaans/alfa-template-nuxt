<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import dayjs, { Dayjs } from "dayjs";
import type {
  Contribution,
  ContributionGraphSize,
  GroupedContributions,
} from "./types";

const props = defineProps<{
  contributions: Contribution[];
  size?: ContributionGraphSize;
}>();

const getColorClass = (contribution: Contribution) => {
  switch (contribution?.count) {
    case 1:
      return "bg-green-400";
    case 2:
      return "bg-green-500";
    case 3:
      return "bg-green-700";
    default:
      return "bg-neutral-100 dark:bg-neutral-800";
  }
};

const monthLabels = computed(() => {
  if (props.contributions?.length === 0) return [];

  const uniqueMonths = new Set();
  return props.contributions
    .map((contrib) => dayjs(contrib.date).format("MMM"))
    .filter((month) => {
      if (uniqueMonths.has(month)) return false;
      uniqueMonths.add(month);
      return true;
    })
    .slice(0, 12);
});

const groupContributions = computed(() => {
  if (props.contributions.length === 0) return {};

  return props.contributions.reduce(
    (acc: GroupedContributions, contrib: Contribution) => {
      const date: Dayjs = dayjs(contrib.date);
      const firstDate: Dayjs | undefined = props.contributions[0]
        ? dayjs(props.contributions[0].date)
        : undefined;
      const week: number = firstDate
        ? date.diff(firstDate.startOf("week"), "week")
        : 0;
      const dayOfWeek: number = date.day();

      if (!acc[week]) acc[week] = {};
      acc[week][dayOfWeek] = contrib;
      return acc;
    },
    {}
  );
});

const getContributionForDay = (week: number, day: number) => {
  return groupContributions.value[week]?.[day];
};

// Helper to generate title for tooltip
const getContributionTitle = (week: number, day: number) => {
  const contribution = getContributionForDay(week, day);
  return contribution
    ? `${contribution.date}: ${contribution.count} contributions`
    : `No contributions`;
};
</script>

<template>
  <div class="flex overflow-auto rounded-lg p-4">
    <div
      class="mt-3.5 mr-2 flex min-h-full flex-col justify-center gap-5 text-xs"
    >
      <div class="h-3">Mon</div>
      <div class="h-3">Wed</div>
      <div class="h-3">Fri</div>
    </div>

    <div>
      <div class="mb-1 flex justify-between text-xs">
        <div
          v-for="(month, index) in monthLabels"
          :key="index"
          class="w-[52px] text-left"
        >
          {{ month }}
        </div>
      </div>

      <!-- Contribution Squares -->
      <div class="flex gap-1">
        <div
          v-for="(week, weekIndex) in groupContributions"
          :key="weekIndex"
          class="flex flex-col gap-1"
        >
          <div
            v-for="day in 7"
            :key="day"
            class="h-3 w-3 rounded border border-neutral-300 dark:border-neutral-800"
            :class="[
              getColorClass(getContributionForDay(weekIndex, day - 1)!),
              props.size === 'lg' ? 'h-4 w-4' : 'h-3 w-3',
            ]"
            :title="getContributionTitle(weekIndex, day - 1)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
