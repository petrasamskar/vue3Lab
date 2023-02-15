import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'

const app = createApp(App).use(store)

app.mount('#app')
