<template>
    <div class="match-card-brand">
        <div class="image-wrapper">
            <a
                    :href="data.facebookPageUrl"
                    target="_blank"
            >
                <image-box
                        circle
                        :size="80"
                        :src="data.brandImageUrl"
                        :backgroundColor="data.brandColor"
                        @click="openPage()"
                ></image-box>
            </a>
            <img :src="flagUrl" alt="national flag" class="national-flag">
        </div>
        <div class="name">{{data.name}}</div>
        <div class="like">
            <v-icon class="like-icon">thumb_up</v-icon>
            <span class="like-text">{{addComma(data.like)}}</span>
        </div>
        <div class="fb-like-button-wrapper">
            <div class="fb-like" :data-href="data.facebookPageUrl" data-width="" data-layout="button"
                 data-action="like" data-size="large" data-show-faces="false" data-share="false"></div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import ImageBox from '@/components/ImageBox.vue';

    @Component({
        components: {ImageBox},
    })
    export default class MatchCardBrand extends Vue {
        @Prop() brandType!: string;
        @Prop() data!: any;

        get flagUrl() {
            return this.brandType === 'korea'
                ? '/img/flag-kr.png'
                : '/img/flag-jp.png';
        }

        addComma(num: number): string {
            return num.toLocaleString();
        }
    }
</script>

<style scoped lang="scss">
    .match-card-brand {
        flex: 1 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        .image-wrapper {
            position: relative;

            .national-flag {
                width: 40px;
                border: 1px solid #ededed;
                position: absolute;
                bottom: -16px;
                left: 20px;
            }
        }

        .name {
            padding-top: 24px;
            font-size: 18px;
        }

        .like {
            .like-icon {
                border-radius: 50%;
                font-size: 10px;
                background-color: #3c90db;
                color: #ffffff;
                width: 14px;
                height: 14px;
            }

            .like-text {
                padding-left: 4px;
                font-size: 13px;
                color: rgba(0, 0, 0, .56);
            }
        }

        .fb-like-button-wrapper {
            width: 100%;
            height: 40px;
            padding-top: 8px;
            text-align: center;
        }
    }
</style>
