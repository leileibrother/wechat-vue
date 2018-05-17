<template>
    <div class="explain text-center">
        <div class="title"><span></span>《条款说明》</div>
        <div class="content">
          <p class="word point" ref="wordP">
          恼春风 我心因何恼春风 说不出 借酒相送 夜雨冻 雨点透射到照片中 回头似是梦 无法弹动 迷住凝望你 褪色照片中 啊 像花虽未红 如冰虽不冻 却像有无数说话 可惜我听不懂
          恼春风 我心因何恼春风 说不出 借酒相送 夜雨冻 雨点透射到照片中 回头似是梦 无法弹动 迷住凝望你 褪色照片中 啊 像花虽未红 如冰虽不冻 却像有无数说话 可惜我听不懂
          恼春风 我心因何恼春风 说不出 借酒相送 夜雨冻 雨点透射到照片中 回头似是梦 无法弹动 迷住凝望你 褪色照片中 啊 像花虽未红 如冰虽不冻 却像有无数说话 可惜我听不懂
          </p>
          <p class="text-right more">
            <span v-if="type" @click="change()">查看更多
              <i class="right"></i>
            </span>
            <span v-else @click="change()">全部收起
              <i class="up"></i>
            </span>
          </p>
        </div>
        <p class="text-left">
          <mt-checklist
            v-model="secValue"
            :options="['我已阅读并同意以上内容']">
          </mt-checklist>
          <span></span>
        </p>
        <p class="footBtn">
          <button v-if="secValue=='我已阅读并同意以上内容'" @click="go()">下一步</button>
          <button v-else style="background:#ccc;">下一步</button>
        </p>
    </div>
</template>

<script>
import { Checklist } from 'mint-ui';

export default {
  components: {
        Checklist
  },
  data () {
    return {
      secValue:['我已阅读并同意以上内容'],
      type:true
    }
  },
  mounted: function() {

  },
  methods: {
    change() {
      let curType = this.type;
      if(curType){
        this.$refs.wordP.classList.remove("point");
        this.type = !this.type;
      }else{
        this.$refs.wordP.classList.add("point");
        this.type = !this.type;
      }
    },

    go() {
      this.$router.push('/index');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.explain{padding: 0.64rem 0.3rem 0 0.3rem;}
.title{font-size:0.36rem;margin-bottom: 0.3rem;}
.content{padding:0.3rem 0.45rem;font-size:0.28rem;color:#666;text-align: justify;border: 1px solid #ccc;}
.word{margin-bottom: 0.2rem;display: -webkit-box !important;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
}
.point{-webkit-line-clamp: 7;}
.more{color:#00B4DC;}
.more i{position: relative;top: 2px;margin-left: 5px;display: inline-block;width:0.2rem;height:0.32rem;}
.more .right{background:url('../assets/img/rightArrow.png');background-size: cover;}
.more .up{background:url('../assets/img/upArrow.png');background-size: cover;width:0.32rem;height:0.2rem;top: 0px;}
.footBtn{margin-top:1rem;}
.footBtn button{width:100%;height:0.88rem;background: #00B4DC;border-radius: 100px;color:#fff;font-size:0.36rem;border: none;}
</style>