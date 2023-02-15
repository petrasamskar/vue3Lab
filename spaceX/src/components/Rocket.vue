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
      <p class="title is-4">{{ rocket.rocket_name }}</p>

      <div class="content">
        {{ rocket.description }}
      </div>
      <div>
        <a v-bind:href="rocket.wikipedia" target="”_blank”">{{
          rocket.wikipedia
        }}</a>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { SpaceXRocket } from "../types/SpaceXRocket";

export default defineComponent({
  name: "Rocket",
  props: {
    rocket: {
      required: true,
      type: Object as PropType<SpaceXRocket>,
    },
  },
});
</script>
