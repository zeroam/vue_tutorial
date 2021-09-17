import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard'
import GridSystem from '@/views/GridSystem'
import GridListPage from '@/views/GridListPage'
import Breakpoints from '@/views/Breakpoints'
import Typography from '@/views/Typography'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/grid-system',
    name: 'GridSystem',
    component: GridSystem,
  },
  {
    path: '/grid-list-page',
    name: 'GridListPage',
    component: GridListPage,
  },
  {
    path: '/breakpoints',
    name: 'Breakpoints',
    component: Breakpoints,
  },
  {
    path: '/typography',
    name: 'Typography',
    component: Typography,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
