<template>
    <p>
    <h1>SpaceX</h1>
    <button @click="getAllRockets()">Get all rockets</button>
    </p>
    <div v-for="rocket in rockets">
        <Rocket />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Rocket from './Rocket.vue';
import { ref } from 'vue';


export default defineComponent({
    name: "Rockets",
    components: { Rocket },
    setup() {
        const rockets = ref([])
        const error = ref(null)
        const getAllRockets = async () => {
            try {
                const data = await fetch('https://api.spacexdata.com/v3/rockets')
                if (!data.ok) {
                    throw Error('Something went wrong')
                }
                rockets.value = await data.json()

            } catch (err) {
                //error.value = err.message
                console.log(err)
            }
        }
        return {
            rockets, error, getAllRockets
        }

    },
})

</script>