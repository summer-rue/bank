<template>
  <div id='PersoNal'>
    <TopBar/>
    <img src="../../assets/images/PersoNal/personBg.png" alt="" id="personBg">
    <div id="personMsg">
      <img src="../../assets/images/PersoNal/person.jpg" alt="" id="person">
      <p id="personName">{{firstName + lastName}} <span @click="logout"> 登出</span></p>
      <img :src="level_img[shopLeve]" alt="" id="personLeve">
      <p id="personPoints"><span>通用积分： </span><b>{{balance_common_points}}</b><span id="justShu">丨</span><span>签到积分： </span><b>{{total_points}}</b></p>
    </div>

    <div id="singDayBox">
      <div id="singDaySmallBox">
        <div id="singDay">
          <div class="singDay-msg" v-for="(singData,index) in singData" :key="index">
            <p class="singDay-poiont">+{{singData[1]}}</p>
            <div class="singDay-gou1" v-if="singData[1] !=0 "><van-icon name="success" /></div>
            <div class="singDay-gou2" v-else><van-icon name="success" /></div>
            <div for="" class="singDay-line1" v-if="singData[1] !=0 "></div>
            <div for="" class="singDay-line2" v-else></div>
            <p class="singDay-day" >{{singData[0]}}</p>
          </div>
        </div>
        <div id="singDayPointMsg">
          <span id="singDayPointMsg-left">已连续签到{{continuity_days}}天</span>
          <span id="singDayPointMsg-right" v-if="tomorrowPoint != 0">明日签到可领取{{tomorrowPoint}}积分</span>
          <span id="singDayPointMsg-right" v-else>今日签到可领取{{todayPoint}}积分</span>
        </div>
        <button id="singDay-btn" @click="singDatBtn" v-html="singBtnMsg" :disabled="btnTF" :style="btnStyle"></button>
      </div>
    </div>

    <div id="personRules">
      <router-link to='/mingxi'>
        <div class="personRules-li">
        <span class="personRules-li-1" ><van-icon name="label-o" /></span>
        <span class="personRules-li-2" >积分明细</span>
        <span class="personRules-li-3" ><van-icon name="arrow" /></span>
      </div>
      </router-link>

      <router-link to='/duihuanjilu'>
        <div class="personRules-li">
        <span class="personRules-li-1" ><van-icon name="edit" /></span>
        <span class="personRules-li-2" >兑换记录</span>
        <span class="personRules-li-3" ><van-icon name="arrow" /></span>
      </div>
      </router-link>

      <router-link to='/guanyujifen'>
        <div class="personRules-li">
        <span class="personRules-li-1" ><van-icon name="points" /></span>
        <span class="personRules-li-2" >关于积分</span>
        <span class="personRules-li-3" ><van-icon name="arrow" /></span>
      </div>
      </router-link>

      <router-link to='yiwen'>
        <div class="personRules-li">
        <span class="personRules-li-1" ><van-icon name="question-o" /></span>
        <span class="personRules-li-2" >常见疑问</span>
        <span class="personRules-li-3" ><van-icon name="arrow" /></span>
      </div>
      </router-link>

      <router-link to='/guize'>
        <div class="personRules-li">
        <span class="personRules-li-1" ><van-icon name="notes-o" /></span>
        <span class="personRules-li-2" >规则与条款</span>
        <span class="personRules-li-3" ><van-icon name="arrow" /></span>
      </div>
      </router-link>
    </div>
    <BottomBar/>
  </div>
</template>

