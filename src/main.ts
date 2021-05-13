import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { registerElementUI } from './components/ElementUI/index';
import 'element-plus/lib/theme-chalk/index.css';
import './assets/styles/index.scss';

const app = createApp(App);

registerElementUI(app);

app.use(store).use(router).mount('#app');
