<template>
  <div id=''>
    <TopBar2></TopBar2>
    <div class="main-second-wrap">
      <div class="search-main">
        <input type="text" class="search-box" v-model="inWord" placeholder="请输入商品名称">
        <button class="search-btn" @click="SearchAgain">搜索</button>
      </div>
      <div class="recommend-wrap1">
        <div>
          <div class="goodsBox" v-if="isGet">
            <div class="goodDetail" v-for="goodData in goods" :key="goodData.pk" @click="toConversion(goodData.pk)">
              <div class="goods-img" v-if="goodData.app_img">
                <img :src="'https://bmw1984.com' + goodData.app_img.url" alt="" >
              </div>
              <div class="goods-img" v-else >
                <img :src="'https://bmw1984.com' + goodData.pc_img.url" alt="">
              </div>
              <p class="goods-title">{{goodData.title}}</p>
              <p class="goods-description">{{goodData.description}}</p>
              <p class="goods-points">{{goodData.points}} 积分</p>
            </div>
          </div>

          <div v-if="isShow">
              <p style="color:#FFFFFF">关于&nbsp;<span style="color:red">"{{ searchWord }}"</span>&nbsp;的搜索结果不存在</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar2 from '@/components/component/TopBar2'
import axios from 'axios'
export default {
  components: {
    TopBar2
  },
  data () {
    return {
      searchWord: '',
      goods: [],
      inWord: '',
      isGet: false,
      isShow: false
    }
  },
  created () {
    this.$store.commit('changeTitle', '搜索')
  },
  methods: {
    SearchAgain () {
      let _this = this
      if (_this.inWord === '') { // 输入的搜索内容为空时
        return false
      } else {
        _this.goods = []
        axios.get('https://bmw1984.com/api/mulu/?format=json&search=' + _this.inWord).then(Response => {
          for (let i = 0; i < Response.data.results.length; i++) { // 发送请求，循环将请求到的数组中的数据push到goods中，达到数据更新目的，直接接收页面无法刷新
            _this.goods.push(Response.data.results[i])
          }
          if (_this.goods.length !== 0) { // 如果返回的数组为空时，说明没有对应的数据
            _this.isGet = true
            _this.isShow = false
          } else {
            _this.isShow = true
          }
          _this.searchWord = _this.inWord
        }).catch(error => {
          console.log(error)
          this.errorMsg('商品加载出错，请联系在线客服', 3000)
        })
      }
    },
    toConversion (id) {
      this.$router.push('/converSion')
      this.$store.state.goodsID = id
    },
    errorMsg (msg, time) {
      this.$notify({
        message: msg,
        type: 'warning',
        duration: time
      })
    }
  }
}
</script>

<style>
.search-main{
    margin:16.67pt 17pt 0 16.67pt;
    height: 36.67px;
}
.search-box{
    background: #2A2C35;
    color: #ffffff;
    position: absolute;
    left: 16.67px;
    width: 70%;
    height: 36.67px;
    border: none;
    padding-left: 10px;
}
input:focus{
    outline: none;
}
.search-btn{
    font-size: 15.33px;
    width: 15%;
    height: 36.67px;
    margin-left: 16.67px;
    position: absolute;
    right: 17px;
    text-align: center;
    background: #B58024;
    color: #FFFFFF;
    border: none;
    border-radius: 0%;
    font-family: "PingFangSC";
}

.goodsBox {
  width: 95%;
  margin: 0 auto
}

.goodDetail {
  width: 49%;
  background-color: rgba(42, 44, 53, 1);
  float: left;
  margin-top: 6px;
  text-align: left;
  padding-bottom: 10px
}
.goodDetail:nth-child(2n) {
  margin-left: 6px
}

.goods-img {
  background-color: #ffffff;
  height: 13.5vh;
  text-align: center

}
.goods-img>img {
   max-width: 100%;
  max-height: 100%
}
.goodDetail>p{
  width: 90%;
  margin: 0 auto;
  text-overflow:ellipsis;
  overflow: hidden;
  margin-top: 5px;
  display:-webkit-box;
  -webkit-line-clamp:2;
  -webkit-box-orient:vertical;
}

.goods-title {
  font-weight: 800;
  color: #ffffff;
  -webkit-line-clamp:1;
  height: 1.35rem;
}

.goods-description {
    font-size: 13px;
    height: 2.2rem;
    line-height: 1.2rem;
}

.goods-points {
  color: #b58024;
  font-size: 12px;
}
</style>
