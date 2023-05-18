import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaseNav from './components/UI/BaseNav.vue'

createApp(App).use(store).use(router).component('BaseNav', BaseNav).mount('#app')
