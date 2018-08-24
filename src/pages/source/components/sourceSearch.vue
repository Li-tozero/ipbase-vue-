<template>
  <div class="search">
    <form action="#" method="#">
      <input type="text" name="content"><input type="button" value="搜索"/>
    </form>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'sourceSearch'
}
</script>

<style scoped>
  .search {
    float: right;
  }
  input{
    box-sizing:border-box;
    padding:4px;
    outline:none;
    border:none;
    box-shadow: 0 0 20px #8d9ca3;
    height:36px;
  }
  input:nth-child(1){
    width:400px;
    border-radius: 0.4em 0 0 0.4em ;
  }
  input:nth-child(2){
    width:80px;
    color:#fff;
    background-color:#1a243d;
    border-radius: 0 0.4em 0.4em 0 ;
    line-height: 28px;
    box-shadow:0px 0px 30px #a1acb0;
    cursor: pointer
  }
</style>
