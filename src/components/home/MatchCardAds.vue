<template>
    <v-card>
        <div class="ads-wrapper">
            <a href="https://coupa.ng/biBKO6" target="_blank"><img
                    src="https://ads-partners.coupang.com/banners/15159?subId=&traceId=19082520191687403001006442&w=600&h=900"
                    alt=""></a>
        </div>
    </v-card>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class MatchCardAds extends Vue {

    }
</script>

<style scoped lang="scss">
    .ads-wrapper {
        min-width: 200px;
        width: 100%;
        height: 469px;
        overflow: hidden;

        a {
            img {
                width: 100%;
                height: 469px;
            }
        }
    }
</style>