<script>
import TopBar from '@/components/component/TopBar'
import BottomBar from '@/components/component/BottomBar'
import {personalApi1, personalApi2, personalApi3, singMsgApi} from '@/axios/api'
export default {
  components: {
    TopBar,
    BottomBar
  },
  data () {
    return {
      firstName: '',
      lastName: '',
      btnTF: false,
      singBtnMsg: '签 到',
      balance_common_points: null,
      total_points: null,
      continuity_days: null,
      shopLeve: null,
      singData: [],
      todayPoint: null,
      tomorrowPoint: null,
      level_img: [
        require('@/assets/images/persoNal/pt.png'),
        require('@/assets/images/persoNal/hj.png'),
        require('@/assets/images/persoNal/bj.png'),
        require('@/assets/images/persoNal/zs.png'),
        require('@/assets/images/persoNal/zz.png'),
        require('@/assets/images/persoNal/wz.png'),
        require('@/assets/images/persoNal/ty.png')
      ],
      btnStyle: {
        color: '#ffffff',
        background: 'linear-gradient(rgba(255, 225, 141, 1),rgba(229, 171, 33, 1))'
      }
    }
  },
  created () {
    this.getPersonMsg()
  },
  methods: {
    getPersonMsg () {
      personalApi1().then(res => {
        this.firstName = res.first_name
        this.lastName = res.last_name
      })
      // eslint-disable-next-line handle-callback-err
        .catch(error => {
          this.errorMsg('签到信息获取错误，请联系在线客服', 5000)
        })
      personalApi2().then(res => {
        this.balance_common_points = res.balance_common_points
        this.shopLeve = res.shop_level
      })
      // eslint-disable-next-line handle-callback-err
        .catch(error => {
          this.errorMsg('签到信息获取错误，请联系在线客服', 5000)
        })
      personalApi3().then(res => {
        if (res.status === 201) {
          this.btnTF = true
          this.singBtnMsg = '已签到'
          this.btnStyle.color = '#000'
          this.btnStyle.background = '#ffffff'
        }
        this.singData = res.data
        this.total_points = res.total_points
        this.continuity_days = res.continuity_days
        this.todayPoint = res.today
        this.tomorrowPoint = res.tomorrow
      })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          this.errorMsg('签到信息获取错误，请联系在线客服', 5000)
        })
    },
    singDatBtn () { // 签到按钮
      // 发送post请求
      singMsgApi().then(res => {
        this.btnTF = true
        this.singBtnMsg = '已签到'
        this.btnStyle.color = '#000'
        this.btnStyle.background = '#ffffff'
        this.singData = res.data
        this.total_points = res.total_points
        this.continuity_days = res.continuity_days
        this.tomorrowPoint = res.tomorrow
      })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          this.errorMsg('签到出错，请联系在线客服', 5000)
        })
    },

    // 登出
    logout () {
      localStorage.removeItem('token')
      this.$router.push('/')
    },

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

#PersoNal {
  margin-bottom: 2.75rem
}
#personBg {
  width: 100%;
  position: absolute;
  top: 2.75rem;
  left: 0;
  z-index: -1;
}
#personMsg {
  color: #ffffff;
  margin-top: 16%;
}
#person {
  width: 25%;
  border-radius: 50%;
}
#personName>span {
  color: rgba(231, 174, 75, 1);
  font-size: 12px
}
#personLeve {
  margin: 8px 0 0 0;
  width: 25%;
}
#personPoints {
  font-size: 13px;
  margin: 10px 0
}

#personPoints>span {
  color: rgba(102, 102, 102, 1);
}

#justShu {
  margin: 0 20px
}

#singDayBox {
  width: 100%;
  padding: 15px 0;
  background-color: rgba(42, 44, 53, 1)
}

#singDaySmallBox {
  width: 95%;
  margin: 0 auto
}
.singDay-msg {
  display:inline-block;
  width: 12%;
  text-align: left
}

.singDay-gou1 {
  width: 13px;
  height: 13px;
  font-size: 4px;
  border: none;
  border-radius: 50%;
  /*  */
  color: rgba(102, 102, 102, 1);
  background-color: rgba(181, 128, 36, 1)
}

.singDay-line1 {
  width: 90%;
  height: 2.8px;
  background-color: rgba(181, 128, 36, 1);
  margin-top: -8px;
  margin-left: 13px
}

.singDay-gou2 {
  width: 13px;
  height: 13px;
  font-size: 4px;
  border: none;
  border-radius: 50%;
  /*  */
  color: rgba(102, 102, 102, 1);
  background-color: rgba(52, 54, 61, 1)
}

.singDay-line2 {
  width: 90%;
  height: 2.8px;
  background-color: rgba(52, 54, 61, 1);
  margin-top: -8px;
  margin-left: 13px
}

.singDay-poiont {
  font-size: 10px;
  margin-bottom: 5px
}

.singDay-day {
  margin-top:10px;
  font-size: 10px;
  margin-left: -8px
}

#singDayPointMsg{
  margin-top: 10px;
  font-size: 12px;
  color: rgba(102, 102, 102, 1)
}

#singDayPointMsg-left {
  float: left;
    margin-left: 5px;
}

#singDayPointMsg-right {
  float:right;
  margin-right: 5px;
  color: rgba(181, 128, 36, 1);
}

#singDay-btn {
  margin-top: 15px;
  width: 70%;
  height: 1.8rem;
  border: none;
  border-radius: 3px;
  box-sizing: border-box;
  }

#personRules {
  margin-top: 15px;
  padding: 0 10px;
  background: rgba(42, 44, 53, 1)
}

.personRules-li{
  border-bottom: solid 0.05px rgba(55, 59, 69, 1);
  text-align: left;
  height: 2.5rem;
  line-height: 2.5rem;
  font-weight: 500;
  color: #ffffff;
}

.personRules-li-1 {
  float:left;
  margin-right: 10px
}

.personRules-li-2 {
  float:left;
  line-height: 2.1rem
}

.personRules-li-3 {
  float:right;
}
</style>
