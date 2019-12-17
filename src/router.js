import Vue from 'vue'
import Router from 'vue-router'

import Login from './Login.vue'

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        { path: '/login', component: Login}
    ]
})