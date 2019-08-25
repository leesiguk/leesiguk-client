<template>
    <v-row
            align="start"
            justify="start">
        <template v-for="(data, index) in items">
            <v-col
                    :key="index"
                    sm="6"
                    md="6"
                    lg="4"
            >
                <match-card :data="data"></match-card>
            </v-col>
            <template v-if="index > 0 && index % 4 === 0">
                <v-col
                        sm="6"
                        md="6"
                        lg="4"
                >
                    <match-card-ads></match-card-ads>
                </v-col>
            </template>
        </template>
    </v-row>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import MatchCard from '@/components/home/MatchCard.vue';
    import MatchCardAds from '@/components/home/MatchCardAds.vue';

    @Component({
        components: {MatchCard, MatchCardAds},
    })
    export default class Home extends Vue {
        items: any = [{
            id: 'a',
            category: 'SPA',
            japan: {
                name: '유니클로',
                brandImageUrl: '/img/brands/uniqlo.png',
                brandColor: '#D43A2F',
                like: 494302,
                facebookPageUrl: 'https://www.facebook.com/uniqlo.kr/',
            },
            korea: {
                name: '스파오',
                brandImageUrl: '/img/brands/spao.jpg',
                brandColor: '#ffffff',
                like: 332065,
                facebookPageUrl: 'https://www.facebook.com/SPAOSTORY/',
            },
        }, {
            id: 'b',
            category: '편의점',
            japan: {
                name: '미니스톱',
                brandImageUrl: '/img/brands/ministop.jpg',
                brandColor: '#ffffff',
                like: 125502,
                facebookPageUrl: 'https://www.facebook.com/ministopkr/',
            },
            korea: {
                name: '이마트24',
                brandImageUrl: '/img/brands/emart24.png',
                brandColor: '#ffffff',
                like: 58434,
                facebookPageUrl: 'https://www.facebook.com/emart24.official',
            },
        }, {
            id: 'c',
            category: '슈퍼 멀티 스토어',
            japan: {
                name: '에이비씨마트',
                brandImageUrl: '/img/brands/abcmart.jpg',
                brandColor: '#FFDD00',
                like: 213672,
                facebookPageUrl: 'https://www.facebook.com/abcmartkorea/',
            },
            korea: {
                name: '레스모아',
                brandImageUrl: '/img/brands/lesmore.jpg',
                brandColor: '#ffffff',
                like: 102284,
                facebookPageUrl: 'https://www.facebook.com/lesmore.official',
            },
        }, {
            id: 'd',
            category: '시계',
            japan: {
                name: 'G-CHOCK',
                brandImageUrl: '/img/brands/gshock.png',
                brandColor: '#000000',
                like: 105874,
                facebookPageUrl: 'https://www.facebook.com/koreagshock/',
            },
            korea: {
                name: 'DOLPHIN',
                brandImageUrl: '/img/brands/dolphinwatch.png',
                brandColor: '#ffffff',
                like: 29,
                facebookPageUrl: 'https://www.facebook.com/DolphinWatch',
            },
        }, {
            id: 'e',
            category: '생활용품',
            japan: {
                name: 'MUJI',
                brandImageUrl: '/img/brands/muji.jpg',
                brandColor: '#970A2C',
                like: 104532,
                facebookPageUrl: 'https://www.facebook.com/mujikorea/',
            },
            korea: {
                name: 'JAJU',
                brandImageUrl: '/img/brands/jaju.jpg',
                brandColor: '#58585A',
                like: 65923,
                facebookPageUrl: 'https://www.facebook.com/shinsegaejaju',
            },
        }];
    }
</script>

<style scoped lang="scss">

</style>
