// Base Imports
import { createApp } from 'vue';
import App from './App.vue';

/* Tailwind CSS v3.3.0 */
import './tailwind.css';

// Fontawesome v6.4.0
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './fontawesome-icons';

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
