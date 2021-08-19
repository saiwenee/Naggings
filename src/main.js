import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
// import AV from 'leancloud-storage' ;
const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})


app.use(router)
app.mount('#app')

// AV.init({

//   appId: "SmmpeujdjngpjQzUxlKjesJq-MdYXbMMI",

//   appKey: "kksSDbuPjrTXj5o0Jwvqgafw",

//   // serverURL: "bb.7ee.life"

// });