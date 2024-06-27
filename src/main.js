import { createApp } from 'vue';
import App from './App.vue';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Router 
import router from './router/router.js';

// Vuex
import store from './store/store.js';

// Vue the mask
import VueTheMask from 'vue-the-mask';

import { worker } from './mocks/browser.js';
worker.start();

const vuetify = createVuetify({
    components,
    directives
});

createApp(App)
    .use(vuetify)
    .use(router)
    .use(store)
    .use(VueTheMask)
    .mount('#app')
