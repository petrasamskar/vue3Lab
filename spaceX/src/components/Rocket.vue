<template>
  <div class="card">
    <div class="card-content">
      <p class="title is-4">{{ rocket.rocket_name }}</p>

      <figure class="image is-4by3">
        <img :src="picture" alt="No image available" />
      </figure>
    </div>
    <div class="card-content">
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
import { defineComponent, computed } from "vue";
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
  setup(props) {
    const picture = computed(() => {
      // temporary for demo
      if (props.rocket.flickr_images[0].includes("imgur")) {
        return "https://live.staticflickr.com/65535/48953947006_313f01ec93_b.jpg";
      } else {
        return props.rocket.flickr_images[0];
      }
    });

    return {
      picture,
    };
  },
});
</script>
