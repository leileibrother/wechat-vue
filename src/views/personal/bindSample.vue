<template>
    <div class="bindDiv" style="padding-bottom: 1rem;">
        <div class="top">
            <span>为确保您的样本不被混淆，请务必确认以下信息的填写与受检者实际情况相符，受检者即为检测对象。</span>
        </div>
        <div>
            <div class="commonDiv">
                <p class="clearfix">
                    <span class="leftSpan">条码编号：</span>
                    <input style="width: 3.2rem;" placeholder="请输入条码编号" v-model="code">
                    <span class="scan fr"><img src="../../assets/img/saoyisao.png">扫一扫</span>
                </p>
            </div>
            <div class="commonDiv" style="border:none;">
                <p class="clearfix" @click="selectProject = true">
                    <span class="leftSpan">检测项目：</span>
                    <input style="width: 4.6rem;" disabled placeholder="请选择检测项目" v-model="project">
                    <span class="rightArrow fr"><img src="../../assets/img/jiantou.png"></span>
                </p>
            </div>
            <div class="info">
                <span>资料</span>
            </div>
            <div class="commonDiv">
                <p>
                    <span class="leftSpan">受 检 人：</span>
                    <input placeholder="请输入姓名" v-model="username">
                </p>
            </div>
            <div class="commonDiv">
                <p class="clearfix" @click="selectSex = true">
                    <span class="leftSpan">性 别：</span>
                    <input disabled placeholder="请选择性别" v-model="sex">
                    <span class="rightArrow fr"><img src="../../assets/img/jiantou.png"></span>
                </p>
            </div>
            <div class="commonDiv">
                <p class="clearfix" @click="pickOpen()">
                    <span class="leftSpan">出生日期：</span>
                    <input disabled placeholder="请选择出生日期" v-model="birthday">
                    <span class="rightArrow fr"><img src="../../assets/img/jiantou.png"></span>
                </p>
            </div>
            <div class="commonDiv">
                <p>
                    <span class="leftSpan">手机号码：</span>
                    <input placeholder="请输入手机号码" v-model="phone">
                </p>
            </div>
            <div class="commonDiv" style="border:none;">
                <p class="clearfix"  @click="selectRe = true">
                    <span class="leftSpan">与我关系：</span>
                    <input disabled placeholder="请选择与我关系" v-model="relation">
                    <span class="rightArrow fr"><img src="../../assets/img/jiantou.png"></span>
                </p>
            </div>
            <div class="info">
                <span>肤质信息</span>
            </div>
            <div class="commonDiv">
                <p class="clearfix"  @click="selectSkin = true">
                    <span class="leftSpan">肤 质：</span>
                    <input disabled placeholder="请选择肤质" v-model="skin">
                    <span class="rightArrow fr"><img src="../../assets/img/jiantou.png"></span>
                </p>
            </div>
            <div class="commonDiv">
                <p class="clearfix"  @click="selectSen = true">
                    <span class="leftSpan">是否敏感：</span>
                    <input disabled placeholder="请选择是否敏感" v-model="sensitive">
                    <span class="rightArrow fr"><img src="../../assets/img/jiantou.png"></span>
                </p>
            </div>
            <div class="commonDiv">
                <p class="clearfix"  @click="selectGra = true">
                    <span class="leftSpan">是否孕妇：</span>
                    <input disabled placeholder="请选择是否为孕妇" v-model="gravida">
                    <span class="rightArrow fr"><img src="../../assets/img/jiantou.png"></span>
                </p>
            </div>
        </div>
        <div class="footD text-center">
            <span @click="submit()">保存</span>
            <span class="ready" @click="go()">填写回寄信息</span>
        </div>
        <mt-popup
            v-model="selectProject"
            position="middle">
            <div style="font-size:0.36rem;color: #0A0A0A;margin-bottom:0.5rem;">请选择您要激活的套餐</div>
            <div class="itemDiv" v-for="(items,index) in projectList"  @click="choose(items,'p')">{{items}}</div>
        </mt-popup>
        <mt-popup
            v-model="selectSex"
            position="middle">
            <div style="font-size:0.36rem;color: #0A0A0A;margin-bottom:0.5rem;">请选择您的性别</div>
            <div class="itemDiv"  @click="choose('男','s')">男</div>
            <div class="itemDiv"  @click="choose('女','s')">女</div>
        </mt-popup>
        <mt-popup
            v-model="selectRe"
            position="middle">
            <div style="font-size:0.36rem;color: #0A0A0A;margin-bottom:0.5rem;">请选择与我关系</div>
            <div class="itemDiv"  @click="choose('本人','r')">本人</div>
            <div class="itemDiv"  @click="choose('父母','r')">父母</div>
            <div class="itemDiv"  @click="choose('配偶','r')">配偶</div>
            <div class="itemDiv"  @click="choose('子女','r')">子女</div>
            <div class="itemDiv"  @click="choose('兄弟姐妹','r')">兄弟姐妹</div>
            <div class="itemDiv"  @click="choose('其他','r')">其他</div>
        </mt-popup>
        <mt-popup
            v-model="selectSkin"
            position="middle">
            <div style="font-size:0.36rem;color: #0A0A0A;margin-bottom:0.5rem;">请选择肤质</div>
            <div class="itemDiv"  @click="choose('干性','k')">干性</div>
            <div class="itemDiv"  @click="choose('中性','k')">中性</div>
            <div class="itemDiv"  @click="choose('油性','k')">油性</div>
        </mt-popup>
        <mt-popup
            v-model="selectSen"
            position="middle">
            <div style="font-size:0.36rem;color: #0A0A0A;margin-bottom:0.5rem;">请选择是否敏感</div>
            <div class="itemDiv"  @click="choose('是','e')">是</div>
            <div class="itemDiv"  @click="choose('否','e')">否</div>
        </mt-popup>
        <mt-popup
            v-model="selectGra"
            position="middle">
            <div style="font-size:0.36rem;color: #0A0A0A;margin-bottom:0.5rem;">请选择是否是孕妇</div>
            <div class="itemDiv"  @click="choose('是','g')">是</div>
            <div class="itemDiv"  @click="choose('否','g')">否</div>
        </mt-popup>
        <mt-datetime-picker
            v-model="birthday"
            ref="pickDate"
            type="date"
            year-format="{value} 年"
            month-format="{value} 月"
            date-format="{value} 日"
            :startDate="startDate"
            :endDate="endDate"
            @confirm="handleConfirm"
            position="middle">
        </mt-datetime-picker>
    </div>
