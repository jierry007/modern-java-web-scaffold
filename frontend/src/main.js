import 'bootstrap/css/bootstrap.min.css'
import 'bootstrap/css/bootstrap-theme.min.css'
import 'assets/css/public.css'

import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import app from 'src/app'
import auth from 'src/auth'
import configRoutes from 'src/routes'

new Vue({
    http: {
        options: {
            emulateJSON: true,
            emulateHTTP: true
        }
    }
});

Vue.use(VueResource);
Vue.use(VueRouter);

auth.checkAuth();

export const router = new VueRouter({
    hashbang: false,
    history: true,
    mode: 'html5'
});

configRoutes(router);

router.start(Vue.extend(app), '#app');
