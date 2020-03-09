<template>
  <div id='nbaPage'>
    <TopBar2/>
    <img src="../../assets/images/Nba/NBAbg.png" alt="" id="nbaBg">
    <div id="NbaMain">
      <p id="NbaMain-topMsg">活动期间，每日存款≥388元即可参与一次竞猜。竞猜成功将获得18元彩金</p>

      <ul>
        <li v-for="nbaMsg in nbaMsg" :key="nbaMsg.competition.pk">

          <!-- 已结束 -->
          <template v-if="nbaMsg.competition.competition_status == '已结束'">
            <div class="nbaSmallBox" @click="selectSmallBox($event)">
              <div class="nbaSmallBox-time">
                <p class="nbaSmallBox-time-1">{{nbaMsg.competition.competition_date}}</p>
                <p>{{nbaMsg.competition.competition_time}}</p>
              </div>

              <div class="nbaSmallBox-msg">
                <div class="nbaSmallBox-msg-left">
                  <img  src="../../assets/images/Nba/win.png" v-if="nbaMsg.competition.points_one - nbaMsg.competition.points_two >0" alt="">
                  <img  src="../../assets/images/Nba/lose.png" v-else alt="">
                  </div>
                <div class="nbaSmallBox-msg-teamOne">
                  <img :src="'https://www.bmw1984.com' + nbaMsg.competition.team_one.team_img_url.url" alt="">
                  <p>{{nbaMsg.competition.team_one.team_name}}</p>
                </div>
                <div class="nbaSmallBox-msg-vs">vs</div>
                <div class="nbaSmallBox-msg-teamTwo">
                  <img :src="'https://www.bmw1984.com' + nbaMsg.competition.team_two.team_img_url.url" alt="">
                  <p>{{nbaMsg.competition.team_two.team_name}}</p>
                </div>
                 <div class="nbaSmallBox-msg-right">
                  <img  src="../../assets/images/Nba/win.png" v-if="nbaMsg.competition.points_one - nbaMsg.competition.points_two <0" alt="">
                  <img  src="../../assets/images/Nba/lose.png" v-else alt="">
                   </div>
              </div>

              <div class="nbaSmallBox-jingcai">
                <p>{{nbaMsg.lottery.status}}</p>
              </div>

              <div class="nbaSmallBox-ing">
                <img src="../../assets/images/Nba/nbaend.png" alt="">
              </div>
            </div>

            <div class="nbaBigBox" @click="selectBigBox ($event)">
              <div class="nbaBigBox-msg">
                <div class="nbaBigBox-box">
                  <div class="nbaBigBox-teamMsg" >
                    <img :src="'https://www.bmw1984.com' + nbaMsg.competition.team_one.team_img_url.url" alt="">
                    <p>{{nbaMsg.competition.team_one.team_name}}</p>
                    <p>
                      <img src="../../assets/images/Nba/win.png" v-if="nbaMsg.competition.points_one - nbaMsg.competition.points_two >0" alt="" class="nbaBigBox-winimg">
                      <img src="../../assets/images/Nba/lose.png" v-else alt="" class="nbaBigBox-winimg">
                    </p>
                  </div>
                  <div class="nbaBigBox-msg-time">
                    <p>{{nbaMsg.competition.competition_date}}</p>
                    <p class="nbaBigBox-point">{{nbaMsg.competition.points_one}} : {{nbaMsg.competition.points_two}}</p>
                    <p>{{nbaMsg.competition.competition_time}}</p>
                  </div>
                  <div class="nbaBigBox-teamMsg">
                    <img :src="'https://www.bmw1984.com' + nbaMsg.competition.team_two.team_img_url.url" alt="">
                    <p>{{nbaMsg.competition.team_two.team_name}}</p>
                    <p>
                      <img src="../../assets/images/Nba/win.png" v-if="nbaMsg.competition.points_one - nbaMsg.competition.points_two <0" alt="" class="nbaBigBox-winimg">
                      <img src="../../assets/images/Nba/lose.png" v-else alt="" class="nbaBigBox-winimg">
                    </p>
                  </div>
                </div>
              </div>
              <div class="nbaSmallBox-ing">
                <img src="../../assets/images/Nba/nbaend.png" alt="">
              </div>
            </div>
          </template>

          <!-- 进行中 -->
          <template v-else-if="nbaMsg.competition.competition_status == '进行中'">
            <div class="nbaBigBox" style="display:block">
              <div class="nbaBigBox-msg">
                <div class="nbaBigBox-box">
                  <div class="nbaBigBox-teamMsg" >
                    <img :src="'https://www.bmw1984.com' + nbaMsg.competition.team_one.team_img_url.url" alt="">
                    <p>{{nbaMsg.competition.team_one.team_name}}</p>
                    <button class="nbaBtn"  :disabled="btnLock" @click="choiceTeam(nbaMsg.competition.pk,nbaMsg.competition.team_one.team_name)">赢</button>
                  </div>
                  <div class="nbaBigBox-msg-time">
                    <p>{{nbaMsg.competition.competition_date}}</p>
                    <p class="nbaBigBox-point" style="font-size:16px;font-weight:600">vs</p>
                    <p>{{nbaMsg.competition.competition_time}}</p>
                  </div>
                  <div class="nbaBigBox-teamMsg">
                    <img :src="'https://www.bmw1984.com' + nbaMsg.competition.team_two.team_img_url.url" alt="">
                    <p>{{nbaMsg.competition.team_two.team_name}}</p>
                    <button class="nbaBtn" :disabled="btnLock" @click="choiceTeam(nbaMsg.competition.pk,nbaMsg.competition.team_two.team_name)">赢</button>
                  </div>
                </div>
              </div>
              <div class="nbaSmallBox-ing">
                <img src="../../assets/images/Nba/nbanow.png" alt="">
              </div>
            </div>
          </template>

          <!-- 未开始 -->
          <template v-else>
            <div class="nbaSmallBox">
              <div class="nbaSmallBox-time">
                <p class="nbaSmallBox-time-1">{{nbaMsg.competition.competition_date}}</p>
                <p>{{nbaMsg.competition.competition_time}}</p>
              </div>

              <div class="nbaSmallBox-msg">
                <div class="nbaSmallBox-msg-teamOne">
                  <img :src="'https://www.bmw1984.com' + nbaMsg.competition.team_one.team_img_url.url" alt="">
                  <p>{{nbaMsg.competition.team_one.team_name}}</p>
                </div>
                <div class="nbaSmallBox-msg-vs" style="margin-left:20px;margin-right:20px">vs</div>
                <div class="nbaSmallBox-msg-teamTwo">
                  <img :src="'https://www.bmw1984.com' + nbaMsg.competition.team_two.team_img_url.url" alt="">
                  <p>{{nbaMsg.competition.team_two.team_name}}</p>
                </div>
              </div>

              <div class="nbaSmallBox-jingcai">
              </div>

              <div class="nbaSmallBox-ing">
                <img src="../../assets/images/Nba/nbanotStart.png" alt="">
              </div>
            </div>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TopBar2 from '@/components/component/TopBar2'
