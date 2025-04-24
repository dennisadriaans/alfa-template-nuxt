<script setup lang="ts">
const props = defineProps<{
  value: number
  size?: number
  strokeWidth?: number
  showLabel?: boolean
}>()

const getProgressColor = (value: number): string => {
  if (value >= 75) return 'stroke-emerald-600 dark:stroke-emerald-500'
  if (value > 50) return 'stroke-orange-600 dark:stroke-orange-500'
  return 'stroke-red-600 dark:stroke-red-500'
}

// Calculate viewBox dimensions based on props
const actualSize = 50
const actualStrokeWidth = 5
const radius = actualSize / 2 - actualStrokeWidth
const circumference = 2 * Math.PI * radius
const strokeDasharray = `${(props.value / 100) * circumference} ${circumference}`
const center = actualSize / 2
</script>

<template>
  <div
    class="relative"
    :style="{ width: `${size || 50}px`, height: `${size || 50}px` }"
  >
    <svg class="h-full w-full" :viewBox="`0 0 ${actualSize} ${actualSize}`">
      <circle
        :cx="center"
        :cy="center"
        :r="radius"
        fill="none"
        stroke="currentColor"
        :stroke-width="actualStrokeWidth"
        class="text-gray-200 dark:text-gray-700"
      />

      <circle
        :cx="center"
        :cy="center"
        :r="radius"
        fill="none"
        stroke="currentColor"
        :stroke-width="actualStrokeWidth"
        :class="getProgressColor(value)"
        stroke-linecap="round"
        :stroke-dasharray="strokeDasharray"
        transform="rotate(-90 25 25)"
      />
      <text
        :x="center"
        :y="center"
        text-anchor="middle"
        dominant-baseline="middle"
        class="text-xs font-medium dark:fill-white"
      >
        {{ value }}
      </text>
    </svg>
  </div>
</template>
