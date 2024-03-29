import { createApp } from 'vue'
import { Quasar } from 'quasar'
import { createRouter, createWebHistory } from 'vue-router/auto'

import App from './App.vue'

import 'quasar/src/css/index.sass'
import './styles/main.scss'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
})

app.use(router)
app.use(Quasar, {
  plugins: {},
})

app.mount('#app')
