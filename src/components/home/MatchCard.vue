<template>
    <v-card>
        <v-app-bar
                dense
                flat
        >
            <v-toolbar-title>SPA</v-toolbar-title>

            <div class="flex-grow-1"></div>
            <v-btn icon>
                <v-icon class="material-icons-outlined">share</v-icon>
            </v-btn>
        </v-app-bar>
        <v-img
                class="white--text"
                height="200px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
            <v-card-title class="align-end fill-height">Top 10 Australian beaches</v-card-title>
        </v-img>

        <v-card-text>
            <span>Number 10</span><br>
            <span class="text--primary">
        <span>Whitehaven Beach</span><br>
        <span>Whitsunday Island, Whitsunday Islands</span>
      </span>
        </v-card-text>

        <v-card-actions>
            <v-btn
                    text
                    color="orange"
            >
                Share
            </v-btn>
            <v-btn
                    text
                    color="orange"
            >
                Explore
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class MatchCard extends Vue {
    }
</script>

<style scoped lang="scss">
</style>
