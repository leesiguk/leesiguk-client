<template>
    <div class="image-box" :style="style" :class="[{'is-circle': circle}]" @click="$emit('click')">
        <template v-if="src">
            <v-img contain
                   :src="src"
                   aspect-ratio="1">
                <template #placeholder>
                    <v-layout fill-height
                              align-center
                              justify-center
                              ma-0>
                        <v-progress-circular indeterminate
                                             color="grey"
                                             :size="progressCircularSize"
                                             :width="progressCircularWidth"></v-progress-circular>
                    </v-layout>
                </template>
            </v-img>
        </template>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class ImageBox extends Vue {
        @Prop() src!: string | null;
        @Prop({default: '#ffffff'}) backgroundColor!: string;
        @Prop({default: 80}) size!: number;
        @Prop(Boolean) circle!: boolean;

        get style() {
            return {
                width: `${this.size}px`,
                height: `${this.size}px`,
                backgroundColor: this.backgroundColor,
            };
        }

        get progressCircularSize() {
            return this.size / 2.5;
        }

        get progressCircularWidth() {
            return this.size / 20;
        }
    }
</script>

<style scoped lang="scss">
    .image-box {
        border-radius: 8px;
        overflow: hidden;
        border: 1px solid #ededed;

        &.is-circle {
            border-radius: 50% !important;
        }
    }
</style>

