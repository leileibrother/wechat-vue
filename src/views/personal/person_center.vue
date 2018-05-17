<template>
  <div class="person_center">
        <div class="banner">
              <div class="user_icon">
                  <img v-if="sex==='male'" src="../../assets/img/nantouxiang.png" alt="" style="width:2rem">
                  <img v-else src="../../assets/img/nvtouxiang.png" alt=""  style="width:2rem">
              </div>
              <div class="number">
                   <span>1782344545</span><img @click="edit()" src="../../assets/img/bianji.png" >
              </div>
        </div>
        <div v-for="(item,index) in catergory" class="categoryList" :key="index" @click="go(item.router)">
            <div class="name">{{item.name}}</div>
            <div class="icon_right">
                <img src="../../assets/img/right.png" alt="" style="width:0.3rem">
            </div>
        </div>
        <div class="exit">退出</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      catergory: [
        {
          name:"我的订单",
          router:'/personal/my_order'
        },
        {
          name:"地址管理",
          router:'/personal/addressList'
        },
        {
          name:"我的报告",
          router:'/personal/reportList'
        },
        {
          name:"样本绑定",
          router:'/personal/bind_sample'
        },
        {
          name:"咨询客服",
          router:''
        }
      ],
      sex:"male"
    };
  },
  mounted() {},
  methods: {
    go(where) {
      if(where){
        this.$router.push(where);
      }else{
        window.location.href = 'https://1genehealth.qiyukf.com/client?k=8c9c302c3eb0f5d1439d4364115a6ab1&wp=1';
      }
    },
    edit() {
      this.$router.push('/personal/modifier');
    }
  }
};
</script>
<style scoped>
.banner {
  background: #ea608c;
  height: 3.83rem;
  text-align: center;
}
.user_icon{
   padding:0.77rem 0 0;

}
.categoryList {
  overflow: hidden;
  clear: both;
  background: #ffffff;
  height: 1.28rem;
  padding: 0.43rem 0.4rem 0.43rem 0.47rem;
  border-bottom: 0.01rem solid #ccc;
}
.name {
  float: left;
  font-size: 0.3rem;
  color: #758692;
  letter-spacing: 0;
  text-align: justify;
}
.icon_right {
  float: right;
}
.exit {
  background: #EA608C;
  border-radius: 1rem;
  height: 0.88rem;
  margin: 0.3rem 0.47rem auto 0.47rem;
  font-size: 0.36rem;
  color: #ffffff;
  letter-spacing: 0.01rem;
  text-align: center;
  line-height: 0.88rem;
}
.number{
    font-size: 0.3rem;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    padding: 0.29rem 0 0.35rem;
}
.number img{
    width: 0.28rem;
    margin-left:0.2rem;
}
</style>


