<template>
    <v-app>
        <v-app-bar
                app
                color="#282D49"
                dark
                fixed
                elevate-on-scroll
        >
            <img src="./assets/logo.png" alt="logo" class="logo">

            <div class="flex-grow-1"></div>
        </v-app-bar>
        <v-content>
            <v-container fluid class="container">
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<style scoped lang="scss">
    .logo {
        width: 140px;
        display: block;
        margin-right: 16px;
    }

    .container {
        max-width: 1280px;
    }
</style>
