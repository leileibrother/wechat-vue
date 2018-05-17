import Vue from 'vue'  
import Vuex from 'vuex'  
  
Vue.use(Vuex)  
  
const state = {  
    number: 1,//商品数量
    type:'1',//产品  1是体验版  2是实用版  3是pro版
    price:0 //单个商品的价格
}  
  
const getters = {  
    getNum(state) {
        state.number = localStorage.number;
        return state.number;  
    },
    getType(state) {
        state.type = localStorage.type;
        return state.type;
    },
    getPrice(state) {
        state.price = localStorage.price;
        return state.price;
    } 
}  
  
const mutations = {  
    changeNum(state,num) {  
        localStorage.number = num;  
    },  
    changeType(state,type) {  
        localStorage.type = type;  
    },
    changePrice(state, price) {
        localStorage.price = price;
    }    
}
  
export default new Vuex.Store({  
    state,  
    getters,  
    mutations  
})  