import {NBAmegApi, NBApostApi} from '@/axios/api'
export default {
  components: {
    TopBar2
  },
  created () {
    this.$store.commit('changeTitle', 'NBA竞猜')
    this.msgGet()
  },
  data () {
    return {
      nbaMsg: [],
      btnLock: false
    }
  },
  methods: {
    msgGet () { // NBA竞猜信息请求
      NBAmegApi().then(res => {
        console.log(res)
        this.nbaMsg = res
      })
    },
    selectSmallBox () {
      let that = event.currentTarget
      let thatParent = that.parentNode

      // 获取父元素的其他兄弟元素
      let parentSibl = []

      // 找出2除自己父元素之外的父元素集合
      let elseLi = thatParent.parentNode.children
      for (let i = 0, elseLil = elseLi.length; i < elseLil; i++) {
        if (elseLi[i] !== thatParent) {
          parentSibl.push(elseLi[i])
        }
      }
      // 当前点击的对象隐藏
      that.style.display = 'none'
      // 当前点击的对象的兄弟元素显示
      thatParent.children[1].style.display = 'block'
      // 当前父元素的兄弟元素下的其他元素有显示的隐藏
      for (let j = 0, siblings = parentSibl.length; j < siblings; j++) {
        try {
          parentSibl[j].children[1].style.display = 'none'
          parentSibl[j].children[0].style.display = 'block'
        } catch (e) {
          console.log(0)
        }
      }
    },
    // 点击大box时 大box隐藏 小box显示
    selectBigBox (event) {
      let that = event.currentTarget
      that.style.display = 'none'
      that.parentNode.children[0].style.display = 'block'
    },
    choiceTeam ($event, id, name) { // 接受传过来的参数
      this.btnLock = true
      let that = event.currentTarget
      const nbaPostMsg = {
        competition_id: id,
        competition_team: name
      }
      NBApostApi(nbaPostMsg).then(res => {
        if (res.message === '提交成功') {
          that.style.background = '#b51e1a'
        } else {
          this.errorMsg('对不起，您今日存款金额不足388元，不能参与竞猜。若有疑问，请联系在线客服', 5000)
        }
      // eslint-disable-next-line handle-callback-err
      }).catch(error => {
        if (status = 401) {
          this.errorMsg('您还未登录,请登录后再来参与。', 3000)
        } else {
          this.errorMsg('提交错误，请联系在线客服', 3000)
        }
      })
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
#nbaPage {
  background: url("../../assets/images/Nba/NBAbg.png") transparent;
  background-size: 100% 100%;
}

#nbaBg {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

#NbaMain{
  width: 95%;
  margin: 0 auto;
  padding-top: 10px;
}

#NbaMain>ul>li {
  margin-bottom: 2px;
}
#NbaMain-topMsg {
  color: #ffffff;
  margin: 5px 0 15px 0;
}