</template>

<script>
import { Field, Toast, Popup, DatetimePicker, MessageBox } from 'mint-ui';

export default {
    components: {
        Field,Toast,Popup,DatetimePicker,MessageBox 
    },
    data () {
        return {
            code:'',
            project:'',
            username:'',
            sex:'',
            birthday:'',
            phone:'',
            relation:'',
            skin:'',
            sensitive:'',
            gravida:'',
            selectProject:false,
            selectSex:false,
            selectRe:false,
            selectSkin:false,
            selectSen:false,
            selectGra:false,
            startDate:new Date('1950-01-01'),
            endDate:new Date(),
            projectList:[
                '美肤基因检测套餐【精装报告版1】','美肤基因检测套餐【精装报告版2】','美肤基因检测套餐【精装报告版3】'
            ],
            testPhone:/^0?1[3|4|5|7|8][0-9]\d{8}$/
        }
    },
    mounted: function() {
    },
    methods: {
        submit(){
            if(this.check()){
                MessageBox({
                    title: '样本激活成功',
                    confirmButtonText:'我知道啦',
                    message:'<p style="text-align: justify;line-height: 22px;">为保证样本质量，请尽量在采样后三日内将样本寄出并在此页面重新填写快递信息，以便我们的跟踪查看。</p><p style="text-align: justify;line-height: 22px;">您可以到查看报告页面跟踪检测进度，我们也会以短信形式通知您。</p>',
                    showCancelButton: false
                });
            }
        },
        go() {
            if(this.check()){
                this.$router.push('/logistics_info');
            }
        },
        pickOpen(){
            this.$refs.pickDate.open();
        },
        handleConfirm() {
            let self = this;
            let time = new Date(self.birthday);
            let y = time.getFullYear();
            let m = time.getMonth()+1;
            let d = time.getDate();
            if(m<10){m = '0'+m;}
            if(d<10){d = '0'+d;}
            this.birthday = y + '-' + m + '-' + d;
        },
        choose(name,type) {
            if(type=='p'){
                this.selectProject  =false;
                this.project = name;
            }
            if(type=='s'){
                this.selectSex = false;
                this.sex = name;
            }
            if(type=='r'){
                this.selectRe = false;
                this.relation = name;
            }
            if(type=='k'){
                this.selectSkin = false;
                this.skin = name;
            }
            if(type=='e'){
                this.selectSen = false;
                this.sensitive = name;
            }
            if(type=='g'){
                this.selectGra = false;
                this.gravida = name;
            }
        },
        //检查数据
        check() {
            /* :'',:'',:'',:'',:'':'',:'',:'',:'', */
            if(!this.code){
                Toast({
                    message: '请输入条码编号！',
                    duration: 2000
                });
                return false;
            }
            if(!this.project){
                Toast({
                    message: '请选择检测项目！',
                    duration: 2000
                });
                return false;
            }
            if(!this.username){
                Toast({
                    message: '请输入姓名！',
                    duration: 2000
                });
                return false;
            }
            if(!this.sex){
                Toast({
                    message: '请选择性别！',
                    duration: 2000
                });
                return false;
            }
            if(!this.birthday){
                Toast({
                    message: '请选择出生日期！',
                    duration: 2000
                });
                return false;
            }
            if(!this.phone){
                Toast({
                    message: '请输入手机号！',
                    duration: 2000
                });
                return false;
            }
            if(!this.testPhone.test(this.phone)){
                Toast({
                    message: '请输入正确手机号！',
                    duration: 2000
                });
                return false;
            }
            if(!this.relation){
                Toast({
                    message: '请选择与我关系！',
                    duration: 2000
                });
                return false;
            }
            if(!this.skin){
                Toast({
                    message: '请选择肤质！',
                    duration: 2000
                });
                return false;
            }
            if(!this.sensitive){
                Toast({
                    message: '请选择是否过敏！',
                    duration: 2000
                });
                return false;
            }
            if(!this.gravida){
                Toast({
                    message: '请选择是否为孕妇！',
                    duration: 2000
                });
                return false;
            }
            return true;
        }
    },
    watch: {
        birthday: function (val) {
            let time = new Date(val);
            let y = time.getFullYear();
            let m = time.getMonth()+1;
            let d = time.getDate();
            if(m<10){m = '0'+m;}
            if(d<10){d = '0'+d;}
            this.birthday = y + '-' + m + '-' + d;
        },
    }
}
</script>
<style scoped>
.top{padding:0.1rem 0.32rem;background: #F05960;font-size:0.26rem;color: #FFFFFF;text-align: justify;opacity: 0.89;}
.commonDiv{padding:0.37rem 0.47rem;border-bottom:1px solid #D4DCE1;font-size:0.3rem;color:#000;background: #fff;}
.commonDiv .leftSpan{display: inline-block;width:1.52rem;color: #758692;}
.commonDiv input{width: 4.2rem;border: none;font-size:0.3rem;background: #fff;color:rgb(0, 0, 0);}

.scan{padding:2px 0.16rem;background: #00DBD2;border-radius:20px;color: #fff;font-size:0.3rem;}
.scan img{width:0.28rem;height:0.28rem;margin-right:0.1rem;position: relative;top:2px;}
.rightArrow img{width: 0.3rem;position: relative;top: 0.07rem;}
.info{width: 100%;height:0.8rem;background: #F7F8FA;font-size:0.32rem;color: #0A0A0A;line-height: 0.8rem;padding: 0 0.47rem;}
.footD{margin-top:0.8rem;}
.footD span{padding:0.15rem 0.47rem;border: 1px solid #BBBBBB;border-radius: 100px;margin:0 0.15rem;color: #BBBBBB;display: inline-block;}
.footD .ready{background: #EA608C;border:1px solid #EA608C;color: #fff;}
.itemDiv{padding:0.3rem;border-top:1px solid #D4DCE1;font-size:0.32rem;color: #00B3DC;}
</style>