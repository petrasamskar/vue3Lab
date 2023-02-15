<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          src="https://bulma.io/images/placeholders/1280x960.png"
          alt="Placeholder image"
        />
      </figure>
    </div>
    <div class="card-content">
      <p class="title is-4">{{ mission.mission_name }}</p>
      <div class="content">
        {{ mission.description }}
      </div>
    </div>
  </div>
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
