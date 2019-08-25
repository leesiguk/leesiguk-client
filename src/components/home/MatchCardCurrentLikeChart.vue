<template>
    <div class="match-card-current-like-chart">
        <v-app-bar
                dense
                flat
        >
            <v-toolbar-title class="subtitle-1">좋아요 수</v-toolbar-title>
            <div class="flex-grow-1"></div>
            <span class="subtitle-2">차이 {{likeGap}}</span>
        </v-app-bar>
        <template v-for="type in ['japan', 'korea']">
            <div class="chart-container" :key="type">
                <div class="brand">
                    <image-box circle :size="40" :src="data[type].brandImageUrl"></image-box>
                </div>
                <div class="chart-wrapper">
                    <div class="chart" :class="type" :style="chartStyle(data, type)">
                        <span class="like-text">{{addComma(data[type].like)}}</span>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import ImageBox from '@/components/ImageBox.vue';

    @Component({
        components: {ImageBox},
    })
    export default class MatchCardCurrentLikeChart extends Vue {
        @Prop() data: any;

        get likeGap() {
            return this.addComma(Math.abs(this.data.japan.like - this.data.korea.like));
        }

        chartStyle(data: any, type: string) {
            const width: any = {
                japan: '',
                korea: '',
            };

            if (data.japan.like > data.korea.like) {
                width.japan = '100%';
                width.korea = `${data.korea.like / data.japan.like * 100}%`;
            } else {
                width.japan = `${data.japan.like / data.korea.like * 100}%`;
                width.korea = '100%';
            }

            return {
                width: width[type],
            };
        }

        addComma(num: number): string {
            return num.toLocaleString();
        }
    }
</script>

<style scoped lang="scss">
    .match-card-current-like-chart {
        .chart-container {
            display: flex;
            flex-direction: row;
            padding-bottom: 16px;

            .brand {
                padding: 0 16px;
            }

            .chart-wrapper {
                flex: 1 0 auto;
                padding-right: 16px;

                .chart {
                    width: 80%;
                    height: 40px;
                    line-height: 40px;
                    text-align: right;
                    padding-right: 12px;
                    border-radius: 4px;

                    &.japan {
                        background: linear-gradient(to right, #F89999, #FF3838);
                    }

                    &.korea {
                        background: linear-gradient(to right, #00c6ff, #0072ff);
                    }

                    .like-text {
                        color: #ffffff;
                        font-size: 14px;
                        font-weight: 500;
                    }
                }
            }
        }
    }
</style>
