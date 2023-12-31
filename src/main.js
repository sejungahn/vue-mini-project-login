import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

window.Kakao.init('1aeffe7668e1c6007a0fad8b9d82f328') // 카카오 앱키
