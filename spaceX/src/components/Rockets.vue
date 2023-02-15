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
import { defineComponent } from 'vue';
import Rocket from './Rocket.vue';
import { ref } from 'vue';
import type { SpaceXRocket } from '@/types/SpaceXRocket';


export default defineComponent({
    name: "Rockets",
    components: { Rocket },
    setup() {
        const rockets = ref<SpaceXRocket[]>([])
        const error = ref<string>('')
        const getAllRockets = async () => {
            try {
                const data = await fetch('https://api.spacexdata.com/v3/rockets')
                if (!data.ok) {
                    throw Error('No data available')
                }
                rockets.value = await data.json()

            } catch (err: any) {
                error.value = err.message
                console.log(err)
            }
        }
        return {
            rockets, error, getAllRockets
        }

    },
})

</script>