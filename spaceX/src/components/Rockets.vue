<template>
  <div class="container">
    <div class="buttons">
      <button
        @click="getAllRockets()"
        class="button is-medium button is-success is-light"
      >
        Show all rockets
      </button>
      <button
        @click="close()"
        class="button is-medium button is-danger is-light"
      >
        Close
      </button>
    </div>
    <div v-if="error">{{ error }}</div>
    <section v-for="rocket in rockets" :style="opened">
      <Rocket :rocket="rocket" />
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import Rocket from "./Rocket.vue";
import { ref } from "vue";
import { useStore } from "vuex";
import type { State } from "../store/store";

export default defineComponent({
  name: "Rockets",
  components: { Rocket },
  setup() {
    const error = ref("");
    const opened = ref("");
    const store = useStore<State>();
    const getAllRockets = async () => {
      try {
        if (rockets.value.length === 0) {
          const data = await fetch("https://api.spacexdata.com/v3/rockets");
          if (!data.ok) {
            throw Error("No data available");
          }
          store.commit("setRockets", await data.json());
        }
        opened.value = "";
      } catch (err: any) {
        error.value = err.message;
        console.log(err);
      }
    };
    const close = () => {
      opened.value = "display:none";
    };
    const rockets = computed(() => store.state.rockets);
    return {
      rockets,
      error,
      getAllRockets,
      opened,
      close,
    };
  },
});
</script>
