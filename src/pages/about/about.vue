<template>
  <div class="content">
    <about-banner></about-banner>
    <about-achievement></about-achievement>
    <div class="contact comWidth clearfix">
      <about-contact></about-contact>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import aboutBanner from './components/aboutBanner.vue'
import aboutAchievement from './components/aboutAchievement.vue'
import aboutContact from '../../common/contact.vue'
export default {
  name: 'about',
  components: {
    aboutBanner,
    aboutAchievement,
    aboutContact
  }
}
</script>

<style scoped>
  .content{
    background-color:#a5bfd8;
  }
  .wrap /deep/ .observe{
    margin-left:34%;
  }
  .wrap /deep/ .observe img{
    width:80px;
    height:80px;
    margin:0 0 10px;
  }
  .wrap /deep/ .contactUs{
    position:absolute;
    left: 44%;
    bottom: 10px;
  }
  .wrap /deep/ .contactUs p{
    color:#545e6a;
    line-height:18px;
  }
</style>
