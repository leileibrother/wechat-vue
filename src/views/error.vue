<template>
    <div class="addressList">
        <div class="empty text-center">
            <img src="../assets/img/Blank pages_7.png">
            <p class="tip">竟然网络崩溃了</p>
            <p>可紧张，试试看刷新页面</p>
        </div>
        <p class="add text-center">
            <button @click="refresh()">刷新</button>
        </p>
    </div>
</template>

<script>

export default {

    data () {
        return {
            
        }
    },
    mounted: function() {
    },
    methods: {
        refresh() {

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.addressList{padding-bottom:0.5rem;font-size:14px;color: #000000;}
.add{margin-top:0.9rem;}
.add button{width:4rem;height:0.88rem;background: #00B3DC;border-radius: 100px;font-size:0.36rem;color: #FFFFFF;border:1px solid #00B3DC;}
.empty{padding-top:1.5rem;font-size:0.3rem;color:#666;}
.empty img{height:3.15rem;margin-bottom:0.5rem;}
.tip{font-size:0.36rem;color:#EA608C;margin-bottom:0.2rem;}
</style>