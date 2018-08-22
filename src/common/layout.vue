<template>
  <div class="wrap">
    <header>
      <nav class="comWidth clearfix">
        <div class="logo">
          <img src="../assets/images/icon.png" alt="logo"/>
        </div>
        <ul>
          <li v-for="(item,index) in pages"  :key="index">
            <router-link
              :to="{path:item.url}"
              active-class="active"
              tag="a"
            >
              {{item.title}}
            </router-link>
          </li>
        </ul>
      </nav>
      <button class="login" @click="handleLogin">登录</button>
    </header>
    <section>
      <!--这里是每个页面的展示-->
      <router-view></router-view>
    </section>
    <footer>版权所有</footer>
  </div>
</template>

<script type="text/ecmascript-6">
import '../assets/styles/reset.css'
export default {
  name: 'Layout',
  data () {
    return {
      pages: [
        {
          title: '首页',
          url: '/index',
          active: false
        },
        {
          title: '新闻',
          url: '/news',
          active: false
        },
        {
          title: '资料',
          url: '/source',
          active: false
        },
        {
          title: '关于我们',
          url: '/about',
          active: false
        }
      ]
    }
  },
  methods: {
    handleLogin () {
//      alert('click');
    }
  }
}
</script>

<style scoped>
  html,body{
    width: 100%;
  }
  .comWidth{
    width: 840px;
    margin: 0 auto;
  }
  .clearfix:after {
    content: "";
    display: block;
    clear: both;
  }
  .wrap {
    min-width: 1024px;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  /*header样式*/
  header {
    width: 100%;
    background-color: #1a243d;
    position: relative;
    z-index: 2;
    box-shadow: 0 0 10px #323e4c;
  }
  header nav{
    position: relative;
  }
  header nav ul{
    padding-top: 50px;
    padding-bottom: 66px;
  }
  header nav li{
    float: left;
    margin: 0 34px;
  }
  header nav ul li:nth-child(2){
    margin-right: 200px;
  }
  header a{
    display: inline-block;
    width: 100px;
    height: 26px;
    color:#599bcf;
    text-align: center;
    line-height: 26px;
    border-radius: 5px;
  }
  header a:hover,header .active{
    color:#1a214d;
    background-color:#59abe3;
  }
  header .logo{
    position: absolute;
    left: 50%;
    margin-left: -75px;
  }
  header img{
    width: 150px;
    height: 150px;
  }
  header button{
    cursor: pointer;
    color: #599bcf;
    background: #1a243d;
    position: absolute;
    top: 20px;
    right:40px;
  }
  /*section样式*/
  section{

  }
  /*footer样式*/
  footer{
    width:100%;
    /*height:10%;*/
    background-color:#000;
    color:#fff;
    line-height:28px;
    text-align:center;
  }
</style>
