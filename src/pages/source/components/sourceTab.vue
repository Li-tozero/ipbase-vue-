<template>
  <div class="sourceTab">
    <div class="apartment">
      <ul>
        <li
          v-for="(apartment,index) of apartments"
          :class="{active:index==num}"
          @click="tab(index)"
          :key="index"
        >
          {{apartment}}
        </li>
      </ul>
    </div>

    <div class="fixHeight">
      <div class="apartSources">
        <div class="mask"></div>
        <div
          class="apartSource"
          v-for="(item,index) of apartSources"
          v-show="index==num"
          :key="index"
        >
          <ul ref="myHeight">
            <li
              v-for="(source,index) of item"
              :key="index"
            >
              <div class="sourceTit">
                <h3>{{source.title}}</h3>
                <span>{{source.data}}</span>
                <span>下载量：{{source.amount}}</span>
              </div>
              <div class="sourceCon">
                <p>{{source.description}}</p>
              </div>
              <div class="downLoad"><a href="#">下载</a></div>
            </li>

          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'sourceTab',
  props: {
    apartSources: {
      type: Array
    }
  },
  data () {
    return {
      apartments: ['运维部', '研发部', '产品部'],
      num: 0
    }
  },
  methods: {
    tab (index) {
      this.num = index
    }
  }
  // 这里待改，获取不到ul的高度，如果可以，就可以通过这里来设置高度，就不需要将高度写死，写死了不能自动变化适应各自高度
// mounted () {
// console.log(this.$refs.myHeight.offsetHeight)
// }
}
</script>

<style scoped>
  .sourceTab{
    clear:both;
    margin:58px 0 40px;
  }
  .apartment li{
    float:left;
    padding:6px 20px;
    margin-right:8px;
    border:1px solid transparent;
    color:#57ace2;
    font-weight:bold;
    cursor: pointer;
  }
  .apartment li:hover,.apartment li.active{
    border:1px solid #57ace2;
    border-radius: 5px 5px 0 0;
    color:#fff;
    background-color:#5aace4;
  }
  .fixHeight{
    width:100%;
    height:400px;
  }
  .apartSources{
    box-sizing:border-box;
    clear:both;
    width:100%;
    border:1px solid #e2e2e2;
    border-top:2px solid #57ace2;
    position:relative;
    border-radius:0 0 8px 8px;
    height:366px;
  }
  /*.clearfix:after{*/
    /*content:"";*/
    /*display:block;*/
    /*clear:both;*/
  /*}*/
  .mask{
    width:100%;
    height:100%;
    background-color: #e2e2e2;
    position:absolute;
    left:0;
    top:0;
    opacity: 0.5;
  }
  .apartSource{
    position:absolute;
    /*display:none;*/
  }
  .apartSource .active{
    display:block;
  }
  .apartSources li{
    position: relative;
    border-top:1px solid #c7c5c6;
    overflow:hidden;
    padding:10px;
  }
  .apartSources li:nth-child(1){
    border-top:none;
  }
  .sourceTit{
    box-sizing:border-box;
    width:20%;
    float:left;
  }
  .apartSources h3{
    font-weight:normal;
    font-size:14px;
    color:#19243a;
    margin:6px 0;
  }
  .apartSources span{
    font-size:10px;
    color:#a1a1a1;
  }
  .apartSources p{
    color:#a1a1a1;
    font-size:12px;
    line-height:20px;
  }
  .sourceCon{
    box-sizing:border-box;
    width:56%;
    float:left;
    margin:0 20px 10px
  }
  .downLoad{
    position: absolute;
    box-sizing:border-box;
    width:16%;
    top:0;
    right:0;
    padding:32px 32px 0;
    border-left:1px solid #c7c5c6;
    height:100%;
  }
  .apartSources a{
    color:#0a385c;
  }
</style>
