<template>
    <Rocket />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Rocket from './Rocket.vue';


export default defineComponent({
    name: "Rockets",
    components: { Rocket }
})

</script>