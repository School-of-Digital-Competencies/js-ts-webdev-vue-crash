import 'bulma/css/bulma.css';

import { createApp } from 'vue';
import { VueQueryPlugin } from '@tanstack/vue-query';

import App from './App.vue';

const app =       createApp(App);

app.use(VueQueryPlugin, {
  enableDevtoolsV6Plugin: true,
});

app.mount('#app');
