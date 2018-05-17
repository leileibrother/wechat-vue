<template>
  <div class="content">
      <div class="TopTitle">修改手机号码</div>
      <mt-field label="请输入手机号" placeholder="" type="tel" v-model="phone" class="list"></mt-field>
      <mt-field label="验证码" v-model="captcha">
            <span class="btn_code">获取验证码</span>
      </mt-field>
      <div class="sumbit" @click="submit">提交</div>
  </div>
</template>
<script>
import { Field } from "mint-ui";
import { Toast } from 'mint-ui';
require("../assets/css/common.css");
export default {
  data() {
    return {
      phone: 11222222,
      captcha: 55556
    };
  },
  methods:{
      submit(){
          Toast({
            message: '提交成功',
            position:'top',
            duration:1000,
            iconClass: 'successIcon'
            });
      }
  }
};
</script>
<style scoped>
.TopTitle {
  height: 0.9rem;
  padding: 0.2rem 0 0.25rem 0.48rem;
  font-size: 0.32rem;
  color: #0a0a0a;
  letter-spacing: 0;
  background: #f7f8fa;
}
.mint-field .mint-cell-title {
  width: 2.5rem;
}
.mint-cell-text {
  vertical-align: middle;
  padding-left: 0.3rem;
  font-size: 0.3rem;
  color: #758692;
  letter-spacing: 0;
  text-align: justify;
}
.list {
  border-bottom: 0.01rem solid #ccc;
}
.mint-field-core {
  width: 100%;
  font-size: 0.3rem;
  color: #0a0a0a;
  letter-spacing: 0;
}
.sumbit{
    margin:3rem 0.47rem 0 0.47rem;
    background: #00B3DC;
    border-radius: 100px;
    font-size: 0.36rem;
    color: #FFFFFF;
    letter-spacing: 0.01rem;
    text-align: center;
    height: 0.88rem;
    line-height: 0.88rem;
}
.btn_code{
    display: inline-block;
    background: #00DBD2;
    border-radius: 100px;
    width:1.85rem;
    height: 0.6rem;
    line-height: 0.6rem;
    font-size: 0.3rem;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
}
.mint-toast.is-placetop{
    top: 3.4rem;
    left: 50%;
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
    width: 2.0rem;
    height: 2.0rem;
}

.mint-toast-icon{
    display:inline-block;
}
.mint-toast-text{
    width: 1.2rem;
}
</style>


