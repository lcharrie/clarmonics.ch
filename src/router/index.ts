import {createWebHistory, createRouter, RouterView} from 'vue-router'
import Tr from "@/plugins/i18n/translation"

import NotFound from '@/views/NotFound.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Media from '@/views/Media.vue'
import Projects from '@/views/Projects.vue'
import Contacts from '@/views/Contacts.vue'

const routes = [
    {
        path: '/:locale?',
        component: RouterView,
        beforeEnter: Tr.routeMiddleware,
        children: [
            {
                path: '',
                name: 'home',
                component: Home,
            },
            {
                path: 'about',
                name: 'about',
                component: About,
            },
            {
                path: 'media',
                name: 'media',
                component: Media,
            },
            {
                path: 'projects',
                name: 'projects',
                component: Projects,
            },
            {
                path: 'contacts',
                name: 'contacts',
                component: Contacts,
            },
            {
                path: ':pathMatch(.*)*',
                name: 'not-found',
                component: NotFound,
            },
        ],
    },
]

const index = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes
})

export default index
