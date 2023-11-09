import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import ComponentsPage from './pages/ComponentsPage.vue'
import TemplatesPage from './pages/TemplatesPage.vue'
import ComponentCategoryPage from './pages/ComponentCategoryPage.vue'
import AboutPage from './pages/AboutPage.vue'
import DocsPage from './pages/DocsPage.vue'
import './index.css'
import store from './store.js'
import { createApp } from 'vue'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage('javascript', javascript);

const routes = [
        { path: '/', component: HomePage },
        { path: '/components', component: ComponentsPage},
        { path: '/templates', component: TemplatesPage},
        { path: '/docs', component: DocsPage},
        { path: '/about', component: AboutPage},
        { path: '/:name', component: ComponentCategoryPage, name: 'ComponentCategoryPage'}
    ]


const router = createRouter({
    history: createWebHistory(),
    routes
    })

    createApp(App)
    .use(hljsVuePlugin)
    .use(store)
    .use(router) 
    .mount('#app');
