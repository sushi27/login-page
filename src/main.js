import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
// import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import App from './App.vue';
import router from './router';
import store from './store';

library.add(faBell, faEnvelope, faLock);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router)
  .mount('#app');
