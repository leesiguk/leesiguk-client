<template>
    <div class="home">
        <img alt="leesiguk logo" src="../assets/logo.png">
        <p>COMING SOON</p>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class Home extends Vue {
    }
</script>

<style lang="scss">
    img {
        width: 50%;
        max-width: 600px;
    }

    p {
        color: rgba(255, 255, 255, .76);
    }
</style>
