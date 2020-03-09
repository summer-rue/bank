<template>
  <div id='ChouJiang'>
    <TopBar2/>
    <img src="../../assets/images/luck/luckbg.png" alt="" id="luckbg">
    <div id="ChouJiangBox">
      <div id="ChouJiangMsg">
        <b>活动详情</b>
        <p>应广大会员强烈要求，宝马会特将十一活动【开宝箱、领奖金】设置为日常优惠活动，任何会员只要每天投注额≥6000元，即可在次日14：00后参与【开宝箱、领奖金】活动，宝箱中奖率为100%，最高单笔奖金可达66666元</p>
      </div>

      <div id="luck">
        <img src="../../assets/images/luck/luckturnBtn.png" alt="" id="luckturnBg">
        <span id="luckChance">您还有{{chance}}次机会</span>
        <ul id="luckBegin">
          <li class="luckNum">
            <ul class="luckNumBox" >
              <li class="luckpic" :style="numHeight" v-for="(numData,index) in numData" :key="index"><img :src="numData" alt=""></li>
            </ul>
          </li>
          <li class="luckNum">
            <ul class="luckNumBox" >
              <li class="luckpic" :style="numHeight" v-for="(numData,index) in numData" :key="index"><img :src="numData" alt=""></li>
            </ul>
          </li>
          <li class="luckNum">
            <ul class="luckNumBox" >
              <li class="luckpic" :style="numHeight" v-for="(numData,index) in numData" :key="index"><img :src="numData" alt=""></li>
            </ul>
          </li>
        </ul>
        <button id="luckBt" @click="luckBtn" :disabled="luckBtnTf">抽 奖</button>
      </div>
    </div>

    <!-- 中奖信息遮罩层 -->
    <div id="resBox" v-if="btnTf">
      <img src="../../assets/images/luck/blockres.png" alt="">
      <p id="resBox-msg1"><b>{{resNum}}</b>元</p>
      <p id="resBox-msg2">恭喜您获得{{resNum}}元奖金</p>
      <p id="resBox-msg3">请在我的账户里查看</p>
      <div id="resBox-closeBtn" @click="btnTf = !btnTf"></div>
    </div>

    <div id="resMsg">
      <p>中奖公告</p>
      <div class="swiper-container">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(rulingMsg, item) in rulingMsg" :key="item" class="resMsg-li">
                <div class="resMsg-li-tx"><img src="../../assets/images/luck/tx.png" alt="" class="resMsg-li-tx"></div>
                <div class="resMsg-li-txt"><span>{{rulingMsg.letter}}</span></div>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div id="luckRule">
      <b>活动规则</b>
      <p>1、每天所有会员总投注额的千分之一将会被纳入总奖池内，作为会员当日抽奖的奖励金额；</p>
      <p>2、任意会员每次抽奖的奖励金额均为随机，单笔奖金的最低金额为6元，最高金额为66666元，中奖率100%；</p>
      <p>3、会员前一天的投注额越高，则次日参与抽奖时，中得大奖的几率也会越高；</p>
      <p>4、该活动每天只能抽奖一次，每次换取抽奖机会的6000元投注额可在任意游戏内产生（彩票游戏除外）；</p>
      <p>5、奖金只需完成1倍流水即可提款，可投注任意游戏（彩票游戏除外）。</p>
    </div>
  </div>
</template>

