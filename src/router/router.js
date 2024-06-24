import { createRouter, createWebHistory } from 'vue-router';

const routes = [];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'vue-school-active-link'
});

export default router;