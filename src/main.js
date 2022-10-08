import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'


const firebaseConfig = {
  apiKey: "AIzaSyAEkx5h_H_jYYiA5zv-SaziecBXeDwxPJ4",
  authDomain: "bookclub-58f19.firebaseapp.com",
  projectId: "bookclub-58f19",
  storageBucket: "bookclub-58f19.appspot.com",
  messagingSenderId: "1068291885693",
  appId: "1:1068291885693:web:8961261fdcabbaab2d7f14",
  measurementId: "G-ZHW6J2Q0PG"
}

const fb = initializeApp(firebaseConfig)
const analytics = getAnalytics(fb)

const app = createApp(App)

app.use(router)

app.mount('#app')
