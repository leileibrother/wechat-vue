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
              <div v-if="item.haveInfo" class="footDiv text-right">
                  <span>填写寄回信息</span>
              </div>
          </li>
      </ul>
      <div v-else class="bind_sample">
        <div class="image">
            <img src="../../assets/img/pic.png" alt="">
        </div>
        <div class="dec">
              <p>暂无样本激活信息</p>
              <p>请进行激活</p>         
        </div>
        <div class="btn text-center">
            <router-link to="/personal/bindSample">添加绑定样本</router-link>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      reportList:[
            /* {
                name:'柯基',
                code:'E238957432',
                project:'美容护肤',
                sex:'女',
                haveInfo:true,
            },
            {
                name:'二哈',
                code:'E238957433',
                project:'美容护肤',
                sex:'男',
                haveInfo:false,
            }, */
        ]
    }
  },
  mounted() {},
  methods: {
  }
};
</script>
<style scoped>
.reportList{padding:0.47rem 0.3rem;;font-size:0.3rem;color: #312424;}
.list{background: #FFFFFF;box-shadow: 0 2px 6px 0 rgba(0,0,0,0.10);border-radius: 8px;margin-bottom: 0.2rem;}
.topDiv{padding:0.4rem 0 0.4rem 0.3rem;}
.topDiv>img{width:1.6rem;height:1.6rem;margin-right:0.42rem;}
.topDiv p{margin-top:0.12rem;}
.footDiv{padding:0.3rem 0.2rem;border-top: 1px solid #dedede;}
.footDiv span{display: inline-block;padding:2px 0.4rem;color: #fff;background: #00DBD2;border-radius: 100px;}
p {
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
}
.image {
  padding: 1.5rem 1.2rem 0.8rem 1.2rem;
  text-align: center;
}
.image img {
  width: 5.06rem;
}
.dec {
  font-size: 0.3rem;
  color: #666666;
  letter-spacing: 0;
  text-align: center;
  line-height: 0.84rem;
  height: 0.84rem;
}
.dec p {
  margin: 0;
  padding: 0;
  line-height: 0.42rem;
}
.btn {
  margin-top: 0.98rem;
  
}
.btn>a{
  display: inline-block;
  background: #EA608C;
  border-radius: 100px;
  font-size: 0.36rem;
  color: #ffffff;
  text-align: center;
  line-height: 0.88rem;
  height: 0.88rem;
  width:100%;
}
</style>


