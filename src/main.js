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

// Easy Data Table v1.5.42
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

const VueApp = createApp(App);

VueApp.use(router);

// Register Global Components
VueApp.component('font-awesome-icon', FontAwesomeIcon);
VueApp.component('EasyDataTable', Vue3EasyDataTable);

VueApp.mount('#app');
