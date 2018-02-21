const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/:id',
    component: Movie
  }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  el: '#app',
  router
})