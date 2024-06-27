import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/Home.vue';
import Checkout from '../pages/Checkout.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home        
    },
    {
        path: '/checkout/:offer_code',
        name: 'checkout',
        component: Checkout,
        beforeEnter: (_, __, next) => {
            next();
            return;

        }
    },
    {
        path: '/:pathMatch(.*)',
        redirect: '/'

    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'vue-school-active-link'
});

export default router;