<template>
    <div id="app">
        <img class="point geon" src="./assets/point_01.png">
        <img class="point gon" src="./assets/point_02.png">
        <img class="point gam" src="./assets/point_03.png">
        <img class="point li" src="./assets/point_04.png">
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
</style>
