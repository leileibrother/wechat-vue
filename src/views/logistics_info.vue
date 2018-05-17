<template>
  <div class="logistic_info">
        <div class="banner_text">
                为确保样本顺利回到梦想基因实验室，我们强烈建议您使用采样套件中提供的顺丰快递回寄单来寄送此样本，如果您选用了其它快递公司，请务必在下方填写
        </div>
        <div class="select">
              <h3>选择物流</h3>
              <div class="company">
                <span>快递公司：</span>
                <span class="companyName">{{companyList}}</span>
                <span class="right_icon" @click="select_type">
                  <img src="../assets/img/right.png" alt="" style="width:0.3rem">
                </span>         
              </div>
               <!-- 选择快递 -->
                <mt-popup v-model="messageBoxFlag">
                  <mt-radio
                        title="请选择您的快递"
                        v-model="companyList"
                        :options="conpanys">
                  </mt-radio>
                </mt-popup> 
              <div class="code" id="code">
                  <span>快递单号：</span>
                  <input type="text" class="express" placeholder="请填写快递单号" v-model="express">
                  <span class="scan">
                      <span class="scanImg">
                        <img src="../assets/img/scan.png" alt="" style="width:0.25rem">
                      </span>
                      <span class="scanTitle">扫一扫</span>
                  </span>
              </div>
        </div>
        <div class="btn" @click="submit">提交</div>
           
      
  </div>
</template>
<script>
import { MessageBox } from 'mint-ui';
import { Radio } from 'mint-ui';
import { Popup } from 'mint-ui';

export default {
  data(){
      return{
        conpanys:["顺丰快递","中通快递","圆通快递","韵达快递"],
        companyList:"顺丰快递",
        express:'E48353892490234',
        messageBoxFlag:false,
        text:'<p style="text-align: justify;line-height: 22px;">为保证样本质量，请尽量在采样后三日内将样本寄出。您可以到查看报告页面跟踪检测进度，我们也会以短信形式通知您。<p>' //填写物流信息
      }
  },
  mounted(){
    
  },
  methods:{
    select_type(){
        this.messageBoxFlag = true;
    },
    submit(){
      MessageBox({
          title: '样本激活成功',
          confirmButtonText:'我知道啦',
          message: this.text,
          showCancelButton: false
        });
    }
  }
}
</script>
<style scoped>
.banner_text{
  opacity: 0.89;
  background: #F05960;
  font-size: 0.26rem;
  color: #FFFFFF;
  text-align: justify;
  padding: 0.17rem 0.32rem;
}
.btn{
  background: #EA608C;
  border-radius: 100px;
  width: 6.56rem;
  height: 0.88rem;
  font-size: 0.36rem;
  color: #FFFFFF;
  letter-spacing: 0.01rem;
  text-align: center;
  line-height: 0.88rem;
  margin: 0 auto;
  margin-top: 1.32rem;
}
h3{
  height: 0.9rem;
  /* line-height: 0.9rem; */
  padding: 0.2rem 0 0.25rem 0.47rem;
  background: #F7F8FA;
  font-size: 0.32rem;
  color: #0A0A0A;
  letter-spacing: 0;
}
.company{
  background: #FFFFFF;
  height: 1.28rem;
  border-bottom: 1px solid #D4DCE1;
}
.company span{
  padding: 0.43rem 0 0.43rem 0.47rem;
  display: inline-block;
}
.company span:first-child{
  font-size: 0.3rem;
  color: #758692;
  letter-spacing: 0;
  text-align: justify;
}
.company span:last-child{
  float: right;
  padding: 0.47rem 0.49rem 0.47rem 0.47rem;
}
.companyName{
  font-size: 0.3rem;
  color: #0A0A0A;
  letter-spacing: 0;
}
.code{
  padding: 0.43rem 0 0.43rem 0.47rem;
  background: #fff;
}
.code span:first{
  font-size: 0.3rem;
  color: #758692;
  letter-spacing: 0;
}
.express{width: 3rem;border: none;font-size: 0.3rem;background: #fff;color: rgb(0, 0, 0);}
.code_number{
  font-size: 0.3rem;
  color: #0A0A0A;
  letter-spacing: 0;
  padding: 0 0.06rem 0.47rem 0.47rem;
}
.scan{
    position: relative;
    background: #00DBD2;
    border-radius: 1rem;
    height: 0.46rem;
    z-index: 1000;
    display: inline-block;
    width: 1.66rem;
    height: 0.46rem;
    top: 0.10rem;
    right: -0.3rem;
}
.scanImg{
    position: absolute;
    left: 0.18rem;
    top: 0.06rem;
}
.scanTitle{
    position: absolute;
    font-size: 0.3rem;
    color: #FFFFFF;
    letter-spacing: 0;
    right: 0.18rem;
    top: 0;
}

.mint-msgbox{
    background: #FFFFFF;
    border-radius: 0.14rem;
}
.mint-msgbox-title{
    font-size: 0.36rem;
    color: #000000;
    letter-spacing: 0;
    text-align: center;
    line-height: 0.36rem;
    margin: 0.42rem auto;
}
.mint-msgbox-header{
  padding: 0;
}
.mint-msgbox-message{
    font-size: 0.3rem;
    color: #666666;
    letter-spacing: 0;
    text-align: justify;
    line-height: 0.45rem;
    margin: 0 0.37rem 0.3rem 0.42rem;
}
.mint-msgbox-content{
  padding: 0;
}
.mint-msgbox-btn{
    font-size: 0.36rem;
    color: #00B3DC;
    letter-spacing: 0;
    text-align: center;
    line-height: 0.36rem;
}
.mint-popup{
    background: #FFFFFF;
    border-radius: 0.14rem;
    width: 5.9rem;
}
.mint-radiolist-title{
    margin: 0.2rem;
    display: block;
    color: #888;
    font-size: 0.36rem;
    color: #0A0A0A;
    letter-spacing: 0;
    text-align: center;
}
.mint-cell{
  font-size:0.3rem;
}

</style>


