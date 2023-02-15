<template>
  <h1>{{ mission.mission_name }}</h1>
  <p>{{ mission.description }}</p>
</template>

<script lang="ts">
import type { SpaceXMission } from "@/types/SpaceXMission";
import type { PropType } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Mission",
  props: {
    mission: {
      required: true,
      type: Object as PropType<SpaceXMission>,
    },
  },
});
</script>
