import TheList from '../views/TheList.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    { path: '', redirect: '/statistics' },
    { path: '/statistics', component: () => import('./../views/DashBoardStatistics.vue') },
    { path: '/list', component: TheList },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: 'active'
})

export default router
