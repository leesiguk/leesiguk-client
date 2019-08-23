<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
    html, body {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        background-color: #3D3939;
    }
</style>
