<template>
    <h1>{{ rocket.rocket_name }}</h1>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
//import { SpaceXRocket } from '../types/SpaceXRocket';

export default defineComponent({
    name: 'Rocket',
    props: {
        rocket: {
            required: true,
            type: Object
        }
    }

})
</script>