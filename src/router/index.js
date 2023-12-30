import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/kakaologin',
        name: 'KakaoLogin',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "kakaologin" */ '../views/KakaoLogin.vue')
    },
    {
        path: '/naverlogin',
        name: 'NaverLogin',
        component: () => import(/* webpackChunkName: "parent" */ '../views/NaverLogin.vue')
    },
    {
        path: '/googlelogin',
        name: 'GoogleLogin',
        component: () => import(/* webpackChunkName: "parent" */ '../views/GoogleLogin.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
