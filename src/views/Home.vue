<template>
    <v-row
            align="start"
            justify="start">
        <template v-if="!isLoading">
            <template v-for="(data, index) in items">
                <v-col
                        :key="index"
                        sm="6"
                        md="6"
                        lg="4"
                >
                    <match-card :data="data"></match-card>
                </v-col>
            </template>

            <v-col
                    sm="6"
                    md="6"
                    lg="4"
            >
                <match-card-ads></match-card-ads>
            </v-col>
        </template>
        <template v-else>
            <template v-for="n in 6">
                <v-col
                        :key="n"
                        sm="6"
                        md="6"
                        lg="4"
                >
                    <match-card-skeleton></match-card-skeleton>
                </v-col>
            </template>
        </template>
    </v-row>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import MatchCard from '@/components/home/MatchCard.vue';
    import MatchCardAds from '@/components/home/MatchCardAds.vue';
    import db from '@/lib/firebase';
    import MatchCardSkeleton from '@/components/home/MatchCardSkeleton.vue';

    declare const FB: any;

    @Component({
        components: {MatchCardSkeleton, MatchCard, MatchCardAds},
        metaInfo: {
            title: '이시국닷컴',
            meta: [
                {name: 'description', content: '이시국엔 이시국닷컴! 이시국닷컴에서 다양한 한일 브랜드의 트랜드를 비교 해보세요.'},
                {name: 'og:description', content: '이시국엔 이시국닷컴! 이시국닷컴에서 다양한 한일 브랜드의 트랜드를 비교 해보세요.'},
                {name: 'og:title', content: '이시국닷컴'},
                {name: 'og:url', content: 'https://www.leesiguk.com'},
            ],
        },
    })
    export default class Home extends Vue {
        isLoading: boolean = true;
        items: any = [];

        created() {
            this.loadData();
        }

        loadData() {
            db.ref('/').once('value').then((snapshot: any) => {
                this.isLoading = false;
                this.items = snapshot.val();
                this.initFB();
            });
        }

        initFB() {
            FB.init({
                appId: '378770669689001',
                xfbml: true,
                version: 'v4.0',
            });
        }
    }
</script>

<style scoped lang="scss">

</style>
