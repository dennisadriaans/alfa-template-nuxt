<script lang="ts" setup>
import type { TableColumn } from "@nuxt/ui"; // Import TableColumn

const trafficData = [
  {
    date: "Jan 23",
    direct: 4325,
    referral: 2185,
  },
  {
    date: "Feb 23",
    direct: 3956,
    referral: 2310,
  },
  {
    date: "Mar 23",
    direct: 4512,
    referral: 2634,
  },
  {
    date: "Apr 23",
    direct: 5107,
    referral: 2971,
  },
  {
    date: "May 23",
    direct: 4893,
    referral: 3245,
  },
  {
    date: "Jun 23",
    direct: 4720,
    referral: 3562,
  },
  {
    date: "Jul 23",
    direct: 5245,
    referral: 3801,
  },
  {
    date: "Aug 23",
    direct: 5673,
    referral: 4125,
  },
  {
    date: "Sep 23",
    direct: 6129,
    referral: 4380,
  },
  {
    date: "Oct 23",
    direct: 6584,
    referral: 4762,
  },
  {
    date: "Nov 23",
    direct: 6137,
    referral: 5118,
  },
  {
    date: "Dec 23",
    direct: 6482,
    referral: 5433,
  },
];

const categories: Record<string, BulletLegendItemInterface> = {
  direct: { name: "Direct Traffic", color: "#156F36" },
  referral: { name: "Referral Traffic", color: "#4ade80" },
};

const directTrafficBreakdown = [
  { date: "Jan 23", mobile: 2100, desktop: 2225 },
  { date: "Feb 23", mobile: 1900, desktop: 2056 },
  { date: "Mar 23", mobile: 2300, desktop: 2212 },
  { date: "Apr 23", mobile: 2600, desktop: 2507 },
  { date: "May 23", mobile: 2500, desktop: 2393 },
  { date: "Jun 23", mobile: 2400, desktop: 2320 },
  { date: "Jul 23", mobile: 2700, desktop: 2545 },
  { date: "Aug 23", mobile: 2900, desktop: 2773 },
  { date: "Sep 23", mobile: 3100, desktop: 3029 },
  { date: "Oct 23", mobile: 3400, desktop: 3184 },
  { date: "Nov 23", mobile: 3000, desktop: 3137 },
  { date: "Dec 23", mobile: 3200, desktop: 3282 },
];

const directTrafficCategories: Record<string, BulletLegendItemInterface> = {
  mobile: { name: "Mobile", color: "#156F36" },
  desktop: { name: "Desktop", color: "#4ade80" },
};

const xFormatter = (i: number): string | number =>
  `${directTrafficBreakdown[i]?.date}`;

const yFormatter = (value: number): string => `${value}`;

type TrafficPageData = {
  page: string;
  pageViews: number;
  desktopPercentage: number;
  mobilePercentage: number;
  avgTimeOnPage: number;
  bounceRate: number;
};

const columns: TableColumn<TrafficPageData>[] = [
  {
    accessorKey: "page",
    header: "Page URL",
  },
  {
    accessorKey: "pageViews",
    header: "Page Views",
  },
  {
    accessorKey: "desktopPercentage",
    header: "Desktop %",
    cell: (info) => `${info.getValue()}%`, // Format as percentage in the cell
  },
  {
    accessorKey: "mobilePercentage",
    header: "Mobile %",
    cell: (info) => `${info.getValue()}%`, // Format as percentage in the cell
  },
  {
    accessorKey: "avgTimeOnPage",
    header: "Avg. Time on Page",
    // You might want to format this based on how your data is stored (e.g., seconds)
    // Example formatting to minutes and seconds:
    cell: (info) => {
      const totalSeconds = info.getValue() as number;
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    },
  },
  {
    accessorKey: "bounceRate",
    header: "Bounce Rate",
    cell: (info) => `${info.getValue()}%`, // Format as percentage in the cell
  },
];

// Sample Data for the Table
const data: TrafficPageData[] = [
  // Explicitly type the data array
  {
    page: "/",
    pageViews: 25678,
    desktopPercentage: 65,
    mobilePercentage: 35,
    avgTimeOnPage: "3m 15s",
    bounceRate: "42%",
  },
  {
    page: "/pricing",
    pageViews: 18934,
    desktopPercentage: 70,
    mobilePercentage: 30,
    avgTimeOnPage: "2m 45s",
    bounceRate: "38%",
  },
  {
    page: "/features",
    pageViews: 15210,
    desktopPercentage: 60,
    mobilePercentage: 40,
    avgTimeOnPage: "4m 05s",
    bounceRate: "48%",
  },
  {
    page: "/blog",
    pageViews: 12567,
    desktopPercentage: 55,
    mobilePercentage: 45,
    avgTimeOnPage: "1m 55s",
    bounceRate: "65%",
  },
  {
    page: "/contact",
    pageViews: 9876,
    desktopPercentage: 75,
    mobilePercentage: 25,
    avgTimeOnPage: "0m 50s",
    bounceRate: "25%",
  },
  {
    page: "/docs/getting-started",
    pageViews: 8123,
    desktopPercentage: 80,
    mobilePercentage: 20,
    avgTimeOnPage: "5m 30s",
    bounceRate: "32%",
  },
  {
    page: "/about",
    pageViews: 7543,
    desktopPercentage: 50,
    mobilePercentage: 50,
    avgTimeOnPage: "2m 10s",
    bounceRate: "58%",
  },
  {
    page: "/blog/top-10-tricks",
    pageViews: 6987,
    desktopPercentage: 45,
    mobilePercentage: 55,
    avgTimeOnPage: "3m 40s",
    bounceRate: "51%",
  },
  {
    page: "/careers",
    pageViews: 5321,
    desktopPercentage: 68,
    mobilePercentage: 32,
    avgTimeOnPage: "1m 20s",
    bounceRate: "40%",
  },
  {
    page: "/integrations",
    pageViews: 4890,
    desktopPercentage: 72,
    mobilePercentage: 28,
    avgTimeOnPage: "4m 55s",
    bounceRate: "35%",
  },
  // Add more rows as needed
];
</script>
<template>
  <div class="space-y-4">
    <div class="w-full flex justify-between gap-4">
      <UCard class="w-full" variant="subtle">
        <div class="mb-8">
          <h2 class="text-xl font-medium">Direct Traffic</h2>
        </div>
        <LineChart
          :data="trafficData"
          :height="275"
          y-label="Visitors"
          :x-num-ticks="4"
          :y-num-ticks="4"
          :categories="categories"
          :x-formatter="xFormatter"
          :grid-line-y="true"
          :legend-position="LegendPosition.Bottom"
        />
      </UCard>

      <UCard class="w-full" variant="subtle">
        <div class="mb-8">
          <h2 class="text-xl font-medium">Traffic per Device</h2>
        </div>
        <BarChart
          :data="directTrafficBreakdown"
          :height="275"
          :categories="directTrafficCategories"
          :y-axis="['mobile', 'desktop']"
          :x-num-ticks="6"
          :bar-padding="0.4"
          :radius="4"
          :y-grid-line="false"
          :x-formatter="xFormatter"
          :y-formatter="yFormatter"
          :legend-position="LegendPosition.Bottom"
        />
      </UCard>
    </div>

    <div>
      <UCard>
        <DataTable :data="data" :columns="columns" :page-size="20" />
      </UCard>
    </div>
  </div>
</template>
