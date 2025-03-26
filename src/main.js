import './assets/main.css'

import App from './App.vue'

import { createApp } from 'vue'

const app = createApp(App);

import router from './routes';      // exported default
app.use(router);

import axios from 'axios';
// window.axios = axios;

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';

/* Store */
import { createPinia } from 'pinia'
const pinia = createPinia()
app.use(pinia)

app.mount('#app')
