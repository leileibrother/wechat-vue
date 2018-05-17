<template>
    <div class="indexDiv">
        <p style="position:relative;">
            <img style="width:100%;" src="../assets/img/mf01.png">
            <img style="width:0.44rem;position:absolute;top:0.28rem;right:0.3rem;" src="../assets/img/menu.png" @click="menuVisible = true">
        </p>
        <div class="text-left begin">
            <p><img src="../assets/img/3.png"> 基因是人体最核心的设计图纸</p>
            <p><img src="../assets/img/2.png"> 基因决定了肌肤的特质</p>
            <p><img src="../assets/img/1.png"> 从基因层面预知和防范肌肤的问题</p>
        </div>
        <div class="question text-center">
            <p style="margin-bottom:0.56rem;"> <i class="iconfont icon-nishifouyeyouzhexieyiwen"></i> </p>
            <p class="title">①为什么她看上去那么年轻？</p>
            <img class="qImg" src="../assets/img/pic1.png">
            <p style="padding: 0 0.3rem;" class="title">②想换个护肤牌子，但护肤品又太多，不知道选什么？</p>
            <img class="qImg" src="../assets/img/pic2.png">
            <p style="padding: 0 0.3rem;" class="title">③为什么用了那么多大牌护肤品，皮肤依然打不到自己的满意状态？</p>
            <img class="qImg" src="../assets/img/pic3.png">
            <p><img style="height:0.61rem;margin:1.12rem 0 0.58rem; " src="../assets/img/hfpta1.png"></p>
            <p style=""> <i class="iconfont icon-jiekaiyiwenliaojiehufuzhenxiang"></i> </p>
            <div class="intro">
                <p>从基因层面，解密肌肤密码</p>
                <p>从肌肤根源问题入手，全面分析肌肤真相</p>
                <p>通过基因测序的方法科学性地了解自己的皮肤</p>
                <p>基因的表达情况。进而了解皮肤的状况，进行</p>
                <p>针对性护肤。</p>
            </div>
            <div class="ability">
                <img src="../assets/img/rl.png">
                <span style="top: -0.6rem;left: 1.7rem;">黑色素生成风险</span>
                <span style="top: 0.3rem;left:0;">抗氧化能力</span>
                <span style="top: 0.3rem;right:-0.3rem;">污染清除能力</span>
                <span style="top: 1.3rem;left:-0.2rem;">糖基化风险</span>
                <span style="top: 1.3rem;right:-0.1rem;">弹性能力</span>
                <span style="top: 2.2rem;left:0.15rem;">光老化风险</span>
                <span style="top: 2.2rem;right:-0.3rem;">自然老化风险</span>
                <span style="bottom: -0.1rem;left:0.7rem;">敏感风险</span>
                <span style="bottom: -0.1rem;right:0.8rem;">锁水能力</span>
            </div>
        </div>
        <div class="gene text-center">
            <p><img style="height:1.03rem;margin:1.12rem 0 0.58rem; " src="../assets/img/hfpta2.png"></p>
            <p style=""> <i class="iconfont icon-fenxijiyingaishanjianyi1"></i> </p>
            <div class="colorFul">
                <p>针对薄弱基因，内调外敷</p>
                <p>真正达到由内而外变美内外兼修</p>
                <p>从根源养颜护肤</p>
            </div>
            <div class="common">
                <p>①薄弱基因</p>
                <p><img style="height:1.13rem;margin:0.54rem 0;" src="../assets/img/Group 5.png"></p>
                <p class="text">我们根据您的检测结果，进行深入的分析和探讨，为您找出您问题的“元凶”-薄弱基因。通过分析您的薄弱基因，发现您的潜在问题。我们为您推荐了科学精准的护肤指导方案。</p>
            </div>
            <div class="common">
                <p>②外敷：护肤成分-护肤品</p>
                <p><img style="height:1.84rem;margin:0.54rem 0;" src="../assets/img/nt_yscf.png"></p>
                <p class="text">针对薄弱基因，挑选出合适您的护肤成分，并参考您的年龄，肤质等信息，中立的向您推荐护肤品。</p>
            </div>
            <div class="common" style="padding-bottom:0.5rem;">
                <p>③内调：饮食成分-食物-食谱</p>
                <p><img style="height:1.84rem;margin:0.54rem 0;" src="../assets/img/wf_hfcf.png"></p>
                <p class="text">针对薄弱基因，挑选出合适您的饮食成分。参考食物的美颜功效，为您推荐合适您的食物和食谱。由内而外吃出好皮肤，达到更明显高效的护肤效果。</p>
            </div>
        </div>
        <div class="personal text-center">
            <p style="margin:1rem 0 1.16rem 0;"> <i class="iconfont icon-gexinghuameifubaogao"></i> </p>
            <p class="imgDiv">
                <img style="height:6rem;left: 2rem;z-index: 100;" src="../assets/img/iphonex_mx1.png" alt="">
                <img style="height:5rem;left: 0;" src="../assets/img/iphonex_mx2.png" alt="">
                <img style="height:5rem;right:0;" src="../assets/img/iphonex_mx3.png" alt="">
            </p>
            <p style="margin:1.6rem 0 0.54rem 0;"> <i class="iconfont icon-gexingxuanze"></i> </p>
            <p style="margin-bottom:0.56rem;">三种版本-满足不同人群选择</p>
            <div class="commonP" style="background-image: linear-gradient(-90deg, #FAD0C4 0%, #FF9A9E 100%);">
                <p><span style="font-size:0.36rem;">体验版</span> （4大检测项目）</p>
                <p class="sp"><span>*高性价比</span> <span>*基础项目</span> <span>*针对学生人群</span></p>
            </div>
            <div class="commonP" style="background-image: linear-gradient(90deg,#FCB69F 0%, #FFECD2 100%);">
                <p><span style="font-size:0.36rem;">实用版</span> （6大检测项目）</p>
                <p class="sp"><span>*高效护肤</span> <span>*省时</span> <span>*实用</span></p>
            </div>
            <div class="commonP" style="background-image: linear-gradient(-90deg,#FBC2EB 0%, #A18CD1 100%);">
                <p><span style="font-size:0.36rem;">Pro版</span> （9大检测项目）</p>
                <p class="sp"><span>*全面检测</span> <span>*科学性</span> <span>*合理</span></p>
            </div>
            <div class="table">
                <p class="topTitle clearfix">
                    <span class="leftSp">对比项目</span><span class="rightSp" style="background-image: linear-gradient(-90deg, #FAD0C4 0%, #FF9A9E 100%);color:#fff;"><span>体验版</span> <span>实用版</span> <span>Pro版</span></span>
                </p>
                <p class="clearfix">
                    <span class="leftSp padOne">锁水能力</span><span class="rightSp"><span><img src="../assets/img/dbxm_selected.png"></span> <span><img src="../assets/img/dbxm_selected.png"></span> <span><img src="../assets/img/dbxm_selected.png"></span></span>
                </p>
                <p class="clearfix">
                    <span class="leftSp padOne">弹性能力</span><span class="rightSp"><span><img src="../assets/img/dbxm_selected.png"></span> <span><img src="../assets/img/dbxm_selected.png"></span> <span><img src="../assets/img/dbxm_selected.png"></span></span>
                </p>
                <p class="clearfix">
                    <span class="leftSp padTwo">抗氧化能力</span><span class="rightSp"><span><img src="../assets/img/dbxm_selected.png"></span> <span><img src="../assets/img/dbxm_selected.png"></span> <span><img src="../assets/img/dbxm_selected.png"></span></span>
                </p>
                <p class="clearfix">
                    <span class="leftSp padTwo">黑色素生成风险</span><span class="rightSp"><span><img src="../assets/img/dbxm_selected.png"></span> <span><img src="../assets/img/dbxm_selected.png"></span> <span><img src="../assets/img/dbxm_selected.png"></span></span>
                </p>
                <p class="clearfix">
                    <span class="leftSp padTwo">糖基化风险</span><span class="rightSp"><span><img src="../assets/img/dbxm_uncheck.png"></span> <span><img src="../assets/img/dbxm_selected.png"></span> <span><img src="../assets/img/dbxm_selected.png"></span></span>
                </p>
                 <p class="clearfix">
                    <span class="leftSp padOne">敏感风险</span><span class="rightSp"><span><img src="../assets/img/dbxm_uncheck.png"></span> <span><img src="../assets/img/dbxm_selected.png"></span> <span><img src="../assets/img/dbxm_selected.png"></span></span>
                </p>
                <p class="clearfix">
                    <span class="leftSp padTwo">污染清除能力</span><span class="rightSp"><span><img src="../assets/img/dbxm_uncheck.png"></span> <span><img src="../assets/img/dbxm_uncheck.png"></span> <span><img src="../assets/img/dbxm_selected.png"></span></span>
                </p>
                <p class="clearfix">
                    <span class="leftSp padTwo">自然老化风险</span><span class="rightSp"><span><img src="../assets/img/dbxm_uncheck.png"></span> <span><img src="../assets/img/dbxm_uncheck.png"></span> <span><img src="../assets/img/dbxm_selected.png"></span></span>
                </p>
                <p class="clearfix" style="border:none;">
                    <span class="leftSp padTwo">光老化风险</span><span class="rightSp"><span><img src="../assets/img/dbxm_uncheck.png"></span> <span><img src="../assets/img/dbxm_uncheck.png"></span> <span><img src="../assets/img/dbxm_selected.png"></span></span>
                </p>
            </div>
        </div>
        <div class="server text-center">
            <p style="margin:0.21rem 0 0.7rem 0;"> <i class="iconfont icon-fuwuliucheng"></i> </p>
            <ul class="clearfix">
                <li>
                    <img src="../assets/img/icon_xdzf.png" alt="">
                    <p>1.下单支付</p>
                    <p class="title">收到订单后2个工作日内寄出采样器</p>
                </li>
                <li>
                    <img src="../assets/img/icon_ybcj.png" alt="">
                    <p>2.样本采集/激活</p>
                    <p class="title">按说明书要求采集样本</p>
                </li>
                <li>
                    <img src="../assets/img/icon_ybjh.png" alt="">
                    <p>3.样本寄回</p>
                    <p class="title">采完样2天内需寄回样本</p>
                </li>
                <li>
                    <img src="../assets/img/icon_cjbg.png" alt="">
                    <p>4.出具报告</p>
                    <p class="title">收到样本后3~4周左右出具电子版报告</p>
                </li>
                <li>
                    <img src="../assets/img/icon_ckbg.png" alt="">
                    <p>5.查看报告</p>
                    <p class="title">关注微信公众号“梦想基因”查看报告</p>
                </li>
                <li>
                    <img src="../assets/img/icon-bgjd.png" alt="">
                    <p>6.报告解读</p>
                    <p class="title">拨打4001635588进行报告解读预约</p>
                </li>
            </ul>
            <p style="margin:0.9rem 0 0.5rem 0;"> <i class="iconfont icon-gongsijianjie"></i> </p>
            <div style="line-height:0.6rem;margin-bottom:0.65rem;">
                <p>我们拥有自己的检验实验室并获得ISO9001认</p>
                <p>证及医疗机构执业资格，设备采用采用高度定</p>
                <p>制芯片。并拥有4Tflops的计算能力 8TB的内</p>
                <p>存，为您的基因检测提供更好的服务</p>
            </div>
            <div class="company clearfix">
                <div class="showImg">
                    <div>
                        <img style="height:0.49rem;margin:0.35rem 0 0.15rem 0;" src="../assets/img/tzmj_icon.png" alt="">
                        <p>总投资超过3000万面积达到1500平方米</p>
                    </div>
                    <img src="../assets/img/image3.png" alt="">
                </div>
                <div class="showImg" style="margin: 0 0.26rem;">
                    <img src="../assets/img/image2.png" alt="">
                    <div>
                        <img style="height:0.17rem;margin:0.45rem 0 0.15rem 0;" src="../assets/img/Group 7.png" alt="">
                        <p>CFDA认证的高通量测序仪 </p>
                    </div>
                </div>
                <div class="showImg">
                    <div>
                        <img style="height:0.52rem;margin:0.35rem 0 0.15rem 0;" src="../assets/img/gddz_icon.png" alt="">
                        <p>高度定制芯片</p>
                    </div>
                    <img src="../assets/img/image1.png" alt="">
                </div>
            </div>
            
        </div>
        <!-- 底部购买 -->
        <div class="footer">
            <button @click="buy()">购买</button>
        </div>
        <!-- 右侧弹窗 -->
        <mt-popup
        v-model="menuVisible"
        :closeOnClickModal=false
        position="right"
        popup-transition="popup-fade">
            <div class="rightMenu">
                <img src="../assets/img/gb.png" @click="menuVisible = false">
                <div><router-link to="/index">首页</router-link></div>
                <div><router-link to="/personal/person_center">个人中心</router-link></div>
                <div>
                    <span>产品</span>
                    <p style="color:#999;margin-top:0.4rem;">美肤基因检测</p>
                </div>
                <div>检测流程</div>
                <div style="border:none;"><router-link to="/example">父子组件传值示例</router-link></div>
            </div>
        </mt-popup>
        <!-- 底部弹窗 -->
        <mt-popup
        v-model="popupVisible"
        :closeOnClickModal=false
        position="bottom"
        popup-transition="popup-fade">
            <div class="topD clearfix">
                <span class="fl">美肌基因检测</span>
                <img style="with:0.36rem;" class="fr" src="../assets/img/dbxm_uncheck.png" @click="popupVisible = false">
            </div>
            <div class="choseD">
                <div v-for="(item,index) in list" :class="{ active:changeRed == index}" @click="change(index)" :key="index">{{item.name}} {{item.price}}元</div>
            </div>
            <div class="buy clearfix">
                <span class="fl">购买数量</span>
                <span class="fr">
                    <img @click="reduce()" src="../assets/img/jiajian2.png" alt="">
                    <span style="margin:0 0.2rem;position: relative;top: -0.06rem;">{{number}}</span>
                    <img @click="add()" src="../assets/img/jiajian1.png" alt="">
                </span>
            </div>
            <button class="next" @click="submit()">下一步</button>
        </mt-popup>
    </div>
