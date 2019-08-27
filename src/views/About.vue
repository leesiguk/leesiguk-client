<template>
    <div class="about">
        <router-link to="/">
            <img src="/img/icons/social-810x810.png" alt="logo" class="logo">
        </router-link>
        <img class="point geon" src="../assets/point_01.png" alt="geon">
        <img class="point gon" src="../assets/point_02.png" alt="gon">
        <img class="point gam" src="../assets/point_03.png" alt="gam">
        <img class="point li" src="../assets/point_04.png" alt="li">


        <div class="footer">
            <v-btn href="mailto:siguklee@gmail.com" target="_blank" text dark>
                <v-icon class="material-icons-outlined mr-3">email</v-icon>
                문의하기
            </v-btn>

            <v-btn href="https://github.com/leesiguk" target="_blank" text dark>
                <v-icon class="material-icons-outlined mr-3">code</v-icon>
                Github
            </v-btn>

            <v-btn href="https://www.buymeacoffee.com/f7ue0MvSn" target="_blank" text dark>
                <v-icon class="material-icons-outlined mr-3" color="pink lighten-1">favorite</v-icon>
                커피 한 잔 지원
            </v-btn>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class About extends Vue {
    }
</script>

<style scoped lang="scss">
    .about {
        background-color: #282D49;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .logo {
            max-width: 100%;
            width: 1000px;
        }

        .footer {
            position: absolute;
            left: 0;
            bottom: 0;
            right: 0;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 16px 0;
        }

        .point {
            position: absolute;
            width: 35px;
            height: 35px;
            opacity: 0.2;
            margin: 20px;

            &.geon {
                top: 0;
                left: 0;
            }

            &.gon {
                top: 0;
                right: 0;
            }

            &.gam {
                bottom: 0;
                left: 0;
            }

            &.li {
                bottom: 0;
                right: 0;
            }
        }
    }
</style>
