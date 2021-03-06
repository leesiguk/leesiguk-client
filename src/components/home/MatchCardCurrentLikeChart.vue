<template>
    <div
            class="match-card-current-like-chart"
            :class="type"
    >
        <div class="chart-container">
            <div class="brand">
                <image-box
                        :size="40"
                        :src="data[type].brandImageUrl"
                        :backgroundColor="data[type].brandColor"
                ></image-box>
            </div>
            <div class="chart-wrapper">
                <div
                        class="chart"
                        :class="type"
                        :style="width[type]"
                >
                        <span
                                class="like-text text-no-wrap"
                                :class="{show: showLikeCount}"
                        >{{addComma(data[type].like)}}</span>
                </div>
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
    export default class MatchCardCurrentLikeChart extends Vue {
        @Prop() type!: string;
        @Prop() data: any;

        width: any = {
            japan: 0,
            korea: 0,
        };
        showLikeCount: boolean = false;

        get likeGap() {
            return this.addComma(Math.abs(this.data.japan.like - this.data.korea.like));
        }

        created() {
            setTimeout(() => {
                this.width.japan = this.chartStyle('japan');
                this.width.korea = this.chartStyle('korea');

                setTimeout(() => {
                    this.showLikeCount = true;
                }, 1000);
            }, 0);
        }

        chartStyle(type: string) {
            const width: any = {
                japan: '',
                korea: '',
            };

            if (this.data.japan.like > this.data.korea.like) {
                width.japan = '100%';
                width.korea = `${this.data.korea.like / this.data.japan.like * 100}%`;
            } else {
                width.japan = `${this.data.japan.like / this.data.korea.like * 100}%`;
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
        &.korea {
            padding-top: 16px;
        }

        .chart-container {
            display: flex;
            flex-direction: row;
            padding-bottom: 8px;

            .brand {
                padding: 0 16px;
            }

            .chart-wrapper {
                flex: 1 0 auto;
                margin-right: 16px;
                background-color: #dddddd;
                border-radius: 4px;
                overflow: hidden;
                position: relative;

                .chart {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 0;
                    height: 40px;
                    line-height: 40px;
                    text-align: right;
                    will-change: width;
                    transition: width 1s;

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
                        margin: 0 12px;
                        opacity: 0;
                        transition: opacity .3s;

                        &.show {
                            opacity: 1;
                        }
                    }
                }
            }
        }
    }
</style>