.nbaSmallBox{
  width: 100%;
  background:rgba(33, 43, 73, 1);
  overflow: hidden;
}
.nbaSmallBox>div {
  float: left;
}

.nbaSmallBox-msg {
  width: 55%;
  margin:0 auto
}

.nbaSmallBox-msg>div {
  float: left;
}

.nbaSmallBox-msg-left {
  width: 13%;
}

.nbaSmallBox-msg-left>img {
  width: 100%;
}

.nbaSmallBox-msg-right {
  width: 13%;
}

.nbaSmallBox-msg-right>img {
  width: 100%;
}

.nbaSmallBox-time {
  width: 23%;
  font-size: 13px;
  color: rgba(91, 107, 156, 1);
}

.nbaSmallBox-time-1 {
  margin-top: 28px;
}

.nbaSmallBox-msg-teamTwo,.nbaSmallBox-msg-teamOne{
  width: 30%;
  margin-top: 18px;
  margin-bottom: 10px;
  color: #ffffff;
}

.nbaSmallBox-msg-teamTwo>img,.nbaSmallBox-msg-teamOne>img {
  width: 70%;
}
.nbaSmallBox-ing {
  width: 15%;
  height: 80%;
}

.nbaSmallBox-msg-vs {
  width: 10%;
  margin-top: 28px;
  color: rgba(203, 40, 40, 1);
  font-weight: 600;
}

.nbaSmallBox-ing>img {
  width: 100%;
}

.nbaSmallBox-jingcai {
  width: 18%;
  margin:10px -20px
}

.nbaSmallBox-jingcai>p{
  margin-top: 23px;
  color: rgba(203, 40, 40, 1);
  font-size: 12px;
  border: solid 1px rgba(203, 40, 40, 1);
  padding: 3px 3px ;
}

.nbaBigBox {
  background: linear-gradient(to top right, #212b49 , #471b1a);
  overflow:hidden;
  display: none
}
.nbaBigBox-teamMsg>img {
  width: 70%;
}
.nbaBigBox>div {
  float: left;
}

.nbaBigBox-msg {
  width: 85%;
}

.nbaBigBox-msg-time {
  color: rgba(91, 107, 156, 1);
  font-size: 10px;
  margin: 15px 0 0 0;
}

.nbaBigBox-point {
  color: rgba(203, 40, 40, 1);
  margin: 30px 0;
  font-size: 16px;
}

.nbaBigBox-box {
  margin:0 auto;
  width: 70%;
  display: flex;
  justify-content:space-between
}

.nbaBigBox-teamMsg {
  margin:35px 0 0 0;
}

.nbaBigBox-teamMsg>p {
  color: #ffffff;
  margin: 0 0 8px 0;
}

.nbaBigBox-winimg {
  margin-bottom: 5px;
}

.nbaBtn {
  width: 35px;
  border: none;
  box-sizing: border-box;
  height: 25px;
  border-radius: 2px;
  margin-bottom: 15px;
  color: #ffffff;
  background: linear-gradient(rgba(153, 153, 153, 1),rgba(153, 153, 153, 1));

}
</style>
