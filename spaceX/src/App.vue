<template>
  <h1 class="title is-1">SpaceX Rockets and missions</h1>
  <div class="columns">
    <div class="column">
      <section class="section">
        <Rockets />
      </section>
    </div>
    <div class="column">
      <section class="section">
        <Missions />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Rockets from "./components/Rockets.vue";
import Missions from "./components/Missions.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    Rockets,
    Missions,
  },
});
</script>
