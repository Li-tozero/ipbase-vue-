<template>
  <div>
    <div class="contactUs">
      <h3>联系我们</h3>
      <p>邮箱：12345678@ipbase.com</p>
      <p>电话：020-8888888</p>
      <p>地址：广州中医药大学工科楼</p>
      <p>邮编：510000</p>
    </div>
    <div class="observe">
      <h3>关注我们</h3>
      <img src="../assets/images/qrCode.jpg" alt="QR code"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'contact'
}
</script>

<style scoped>
  .contactUs{
    margin: 60px 0 10px;
  }
  h3{
    font-weight:normal;
    line-height:40px;
  }
  p{
    font-size:12px;
    color:#cdd5e0;
  }
  img{
    width:100px;
    height:100px;
    margin:0 20px;
  }
</style>
