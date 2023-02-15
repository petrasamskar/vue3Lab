<template>
    <p>
    <h1>SpaceX</h1>
    <button @click="getAllRockets()">Get all rockets</button>
    </p>
    <div v-if="error">{{ error }}</div>
    <div v-for="rocket in rockets">
        <Rocket :rocket="rocket" />
    </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import Rocket from './Rocket.vue';
import { ref } from 'vue';
import { useStore } from 'vuex'; 
import type { State } from '../store/store'

export default defineComponent({
    name: "Rockets",
    components: { Rocket },
    setup() {
        const error = ref('')
        const store = useStore<State>()
        const getAllRockets = async () => {
            try {
                const data = await fetch('https://api.spacexdata.com/v3/rockets')
                if (!data.ok) {
                    throw Error('No data available')
                }
                store.commit('setRockets', await data.json())

            } catch (err: any) {
                error.value = err.message
                console.log(err)
            }
        }
        const rockets = computed(() => store.state.rockets)
        return {
            rockets, error, getAllRockets
        }

    },
})

</script>