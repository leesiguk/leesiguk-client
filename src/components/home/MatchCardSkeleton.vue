<template>
    <v-card class="match-card-skeleton">
        <div class="header"></div>
        <div class="share"></div>
        <div class="content"></div>
        <div class="like-text"></div>
        <div class="bar-chart-wrapper">
            <div class="circle"></div>
            <div class="chart"></div>
        </div>
        <div class="trend-chart-wrapper">
            <div class="trend-chart"></div>
        </div>
        <div class="bar-chart-wrapper">
            <div class="circle"></div>
            <div class="chart"></div>
        </div>
        <div class="trend-chart-wrapper">
            <div class="trend-chart"></div>
        </div>
    </v-card>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class MatchCardSkeleton extends Vue {

    }
</script>

<style scoped lang="scss">
    .match-card-skeleton {
        min-width: 200px;
        width: 100%;
        height: 550px;
        padding: 16px;

        .header {
            border-radius: 4px;
            width: 50%;
            height: 32px;
            user-select: none;
            animation: skeleton-screen-pulse 2s infinite ease-in-out;
        }

        .share {
            position: absolute;
            top: 16px;
            right: 16px;
            border-radius: 50%;
            width: 32px;
            height: 32px;
            user-select: none;
            animation: skeleton-screen-pulse 2s infinite ease-in-out;
        }

        .content {
            border-radius: 4px;
            margin: 32px 0;
            width: 100%;
            height: 210px;
            user-select: none;
            animation: skeleton-screen-pulse 2s infinite ease-in-out;
        }

        .like-text {
            border-radius: 4px;
            width: 100px;
            height: 20px;
            user-select: none;
            animation: skeleton-screen-pulse 2s infinite ease-in-out;
        }

        .bar-chart-wrapper {
            display: flex;
            flex-direction: row;
            padding-top: 16px;
            padding-bottom: 8px;

            .circle {
                border-radius: 50%;
                width: 40px;
                height: 40px;
                user-select: none;
                animation: skeleton-screen-pulse 2s infinite ease-in-out;
                margin-right: 16px;
            }

            .chart {
                flex: 1 0 auto;
                border-radius: 4px;
                height: 40px;
                user-select: none;
                animation: skeleton-screen-pulse 2s infinite ease-in-out;
            }
        }

        .trend-chart-wrapper {
            height: 40px;
        }

        @keyframes skeleton-screen-pulse {
            0% {
                background-color: rgba(0, 0, 0, 0.05)
            }
            50% {
                background-color: rgba(0, 0, 0, 0.15)
            }
            100% {
                background-color: rgba(0, 0, 0, 0.05)
            }
        }
    }
</style>