</template>

<script>
import { Popup } from 'mint-ui';

export default {
    components: {
        Popup 
    },
    data () {
        return {
            popupVisible:false,
            menuVisible:false,
            type:'1',//1是体验版，2是实用版，3是Pro版
            number:1,//购买数量
            changeRed:'0',
            list:[
                {
                    name:'体验版',price:199
                },
                {
                    name:'实用版',price:299
                },
                {
                    name:'pro版',price:399
                }
            ],
            price:''
        }
    },
    mounted: function() {
        this.price = this.list[0].price;
    },
    methods: {
        buy() {
            this.popupVisible = true;
        },
        reduce() {
            if(this.number<=0){
                this.number = 0;
            }else{
                this.number-=1;
            }
        },
        add() {
            this.number += 1;
        },
        change(index) {
            this.changeRed = index;
            this.type = index+1;
            this.price = this.list[index].price;
        },
        submit() {
            //先把选中的数据提交到vuex里面 数量、产品、价格
            this.$store.commit('changeNum',this.number);
            this.$store.commit('changeType',this.type);
            this.$store.commit('changePrice',this.price);
            this.$router.push('/writing_order/order');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/iconfont.css';
.indexDiv{color: #758692;}
.indexDiv .iconfont{font-weight: bold;font-size:0.50rem;}
.begin{font-size:0.28rem;margin-left: 1.5rem;padding:0.1rem 0 0.35rem 0;}
.begin p{margin:0.15rem 0;}
.begin p img{width:0.20rem;height: 0.20rem;}
.question{background: rgb(255, 224, 224,0.41);padding:0.95rem;padding-bottom:1.5rem;}
.question .title{font-size:0.3rem;margin:0.25rem 0;line-height: 0.5rem;}
.question .qImg{height:2.46rem;}
.intro{padding:0.5rem 0 1.5rem 0;}
.intro p{line-height: 0.6rem;}
.ability{position: relative;font-size:0.26rem;}
.ability>img{width:3.4rem;}
.ability span{display: inline-block;background: #FFFFFF;border: 1px solid #F3D5D5;padding:2px 0.2rem;border-radius: 20px;position: absolute;}
.gene{padding:0 0.95rem 0 0.95rem;background-image: url('../assets/img/attractive-bg.png');background-size: cover;}
.colorFul{font-size:0.28rem;color: #EA608C;line-height:0.43rem;margin: 0.63rem 0 0.45rem 0;}
.common{padding-bottom:1.05rem;font-size:0.3rem;}
.common .text{line-height:0.5rem;font-size:0.28rem;text-align: center;}
.personal{background: rgba(255,154,158,0.05);padding:0.41rem 0.3rem;}
.personal .imgDiv{position: relative;width: 100%;height:6rem;}
.imgDiv>img{position: absolute;bottom:0;z-index: 1;}
.personal .commonP{width: 100%;height:1.92rem;padding:0.27rem 0.4rem;border-radius: 8px;color: #fff;text-align: left;margin-bottom: 0.31rem;}
.commonP .sp{margin-top: 0.5rem;}
.commonP .sp span{margin-right:0.25rem;}
.table{border: 1px solid;border-color:rgba(151,151,151,0.16);font-size:0.24rem;color:#485561;margin-top:0.57rem;}
.table>p{border-bottom: 1px solid;border-color:rgba(151,151,151,0.16);width: 100%;}
.table .topTitle span{font-size: 0.28rem;height:0.8rem;line-height: 0.85rem;}
.table>p span{display: inline-block;height: 1.1rem;}
.leftSp{width:1.6rem;background: #F8F8F8;float: left;padding: 0 0.3rem;box-sizing: border-box;text-align: left;}
.rightSp{width:5.25rem;background:rgba(225,214,217,0.1);float: left;}
.rightSp>span{width:32%; line-height: 1.15rem;}
.rightSp img{width: 0.26rem;height: 0.26rem;}
.padOne{padding-top:0.4rem;}
.padTwo{padding-top:0.23rem;}
.server{padding-bottom:1.9rem;}
.server ul{padding:0 0.2rem;}
.server ul li{width:33.33%;float: left;font-size: 0.26rem;color: #485561;margin-bottom: 0.6rem;padding: 0 0.2rem;}
.server li>img{width: 0.8rem;height:0.8rem;margin-bottom:0.25rem;}
.server li .title{font-size: 0.24rem;color: #758692;text-align: left;padding-top: 0.2rem;}
.company{padding:0 0.3rem;color: #FFFFFF;}
.showImg{border-radius: 7px;overflow: hidden;float: left;font-size: 0;}
.showImg>div{background-image: linear-gradient(-100deg, #FAD0C4 0%, #FF9A9E 100%);padding:0 0.13rem;font-size: 0.20rem;}
.showImg>img,.showImg>div{width: 2.12rem;height: 1.7rem;}
.footer{width: 100%;height: 1.04rem;text-align: center;position: fixed;left: 0;bottom: 0;z-index: 100;}
.footer button{width:100%;height: 100%;background: #EA608C;color: #fff;border: 1px solid #EA608C;font-size: 0.36rem;}
.rightMenu a{color:#758692;display: inline-block;width: 100%;height: 100%;}
</style>