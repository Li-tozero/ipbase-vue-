<template>
  <div>
    <ul>
      <li>
        <div class="mask"></div>
        <div class="con">
          <h3>我是标题</h3>
          <span class="date">2018-6-12</span>
          <span class="count">阅读量：10</span>
          <p>
            我是梗概，我是梗概，我是梗概，我是梗概，我是梗概，我是梗概，我是梗概，我是梗概，我是梗概
            我是梗概，我是梗概，我是梗概，我是梗概，我是梗概，我是梗概，我是梗概，我是梗概，我是梗概
            我是梗概，我是梗概，我是梗概，我是梗概，我是梗概，我是梗概，我是梗概，我是梗概，我是梗概
          </p>
          <router-link to="newsDetail">详情</router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'NewsList'
}
</script>

<style scoped>
  li{
    border-radius: 0.4em;
    padding: 10px;
    overflow: hidden;
    margin-bottom: 10px;
    position: relative;
  }
  li .mask{
    width: 100%;
    height: 100%;
    background-color: #ebeff0;
    position: absolute;
    opacity: 0.8;
  }
  li .con{
    position: relative;
    z-index: 2;
  }
  h3{
    color: #19253b;
    font-weight: normal;
    line-height: 30px;
  }
  span{
    font-size: 12px;
    display: inline-block;
    margin: 8px 10px 10px 0;
    color: #717274;
  }
  p{
    color: #a4a5a7;
    font-size: 12px;
    line-height: 20px;
  }
  a{
    float: right;
    color: #19233e;
    font-size: 12px;
    margin-right: 20px;
  }
</style>
