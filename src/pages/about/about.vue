<template>
  <div class="content">
    <about-banner></about-banner>
    <about-achievement :achievementList="achivList"></about-achievement>
    <div class="contact comWidth clearfix">
      <about-contact></about-contact>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import aboutBanner from './components/aboutBanner.vue'
import aboutAchievement from './components/aboutAchievement.vue'
import aboutContact from '../../common/contact.vue'
import axios from 'axios'
export default {
  name: 'about',
  data () {
    return {
      achivList: []
    }
  },
  components: {
    aboutBanner,
    aboutAchievement,
    aboutContact
  },
  methods: {
    getAchievementList () {
      axios.get('/api/achievementList.json')
        .then(this.handleGetListSucc)
    },
    handleGetListSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.achivList = data.achievementList
      }
    }
  },
  mounted () {
    this.getAchievementList()
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
