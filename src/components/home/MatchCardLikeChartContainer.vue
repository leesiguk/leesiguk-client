<template>
    <div class="match-card-list-chart-container">
        <v-app-bar
                dense
                flat
        >
            <v-toolbar-title class="subtitle-1">좋아요 수</v-toolbar-title>
            <div class="flex-grow-1"></div>
            <span class="subtitle-2">차이 {{likeGap}}</span>
        </v-app-bar>
        <template v-for="type in ['japan', 'korea']">
            <match-card-current-like-chart
                    :type="type"
                    :data="data"
            ></match-card-current-like-chart>
            <match-card-like-trend-chart
                    :type="type"
                    :data="data"
            ></match-card-like-trend-chart>
            <v-divider v-if="type === 'japan'"></v-divider>
        </template>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import ImageBox from '@/components/ImageBox.vue';
    import MatchCardCurrentLikeChart from '@/components/home/MatchCardCurrentLikeChart.vue';
    import MatchCardLikeTrendChart from '@/components/home/MatchCardLikeTrendChart.vue';

    @Component({
        components: {MatchCardLikeTrendChart, MatchCardCurrentLikeChart, ImageBox},
    })
    export default class MatchCardLikeChartContainer extends Vue {
        @Prop() data: any;

        get likeGap() {
            return this.addComma(Math.abs(this.data.japan.like - this.data.korea.like));
        }

        addComma(num: number): string {
            return num.toLocaleString();
        }
    }
</script>

<style scoped lang="scss">
    .match-card-list-chart-container {
    }
</style>
