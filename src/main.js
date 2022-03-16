import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/style/iconfont.css'
import './assets/style/swiper.less'
import './assets/style/border.css'
import './assets/style/reset.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

new Vue({
  render: h => h(App),
}).$mount('#app')
