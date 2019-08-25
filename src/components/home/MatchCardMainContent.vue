<template>
    <div class="match-card-main-content">
        <match-card-brand :data="data.japan" brandType="japan"></match-card-brand>
        <div class="vs">VS</div>
        <match-card-brand :data="data.korea" brandType="korea"></match-card-brand>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import MatchCardBrand from '@/components/home/MatchCardBrand.vue';

    @Component({
        components: {MatchCardBrand},
    })
    export default class MatchCardMainContent extends Vue {
        @Prop() data: any;
    }
</script>

<style scoped lang="scss">
    .match-card-main-content {
        padding: 32px 0;
        display: flex;
        flex-direction: row;

        .vs {
            width: 40px;
            text-align: center;
            padding-top: 24px;
            font-size: 24px;
        }
    }
</style>
