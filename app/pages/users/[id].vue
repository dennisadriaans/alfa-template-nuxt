<script lang="ts" setup>
import { ContributionGraphSize } from "~/components/ContributionGraph/types";
import { contributions } from "./../../ContributionData";
</script>
<template>
  <div class="">
    <UCard variant="subtle" class="col-span-12">
      <UsersProfile />

      <ContributionGraph
        class="overflow-hidden"
        :contributions="contributions"
        :size="ContributionGraphSize.lg"
      ></ContributionGraph>
    </UCard>
  </div>
</template>
