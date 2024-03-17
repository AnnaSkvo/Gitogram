import { createRouter, createWebHashHistory } from "vue-router";
import FeedsPage from '../components/FeedsPage.vue'
import StoriesPage from '../components/StoriesPage.vue'
import AuthPage from '../components/AuthPage.vue'

const routes = [{
    path: '/',
    component: FeedsPage,
    name: 'feeds'
}, {
    path: '/auth',
    component: AuthPage,
    name: 'auth'
},
{
    path: '/stories/:initialSlide',
    component: StoriesPage,
    name: 'stories',
    props: true
}]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach(async (to, from, next) => {
    const authRoute = to.name === 'auth';
    if (authRoute) {
        next();
        return;
    }
    try {
        const response = await fetch('https://api.github.com/user', {
            headers: {
                Authorization: `token ${localStorage.getItem('token')}`
            }
        });
        if (response.status === 401) {
            next({ name: 'auth' });
        }
        next();
    } catch (e) {
        console.log(e)
        next({ name: 'auth' });
    }
})

export default router;