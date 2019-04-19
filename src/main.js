import Vue from 'vue'
import Store from './store/store'
import Fly from 'flyio/dist/npm/wx'
import App from './app'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$store = Store

let fly = new Fly()
Vue.prototype.$fly = fly
const app = new Vue(App)

app.$mount()
