import { createApp } from 'vue';
import App from './app.vue';
import router from './router';
import store from './store';

// import VueWaypoint from 'vue-waypoint';

import './stylesheets/application.sass';

createApp(App)
  .use(store)
  .use(router)
  .mount('#app');
  // .use(VueWaypoint)
