import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    //登录页
    {
      path: '/',
      component(resolve) {
        require(['views/login.vue'], resolve)
      },
      meta: {
        pageTitle: '登录'
      }
    },
    //首页
    {
      path: '/index',
      component(resolve) {
        require(['views/index.vue'], resolve)
      },
      meta: {
        pageTitle: '首页'
      }
    },
    //网络错误页面
    {
      path: '/error',
      component(resolve) {
        require(['views/error.vue'], resolve)
      },
      meta: {
        pageTitle: '网络错误'
      }
    },
    //款说明页
    {
      path: '/explain',
      component(resolve) {
        require(['views/explain.vue'], resolve)
      },
      meta: {
        pageTitle: '条款说明'
      }
    },
      //父子组件传值例子
      {
          path: '/example',
          component(resolve) {
              require(['views/example.vue'], resolve)
          },
          meta: {
              pageTitle: '例子'
          }
      },
    //样本绑定页面
    {
      path: '/personal/bindSample',
      component(resolve) {
        require(['views/personal/bindSample.vue'], resolve)
      },
      meta: {
        pageTitle: '样本绑定'
      }
    },
    {
      path: '/personal/bind_sample',
      component(resolve) {
        require(['views/personal/bind_sample.vue'], resolve)
      },
      meta: {
        pageTitle: '绑定样本'
      }
    },
    {
      path: '/check_sample',
      component(resolve) {
        require(['views/check_sample.vue'], resolve)
      },
      meta: {
        pageTitle: '查看样本'
      }
    },
    {
      path: '/logistics_info',
      component(resolve) {
        require(['views/logistics_info.vue'], resolve)
      },
      meta: {
        pageTitle: '绑定物流信息'
      }
    },
    //地址管理
    {
      path: '/personal/addressList',
      component(resolve) {
        require(['views/personal/addressList.vue'], resolve)
      },
      meta: {
        pageTitle: '地址管理'
      }
    },
    //添加新地址管理
    {
      path: '/personal/addAddress',
      component(resolve) {
        require(['views/personal/addAddress.vue'], resolve)
      },
      meta: {
        pageTitle: '地址管理'
      }
    },
    //我的报告
    {
      path: '/personal/reportList',
      component(resolve) {
        require(['views/personal/reportList.vue'], resolve)
      },
      meta: {
        pageTitle: '我的报告'
      }
    },
    //修改手机号
    {
      path: '/personal/modifier',
      component(resolve) {
        require(['views/personal/modifier.vue'], resolve)
      },
      meta: {
        pageTitle: '修改手机号'
      }
    },
    //订单详情页面
    {
      path: '/personal/orderDetail',
      component(resolve) {
        require(['views/personal/orderDetail.vue'], resolve)
      },
      meta: {
        pageTitle: '我的订单'
      }
    },
    //个人中心
    {
      path: '/personal/person_center',
      component(resolve) {
        require(['views/personal/person_center.vue'], resolve)
      },
      meta: {
        pageTitle: '个人中心'
      }
    },
    //填写订单
    {
      path: '/writing_order/order',
      component(resolve) {
        require(['views/writing_order/order.vue'], resolve)
      },
      meta: {
        pageTitle: '填写订单'
      }
    },
     //支付成功/失败
     {
      path: '/writing_order/payment',
      component(resolve) {
        require(['views/writing_order/payment.vue'], resolve)
      },
      meta: {
        pageTitle: '支付结果'
      }
    },
     //我的订单
     {
       path: '/personal/my_order',
      component(resolve) {
        require(['views/personal/my_order'], resolve)
      },
      meta: {
        pageTitle: '我的订单'
      }
    }
  ]
})
