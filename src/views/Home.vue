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

    @Component({
        components: {MatchCardSkeleton, MatchCard, MatchCardAds},
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
            });
        }
    }
</script>

<style scoped lang="scss">

</style>
