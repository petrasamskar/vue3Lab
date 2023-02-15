<template>
  <Rockets />
  <Missions />
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
