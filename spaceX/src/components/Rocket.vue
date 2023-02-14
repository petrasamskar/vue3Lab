<template>
    <h1>{{ rocket.rocket_name }}</h1>
    <p>{{ rocket.description }}</p>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { SpaceXRocket } from '../types/SpaceXRocket';

export default defineComponent({
    name: 'Rocket',
    props: {
        rocket: {
            required: true,
            type: Object as PropType<SpaceXRocket>
        }
    }

})
</script>