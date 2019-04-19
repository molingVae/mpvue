import Vue from 'vue'
import Store from './store/store'
import App from './app'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$store = Store
const app = new Vue(App)

app.$mount()
