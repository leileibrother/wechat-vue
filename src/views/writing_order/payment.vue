<template>
  <div class="payment">
      <!-- 支付失败 -->
      <div v-if="payFlag" class="default">
          <div class="defaultImg">
              <img src="../../assets/img/Blank pages_4.png" alt="" style="width:3.15rem">
          </div>
          <h3 class="result">支付失败</h3>
          <div class="result_dec">
              <p>请在<span class="time">1小时内</span>完成付款</p>
              <p>否则订单会被系统取消</p>
          </div>
          <div class="selectType">
              <span>查看订单</span><span>重新支付</span>
          </div>
      </div>
      <!-- 支付成功 -->
      <div v-else class="success">
          <div class="successImg">
              <img src="../../assets/img/Blank pages_5.png" alt="" style="width:3.15rem">
          </div>
          <h3 class="result">恭喜您支付成功</h3>
          <div class="selectType">
              <span>查看订单</span><span>返回首页</span>
          </div>
      </div>
      <!-- 登录弹窗 -->
      <mt-popup  v-model='loadFlag' popup-transition="popup-fade" >
           <div class="loading">
                <h3>登录</h3>
                <input type="text" placeholder="请输入手机号码" class="phone input-tips" v-model="number" >
                <div class="code">
                    <input placeholder="请输入验证码" type="text" class="real-code input-tips" v-model="code">
                    <span class="btn-code" @click="postNumber" >验证码</span>
                </div>
                <div class="btn-load1" @click="submit">确定</div>
           </div>
      </mt-popup>
  </div>
</template>
<script>
import { MessageBox } from "mint-ui";
import { Popup } from "mint-ui";
export default {
  data() {
    return {
      payFlag: false,
      type: "new", //默认新用户
      loadFlag: false, //登录弹窗控制标志位
      number: "", //手机号码
      code:'',//验证码
    };
  },
  mounted() {
    this.tips(this.type);
  },
  methods: {
    tips(value) {
      if (value === "new") {
        this.message = "是否要以该收货人的手机号创建账号，登录并查看订单?";
      } else {
        this.message = "该收货人为已有账号，是否直接以该账号登录查看订单？";
      }
      MessageBox({
        title: "提示",
        cancelButtonText: "否",
        confirmButtonText: "是",
        message: this.message,
        showCancelButton: true
      }).then(action => {
        if (action === "confirm") {
          this.loadFlag = true;
        } else {
        }
      });
    },
    //提交手机号码
    postNumber() {
      //手机号正则
      var r = /^((0\d{2,3}-\d{7,8})|(1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}))$/;
      if (this.number) {
        if (!r.test(this.number)) {
          alert("号码格式错误,固话需加区号和符号‘-’");
          return;
        } else {
          console.log("手机号码格式正确");
          this.$http
            .post(
              "/user/api/v1/user/account/authcode/phone",{},
              {
                params: {
                  phone: this.number,
                  flag: "login"
                }
              }
            )
            .then(res => {
              console.log("请求数据成功");
              console.log(res);

            })
            .catch(res => {
              console.log("请求数据失败");
            });
        }
      }
    },
    //提交验证码和手机号码
    submit(){
         if(this.number && this.code){
              this.$http.post('/user/api/v1/user/account/login/phone', {},{
                    params: {
                        phone: this.number,
                        authcode: this.code
                    }
              }).then((res)=>{
                  console.log(res);
                  console.log("验证码正确");
                  this.loadFlag = true;   
              }).catch((error)=>{
                  console.log(error);
                  this.loadFlag = true;   
                //  alert()
              })
         }  
             
    }
  }
};
</script>
<style scoped>
.default,
.success {
  background: #ffffff;
  text-align: center;
  margin: 0 auto;
  height: 100vh;
}
.defaultImg,
.successImg {
  padding: 1.5rem 1.2rem 0.8rem 1.2rem;
}
.result {
  font-size: 0.44rem;
  color: #ea608c;
  letter-spacing: 0;
  text-align: center;
  padding-bottom: 0.38rem;
}
.result_dec {
  font-size: 0.3rem;
  color: #666666;
  letter-spacing: 0;
  text-align: center;
}
.time {
  font-size: 0.3rem;
  color: #ea608c;
  letter-spacing: 0;
  text-align: center;
  line-height: 0.42rem;
}
.selectType {
  padding: 0.98rem 0 2.9rem;
}
.selectType span {
  display: inline-block;
  border-radius: 100px;
  width: 2.5rem;
  height: 0.88rem;
  line-height: 0.88rem;
  font-size: 0.36rem;
  letter-spacing: 0.01rem;
  text-align: center;
}
.selectType span:first-child {
  border: 1px solid #00b4dc;
  color: #00b4dc;
  margin-right: 0.4rem;
}
.selectType span:last-child {
  color: #ffffff;
  background: #00b4dc;
}

.loading {
  background: #ffffff;
  border-radius: 0.14rem;
  width: 5.6rem;
  height: 5.2rem;
}
.phone {
  border-radius: 1000px;
  border: 1px solid #dddddd;
  margin: 0 0.4rem 0.25rem 0.4rem;
  height: 0.8rem;
  width: 4.8rem;
  padding-left: 0.4rem;
  line-height: 0.5rem;
}
.code {
  position: relative;
}
.input-tips::-webkit-input-placeholder {
  color: #bbbbbb;
  font-size: 0.3rem;
}
.input-tips::-moz-placeholder {
  color: #bbbbbb;
  font-size: 0.3rem;
}
.input-tips:-ms-input-placeholder {
  color: #bbbbbb;
  font-size: 0.3rem;
}
.real-code {
  border: 1px solid #dddddd;
  border-radius: 1000px;
  margin: 0 0.4rem 0.25rem 0.4rem;
  height: 0.8rem;
  line-height: 0.5rem;
  width: 4.8rem;
  padding-left: 0.4rem;
}
.btn-code {
  position: absolute;
  right: 0.8rem;
  top: 0.15rem;
  font-size: 0.3rem;
  color: #333333;
}
.btn-load1 {
  margin: 0.2rem 0.4rem 0.51rem 0.4rem;
  height: 0.8rem;
  line-height: 0.8rem;
  background: #00b3dc;
  border-radius: 1000px;
  font-family: PingFangSC-Regular;
  font-size: 0.3rem;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  width: 4.8rem;
}
.loading h3 {
  font-size: 0.36rem;
  color: #000000;
  letter-spacing: 0;
  text-align: center;
  padding: 0.54rem 0;
}
</style>


