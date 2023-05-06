import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import ('../components/Home')
  },
  {
    path: '/book',
    name: 'book',
    component: () => import ('../components/Booking')
  },
  {
    path: '/view',
    name: 'view',
    component: () => import ('../components/ListComponent')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import ('../components/EditComponent')
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    component: () => import ('../components/AboutUs')
  },
  {
    path: '/places',
    name: 'places',
    component: () => import ('../components/Places')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router