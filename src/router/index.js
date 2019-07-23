import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home'
import Category from '@/views/category'
import Sort from '@/views/sort'
import Details from '@/views/details'
import Login from '@/views/login'
import Phone from '@/components/login/phone'
import Username from '@/components/login/username'
import Login1 from '@/views/login1'
import Hello from '@/views/hello'
import Cart from '@/views/cart'
import Person from '@/views/person'
import store from '@/store/index'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/login1',
            component: Login1
        },
        {
            path: '/hello',
            component: Hello,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/cart',
            component: Cart,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/person',
            component: Person,
            meta: {
                requiresAuth: true
            }
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
            path: '',
            redirect: '/home'
        },
        {
            path: '*',
            redirect: '/home'
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
})

router.beforeEach((to, from, next) => {
    let token = store.state.token;
    if (to.meta.requiresAuth) {
        if (token) {
            next();
        } else {
            next({
                path: '/login/username',
                query: {
                    redirect: to.fullPath
                }
            });
        }
    } else {
        next();
    }
});

export default router;