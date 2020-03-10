<template>
  <div id='converSion'>
    <TopBar2/>
    <div id="goodsDetail">
      <div id="goodsDetail-img">
        <img :src="pc_img.url" alt="" v-if="goodsDetail.app_img">
        <img :src="app_img.url" alt="" v-else>
      </div>
      <div id="goodsDetail-msg">
        <p id="goodsDetail-title">您要兑换的商品是：</p>
        <p id="goodsDetail-description">{{description}}</p>
        <div id="goodsDetail-points">
          <p id="goodsDetail-points1">原积分：<span>4000</span></p>
          <p id="goodsDetail-points2">折扣价：<span>{{points}}</span></p>
        </div>

        <div id="goodsDetail-box">商品详情</div>
      </div>
    </div>

    <div>
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名:"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
          label-align="left"
        >
        </van-field>
        <van-field
          v-model="password"
          name="密码"
          type="password"
          label="密码:"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        ></van-field>
      </van-form>
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
      goodsDetail: [],
      title: '',
      description: '',
      points: null,
      app_img: {url: ''},
      pc_img: {url: ''},
      username: '',
      password: ''
    }
  },
  created () {
    this.$store.commit('changeTitle', '兑换信息填写')
    console.log(this.$store.state.goodsID)
    this.getGoodsDetail()
  },
  methods: {
    getGoodsDetail () {
      axios({
        method: 'get',
        url: 'https://bmw1984.com/api/mulu/' + this.$store.state.goodsID + '/?format=json'
      }).then(Response => {
        this.app_img.url = 'https://bmw1984.com' + Response.data.app_img.url
        this.pc_img.url = 'https://bmw1984.com' + Response.data.pc_img.url
        this.title = Response.data.title
        this.description = Response.data.description
        this.points = Response.data.points
      })
    }
  }
}
</script>

<style>
#goodsDetail {
  width: 93%;
  margin:0 auto;
  text-align: left;
  padding-top:20px;
  overflow: hidden;
    font-size: 13px;
}
#goodsDetail-img {
  float: left;
  width: 35%;
  margin: 15px 0 0 -5px
}

#goodsDetail-img>img {
  width: 100%;
}

#goodsDetail-msg {
  float: right;
  width: 65%;
}

#goodsDetail-title {
  color: rgba(187, 131, 34, 1);
}

#goodsDetail-description {
  color: #ffffff;
    margin: 8px 0 15px 0;
}

#goodsDetail-points {
  overflow: hidden;
  margin-bottom: 10px;
}

#goodsDetail-points1 {
  float: left;
}

#goodsDetail-points1>span {
  color: #ffffff;
  text-decoration:line-through
}
#goodsDetail-points2 {
  float: right;
}

#goodsDetail-points2>span {
  color: #821218;
}

#goodsDetail-box {
  width: 80%;
  text-align: center;
  color: #ffffff;
  font-size: 16px;
  margin: 0 auto;
  border: solid 1px rgba(224, 171, 80, 1);
  border-radius: 2px;
  padding: 3px 0;
}
</style>
