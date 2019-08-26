<template>
    <v-card>
        <v-app-bar
                dense
                flat
        >
            <v-toolbar-title>{{data.category}}</v-toolbar-title>
            <div class="flex-grow-1"></div>
            <v-menu bottom left>
                <template v-slot:activator="{ on }">
                    <v-btn
                            icon
                            v-on="on"
                    >
                        <v-icon class="material-icons-outlined">share</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item @click="shareKakao()">
                        <v-list-item-avatar>
                            <v-img src="/img/kakaotalk.png"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-title>카카오톡</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="shareFacebook()">
                        <v-list-item-avatar>
                            <v-img src="/img/facebook.png"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-title>Facebook</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
        <v-divider></v-divider>
        <match-card-main-content :data="data"></match-card-main-content>
        <v-divider></v-divider>
        <match-card-current-like-chart :data="data"></match-card-current-like-chart>

        <v-card-actions>
            <v-btn block text>자세히보기</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import MatchCardMainContent from '@/components/home/MatchCardMainContent.vue';
    import MatchCardCurrentLikeChart from '@/components/home/MatchCardCurrentLikeChart.vue';

    declare const Kakao: any;
    declare const FB: any;

    @Component({
        components: {MatchCardCurrentLikeChart, MatchCardMainContent},
    })
    export default class MatchCard extends Vue {
        @Prop() data: any;

        shareFacebook() {
            window.open('https://www.facebook.com/sharer/sharer.php?u=https://www.leesiguk.com');
        }

        shareKakao() {
            Kakao.Link.sendDefault({
                objectType: 'feed',
                content: {
                    title: `${this.data.japan.name} vs ${this.data.korea.name}`,
                    description: '과연 승자는?',
                    imageUrl: 'https://www.leesiguk.com/img/leesiguk-main-logo.png',
                    link: {
                        mobileWebUrl: 'https://www.leesiguk.com',
                        webUrl: 'https://www.leesiguk.com',
                    },
                },
                buttons: [
                    {
                        title: '대결 상황 확인하기',
                        link: {
                            mobileWebUrl: 'https://www.leesiguk.com',
                            webUrl: 'https://www.leesiguk.com',
                        },
                    },
                ],
            });
        }
    }
</script>

<style scoped lang="scss">
</style>
