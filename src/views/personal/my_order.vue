<template>
  <div class="my_order">
      <div class="tabSwitch">
          <mt-navbar v-model="selected">
                <mt-tab-item id="1">全部</mt-tab-item>
                <mt-tab-item id="2">待付款</mt-tab-item>
                <mt-tab-item id="3">待发货</mt-tab-item>
                <mt-tab-item id="4">已发货</mt-tab-item>
                <mt-tab-item id="5">报告已出</mt-tab-item>
          </mt-navbar>
          <div v-if="!listFlag">
               <OrderList></OrderList>
          </div>
          <div v-else>
               <mt-tab-container v-model="selected">
                    <mt-tab-container-item id="1" >
                        <OrderList :listData="allData" :indexNum="selected"></OrderList>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="2">
                        <!-- <mt-cell v-for="n in 4" :title="'待付款 ' + n" :key="n" /> -->
                        <OrderList :listData="no_pay" :indexNum="selected"></OrderList>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="3">
                        <!-- <mt-cell v-for="n in 6" :title="'待发货 ' + n" :key="n" /> -->
                        <OrderList :listData="no_send" :indexNum="selected"></OrderList>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="4">
                        <!-- <mt-cell v-for="n in 6" :title="'已发货 ' + n" :key="n" /> -->
                         <OrderList :listData="send" :indexNum="selected"></OrderList>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="5">
                        <!-- <mt-cell v-for="n in 6" :title="'报告已出 ' + n" :key="n" /> -->
                        <OrderList :listData="report_send" :indexNum="selected"></OrderList>
                    </mt-tab-container-item>
               </mt-tab-container>
          </div>
         
      </div>
  </div>
</template>
<script>
import { Navbar, TabItem } from "mint-ui";
import OrderList from "./orderList.vue";
export default {
  data() {
    return {
      selected: "1",
      listFlag: true, //默认订单消息为空
      //未支付
      no_pay: {
        categoryList: [
          {
            listCode: "11111111111",
            state: "待付款",
            itemList: [
              {
                img: require("../../assets/img/test1.jpg"),
                name: "易长安肠癌早起筛查",
                num: 2,
                price: 520
              },
              {
                img: require("../../assets/img/test2.jpg"),
                name: "易长安肠癌早起筛查",
                num: 2,
                price: 520
              }
            ]
          },
          {
            listCode: "11111111112",
            state: "待付款",
            itemList: [
              {
                img: require("../../assets/img/test1.jpg"),
                name: "易长安肠癌早起筛查",
                num: 3,
                price: 1000
              }
            ]
          }
        ]
      },
      //待发货
      no_send: {
        categoryList: [
          {
            listCode: "11111111111",
            state: "待发货",
            itemList: [
              {
                img: require("../../assets/img/test1.jpg"),
                name: "易长安肠癌早起筛查",
                num: 2,
                price: 520
              },
              {
                img: require("../../assets/img/test2.jpg"),
                name: "易长安肠癌早起筛查",
                num: 2,
                price: 520
              }
            ]
          },
          {
            listCode: "11111111112",
            state: "待发货",
            itemList: [
              {
                img: require("../../assets/img/test1.jpg"),
                name: "易长安肠癌早起筛查",
                num: 3,
                price: 1000
              }
            ]
          }
        ]
      },
      //已发货
      send: {
        categoryList: [
          {
            listCode: "11111111111",
            state: "已发货",
            itemList: [
              {
                img: require("../../assets/img/test1.jpg"),
                name: "易长安肠癌早起筛查",
                num: 2,
                price: 520
              },
              {
                img: require("../../assets/img/test2.jpg"),
                name: "易长安肠癌早起筛查",
                num: 2,
                price: 520
              }
            ]
          },
          {
            listCode: "11111111112",
            state: "已发货",
            itemList: [
              {
                img: require("../../assets/img/test1.jpg"),
                name: "易长安肠癌早起筛查",
                num: 3,
                price: 1000
              }
            ]
          }
        ]
      },
      //报告已出
      report_send: {
        categoryList: [
          {
            listCode: "11111111111",
            state: "报告已出",
            itemList: [
              {
                img: require("../../assets/img/test1.jpg"),
                name: "易长安肠癌早起筛查",
                num: 2,
                price: 520
              },
              {
                img: require("../../assets/img/test2.jpg"),
                name: "易长安肠癌早起筛查",
                num: 2,
                price: 520
              }
            ]
          },
          {
            listCode: "11111111112",
            state: "报告已出",
            itemList: [
              {
                img: require("../../assets/img/test1.jpg"),
                name: "易长安肠癌早起筛查",
                num: 3,
                price: 1000
              }
            ]
          }
        ]
      },
      allData: {
        categoryList: [
          {
            listCode: "11111111111",
            state: "报告已出",
            itemList: [
              {
                img: require("../../assets/img/test1.jpg"),
                name: "易长安肠癌早起筛查",
                num: 2,
                price: 520
              },
              {
                img: require("../../assets/img/test2.jpg"),
                name: "易长安肠癌早起筛查",
                num: 2,
                price: 520
              }
            ]
          },
          {
            listCode: "11111111112",
            state: "报告已出",
            itemList: [
              {
                img: require("../../assets/img/test1.jpg"),
                name: "易长安肠癌早起筛查",
                num: 3,
                price: 1000
              }
            ]
          }
        ]
      }
    };
  },
  methods: {},
  mounted() {
    //   if(this.no_pay){
    //      this.allData.push(this.no_pay);
    //   }
    //   if(this.no_send){
    //      this.allData.push(this.no_send);
    //   }
    //    if(this.send){
    //      this.allData.push(this.send);
    //   }
    //    if(this.report_send){
    //      this.allData.push(this.report_send);
    //   }
    console.log(this.selected);
  },
  components: {
    OrderList
  }
};
</script>
<style scoped>
.tabSwitch {
  background: #fff;
  min-height: 100vh;
}
</style>


