<template>
    <v-row
            align="start"
            justify="start">
        <v-col
                v-for="n in 10"
                :key="n"
                sm="6"
                md="6"
                lg="4"
        >
            <match-card></match-card>
        </v-col>
    </v-row>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import MatchCard from '@/components/home/MatchCard.vue';

    @Component({
        components: {MatchCard},
    })
    export default class Home extends Vue {
    }
</script>

<style scoped lang="scss">
</style>
