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
        <span id="luckChance">您还有0次机会</span>
        <ul id="luckBegin">
          <li class="luckNum">
            <ul class="luckNumBox" >
              <li class="luckpic" :style="numHeight" v-for="(numData,index) in numData" :key="index">{{numData}}</li>
            </ul>
          </li>
          <li class="luckNum">
                        <ul class="luckNumBox" >
              <li class="luckpic" :style="numHeight" v-for="(numData,index) in numData" :key="index">{{numData}}</li>
            </ul>
          </li>
          <li class="luckNum">
                        <ul class="luckNumBox" >
              <li class="luckpic" :style="numHeight" v-for="(numData,index) in numData" :key="index">{{numData}}</li>
            </ul>
          </li>
        </ul>
        <button id="luckBt" @click="luckBtn">抽 奖</button>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar2 from '@/components/component/TopBar2'
import $ from 'jquery'
export default {
  components: {
    TopBar2
  },
  data () {
    return {
      numData: [
        1, 2, 3, 4, 5,
        1, 2, 3, 4, 5,
        1, 2, 3, 4, 5,
        1, 2, 3, 4, 5,
        1, 2, 3, 4, 5,
        1, 2, 3, 4, 5,
        1, 2, 3, 4, 5,
        1, 2, 3, 4, 5,
        1, 2, 3, 4, 5,
        1, 2, 3, 4, 5,
        1, 2, 3, 4, 5
      ],
      numHeight: {
        height: ''
      },
      liHnum: null
    }
  },
  created () {
    this.$store.commit('changeTitle', '幸运大抽奖')
  },
  mounted () {
  },
  methods: {
    luckBtn () {
      let numarr = [1, 2, 3]
      let _this = this
      _this.getHeight()
      $('.luckNumBox').each(function (index) {
        let _num = $(this)
        setTimeout(() => {
          // _this.moveNum.top = '-84px'
          _num.animate({
            top: -(10 * 5 * _this.liHnum + numarr[index] * _this.liHnum - _this.liHnum) + 'px' // 第一个数字代表转动圈数，第二个代表的是抽奖的选项个数
          }, {
            duration: 6000 // 多长时间内完成动画
          }
          )
        }, index * 300)
      })
    },
    getHeight () { // 获取并且设置li高度
      let numBoxheight = document.getElementById('luckBegin')
      this.numHeight.height = numBoxheight.offsetHeight + 'px' // 获取带px的高度，设置高度
      this.liHnum = numBoxheight.offsetHeight // 获取不带px高度，为后面转动相加做准备
    }
  }
}
</script>

<style>

#ChouJiang {
  position: relative;
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
</style>
