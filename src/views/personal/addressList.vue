<template>
    <div class="addressList">
        <ul v-if="addressList.length>0">
            <li class="list" v-for="(item,index) in addressList" :key="index">
                <p class="clearfix first">
                    <span class="fl">{{item.name}}</span>
                    <span class="fr">{{item.phone}}</span>
                </p>
                <p class="detail">{{item.address}}</p>
                <p class="footP clearfix">
                    <span class="fl"> 
                        <mt-radio
                        v-model="value"
                        :options="[item.id]">
                        </mt-radio>
                        <span class="word">默认地址</span>
                    </span>
                    <span class="fr">
                        <span @click="go()" style="margin-right:0.3rem;color:#00DBD2;"><img src="../../assets/img/edit.png"> 编辑</span> 
                        <span style="color:#00DBD2;" @click="deleteAddress()"><img src="../../assets/img/delete.png"> 删除</span>
                    </span>
                </p>
            </li>
        </ul>
        <div v-else class="empty text-center">
            <img src="../../assets/img/Blank pages_3.png">
            <p>暂无地址信息</p>
        </div>
        <p class="add text-center">
            <button @click="go()">添加新地址</button>
        </p>
    </div>
</template>

<script>
import { Toast,Radio, MessageBox } from 'mint-ui';

export default {
    components: {
        Toast,Radio,MessageBox 
    },
  data () {
    return {
        value:'1',
        addressList:[
            {
                name:'柯基',
                phone:'15558059596',
                address:'浙江省杭州市滨江区远方科技中心15楼',
                id:'1'
            },
            {
                name:'二哈',
                phone:'15558059595',
                address:'浙江省杭州市滨江区远方科技中心15楼',
                id:'2'
            }
        ]
    }
  },
    mounted: function() {
    },
    methods: {
        deleteAddress() {
            MessageBox.confirm('确认要删除此收货地址吗？').then(action => {
                console.log(10);
            });
        },
        go() {
            this.$router.push('/personal/addAddress');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.addressList{padding-bottom:0.5rem;font-size:14px;color: #000000;}
.list{margin-bottom:0.2rem;background: #fff;padding-top:0.4rem;}
.list>p{padding:0 0.47rem;}
.first{font-size:17px;}
.list>.detail{padding:0.27rem 0.47rem 0.3rem 0.47rem;border-bottom:1px solid #D4DCE1;color: #0A0A0A;}
.list>.footP{padding:0.16rem 0.47rem;}
.fr span>img,.fl>img{width:20px;height:20px;vertical-align:text-bottom;}
.footP>.fl{position: relative;}
.footP>.fl .word{position: absolute;top:0.08rem;left:38px;background: #fff;z-index: 1000;width: 1.5rem;color:#00DBD2;}
.add{margin-top:0.9rem;padding: 0 0.47rem;}
.add button{width:100%;height:0.88rem;background:#EA608C;border-radius: 100px;font-size:0.36rem;color: #FFFFFF;border:1px solid #EA608C;}
.empty{padding-top:1.5rem;font-size:0.3rem;color:#666;}
.empty img{height:3.15rem;margin-bottom:0.5rem;}

</style>