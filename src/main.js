// Base Imports
import { createApp } from 'vue';
import App from './App.vue';

// Vue Router v4.0.3
import router from './router/index';

/* Tailwind CSS v3.3.0 */
import './tailwind.css';

// Fontawesome v6.4.0
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './assets/icons/fontawesome-icons';

const VueApp = createApp(App);

VueApp.use(router);

VueApp.component('font-awesome-icon', FontAwesomeIcon);

VueApp.mount('#app');
