<template>
  <div id="app" class="app-wrapper">
    <app-header />
      <p class="disc">Disclaimer: Data yang ditampilkan berdasarkan website KPU.</p>
      <div class="chart-wrapper">
        <app-chart :data="chartData" :options="options" v-if="loaded" />
      </div>
    <app-footer :data="detailData" />
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
      this.getData = [response.data.results.prabowo.percent, response.data.results.jokowi.percent]
      this.chartData.datasets[0].data = this.getData
      this.detailData = response.data.results
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
            backgroundColor: ["#E46651", "#3498db"],
            data: null
          }
        ]
      },
      options: {
        legend: {
          display: false
        }
      }
    }
  }
}
</script>

<style>
body{
  overflow: auto;
  margin: 0;
}
.disc{
  margin-top: 30px;
  margin-bottom: 40px;
  font-size: 16px;
}
.app-wrapper{
  padding: 50px 30px;
}
@media(max-width: 376px){
  .chartjs-render-monitor{
    height: 250px !important;
    width: 250px !important;
    margin: auto;
  }
}
</style>
