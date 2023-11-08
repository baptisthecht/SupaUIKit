import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import ComponentsPage from './pages/ComponentsPage.vue'
import TemplatesPage from './pages/TemplatesPage.vue'
import DocsPage from './pages/DocsPage.vue'
import './index.css'
import store from './store.js'
import { createApp } from 'vue'

const routes = [
        { path: '/', component: HomePage },
        { path: '/components', component: ComponentsPage},
        { path: '/templates', component: TemplatesPage},
        { path: '/docs', component: DocsPage}
    ]

const router = createRouter({
    history: createWebHistory(),
    routes
    })

    createApp(App)
    .use(store)
    .use(router) 
    .mount('#app');
