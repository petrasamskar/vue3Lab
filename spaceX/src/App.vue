<template>
  <h1 class="title is-1">SpaceX Rockets and Missions</h1>
  <section>{{ store.description.summary }}</section>
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
import { defineComponent, onMounted } from "vue";
import { useStore } from "./store/store";

export default defineComponent({
  name: "App",
  components: {
    Rockets,
    Missions,
  },
  setup() {
    onMounted(async () => {
      await store.getDescription();
    });
    const store = useStore();
    return {
      store,
    };
  },
});
</script>
