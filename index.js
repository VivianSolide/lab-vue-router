const Home = Vue.component('Home', {
  template: `
    <h1>Welcome</h1>
  `
});

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