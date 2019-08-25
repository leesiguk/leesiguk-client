<template>
    <v-row
            align="start"
            justify="start">
        <v-col
                v-for="data in items"
                :key="data.id"
                sm="6"
                md="6"
                lg="4"
        >
            <match-card :data="data"></match-card>
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
        }];
    }
</script>

<style scoped lang="scss">
</style>
