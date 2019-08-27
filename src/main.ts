import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';
// @ts-ignore
import VueAnalytics from 'vue-analytics';

Vue.use(VueAnalytics, {
    id: 'UA-146336888-1',
    router,
    autoTracking: {
        pageviewOnLoad: true,
    },
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount('#app');
