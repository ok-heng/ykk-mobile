import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home'
import Category from '@/views/category'
import Sort from '@/views/sort'
import Details from '@/views/details'
import Login from '@/views/login'
import Phone from '@/components/login/phone'
import Username from '@/components/login/username'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home/'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/category',
            component: Category
        },
        {
            path: '/sort',
            component: Sort
        },
        {
            path: '/details',
            component: Details
        },
        {
            path: '/login',
            component: Login,
            children: [
                {
                    path: 'username',
                    component: Username
                },
                {
                    path: 'phone',
                    component: Phone
                }
            ]
        },
        {
            path: '*',
            redirect: '/home/'
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})