<script>
import TopBar2 from '@/components/component/TopBar2'
import $ from 'jquery'
import { luckChaceApi, luckResApi, luckRulingApi } from '@/axios/api'
export default {
  components: {
    TopBar2
  },
  data () {
    return {
      rulingMsg: [],
      numData: [
        require('@/assets/images/luck/logo.png'),
        require('@/assets/images/luck/6.png'),
        require('@/assets/images/luck/10.png'),
        require('@/assets/images/luck/20.png'),
        require('@/assets/images/luck/30.png'),
        require('@/assets/images/luck/50.png'),
        require('@/assets/images/luck/60.png'),
        require('@/assets/images/luck/100.png'),
        require('@/assets/images/luck/200.png'),
        require('@/assets/images/luck/300.png'),
        require('@/assets/images/luck/600.png'),
        require('@/assets/images/luck/1000.png'),
        require('@/assets/images/luck/logo.png'),
        require('@/assets/images/luck/6.png'),
        require('@/assets/images/luck/10.png'),
        require('@/assets/images/luck/20.png'),
        require('@/assets/images/luck/30.png'),
        require('@/assets/images/luck/50.png'),
        require('@/assets/images/luck/60.png'),
        require('@/assets/images/luck/100.png'),
        require('@/assets/images/luck/200.png'),
        require('@/assets/images/luck/300.png'),
        require('@/assets/images/luck/600.png'),
        require('@/assets/images/luck/1000.png'),
        require('@/assets/images/luck/logo.png'),
        require('@/assets/images/luck/6.png'),
        require('@/assets/images/luck/10.png'),
        require('@/assets/images/luck/20.png'),
        require('@/assets/images/luck/30.png'),
        require('@/assets/images/luck/50.png'),
        require('@/assets/images/luck/60.png'),
        require('@/assets/images/luck/100.png'),
        require('@/assets/images/luck/200.png'),
        require('@/assets/images/luck/300.png'),
        require('@/assets/images/luck/600.png'),
        require('@/assets/images/luck/1000.png'),
        require('@/assets/images/luck/logo.png'),
        require('@/assets/images/luck/6.png'),
        require('@/assets/images/luck/10.png'),
        require('@/assets/images/luck/20.png'),
        require('@/assets/images/luck/30.png'),
        require('@/assets/images/luck/50.png'),
        require('@/assets/images/luck/60.png'),
        require('@/assets/images/luck/100.png'),
        require('@/assets/images/luck/200.png'),
        require('@/assets/images/luck/300.png'),
        require('@/assets/images/luck/600.png'),
        require('@/assets/images/luck/1000.png'),
        require('@/assets/images/luck/logo.png'),
        require('@/assets/images/luck/6.png'),
        require('@/assets/images/luck/10.png'),
        require('@/assets/images/luck/20.png'),
        require('@/assets/images/luck/30.png'),
        require('@/assets/images/luck/50.png'),
        require('@/assets/images/luck/60.png'),
        require('@/assets/images/luck/100.png'),
        require('@/assets/images/luck/200.png'),
        require('@/assets/images/luck/300.png'),
        require('@/assets/images/luck/600.png'),
        require('@/assets/images/luck/1000.png'),
        require('@/assets/images/luck/logo.png'),
        require('@/assets/images/luck/6.png'),
        require('@/assets/images/luck/10.png'),
        require('@/assets/images/luck/20.png'),
        require('@/assets/images/luck/30.png'),
        require('@/assets/images/luck/50.png'),
        require('@/assets/images/luck/60.png'),
        require('@/assets/images/luck/100.png'),
        require('@/assets/images/luck/200.png'),
        require('@/assets/images/luck/300.png'),
        require('@/assets/images/luck/600.png'),
        require('@/assets/images/luck/1000.png'),
        require('@/assets/images/luck/logo.png'),
        require('@/assets/images/luck/6.png'),
        require('@/assets/images/luck/10.png'),
        require('@/assets/images/luck/20.png'),
        require('@/assets/images/luck/30.png'),
        require('@/assets/images/luck/50.png'),
        require('@/assets/images/luck/60.png'),
        require('@/assets/images/luck/100.png'),
        require('@/assets/images/luck/200.png'),
        require('@/assets/images/luck/300.png'),
        require('@/assets/images/luck/600.png'),
        require('@/assets/images/luck/1000.png'),
        require('@/assets/images/luck/logo.png'),
        require('@/assets/images/luck/6.png'),
        require('@/assets/images/luck/10.png'),
        require('@/assets/images/luck/20.png'),
        require('@/assets/images/luck/30.png'),
        require('@/assets/images/luck/50.png'),
        require('@/assets/images/luck/60.png'),
        require('@/assets/images/luck/100.png'),
        require('@/assets/images/luck/200.png'),
        require('@/assets/images/luck/300.png'),
        require('@/assets/images/luck/600.png'),
        require('@/assets/images/luck/1000.png'),
        require('@/assets/images/luck/logo.png'),
        require('@/assets/images/luck/6.png'),
        require('@/assets/images/luck/10.png'),
        require('@/assets/images/luck/20.png'),
        require('@/assets/images/luck/30.png'),
        require('@/assets/images/luck/50.png'),
        require('@/assets/images/luck/60.png'),
        require('@/assets/images/luck/100.png'),
        require('@/assets/images/luck/200.png'),
        require('@/assets/images/luck/300.png'),
        require('@/assets/images/luck/600.png'),
        require('@/assets/images/luck/1000.png'),
        require('@/assets/images/luck/logo.png'),
        require('@/assets/images/luck/6.png'),
        require('@/assets/images/luck/10.png'),
        require('@/assets/images/luck/20.png'),
        require('@/assets/images/luck/30.png'),
        require('@/assets/images/luck/50.png'),
        require('@/assets/images/luck/60.png'),
        require('@/assets/images/luck/100.png'),
        require('@/assets/images/luck/200.png'),
        require('@/assets/images/luck/300.png'),
        require('@/assets/images/luck/600.png'),
        require('@/assets/images/luck/1000.png'),
        require('@/assets/images/luck/logo.png'),
        require('@/assets/images/luck/6.png'),
        require('@/assets/images/luck/10.png'),
        require('@/assets/images/luck/20.png'),
        require('@/assets/images/luck/30.png'),
        require('@/assets/images/luck/50.png'),
        require('@/assets/images/luck/60.png'),
        require('@/assets/images/luck/100.png'),
        require('@/assets/images/luck/200.png'),
        require('@/assets/images/luck/300.png'),
        require('@/assets/images/luck/600.png'),
        require('@/assets/images/luck/1000.png')
      ],
      luckBtnTf: false,
      numHeight: {
        height: ''
      },
      liHnum: null,
      chance: 1,
      res: [],
      numarr: [],
      resNum: null,
      btnTf: false,
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 5,
        loop: true,
        freeMode: true,
        autoplay: {
          delay: 2000
        }
      }
    }
  },
  created () {
    this.$store.commit('changeTitle', '幸运大抽奖')
    // this.getChance()
    this.getRrlling()
  },
  methods: {
    // 抽奖开始
    luckBtn () {
      let _this = this
      if (_this.chance === 0) { // 抽奖次数为0时 弹出错误信息
        this.errorMsg('很抱歉，您的抽奖次数为0。无法参与抽奖', 2500)
      } else { // 有抽奖机会，则开始抽奖
        _this.luckBtnTf = true // 转动时禁用按钮
        _this.chance -= 1

        // 请求规则信息
        luckResApi().then(res => {
          // 处理收到的规则信息，然后根据处理后的信息启动抽奖，反馈出结果
          // this.res = res.result
          this.res = [0, 100, 1000]
          this.computedRes()
          // 请求完成后再执行转动事件
          this.luckTurn()
          this.resMsg() // 抽奖结果计算,弹出结果
        }).catch(error => {
          this.errorMsg(error, 5000)
        })
      }
    },
    // 抽奖次数获取
    getChance () {
      luckChaceApi().then(res => {
        this.chance = res.chance
      })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          if (Response.status === 401) {
            this.errorMsg('您还未登录,请点击“我的”登录后进行', 5000)
          } else {
            this.errorMsg('提交错误，请在线联系客服', 5000)
          }
        })
    },
    // 抽奖动画，动起来
    luckTurn () {
      let _this = this
      _this.getHeight()
      $('.luckNumBox').each(function (index) {
        let _num = $(this)
        setTimeout(() => {
          _num.animate({
            top: -(10 * 11 * _this.liHnum + _this.numarr[index] * _this.liHnum - 2 * _this.liHnum) + 'px' // 第一个数字代表转动圈数，第二个代表的是抽奖的选项个数
          }, {
            duration: 6999 // 多长时间内完成动画
          }
          )
        }, index * 300)
      })
    },

    // 获取并且设置li高度
    getHeight () {
      let numBoxheight = document.getElementById('luckBegin')
      this.numHeight.height = numBoxheight.offsetHeight + 'px' // 获取带px的高度，设置高度
      this.liHnum = numBoxheight.offsetHeight // 获取不带px高度，为后面转动相加做准备
    },

    // 将请求到的信息转化为转动信息
    computedRes () {
      let _this = this
      function sentence (num) {
        switch (num) {
          case 0:
            num = 0
            break
          // eslint-disable-next-line no-duplicate-case
          case 6:
            num = 1
            break

          case 10:
            num = 2
            break

          case 20:
            num = 3
            break

          case 300:
            num = 4
            break

          case 50:
            num = 5
            break

          case 60:
            num = 6
            break

          case 100:
            num = 7
            break

          case 200:
            num = 8
            break

          // eslint-disable-next-line no-duplicate-case
          case 300:
            num = 9
            break

          case 600:
            num = 10
            break

          case 1000:
            num = 11
            break
        }
        return num
      }
      for (let i = 0; i < 3; i++) {
        _this.numarr.push(sentence(_this.res[i]))
      }
    },

    // 计算出中奖结果,结果弹出
    resMsg () {
      let _this = this
      _this.resNum = _this.res[0] + _this.res[1] + _this.res[2]
      setTimeout(
        function () {
          _this.btnTf = true
          _this.luckBtnTf = false // 动画完成后解禁抽奖按钮
        }, 7850
      )
    },
    // 中奖信息请求
    getRrlling () {
      luckRulingApi().then(res => {
        this.rulingMsg = res.results
      })
    },
    // 弹出结果框的显示隐藏
    // 错误信息弹出
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

