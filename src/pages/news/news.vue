<template>
  <div class="content">
    <div class="mask">
      <div class="bg"></div>
      <img src="../../assets/images/newsbg.jpg" alt="bg"/>
    </div>
    <div class="comWidth">
      <div class="news">
        <div class="newsLogo">
          <img src="../../assets/images/news.jpg" alt="newsLogo"/>
        </div>
        <div class="newsList">
          <!--这里抽象为组件-->
          <!--待改，通过v-for循环，使用axios来获取-->
          <news-list></news-list>
          <news-list></news-list>
          <news-list></news-list>
        </div>
      </div>
      <div class="contact">
        <contact></contact>
      </div>
    </div>
  </div>
</template>
<script>
import NewsList from '../news/components/newsList.vue'
import contact from '../../common/contact.vue'
export default{
  components: {
    contact,
    NewsList
  }
}
</script>
<style>
  .content{
    width:100%;
    position:relative;
    overflow: hidden;
  }
  .content .mask{
    width:100%;
    height:100%;
    position:absolute;
    left:0;
    top:0;
  }
  .content .bg{
    width:100%;
    height:100%;
    position:absolute;
    left:0;
    top:0;
    background-color:#a5bfd8;
  }
  .content .mask img{
    width:100%;
    height:50%;
    /*filter:blur(3px);*/
    opacity:0.5;
    filter:alpha(opacity=50);
  }
  .content .comWidth{
    position:relative;
    height:100%;
  }
  .content .news{
    width:78%;
    height:100%;
    float:left;
  }
  .content .news img{
    width:160px;
    height:46px;
    margin:20px 0 10px;
  }
  .contact{
    box-sizing:border-box;
    width:22%;
    height:100%;
    float:right;
    padding:0 10px;
    line-height:24px;
  }
</style>
