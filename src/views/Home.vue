<template>
    <div class="home">
        <img alt="leesiguk logo" src="../assets/leesiguk.png">
        <HelloWorld msg="이시국닷컴"/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

    @Component({
        components: {
            HelloWorld,
        },
    })
    export default class Home extends Vue {
    }
</script>

<style lang="scss">
    img {
        width: 50%;
        max-width: 400px;
    }
</style>
