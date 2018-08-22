<template>
  <div>
    <div v-if="showLogin">
      <div class="mask" @click="hideLogin"></div>
      <div class="login">
        <div class="wrapper" v-if="showLogin">
          <form action="#" method="#">
            <input type="text" name="userName" placeholder="账号"/>
            <input type="password" name="psw" placeholder="密码"/>
            <input type="button" value="忘记密码"/>
            <input type="button" value="登陆"/>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  props: {
    showLogin: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideLogin () {
      this.$emit('hide')
    }
  }
}
</script>
<style scoped>
  .mask{
    width:100%;
    height:100%;
    background-color:#000;
    opacity: 0.5;
    filter: alpha(opacity=50);
    position:absolute;
    left:0;
    top:0;
    z-index:5;
  }
  .login{
    width:20%;
    height:100%;
    background:#000;
    position:absolute;
    right:0;
    top:0;
    z-index:6;
    min-width:200px;
  }
  .login .wrapper{
    width:180px;
    margin:30% auto;
  }
  .login input{
    width:168px;
    padding:6px;
    border-radius: 5px;
    margin:8px 0;
  }
  .login input:nth-child(3){
    color:#026e9f;
    width:180px;
    text-align: right;
    background-color:transparent;
    cursor: pointer;
    margin:18px 0 0;
  }
  .login input:nth-child(4){
    color:#fff;
    width:180px;
    background-color:#0167a7;
    cursor: pointer;
  }
  .fade-enter,.fade-leave-to{
    opacity: 0;
  }
  .fade-enter-active,.fade-leave-active{
    trasition: opacity .5s;
  }
</style>
