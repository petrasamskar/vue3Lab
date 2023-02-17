<template>
  <div class="container">
    <div class="buttons">
      <button
        @click="getAllRockets()"
        class="button is-medium button is-success is-light"
      >
        Show all rockets
      </button>
    </div>
    <div v-if="store.error">{{ store.error }}</div>
    <section v-for="rocket in store.rockets" :style="style">
      <Rocket :rocket="rocket" :key="rocket.id" />
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import Rocket from "./Rocket.vue";
import { ref } from "vue";
import { useStore } from "../store/store";

export default defineComponent({
  name: "Rockets",
  components: { Rocket },
  setup() {
    const opened = ref(false);
    const store = useStore();

    const getAllRockets = async () => {
      await store.getAllRockets();
      opened.value = !opened.value;
    };

    const style = computed(() => (opened.value ? "" : "display:none"));

    return {
      store,
      getAllRockets,
      opened,
      style,
    };
  },
});
</script>
