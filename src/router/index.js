import { createRouter, createWebHistory } from 'vue-router'
import MekiMainVue from '@/views/MekiMain.vue'


const routes = [
  {path:'/', redirect: '/mekimain'},
  {path:'/mekimain',  component: MekiMainVue}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
