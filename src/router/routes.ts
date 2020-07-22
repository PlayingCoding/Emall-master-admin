import { RouteConfig } from 'vue-router'
import BasicLayout from '../layouts/BasicLayout.vue'
import Home from '../views/Home.vue'

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'BasicLayout',
    component: BasicLayout,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "norfound" */ '../components/NotFound.vue')
  }
]

export default routes
