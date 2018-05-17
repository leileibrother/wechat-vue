<template>
    <div class="detail">
        <div v-if="status=='1'" class="header clearfix">
            <div class="fl">等待买家付款</div>
            <div class="fr"><img src="../../assets/img/tengdaifukuan.png"></div>
        </div>
        <div v-if="status=='2'" class="header clearfix">
            <div class="fl">已付款</div>
            <div class="fr"><img src="../../assets/img/yifukuan.png"></div>
        </div>
        <div v-if="status=='3'" class="header clearfix">
            <div class="fl">已发货</div>
            <div class="fr"><img src="../../assets/img/yifahuo.png"></div>
        </div>
        <div v-if="status=='4'" class="header clearfix">
            <div class="fl">报告已出</div>
            <div class="fr"><img src="../../assets/img/baogaoyichu.png"></div>
        </div>
        <div v-if="status=='5'" class="header clearfix">
            <div class="fl">已取消</div>
            <div class="fr"><img src="../../assets/img/yiquxiao.png"></div>
        </div>
        <div v-if="status=='3'" class="common clearfix">
            <img class="fl imgP" style="width:0.4rem;" src="../../assets/img/icon_wuliu.png">
            <div class="fl middle">
                <p>{{tip}}</p>
                <p style="color: #BBBBBB;margin-top:0.08rem;">{{time}}</p>
            </div>
            <img class="fr imgP" style="width:0.24rem;" src="../../assets/img/right.png">
        </div>
        <div v-if="status=='4'" class="common clearfix">
            <img class="fl imgP" style="width:0.4rem;top:0.05rem;" src="../../assets/img/icon_wuliu.png">
            <div class="fl middle">
                <p>感谢您的光临，欢迎您下次再来</p>
            </div>
            <img class="fr imgP" style="width:0.24rem;top:0.1rem;" src="../../assets/img/right.png">
        </div>
        <div class="common clearfix">
            <img class="fl imgP" style="height:0.4rem;top:0.2rem;" src="../../assets/img/icon_dizhi.png">
            <div class="fl middle">
                <p><span style="margin-right:1rem;">{{name}}</span><span>{{phone}}</span></p>
                <p style="color: #BBBBBB;margin-top:0.08rem;">{{address}}</p>
            </div>
        </div>
        <div class="common" style="margin: 0;">
            <span class="title">商品套餐</span>
        </div>
        <div v-for="(item,index) in itemsList" class="commonP clearfix">
            <img class="fl" style="width:1.5rem;height:1.5rem;" src="../../assets/img/zhifubao.png">
            <div class="rightD fl">
                <p class="clearfix" style="font-size:0.3rem;margin-bottom:0.25rem;">
                    <span class="fl">{{item.name}}</span><span class="fr">￥{{item.price}}</span>
                </p>
                <p>样本编号：{{item.code}}</p>
                <p class="clearfix">
                    <span class="fl">受检者：{{item.personName}}</span><span class="fr">x{{item.number}}</span>
                </p>
            </div>
        </div>
        <div class="common">
            <p class="clearfix">
                <span class="fl">商品总价：</span><span class="fr" style="color: #485561;">￥{{totalPrice}}</span>
            </p>
            <p class="clearfix" style="font-size:0.3rem;margin-top:0.3rem;">
                <span class="fl">实际付款：</span><span class="fr" style="color: #EA608C;">￥{{truePrice}}</span>
            </p>
        </div>
        <div class="common footInfo">
            <p>订单编号：{{orderCode}}</p>
            <p>创建时间：{{time}}</p>
            <!-- <div class="clearfix">
                <span class="fl">发票信息：</span>
                <div class="fl">
                    <p>电子发票</p>
                    <p>杭州和壹健康管理有限公司</p>
                </div>
            </div> -->
            <p v-if="pay == '1'">支付方式：微信支付</p>
            <p v-if="pay == '2'">支付方式：支付宝支付</p>
            <p v-if="!pay">支付方式：无</p>
        </div>
        <div v-if="status=='1'" class="text-right operate">
            <span @click="cancel()">取消订单</span> <span class="pay">付款</span>
        </div>
    </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
export default {
    components: {MessageBox},
    data () {
        return {
            status:'',//订单的状态值，1代付款，2代发货，3已发货，4已出报告，5已取消
            tip:'【杭州市】您的样本已签收，感谢您的光顾，报告大约在样本收到后30天左右，到时即可查看报告',
            time:'2018-01-23 13:36',
            name:'周西',
            phone:'15558059596',
            address:'浙江省杭州市滨江区远方科技中心15楼',
            itemsList:[
                {
                    name:'易长安肠癌早起筛查',
                    price:'456.56',
                    number:'1',
                    code:'E32984234',
                    personName:'殷义军'
                },
                {
                    name:'易长安肠癌早起筛查',
                    price:'430',
                    number:'1',
                    code:'E32984234',
                    personName:'王雷雷'
                }
            ],
            totalPrice:'913',
            truePrice:'913',
            orderCode:'348578375832943',
            pay:'1'//1微信支付，2支付宝
        }
    },
    created: function(){
        this.status = '1';
    },
    mounted: function() {
    },
    methods: {
        cancel() {
            MessageBox.confirm('是否确认取消订单？').then(action => {
                console.log('已取消');
            });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.detail{padding-bottom: 0.3rem;}
.header{padding:0.35rem 0.65rem;font-size:0.34rem;color: #fff;background: #EA608C;height: 1.72rem;width:100%;}
.header>div{height:100%;}
.header .fl{line-height: 1.1rem;}
.header .fr img{height:100%;}
.detail .common{padding:0.3rem 0.47rem;background: #fff;margin-bottom:0.2rem;}
.common .middle{width:5.3rem;margin-left:0.35rem;font-size:0.28rem;color: #0A0A0A;}
.imgP{position: relative;top:0.6rem;}
.common .title{font-size: 0.3rem;color: #758692;}
.commonP{background: #F7F7F7;padding:0.21rem 0.47rem;margin-top: 0.06rem;}
.commonP .rightD{width: 4.8rem;margin-left:0.24rem;font-size: 0.28rem;color:#666;}
.footInfo{font-size:0.26rem;color: #BBBBBB;}
.footInfo p{margin-bottom: 0.18rem;}
.operate{padding:0.5rem 0.47rem 0 0.47rem;font-size:0.3rem;color: #EA608C;}
.operate span{display: inline-block;border: 1px solid #EA608C;width:1.5rem;height:0.6rem;line-height:0.58rem;margin-left: 0.1rem;text-align: center;border-radius:0.6rem;}
.operate .pay{background: #EA608C;color:#fff;}
</style>