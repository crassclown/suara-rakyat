<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import axios from 'axios'
import chart from './chartPie.js';
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-chart': chart
  },
  async mounted(){
    await axios.get('https://kpu.nyandev.id/api/v1/count').then((response)=>{
      this.loaded = true
      this.getData = [response.data.prabowo.percent, response.data.jokowi.percent]
    })
  },
  data() {
    return {
      loaded: false,
      detailData: null,
      chartData: {
        labels: ["PRABOWO-SANDI", "JOKOWI-AMIN"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#E46651", "#41B883"],
            data: null
          }
        ]
      }
    }
  }
}
</script>

<style>

</style>
