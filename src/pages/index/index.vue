<template>
  <div class="carousel-wrap">
    <!--轮播列表-->
    <transition-group tag="ul" class="slide-ul" name="list">
      <li
        v-for="(list,index) of slideList"
        :key="index"
        v-show="index===currentIndex"
        @mouseenter="stop" @mouseleave="go"
      >
        <img :src="list.image" alt="list.desc"/>
      </li>
    </transition-group>
    <!--轮播指示位置-->
    <div class="carousel-items">
      <span
        v-for="(item,index) in slideList.length"
        :class="{'active':index===currentIndex}"
        @click="change(index)"
      ></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'indexPage',
  data () {
    return {
      slideList: [
        {
          "desc": "nhwc",
          "image": require("../../assets/images/index/index.jpg")
        },
        {
          "desc": "hxrj",
          "image": require("../../assets/images/index/info.jpg")
        },
        {
          "desc": "rsdh",
          "image": require("../../assets/images/index/news.jpg")
        }
      ],
      currentIndex: 0,
      timer: ''
    }
  },
  methods: {
    go() {
      this.timer = setInterval(() => {
        this.autoPlay()
      }, 4000)
    },
    stop() {
      clearInterval(this.timer)
      this.timer = null
    },
    change(index) {
      this.currentIndex = index
    },
    autoPlay () {
      this.currentIndex++
      if (this.currentIndex > this.slideList.length - 1) {
        this.currentIndex = 0
      }
    }
  },
  created () {
    this.$nextTick(() => {
      this.timer = setInterval(() => {
        this.autoPlay()
      }, 4000)
    })
  }
}
</script>

<style scoped>
  .carousel-wrap{
    position:relative;
    height:480px;
    width:100%;
    overflow:hidden;
    background:#fff;
  }
  .slide-ul{
    width:100%;
    height:100%;
  }
  li{
    position:absolute;
    width:100%;
    height:100%;
  }
  img{
    width:100%;
    height:100%;
  }
  .carousel-items{
    position:absolute;
    z-index:2;
    bottom:20px;
    width:100%;
    margin:0 auto;
    text-align:center;
    font-size:0;
  }
  span{
    display:inline-block;
    width:20px;
    height:10px;
    border-radius: 5px;
    cursor: pointer;
    background-color:#eee;
  }
  span:nth-child(2){
    margin:0 20px;
  }
  .active{
    background-color:#919090;
  }
  .list-enter-active {
    transition: all 1s ease;
    transform: translateX(0)
  }

  .list-leave-active {
    transition: all 1s ease;
    transform: translateX(-100%)
  }

  .list-enter {
    transform: translateX(100%)
  }

  .list-leave {
    transform: translateX(0)
  }
</style>
