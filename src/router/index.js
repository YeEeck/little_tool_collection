import Vue from 'vue'
import VueRouter from 'vue-router'
import CombinationNumberCal from '../views/CombinationNumberCal.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CombinationNumberCal',
    component: CombinationNumberCal
  },
  {
    path: '/FS',
    name: 'FractionalSimplification',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FractionalSimplification.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
