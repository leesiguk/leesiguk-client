<template>
    <v-app>
        <v-app-bar
                app
                color="#282D49"
                dark
                fixed
                elevate-on-scroll
        >
            <router-link to="/">
                <img src="./assets/logo.png" alt="logo" class="logo">
            </router-link>

            <div class="flex-grow-1"></div>
            <v-btn icon to="/about">
                <v-icon>favorite</v-icon>
            </v-btn>
        </v-app-bar>
        <v-content>
            <v-container fluid class="container">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </v-container>
        </v-content>
    </v-app>
</template>

<style scoped lang="scss">
    .logo {
        width: 160px;
        display: block;
        margin-right: 16px;
    }

    .container {
        max-width: 1280px;
    }
</style>
