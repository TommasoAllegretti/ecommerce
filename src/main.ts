import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'

import App from './App.vue'
import router from './router'

import { database } from './firebase'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

export { database }
