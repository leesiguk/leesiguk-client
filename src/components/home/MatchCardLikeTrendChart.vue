<template>
    <div class="match-card-like-trend-chart">
        <div class="trend-chart-container">
            <div
                    class="chart-wrapper"
                    :class="{show: showChart}"
                    v-if="createChart"
            >
                <apexchart
                        width="100%"
                        :height="40"
                        type="area"
                        :options="chartOptions"
                        :series="series"
                ></apexchart>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import ImageBox from '@/components/ImageBox.vue';

    @Component({
        components: {ImageBox},
    })
    export default class MatchCardLikeTrendChart extends Vue {
        @Prop() type!: string;
        @Prop() data: any;

        series: any = [{
            name: this.data[this.type].name,
            data: this.data[this.type].likeHistory,
        }];

        chartOptions: any = {
            stroke: {
                width: 2,
                curve: 'smooth',
            },
            tooltip: {
                enabled: false,
            },
            colors: [this.type === 'korea' ? '#0072ff' : '#FF3838'],
            chart: {
                animations: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true,
                },
            },
        };

        showChart: boolean = false;
        createChart: boolean = false;

        created() {
            setTimeout(() => {
                this.createChart = true;

                setTimeout(() => {
                    this.showChart = true;
                }, 1000);
            }, 1000);
        }
    }
</script>

<style scoped lang="scss">
    .match-card-like-trend-chart {
        .trend-chart-container {
            width: 100%;
            height: 40px;

            .chart-wrapper {
                transition: opacity 1s;
                opacity: 0;

                &.show {
                    opacity: 1;
                }
            }
        }
    }
</style>