#ChouJiang {
  position: relative;
  background:#f67b0d transparent
}
#luckbg {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

#ChouJiangBox {
  width: 93%;
  margin: 0 auto;
  padding: 10px 0 0 0;
}

#ChouJiangMsg {
  text-align: left;
  color: #ffffff;
}

#ChouJiangMsg>p {
  font-size: 12px;
  line-height: 18px;
  color: rgba(251, 227, 139, 1);
  margin: 5px 0;
}

#luckturnBg {
  width: 100%;
}

#luck {
  margin-top: 10px;
  position: relative;
}

#luckChance {
  position: absolute;
  top: 11%;
  left: 35%;
  color:rgba(198, 57, 63, 1)
}

#luckBt {
  width: 53.8%;
  height: 12.5%;
  position: absolute;
  top:68.5%;
  left: 23%;
  color: rgba(199, 47, 26, 1);
  font-weight: 600;
  border: none;
  border-radius: 2px;
  box-sizing: border-box;
  background: linear-gradient(rgba(255, 225, 141, 1),rgba(229, 171, 33, 1));
}

#luckBegin {
  width: 67%;
  height: 26%;
  position: absolute;
  top: 30%;
  left: 16.5%;
}

.luckNum {
  float: left;
  margin-right: 2px;
  width: 32.1%;
  height: 100%;
  overflow: hidden;
}

