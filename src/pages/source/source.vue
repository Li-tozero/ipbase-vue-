<template>
  <div class="content clearfix">
    <div class="mask">
      <div class="bg">
        <img src="../../assets/images/sourceBg.jpg" alt="bg"/>
      </div>
    </div>
    <div class="comWidth">
      <div class="sourceContent">
        <source-search></source-search>
        <source-tab :apartSources="sourceList"></source-tab>
      </div>
      <div class="contact">
        <contact></contact>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import sourceSearch from '../source/components/sourceSearch.vue'
import sourceTab from '../source/components/sourceTab.vue'
import contact from '../../common/contact.vue'
import axios from 'axios'
export default {
  name: 'sourcePage',
  components: {
    sourceSearch,
    sourceTab,
    contact
  },
  data () {
    return {
      sourceList: []
    }
  },
  methods: {
    getSourceList () {
      axios.get('/api/sourceList.json')
        .then(this.getSourceListSucc)
    },
    getSourceListSucc (res) {
      res = res.data
      if (res.ret) {
        this.sourceList = res.sourceList
      }
    }
  },
  mounted () {
    this.getSourceList()
  }
}
</script>

<style scoped>
  .content{
    width:100%;
    position:relative;
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
    opacity:0.5;
    filter:alpha(opacity=50);
  }
  .content .comWidth{
    position:relative;
    height:100%;
  }
  .sourceContent{
    width:74%;
    float:left;
    margin-top:100px;
    /*height:400px;*/
  }
  .contact{
    box-sizing:border-box;
    width:26%;
    height:100%;
    float:right;
    padding:0 30px;
    line-height:24px;
    margin-top:60px;
  }
  .wrap /deep/ p{
    color:#0a385c;
  }
</style>
