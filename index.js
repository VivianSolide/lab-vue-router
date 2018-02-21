const routes = [
  {
    path: '/',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  el: '#app',
  router
})