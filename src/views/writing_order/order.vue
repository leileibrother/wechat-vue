<template>
    <div style="padding-bottom:1.5rem;">
        <div class="top clearfix">
            <div class="fl leftPoint">
                <img src="../../assets/img/xuanzhong.png">
                <p>默认</p>
            </div>
            <div class="middle fl">
                <p><span style="margin-right:0.9rem;">{{name}}</span> <span>{{phone}}</span></p>
                <p class="address">{{address}}</p>
            </div>
            <img class="fr rightImg" src="../../assets/img/right.png">
        </div>
        <div class="top clearfix">
            <img class="fl leftImg" src="../../assets/img/test1.jpg">
            <div class="middle fl" style="width:4.7rem;font-size:0.3rem;padding-top: 0.22rem;">
                <p><span>{{list.name}}</span></p>
                <p><span style="margin-right:0.7rem;">￥{{list.price}}</span> <span>x{{list.number}}</span></p>
            </div>
        </div>
        <div class="commonDiv clearfix">
            <span class="fl">配送方式<span style="font-size:0.24rem;">（下单后3个工作日发货）</span></span>
            <span class="fr">全程顺丰包邮</span>
        </div>
        <div class="commonDiv clearfix">
            <span class="fl">小计价格</span>
            <span class="fr">￥{{totalPrice}}</span>
        </div>
        <div class="commonDiv clearfix" style="border:none;">
            <span class="fl">备 注：</span>
            <input type="text" class="beizhu" ref="edit" v-model="note">
            <img class="fr" style="width:0.36rem;" src="../../assets/img/editor.png" @click="focus()">
        </div>
        <div class="pay">
            <p class="payWay">支付方式</p>
            <div class="commonDiv clearfix">
                <img class="payImg fl" src="../../assets/img/weichat.png">
                <span class="fl" style="font-size:0.3rem;color: #0A0A0A;padding-top: 0.15rem;">微信支付</span>
                <div class="fr" style="padding-top: 0.04rem;">
                    <mt-switch v-model="weichat" @change="zhifubao = !weichat"></mt-switch>
                </div>
            </div>
            <div class="commonDiv clearfix" style="border:none;">
                <img class="payImg fl" src="../../assets/img/zhifubao.png">
                <span class="fl" style="font-size:0.3rem;color: #0A0A0A;padding-top: 0.15rem;">支付宝支付</span>
                <div class="fr" style="padding-top: 0.04rem;">
                    <mt-switch v-model="zhifubao" @change="weichat = !zhifubao"></mt-switch>
                </div>
            </div>
        </div>
        <div class="footer clearfix">
            <div class="fl"><span>合计：</span><span style="font-size:0.34rem;color: #EA608C;">￥{{totalPrice}}</span></div>
            <div class="fr" @click="pay()">付款</div>
        </div>
    </div>
</template>
<script>
import { Switch } from "mint-ui";
export default {
    component: {Switch},
    data() {
        return {
            name:"leilei",
            phone:"15558059596",
            address:"浙江省杭州市滨江区远方科技中心15楼杭州市滨江区远方科技中心1",
            list:{name:"美肤基因检测套餐【体验版】",price:0,number:1,img:''},
            weichat:true,
            zhifubao:false,
            note:'',
            payWay:'',
            totalPrice:358.75,
        };
    },
    created() {
        let num = this.$store.getters.getNum;
        let type = this.$store.getters.getType;
        let price = this.$store.getters.getPrice;
        if(type == '1'){this.list.name='美肤基因检测套餐【体验版】'};
        if(type == '2'){this.list.name='美肤基因检测套餐【实用版】'};
        if(type == '3'){this.list.name='美肤基因检测套餐【Pro版】'};
        this.list.price = price;
        this.list.number = num;
        this.totalPrice = price*num
    },
    mounted() {
    },
    methods: {
        focus() {
            this.$refs.edit.focus();
        },
        pay() {
            //判断支付方式 1是微信  2是支付宝
            if(this.weichat){this.payWay = 1;}
            if(this.zhifubao){this.payWay = 2;}
            console.log(this.payWay);
        }
    }
};
</script>
<style scoped>
.top{padding:0.4rem 0.47rem;background: #fff;margin-bottom:0.2rem;}
.top .leftPoint{color: #BBBBBB;font-size: 0.24rem;margin-right: 0.55rem;padding-top: 0.2rem;}
.top .leftPoint img{width:0.4rem;height: 0.4rem}
.top .middle{font-size:0.28rem;color: #0A0A0A;width: 5rem;}
.address{display: -webkit-box !important;overflow: hidden;text-overflow: ellipsis;-webkit-box-orient: vertical; -webkit-line-clamp:1;}
.middle>p:first-child{font-size:0.34rem;margin-bottom:0.27rem;}
.top .rightImg{width: 0.3rem;height: 0.3rem;position: relative;top: 0.4rem;}
.top .leftImg{width:1.5rem;height: 1.5rem;border-radius:0.2rem;margin-right:0.3rem;}
.commonDiv{padding:0.43rem 0.47rem;font-size: 0.3rem;color: #758692;border-bottom:1px solid #D4DCE1;background: #fff;}
.commonDiv>.fr{color: #0A0A0A;}
.beizhu{border: none;width:5rem;}
.payWay{background: #F7F8FA;padding:0.25rem 0.47rem; font-size:0.34rem;color: #0A0A0A;}
.payImg{width:0.7rem;height: 0.7rem;margin-right:0.45rem;}
.footer{width:100%;height:1rem;font-size: 0.3rem;line-height: 1rem;background: #fff;padding-left:0.47rem;position: fixed;left: 0;bottom: 0;}
.footer .fr{width: 2.85rem;background:#EA608C;text-align: center;color: #fff;font-size:0.36rem;}
</style>


