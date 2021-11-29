import { createApp } from 'vue';
import App from '@/app.vue';
import router from '@/router';
import store from '@/store';

import waypoint from '@/directives/waypoint';
import _modernizr from '@/modernizr'; // it detects webp support

import './stylesheets/application.sass';

createApp(App)
  .use(store)
  .use(router)
  .directive('waypoint', waypoint)
  .mount('#app');
