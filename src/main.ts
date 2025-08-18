import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'

import App from './App.vue'
import router from './router'

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: `${import.meta.env.VITE_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

// Initialize Realtime Database and get a reference to the service
const database = getFirestore(firebaseApp)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

export { database }
