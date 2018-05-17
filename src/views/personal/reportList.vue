<template>
    <div class="reportList">
        <ul v-if="reportList.length>0">
            <li class="list" v-for="(item,index) in reportList" :key="index">
                <div class="topDiv clearfix">
                    <img v-if="item.sex=='女'" class="fl" src="../../assets/img/girl.png">
                    <img v-else class="fl" src="../../assets/img/boy.png">
                    <div class="fl">
                        <p>样本编码：{{item.code}}</p>
                        <p>检测项目：{{item.project}}</p>
                        <p>受检人：{{item.name}} {{item.sex}}</p>
                    </div>
                </div>
                <div class="footDiv text-right">
                    <span>查看</span>
                </div>
            </li>
        </ul>
        <div v-else class="empty text-center">
            <img src="../../assets/img/Blank pages_2.png">
            <p>暂无报告信息</p>
        </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
        reportList:[
           /*  {
                name:'柯基',
                code:'E238957432',
                project:'美容护肤',
                sex:'女'
            },
            {
                name:'二哈',
                code:'E238957433',
                project:'美容护肤',
                sex:'男'
            }, */
        ]
    }
  },
    mounted: function() {
    },
    methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.reportList{padding:0.46rem 0.3rem;;font-size:0.3rem;color: #312424;}
.list{background: #FFFFFF;box-shadow: 0 2px 6px 0 rgba(0,0,0,0.10);border-radius: 8px;margin-bottom: 0.2rem;}
.topDiv{padding:0.4rem 0 0.4rem 0.3rem;}
.topDiv>img{width:1.6rem;height:1.6rem;margin-right:0.42rem;}
.topDiv p{margin-top:0.12rem;}
.footDiv{padding:0.3rem 0.2rem;border-top: 1px solid #dedede;}
.footDiv span{display: inline-block;width: 1.5rem;height:0.46rem;text-align: center;line-height: 0.46rem;color: #fff;background: #00DBD2;border-radius: 100px;}
.empty{padding-top:1.5rem;font-size:0.3rem;color:#666;}
.empty img{height:3.15rem;margin-bottom:0.5rem;}

</style>