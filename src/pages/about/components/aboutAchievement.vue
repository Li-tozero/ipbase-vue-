<template>
  <div class="achievement">
    <div class="waterfall comWidth">
      <div class="item">
        <img src="../../../assets/images/about/pic1.jpg"/>
        <h3>成果名称</h3>
        <p>成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，成果介绍</p>
      </div>

      <div class="item">
        <h3>成果名称</h3>
        <p>成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，
          成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，
          成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，成果介绍</p>
      </div>

      <div class="item">
        <img src="../../../assets/images/about/pic3.jpg"/>
        <h3>成果名称</h3>
        <p>成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，成果介绍</p>
      </div>

      <div class="item">
        <h3>成果名称</h3>
        <p>成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，
          成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，成果介绍</p>
      </div>

      <div class="item">
        <img src="../../../assets/images/about/pic2.jpg"/>
        <h3>成果名称</h3>
        <p>成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，
          成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，成果介绍</p>
      </div>

      <div class="item">
        <img src="../../../assets/images/about/pic1.jpg"/>
        <h3>成果名称</h3>
        <p>成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，
          成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，
          成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，成果介绍</p>
      </div>

      <div class="item">
        <h3>成果名称</h3>
        <p>成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，成果介绍</p>
      </div>

      <div class="item">
        <img src="../../../assets/images/about/pic3.jpg">
        <h3>成果名称</h3>
        <p>成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，
          成果介绍，成果介绍，成果介绍，成果介绍，成果介绍</p>
      </div>

      <div class="item">
        <h3>成果名称</h3>
        <p>成果介绍，成果介绍，成果介绍，成果介绍</p>
      </div>

      <div class="item">
        <img src="../../../assets/images/about/pic3.jpg">
        <h3>成果名称</h3>
        <p>成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，
          成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，成果介绍</p>
      </div>

      <div class="item">
        <img src="../../../assets/images/about/pic1.jpg">
        <h3>成果名称</h3>
        <p>成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，成果介绍，
          成果介绍，成果介绍，成果介绍，成果介绍</p>
      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'aboutAchievement'
}
</script>

<style scoped>
  .achievement{
    padding:10px 0 20px;
  }
  .waterfall{
    -moz-column-count:4; /* Firefox */
    -webkit-column-count:4; /* Safari 和 Chrome */
    column-count:4;
    -moz-column-gap: 1em;
    -webkit-column-gap: 1em;
    column-gap: 1em;
  }
  .item{
    padding: 1em;
    margin: 0 0 1em 0;
    -moz-page-break-inside: avoid;
    -webkit-column-break-inside: avoid;
    break-inside: avoid;
    border-radius: 5px;
    background-color:#fff;
  }
  .item img{
    width: 100%;
    margin-bottom:10px;
  }
  .item h3{
    font-weight:normal;
    color:#585858;
    margin-bottom: 10px;
  }
  .item p{
    color:#a3a3a3;
    line-height:20px;
  }
</style>
