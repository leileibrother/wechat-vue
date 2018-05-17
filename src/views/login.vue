<template>
    <div class="loginDiv text-center">
        <img class="logo" src="../assets/img/mxjy_logo.png">
        <p class="inputP">
            <input type="text" placeholder="请输入手机号" v-model="accouont">
        </p>
        <p class="codeP clearfix">
            <input class="fl" type="text" placeholder="请输入验证码" v-model="code">
            <span class="fr">获取验证码</span>
        </p>
        <p>
            <button class="btn" @click="commit()">登录</button>
        </p>
        <p class="footP">未登录过则直接创建新账号</p>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';

export default {
    components: {
        Toast
    },
  data () {
    return {
      accouont: '',
      code: '',
      path:'',
      testPhone:/^0?1[3|4|5|7|8][0-9]\d{8}$/,
    }
  },
  mounted: function() {
  },
  methods: {
    commit () {
        if(!this.accouont){
            Toast({
                message: '请输入手机号！',
                duration: 2000
            });
            return false;
        } 
        if(!this.testPhone.test(this.accouont)){
            Toast({
                message: '请输入正确手机号！',
                duration: 2000
            });
            return false;
        }
        if(!this.code){
            Toast({
                message: '请输入验证码！',
                duration: 2000
            });
            return false;
        }
        this.$router.push('/explain');
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loginDiv{height: 100%;width:100%;padding:1.33rem 0.47rem 0 0.47rem;}
.loginDiv .logo{height:0.54rem;margin-bottom:1.64rem;}
.inputP input{height:1.1rem;width: 100%;border: 1px solid #00B3DC;border-radius: 100px;padding:0.3rem 0.34rem;background:#fafafa;font-size:0.3rem;box-shadow: none;}
.codeP {height:1.1rem;width: 100%;border: 1px solid #00B3DC;border-radius: 100px;padding:0.1rem 0.34rem;line-height:0.9rem;margin:0.25rem 0 0.6rem 0;}
.codeP input{height: 100%;width:50%;border: none;background:#fafafa;padding:0.25rem 0;font-size:0.3rem;}
.btn{width: 100%;height:0.98rem;background: #00B3DC;border-radius: 100px;border: none;color:#fff;font-size:0.3rem;}
.footP{font-size:0.3rem;color: #BBBBBB;text-align: center;padding-top:1.94rem;}
</style>