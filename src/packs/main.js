import '@/stylesheets/base.scss';

import App from '@/packs/App.vue';
import VueMarkdownIt from 'vue3-markdown-it';
import { createApp } from 'vue';

const app = createApp(App);

app.use(VueMarkdownIt);
app.mount('#app');
