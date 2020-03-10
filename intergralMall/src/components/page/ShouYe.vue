<template>
  <div id='ShouYe'>
    <TopBar/>

    <!-- banner图片 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" id="mainBanner">
      <van-swipe-item v-for="(imgBanner,index) in bannerImg" :key="index">
        <router-link :to="imgBanner.url">
          <img :src="imgBanner.src" >
        </router-link>
      </van-swipe-item>
    </van-swipe>

    <!-- 滚动通知栏 -->
    <van-notice-bar left-icon="volume" :scrollable="true" background="rgba(42, 44, 53, 1)" color="rgba(153, 152, 153, 1)" id="marger">
      <span>这是第1条信息</span>
      <span>这是第2条信息</span>
      <span>这是第3条信息</span>
      <span>这是第4条信息</span>
      <span>这是第5条信息</span>
      <span>这是第6条信息</span>
    </van-notice-bar>

    <!-- 商品展示 -->
    <van-tabs id="goodTab"
      v-model="active"
      background="rgba(21, 21, 21, 1)"
      title-active-color="rgba(181, 128, 36, 1)"
      swipeable
      swipe-threshold=5
    >
      <van-tab v-for="goods in goods" :title="goods.name" :key="goods.index" >
        <div class="goodsBox">
          <div class="goodDetail" v-for="goodData in goods.data" :key="goodData.pk" @click="toConversion(goodData.pk)">
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
      </van-tab>
      <infinite-loading :identifier="infiniteId" @infinite="infiniteHandler">
        <template slot="no-more">------------ 我可是有底线的 哇咔咔 ------------</template>
      </infinite-loading>
    </van-tabs>
    <BottomBar/>
  </div>
</template>

<script>
import TopBar from '@/components/component/TopBar'
import BottomBar from '@/components/component/BottomBar'
import axios from 'axios'
import InfiniteLoading from 'vue-infinite-loading' // 懒加载组件

const api = 'https://bmw1984.com/api/mulu'

export default {
  components: {
    TopBar,
    BottomBar,
    InfiniteLoading
  },
  data () {
    return {
      marger: '这是一条信息。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。',
      bannerImg: [
        {url: '/ChouJiang', src: require('../../assets/images/banner/banner2.png')},
        {url: '/ChouJiang', src: require('../../assets/images/banner/cgcj_banner.png')},
        {url: '/NBA', src: require('../../assets/images/banner/NBA_banner.png')}
      ],
      goods: [
        {name: '推荐', data: [], index: '0', url: '/tuijian/'},
        {name: '数码', data: [], index: '1', url: '/shuma/'},
        {name: '奖金', data: [], index: '2', url: '/jiangjin/'},
        {name: '生活', data: [], index: '3', url: '/shenghuo/'},
        {name: '奢华', data: [], index: '4', url: '/shehua/'}
      ],
      active: 0,
      page: 1,
      newsType: 'https://bmw1984.com/api/mulu/tuijian/',
      infiniteId: +new Date()
    }
  },
  methods: {
    infiniteHandler ($state) {
      axios.get(this.newsType, {
        params: {
          page: this.page,
          format: 'json'
        }
      }).then(({ data }) => {
        if (data) {
          this.page += 1
          this.goods[this.active].data.push(...data.results)
          $state.loaded()
        } else {
          $state.complete()
        }
      // eslint-disable-next-line handle-callback-err
      }).catch(error => {
        $state.complete()
      })
    },
    toConversion (id) {
      this.$router.push('/converSion')
      this.$store.state.goodsID = id
    }
  },
  watch: {
    'active': function (val) { // 通过监听active的变化来更换请求数据地址， 切换Tab时，active会跟着变化
      this.newsType = api + this.goods[val].url
      this.page = 1
      this.infiniteId += 1
      this.goods[val].data = []
    }
  }
}
</script>

<style>
#ShouYe {
  margin-bottom: 2.75rem
}
#mainBanner img {
  width: 100%;
}
#mainBanner .van-swipe__indicators {
  display: none
}
#marger {
padding: 0 10px;
height: 28px;
margin-top: -3px
}

#marger>i {
font-size: 20px;
margin-right: 5px
}

#goodTab .van-hairline--top-bottom::after {
  border-width: 0 0
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
