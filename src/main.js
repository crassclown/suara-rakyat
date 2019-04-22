import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'
import VueCurrencyFilter from 'vue-currency-filter'

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(VueCurrencyFilter,{
  symbol: '',
  thousandSeparator: '.'
})
