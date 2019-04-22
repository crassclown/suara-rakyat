<template>
    <div class="footer">
        <div class="label-wrapper">
            <div class="label-color label-green"></div>
            <p class="label-name">JOKOWI-AMIN <span v-if="data != null">( {{data.jokowi.percent}}%, {{data.jokowi.total | currency}} Suara )</span></p>
        </div>
        <div class="label-wrapper">
            <div class="label-color label-red"></div>
            <p class="label-name">PRABOWO-SANDI <span v-if="data != null">( {{data.prabowo.percent}}%, {{data.prabowo.total | currency}} Suara )</span> </p>
        </div>
        <div class="separator"></div>
        <ul>
            <li v-if="data != null">Progress : {{data.progress.proses | currency}} dari {{data.progress.total | currency}} TPS ({{data.progress.percent}}%)</li>
            <li v-if="data != null">Versi: {{data.version}}</li>
        </ul>
        <!-- <h5>Real Count KPU</h5> -->
    </div>
</template>
<script>
export default {
    props:{
        data :{
            type: Object
        }
    }
}
</script>

<style>
.label-name{
    color: #fff;
    margin: 0;
    font-size: 14px;
}
.label-green{
    background: #3498db;
}
.label-red{
    background: #E46651;
}
.label-color{
    width: 15px;
    height: 15px;
    /* background: #ddd; */
    margin-right: 10px;
    border-radius: 3px;
}
.label-wrapper:first-child{
    margin-bottom: 10px;
}
.label-wrapper{
    display: flex;
    align-items:center;
}
.footer{
    position: fixed;
    bottom: 0;
    background: rgba(30, 130, 76, 1);
    padding: 15px;
    left: 0;
    right: 0;
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;
}
.footer h5{
    margin: 0;
    color: #fff;
}
.separator{
    margin: 10px 0;
    width: 100%;
    height: 1px;
    background: rgba(218, 217, 217, 0.35);
    display: block;
}
.footer ul{
    margin: 0;
    padding-left: 20px;
    color: #fff;
    font-size: 14px;
}
</style>