<template>
    <div class="add">
        <div class="commonD">
            <span class="leftSpan">姓 名：</span>
            <input ref="name" placeholder="请输入您的姓名" v-model="name">
        </div>
        <div class="commonD">
            <span class="leftSpan">手机号码：</span>
            <input ref="phone" placeholder="请输入您的手机号码" v-model="phone">
        </div>
        <div class="commonD">
            <span class="leftSpan">省市县：</span>
            <!-- <input placeholder="请选择省市县" v-model="city"> -->
            <area-btn v-on:getValue="have"></area-btn>
        </div>
        <div class="commonD" style="border:none;">
            <span class="leftSpan">详细地址：</span>
            <input ref="address" placeholder="如楼道、楼盘等" v-model="address">
        </div>
        <div class="text-center addAddress">
            <img v-if="radio" src="../../assets/img/xuanzhong.png" @click="change()"> 
            <img v-else src="../../assets/img/weixuanzhong.png" @click="change()">
            <span>设为默认地址</span>
        </div>
        <div class="bottom">
            <button @click="submit()">保存</button>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import areaBtn from './area.vue'

export default {
    components: {
        Toast,areaBtn
    },
    data () {
    return {
            name:'',
            phone:'',
            address:'',
            city:'',
            radio:false,
            testPhone:/^0?1[3|4|5|7|8][0-9]\d{8}$/
        }
    },
    mounted: function() {
    },
    methods: {
        have(data) {
            this.city = data;
            console.log(this.city);
        },
        change() {
            this.radio = !this.radio;
        },
        submit() {
            if(!this.name){
                Toast({
                    message: '请输入您的姓名!',
                    duration: 1500
                });
                this.$refs.name.focus();
                return false;
            }
            if(!this.phone){
                Toast({
                    message: '请输入您的手机号码!',
                    duration: 1500
                });
                this.$refs.phone.focus();
                return false;
            }
            if(!this.testPhone.test(this.phone)){
                Toast({
                    message: '请输入正确手机号码!',
                    duration: 1500
                });
                this.$refs.phone.focus();
                return false;
            }
            if(!this.city){
                Toast({
                    message: '请选择省市县!',
                    duration: 1500
                });
                return false;
            }
            if(!this.address){
                Toast({
                    message: '请填写详细地址!',
                    duration: 1500
                });
                this.$refs.address.focus();
                return false;
            }
            //如果设置为默认地址就保存到localsorage
            if(this.radio){
                localStorage.name = this.name;
                localStorage.phone = this.phone;
                localStorage.address = this.city + this.address;
            }
            Toast({
                message: '创建成功!',
                iconClass: 'successIcon',
                duration: 1500
            });
            //this.$router.push('/personal/addressList');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add{padding-bottom: 0.5rem;}
.add .commonD{padding:0.43rem 0.47rem;background:#fff;font-size: 0.3rem;color: #758692;border-bottom: 1px solid #D4DCE1;}
.commonD .leftSpan{display: inline-block;width: 1.5rem;}
.commonD input{border: none;width:4.5rem;line-height: 0.3rem;font-size: 0.3rem;}
.addAddress{margin-top:0.6rem;}
.addAddress img{width:0.4rem;vertical-align: bottom;}
.bottom{padding:0 0.47rem;margin-top:1.5rem;}
.bottom button{width: 100%;height:0.88rem;background: #EA608C;border-radius: 100px;border:1px solid #EA608C;color:#fff;font-size:0.36rem;}

</style>