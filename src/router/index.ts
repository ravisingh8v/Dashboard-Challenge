import TheList from '../views/TheList.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    { path: '', component: TheList },
    { path: '/statistics', component: () => import('./../views/DashBoardStatistics.vue') }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: 'active'
})

export default router
