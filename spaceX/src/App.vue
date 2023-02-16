<template>
  <h1 class="title is-1">SpaceX Rockets and missions</h1>
  <section>{{ description.summary }}</section>
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
import { defineComponent, onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
import type { State } from "./store/store";

export default defineComponent({
  name: "App",
  components: {
    Rockets,
    Missions,
  },
  setup() {
    onMounted(() => {
      getSPaceXDescription();
    });
    const error = ref("");
    const store = useStore<State>();
    const description = computed(() => store.state.description);
    const getSPaceXDescription = async () => {
      try {
        if (description.value.summary === "") {
          const data = await fetch("https://api.spacexdata.com/v3/info");
          if (!data.ok) {
            throw Error("No data available");
          }
          store.commit("setDescription", await data.json());
        }
      } catch (err: any) {
        error.value = err.message;
        console.log(err);
      }
    };
    return {
      description,
    };
  },
});
</script>
