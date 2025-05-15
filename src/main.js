import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';

const app = createApp(App);

app.use(router); // ha használod a routert

app.mount('#app');
