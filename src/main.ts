import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router"

import './assets/main.css'
import HomeVue from './components/Home/Home.vue'
import AboutVue from './components/About/About.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: "/", name: "home", component: HomeVue
    }, { path: "/about", name: "about", component: AboutVue }]
})

createApp(App).use(router).mount('#app')
