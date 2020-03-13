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
          <p id="goodsDetail-points1">原积分：<span>{{points}}</span></p>
          <p id="goodsDetail-points2">折扣价：<span>{{discountPoint}}</span></p>
        </div>
        <div id="goodsDetail-box">商品详情</div>
      </div>
    </div>

    <!-- 表单 提交信息 -->
    <div id="converSion-userMsg">
      <div class="converSion-li">
        <label>*</label><span class="converSion-li-msg">用户名</span><span>:</span><input type="text" placeholder="请输入您的用户名" v-model="order.take_name">
      </div>

      <div class="converSion-li">
        <label>*</label><span class="converSion-li-msg">邮箱</span><span>:</span><input type="text" placeholder="请输入您的邮箱" v-model="order.email">
      </div>

      <div class="converSion-li">
        <label>*</label><span class="converSion-li-msg">电话</span><span>:</span><input type="text" placeholder="请输入您的电话号码" v-model="order.phone">
      </div>

      <div class="converSion-li">
        <label>*</label><span class="converSion-li-msg">微信号</span><span>:</span><input type="text" placeholder="请输入您的微信号" v-model="order.wechart">
      </div>

      <div class="converSion-li">
        <label>*</label><span class="converSion-li-msg">邮寄地址</span><span>:</span><input type="text" placeholder="请输入您的地址" v-model="order.address">
      </div>

      <div class="converSion-li" id="converSion-beizhu">
        <label style="opacity:0">*</label><span class="converSion-li-msg">备注</span><span>:</span><input type="text" placeholder="请输入您的需求" v-model="order.tips">
      </div>
    </div>
    <button id="bottom-submit1" v-if="submitBtn" @click="submitOrder(order)">提 交</button>
    <button id="bottom-submit2" v-else>您的积分不足，不足以兑换该商品</button>
  </div>
</template>

<script>
import TopBar2 from '@/components/component/TopBar2'
import axios from 'axios'
import {goodsDiscountAPI, integralDiscountAPI, submitOrderApi} from '@/axios/api'
export default {
  components: {
    TopBar2
  },
  data () {
    return {
      goodsDetail: [],
      title: '',
      description: '',
      points: Number,
      app_img: {url: ''},
      pc_img: {url: ''},
      discount: Number,
      myPoint: Number,
      submitBtn: false,
      order: {
        take_name: '',
        user_name: '',
        goods_id: Number,
        email: '',
        phone: '',
        wechart: '',
        address: '',
        tips: ''
      }
    }
  },
  created () {
    this.$store.commit('changeTitle', '兑换信息填写')
    this.getGoodsDetail()
    this.getSell()
  },
  methods: {
    getGoodsDetail () { // 根据传入ID获取此id对应的产品信息
      this.order.goods_id = this.$store.state.goodsID
      axios({
        method: 'get',
        url: 'https://bmw1984.com/api/mulu/' + this.order.goods_id + '/?format=json'
      }).then(Response => {
        this.app_img.url = 'https://bmw1984.com' + Response.data.app_img.url
        this.pc_img.url = 'https://bmw1984.com' + Response.data.pc_img.url
        this.title = Response.data.title
        this.description = Response.data.description
        this.points = Response.data.points
      })
    },

    // 获取折扣与个人积分，显示隐藏提交信息按钮
    getSell () {
      if (this.$store.state.goodsID === 300) {
        integralDiscountAPI().then(res => {
          this.discount = 1
          this.myPoint = res.total_points
          this.submitBtn = this.discountPoint >= 280 ? 1 : 0
        })
      } else {
        goodsDiscountAPI().then(res => {
          this.discount = res.discount
          this.myPoint = res.balance_common_points
          this.submitBtn = this.myPoint >= this.discountPoint ? 1 : 0 // 打折积分大于个人通用积分时提交按钮显示
        // eslint-disable-next-line handle-callback-err
        }).catch(error => {
          this.errorMsg('提交错误', 3000)
        })
      }
    },
    submitOrder (order) {
      if (this.order.take_name === '' || this.order.email === '' || this.order.phone === '' || this.order.wechart === '' || this.order.address === '') {
        this.errorMsg('请将信息填写完整', 3000)
      } else {
        submitOrderApi(order).then(res => {
          this.$notify({
            message: res.message,
            type: 'warning',
            duration: 6000,
            onClose: this.$router.push('/')
          })
        // eslint-disable-next-line handle-callback-err
        }).catch(error => {
          this.errorMsg('提交错误', 3000)
        })
      }
    },
    errorMsg (msg, time) {
      this.$notify({
        message: msg,
        type: 'warning',
        duration: time
      })
    }
  },
  computed: {
    discountPoint () { // 计算打折后兑换商品所需要的商品
      return Math.round(this.discount * this.points)
    }
  }
}
</script>

<style>

#converSion {
  margin-bottom: 2.75rem;
}

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

#converSion-userMsg {
  width: 100%;
  background-color: rgba(42, 44, 53, 1);
  margin-top: 50px;
}

.converSion-li {
  width: 93%;
  margin: 0 auto;
  height: 60px;
  line-height: 60px;
  border-bottom: 0.5px solid #151515;
  text-align: left;
}

.converSion-li>label {
  color: red;
  margin-right: 5px;
}

.converSion-li-msg {
  width: 20%;
  color: #ffffff !important;
  display: inline-block;
  font-size: 13px;
  text-align-last: justify;
}

.converSion-li>input {
  margin-left: 10px;
  width: 70%;
  border: none;
  box-sizing: border-box;
  background: transparent;
}

#bottom-submit1 {
  width: 100%;
  height: 50px;
  color: #ffffff;
  border: none;
  position: fixed;
  bottom: 0;
  left: 0;
  background: linear-gradient(rgba(181, 128, 36, 1),rgba(228, 181, 98, 1));
}

#bottom-submit2 {
  width: 100%;
  height: 50px;
  color: #f31a1a;
  border: none;
  background-color: bisque;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
