import './assets/main.css'

import App from './App.vue'

import { createApp } from 'vue'

const app = createApp(App);

/* Importing Global MenuBar */
import MenuBar from './pages/MenuBar.vue';
app.component('menu-bar', MenuBar);

/* Importing Global Components dynamically */
const globalComponents = import.meta.glob('./components/globals/*.vue', { eager: true });

const camelToKebab = str => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

Object.entries(globalComponents).forEach(([key, value]) => {
    // "./components/FruitComponent.vue" will become "fruit-component"
    const componentNameInKebabForm = camelToKebab(key.split('/').pop().replace(/\.\w+$/, ''))
    /* Registering Global Components dynamically */
    app.component(componentNameInKebabForm, value.default)
})

import router from './routes';      // exported default
app.use(router);

import axios from 'axios';
// window.axios = axios;

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';

/* Global Helper-Functions */
import { capitalizeEachWord } from './helpers';        // exported modules
app.config.globalProperties.$helpers = {
    capitalizeEachWord
}

/* Store */
import { createPinia } from 'pinia'
const pinia = createPinia()
app.use(pinia)

app.mount('#app')