.luckNumBox {
  width: 100%;
  position: relative;
}
.luckpic {
  color: #ffffff;
  font-size: 1.5rem;
}

.luckpic>img {
  width: 100%;
}

#resBox {
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  z-index: 1;
}

#resBox>img{
  width: 100%;
}

#resBox-msg1 {
  position: absolute;
  top:31%;
  color: rgba(181, 22, 0, 1);
  width: 100%;
  text-align: center;
}

#resBox-msg1>b {
  font-size: 30px;
}

#resBox-msg2 {
  position: absolute;
  top:45%;
  width: 100%;
  text-align: center;
  font-size: 15px;
  color: rgba(255, 200, 130, 1);
}

#resBox-msg3 {
  position: absolute;
  top:50%;
  width: 100%;
  text-align: center;
  font-size: 12px;
  color:rgba(236, 100, 82, 1);
}

#resBox-closeBtn {
  position: absolute;
  top:23%;
  left: 69%;
  width: 9%;
  height: 6%;
}

#resMsg {
  width: 93%;
  margin:0 auto;
  background-color:rgba(249, 199, 74, 1) ;
  padding: 6px 6px 15px 6px;
  border-radius: 8px;
}

#resMsg>p {
  width: 100%;
  text-align: left;
  margin-bottom: 6px;
  color: #ffffff;
}
.resMsg-li {
  background-color: bisque;
  border-radius: 55px;
}

.resMsg-li-tx {
  float: left;
  width: 20%;
  margin: 0 0 0 2px;
}

.resMsg-li-tx>img {
  width: 100%;
}

.resMsg-li-txt {
  float: left;
  width: 70%;
  color: rgba(165, 7, 23, 1);
  font-size: 13px;
  margin-left: 5px ;
  text-align: left;
}

#luckRule {
  width: 93%;
  margin: 0 auto;
  margin-top: 20px;
  background-color: rgba(249, 199, 74, 1);
  text-align: left;
  padding: 10px 5px;
  border-radius: 8px;
}

#luckRule>b {
  color: #ffffff;
}

#luckRule>p {
  color: rgba(201, 70, 58, 1);
  font-size: 13px;
  line-height: 20px;
}
/*swiper显示层*/
.swiper-container{
  z-index: 0;
}
</style>
