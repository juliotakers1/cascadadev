// main.js
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(createPinia()) // Agregar Pinia aquí

app.mount('#app')
