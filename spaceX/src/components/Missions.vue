<template>
  <div class="container">
    <div class="buttons">
      <button
        @click="getAllMissions()"
        class="button is-medium button is-success is-light"
      >
        Show all missions
      </button>
      <button
        @click="close()"
        class="button is-medium button is-danger is-light"
      >
        Close
      </button>
    </div>
    <div v-if="error">{{ error }}</div>
    <div v-for="mission in missions" :style="opened">
      <Mission :mission="mission" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
import type { State } from "../store/store";
import Mission from "./Mission.vue";

export default defineComponent({
  name: "Missions",
  components: { Mission },
  setup() {
    const error = ref("");
    const store = useStore<State>();
    const opened = ref("");

    const getAllMissions = async () => {
      try {
        if (missions.value.length === 0) {
          const data = await fetch("https://api.spacexdata.com/v3/missions");
          if (!data.ok) {
            throw Error("No data available");
          }
          store.commit("setMissions", await data.json());
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
    const missions = computed(() => store.state.missions);
    return {
      missions,
      error,
      getAllMissions,
      opened,
      close,
    };
  },
});
</script>
