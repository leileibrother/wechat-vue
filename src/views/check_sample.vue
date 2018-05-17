<template>
  <div class="check_sample">
       <div class="content">
           <div v-for="(item,index) in checkData" :key="index" class="reportList">
                <div class="avator">
                    <img :src="item.img" alt="">
                </div>
                <div class="text">
                    <p>样本编号：{{item.code}}</p>
                    <p style="margin:0.24rem auto 0.21rem">检测项目：{{item.title}}</p>
                    
                    <p>
                        <span>受检人：{{item.name}}</span><span style="margin-left:0.8rem">{{item.sex}}</span>
                    </p>
                </div>
           </div>
           <div class="btn-back">
                <span>填写寄回信息</span>
           </div>
       </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkData: [
        {
          img:require("../assets/img/boy_report.png"),
          code: "E1222335",
          title: "美容护肤",
          name: "谢霆锋",
          sex: "男"
        },
        {
          img:require("../assets/img/girl_report.png"),
          code: "E1425335",
          title: "美容护肤",
          name: "李璐",
          sex: "女"
        }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.content {
  padding: 0.46rem 0.3rem 0 0.3rem;
}
.reportList {
  width: 6.9rem;
  height: 2.49rem;
  clear: both;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 0.25rem;
}
.avator {
  float: left;
  margin: 0.69rem 0.7rem 0.77rem 0.69rem;
}
.avator img {
  width: 0.86rem;
}
.text {
  float: right;
  font-size: 0.3rem;
  color: #312424;
  letter-spacing: 0;
  margin: 0.39rem 0.8rem 0.39rem auto;
}
.btn-back{
    overflow: hidden;
    clear: both;
    border-radius: 14px 14px 14px 14px;
    background: #ffffff;
    margin: 0 auto;
}
.btn-back span {
    float:right;
    font-size: 0.3rem;
    color: #FFFFFF;
    letter-spacing: 0;
    background: #00DBD2;
    border-radius: 100px;
    display: inline-block;
    height: 0.46rem;
    width: 2.6rem;
    margin:0.33rem 0.17rem  0.23rem auto;
    text-align: center;
}
</style>


