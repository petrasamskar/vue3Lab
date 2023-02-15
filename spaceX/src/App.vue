<template>
  <section class="section">
    <Rockets />
  </section>
  <section class="section">
    <Missions />
  </section>
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
