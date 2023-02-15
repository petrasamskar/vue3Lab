<template>
    <p>
    <h1>SpaceX</h1>
    <button @click="getAllMissions()">Get all missions</button>
    </p>
    <div v-if="error">{{ error }}</div>
    <div v-for="mission in missions">
        <Mission :mission="mission" />
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from 'vuex'
import type { State } from '../store/store'
import Mission from './Mission.vue'

export default defineComponent({
    name: "Missions",
    components: { Mission },
    setup() {
        const error = ref('')
        const store = useStore<State>()
        const getAllMissions = async () => {
            try {
                const data = await fetch('https://api.spacexdata.com/v3/missions')
                if (!data.ok) {
                    throw Error('No data available')
                }
                store.commit('setMissions', await data.json())

            } catch (err: any) {
                error.value = err.message
                console.log(err)
            }
        }
        const missions = computed(() => store.state.missions)
        return {
            missions, error, getAllMissions
        }

    },
})
</script>

