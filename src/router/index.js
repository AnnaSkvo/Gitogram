import { createRouter, createWebHashHistory } from "vue-router";
import FeedsPage from '../components/FeedsPage.vue'
import StoriesPage from '../components/StoriesPage.vue'

const routes = [{
    path: '/',
    component: FeedsPage,
    name: 'feeds'
},
{
    path: '/stories',
    component: StoriesPage,
    name: 'stories'
}]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;