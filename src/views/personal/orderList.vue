<template>
  <div id="orderList">
      <!-- 没有订单消息 -->
      <div v-if="listFlag">
          <div class="bg">
              <img src="../../assets/img/Blank pages_2.png" alt="">
          </div>
          <div class="tips">
               <p>暂无订单消息</p>
               <p>去逛逛</p>
          </div>
      </div>
      <!-- 有订单消息 -->
      <div v-else>
          <ul >
              <li v-for="(item,index) in listData.categoryList" :key="index" class="orderList">
                    <div class="top">
                        <div class="title_left">
                            <span>订单编号</span>
                            <span>{{item.listCode}}</span>
                        </div>
                        <div class="title_right">{{item.state}}</div>
                    </div>
                    <ul class="content">
                        <li v-for="(value,index) in item.itemList" :key="index" class="contentList">
                            <div class="content_left">
                                 <img :src="value.img" alt="">
                            </div>
                            <div class="dec">
                                <p><span class="decName">{{value.name}}</span><span class="decNum">x{{value.num}}</span></p>
                                <p>{{value.price}}</p>
                            </div>
                        </li>
                        
                    </ul>
                    <div class="total"> 
                      <span style="padding-right:0.3rem">共{{item.itemList |totalCount}}件商品</span><span>小计价格：</span><span>{{item.itemList |totalPrice}}</span>
                    </div>
                    <div class="btn_box">
                        <p v-if="indexNum==='1'">
                            <span>取消订单</span>
                            <span>
                            订单详情
                            </span>
                            <span>
                                付款
                            </span>   
                        </p>
                        <p v-if="indexNum==='2'">
                            <span>取消订单</span>
                            <span>
                            订单详情
                            </span>
                            <span>
                              付款
                            </span>   
                        </p>
                         <p v-if="indexNum==='3' || indexNum==='5'">
                            <span>
                            开票申请
                            </span>
                            <span>
                                订单详情
                            </span>   
                        </p>
                         <p v-if="indexNum==='4'">
                          
                            <span>
                            开票申请
                            </span>
                            <span>
                               订单详情
                            </span>
                             <span>
                                查看物流
                            </span>    
                        </p>
                    </div>
              </li>
          </ul>
          
      </div>
  </div>
</template>
<script>
export default {
  props: ["listData","indexNum"],
  data() {
    return {
      listFlag: false,
    };
  },
  filters:{
      totalCount:function(value){
          let count = 0;
          for(var i=0;i<value.length;i++){
            count+=value[i].num;
            // console.log(value[i].num)
         
          }
          return count;  
      },
      totalPrice:function(value){
           let price = 0; 
           for(var i=0;i<value.length;i++){
               price+=(value[i].price*value[i].num);
            //    console.log(value[i].price*value[i].num);
           
          }
          return price;
      }
  },
  mounted() {
     console.log(this.indexNum); 
  },
  methods: {}
};
</script>
<style scoped>
#orderList {
  margin: 0.3rem;
}
.top {
  clear: both;
  overflow: hidden;
  padding: 0.29rem 0.2rem;
}
.title_left {
  float: left;
  font-size: 0.26rem;
  color: #bbbbbb;
  letter-spacing: 0;
}
.title_right {
  float: right;
  font-size: 0.26rem;
  color: #ea608c;
  letter-spacing: 0;
}
.contentList {
  overflow: hidden;
  clear: both;
  padding: 0.21rem 0 0.21rem 0.17rem;
  background: #f7f7f7;
  margin-bottom: 0.1rem;
}
.content_left {
  float: left;
  padding-right: 0.2rem;
}
.content_left img {
  width: 1.49rem;
}
.dec p:first-child {
  padding-bottom: 0.72rem;
}
.decName {
  font-size: 0.32rem;
  color: #666666;
  letter-spacing: 0;
}
.decNum {
  font-size: 0.3rem;
  float: right;
  color: #666666;
  padding-right: 0.2rem;
}
.bg {
  padding: 1.5rem 1.2rem 0.8rem 1.2rem;
}
.bg img {
  width: 5.2rem;
}
.tips {
  text-align: center;
  font-size: 0.34rem;
}
.tips p:first-child {
  font-size: 0.3rem;
  color: #949494;
}
.tips p:last-child {
  color: #15bade;
  font-size: 0.34rem;
  margin-top: 1rem;
}
.total {
  text-align: right;
  font-size: 0.3rem;
  color: #000000;
  letter-spacing: 0;
  padding: 0.11rem 0 0.3rem;
}
.total span:last-child {
  font-size: 0.3rem;
  color: #ea608c;
  letter-spacing: 0;
  padding-right: 0.2rem;
}
.btn_box {
  text-align: right;
  padding: 0.26rem 0.5rem 0.26rem 0;
}
.btn_box p span {
  font-size: 0.3rem;
  color: #ea608c;
  letter-spacing: 0;
  text-align: center;
  border: 1px solid #ea608c;
  border-radius: 1rem;
  text-align: center;
  padding: 0.08rem 0.2rem;
  display: inline-block;
}
.orderList {
  background: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 4px 0 rgba(0, 0, 0, 0.12),
    0 1px 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0.08rem;
  margin-bottom: 0.3rem;
}
</style>


