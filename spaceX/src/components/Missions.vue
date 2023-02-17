<template>
  <div class="container">
    <div class="buttons">
      <button
        @click="getAllMissions()"
        class="button is-medium button is-success is-light"
      >
        Show all missions
      </button>
    </div>
    <div v-if="store.error">{{ store.error }}</div>
    <div v-for="mission in store.missions" :style="style">
      <Mission :mission="mission" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "../store/store";
import Mission from "./Mission.vue";

export default defineComponent({
  name: "Missions",
  components: { Mission },
  setup() {
    const store = useStore();
    const opened = ref(false);

    const getAllMissions = async () => {
      await store.getAllMissions();
      opened.value = !opened.value;
    };

    const style = computed(() => (opened.value ? "" : "display:none"));

    return {
      store,
      getAllMissions,
      opened,
      style,
    };
  },
});
</script>
