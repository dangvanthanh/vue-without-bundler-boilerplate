import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('./views/Home.js')
const About = () => import('./views/About.js')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
  ],
})

export default router
