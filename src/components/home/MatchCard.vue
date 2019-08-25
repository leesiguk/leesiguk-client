<template>
    <v-card>
        <v-app-bar
                dense
                flat
        >
            <v-toolbar-title>{{data.category}}</v-toolbar-title>
            <div class="flex-grow-1"></div>
            <v-btn icon>
                <v-icon class="material-icons-outlined">share</v-icon>
            </v-btn>
        </v-app-bar>
        <v-divider></v-divider>
        <match-card-main-content :data="data"></match-card-main-content>
        <v-divider></v-divider>
        <match-card-current-like-chart :data="data"></match-card-current-like-chart>

        <v-card-actions>
            <v-btn block text>자세히보기</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import MatchCardMainContent from '@/components/home/MatchCardMainContent.vue';
    import MatchCardCurrentLikeChart from '@/components/home/MatchCardCurrentLikeChart.vue';

    @Component({
        components: {MatchCardCurrentLikeChart, MatchCardMainContent},
    })
    export default class MatchCard extends Vue {
        @Prop() data: any;
    }
</script>

<style scoped lang="scss">
</style>
