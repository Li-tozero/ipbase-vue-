<template>
  <div>
    <ul>
      <li v-for="item of myNewsList" :key="item.id">
        <div class="mask"></div>
        <div class="con">
          <h3>{{item.title}}</h3>
          <span class="date">{{item.date}}</span>
          <span class="count">阅读量：{{item.amount}}</span>
          <p>
            {{item.description}}
          </p>
          <router-link to="newsDetail" tag="a">详情</router-link>
        </div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'NewsList',
  props: {
    myNewsList: {
      type: Array
    }
  }
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
