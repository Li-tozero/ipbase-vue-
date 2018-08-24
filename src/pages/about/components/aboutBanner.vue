<template>
  <div>
    <div class="banner">
      <img src="../../../assets/images/index/index.jpg" alt="IPBase"/>
      <div class="description">
        <div class="mask"></div>
        <div class="con comWidth">
          <p>基地简介，基地简介，基地简介，基地简介，基地简介，基地简介，基地简介，基地简介，基地简介，基地简介，基地简介，
            基地简介，基地简介，基地简介，基地简介，基地简介，基地简介，基地简介，基地简介，基地简介，基地简介，基地简介，
            基地简介，基地简介，基地简介，基地简介，基地简介，基地简介，基地简介，基地简介，基地简介，基地简介，基地简介
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'aboutBanner'
}
</script>

<style scoped>
  .banner{
    width:100%;
    position:relative;
    height:400px;
  }
  .banner img{
    width:100%;
    height:400px;
  }
  .description{
    width:100%;
    color:#fff;
    position:absolute;
    bottom:0;
  }
  .mask{
    position:absolute;
    width:100%;
    height:78px;
    background-color:#1a243d;
    opacity:0.8;
    bottom:0;
  }
  .con{
    position: relative;
    padding-bottom:10px;
  }
  p{
    line-height:18px;
  }
</style>
