<template>
  <div id="vipPage">
    <TopBar></TopBar>
      <div id="vip-title">
        <img src="@/assets/images/VIP/VIP-title.png" alt="">
      </div>
      <van-tabs swipe-threshold=7  type="card" color="rgba(42, 44, 53, 1)" background="rgba(21, 21, 21, 1)" title-inactive-color="rgba(102, 102, 102, 1)" v-model="active">
        <van-tab v-for="(pic,index) in tabPic" :key="index" title="">
          <div slot="title"><p class="VIP-topPic"><img :src="pic.picurl" ></p><p class="VIP-topTitle">{{pic.name}}</p></div>
          <div class="VIP-taps-box">
              <div class="VIP-taps-divpic" v-for="(tapMsg,item) in tapMsg[active]" :key="item">
                <div><img :src="tapMsg.url" alt=""></div>
                <p>{{tapMsg.msg}}</p>
              </div>
          </div>
        </van-tab>
      </van-tabs>

      <div id="vip-table">
        <p>VIP晋级要求</p>
        <table>
          <tr id="vip-table-leve">
            <th id="vip-table-leve-1">会员等级</th>
            <th id="vip-table-leve-2">晋级条件</th>
          </tr>

          <tr>
            <td class="vip-table-td-1">
              <p><img src="../../assets/images/VIP/hj@3x.png" alt=""></p>
              <p>黄金会员</p>
            </td>
            <td class="vip-table-td-2">
              <p>1、单月（全部平台）总投注额50w</p>
              <p>2、单月（全部老虎机）平台总投注额20w</p>
            </td>
          </tr>

          <tr>
            <td class="vip-table-td-1">
              <p><img src="../../assets/images/VIP/bj@3x.png" alt=""></p>
              <p>铂金会员</p>
            </td>
            <td class="vip-table-td-2">
              <p>1、单月（全部平台）总投注额20w</p>
              <p>2、单月（全部老虎机）平台总投注额120w</p>
            </td>
          </tr>

          <tr>
            <td class="vip-table-td-1">
              <p><img src="../../assets/images/VIP/zs@3x.png" alt=""></p>
              <p>钻石会员</p>
            </td>
            <td class="vip-table-td-2">
              <p >1、单月（全部平台）总投注额500w</p>
              <p>2、单月（全部老虎机）平台总投注额300w</p>
            </td>
          </tr>

          <tr>
            <td class="vip-table-td-1">
              <p><img src="../../assets/images/VIP/zz@3x.png" alt=""></p>
              <p>至尊会员</p>
            </td>
            <td class="vip-table-td-2">
              <p>1、单月（全部平台）总投注额800w</p>
              <p>2、单月（全部老虎机）平台总投注额500w</p>
            </td>
          </tr>

          <tr>
            <td class="vip-table-td-1">
              <p><img src="../../assets/images/VIP/wz@3x.png" alt=""></p>
              <p>王者会员</p>
            </td>
            <td class="vip-table-td-2">
              <p>1、单月（全部平台）总投注额1000w</p>
              <p>2、单月（全部老虎机）平台总投注额600w</p>
            </td>
          </tr>

          <tr>
            <td class="vip-table-td-1">
              <p><img src="../../assets/images/VIP/ty@3x.png" alt=""></p>
              <p>特邀会员</p>
            </td>
            <td class="vip-table-td-2">
              <p>1、平台邀请</p>
              <p>2、客户经理推荐</p>
            </td>
          </tr>
        </table>
        <p id="vip-table-bottom">注意事项：1、晋级条件二选一；2、维持当前等级，需完成当月最高流水的10%</p>
      </div>

      <div id="vip-rlule">
        <p>VIP晋级规则</p>
        <p>1、每个月1号前系统自动审核进行升级，系统会以晋级条件中的1、2选择一种来进行升级</p>
        <p>2、1号0:00至最后一天23:59:59截止 （美东时间）</p>
        <p>3、玩家达到条件后可以登录宝马会官网的“联系7X24小时在线客服”进行申请、为避免套利和非正常的玩家，投注额为申请条件之一，其次需要经过相关部门的综合审核后。给予晋级并派发晋级礼金。（每月3号申领）</p>
        <p>4、维持当前等级需要上月的流水达到当前等级晋级流水的10%，否则系统会在下一个月一号自动降低一级。每个等级晋级礼只能享受一次。</p>
        <p>5、VIP至尊会员等级以上 月结亏损20万以上，即可获得相应等级的VIP救援金，最高88888 1倍流水。（每月5号申领）</p>
        <p>6、每月免费筹码需当月3号之后的任意一天单笔存款200元，一倍流水即可提款。若当月份未进行存款视同放弃，不做补发。</p>
        <p>7、所有VIP会员享受的优惠按照系统自动晋级时的等级为准来派发，若有相关活动疑问请及时联系专属客服服务。</p>
        <p>8、因为需要审核数据，每月4号以后可以申请VIP生日礼金。节假日顺延。</p>
        <p>9、宝马会娱乐拥有最终解释权和裁决权 ！</p>
      </div>
    <BottomBar></BottomBar>
  </div>
</template>
<script>
import TopBar from '@/components/component/TopBar'
import BottomBar from '@/components/component/BottomBar'
export default {
  name: 'App',
  components: {
    TopBar,
    BottomBar
  },
  data () {
    return {
      active: 0,
      tabPic: [
        {picurl: require('@/assets/images/VIP/pt@3x.png'), name: '普通'},
        {picurl: require('@/assets/images/VIP/hj@3x.png'), name: '黄金'},
        {picurl: require('@/assets/images/VIP/bj@3x.png'), name: '铂金'},
        {picurl: require('@/assets/images/VIP/zs@3x.png'), name: '钻石'},
        {picurl: require('@/assets/images/VIP/zz@3x.png'), name: '至尊'},
        {picurl: require('@/assets/images/VIP/wz@3x.png'), name: '王者'},
        {picurl: require('@/assets/images/VIP/ty@3x.png'), name: '特邀'}
      ],
      tapMsg: [
        [
          {msg: '晋级礼金暂无', url: require('@/assets/images/VIP/hg@3x.png')},
          {msg: '生日礼金暂无', url: require('@/assets/images/VIP/dg@3x.png')},
          {msg: '在线客服', url: require('@/assets/images/VIP/QQ@3x.png')},
          {msg: '每月免费筹码暂无', url: require('@/assets/images/VIP/jb@3x.png')},
          {msg: '积分商城折扣暂无', url: require('@/assets/images/VIP/sc@3x.png')},
          {msg: '单日提款额度限免三次', url: require('@/assets/images/VIP/yhk@3x.png')},
          {msg: 'VIP救援金暂无', url: require('@/assets/images/VIP/yhbq@3x.png')},
          {msg: '存款送15，最高888，需15倍流水', url: require('@/assets/images/VIP/qd@3x.png')}
        ],
        [
          {msg: '晋级礼金58元', url: require('@/assets/images/VIP/hg@3x.png')},
          {msg: '生日礼金58元', url: require('@/assets/images/VIP/dg@3x.png')},
          {msg: '在线客服', url: require('@/assets/images/VIP/QQ@3x.png')},
          {msg: '每月免费筹码18元', url: require('@/assets/images/VIP/jb@3x.png')},
          {msg: '积分商城折扣9.8折', url: require('@/assets/images/VIP/sc@3x.png')},
          {msg: '单日提款额度限免三次', url: require('@/assets/images/VIP/yhk@3x.png')},
          {msg: 'VIP救援金暂无', url: require('@/assets/images/VIP/yhbq@3x.png')},
          {msg: '存款送15%，最高2888，需18倍流水', url: require('@/assets/images/VIP/qd@3x.png')}
        ],
        [
          {msg: '晋级礼金188元', url: require('@/assets/images/VIP/hg@3x.png')},
          {msg: '生日礼金188元', url: require('@/assets/images/VIP/dg@3x.png')},
          {msg: 'VIP专员', url: require('@/assets/images/VIP/QQ@3x.png')},
          {msg: '每月免费筹码88元', url: require('@/assets/images/VIP/jb@3x.png')},
          {msg: '积分商城折扣9.5折', url: require('@/assets/images/VIP/sc@3x.png')},
          {msg: '单日提款额度限免三次', url: require('@/assets/images/VIP/yhk@3x.png')},
          {msg: 'VIP救援金暂无', url: require('@/assets/images/VIP/yhbq@3x.png')},
          {msg: '存款送16%，最高2888，需18倍流水', url: require('@/assets/images/VIP/qd@3x.png')}
        ],
        [
          {msg: '晋级礼金588元', url: require('@/assets/images/VIP/hg@3x.png')},
          {msg: '生日礼金588元', url: require('@/assets/images/VIP/dg@3x.png')},
          {msg: 'VIP专员', url: require('@/assets/images/VIP/QQ@3x.png')},
          {msg: '每月免费筹码188元', url: require('@/assets/images/VIP/jb@3x.png')},
          {msg: '积分商城折扣9.2折', url: require('@/assets/images/VIP/sc@3x.png')},
          {msg: '单日提款额度限免三次', url: require('@/assets/images/VIP/yhk@3x.png')},
          {msg: 'VIP救援金暂无', url: require('@/assets/images/VIP/yhbq@3x.png')},
          {msg: '存款送17%，最高2888，需18倍流水', url: require('@/assets/images/VIP/qd@3x.png')}
        ],
        [
          {msg: '晋级礼金888元', url: require('@/assets/images/VIP/hg@3x.png')},
          {msg: '生日礼金888元', url: require('@/assets/images/VIP/dg@3x.png')},
          {msg: 'VIP专员', url: require('@/assets/images/VIP/QQ@3x.png')},
          {msg: '每月免费筹码388元', url: require('@/assets/images/VIP/jb@3x.png')},
          {msg: '积分商城折扣8.8折', url: require('@/assets/images/VIP/sc@3x.png')},
          {msg: '单日提款额度请联系客服提取', url: require('@/assets/images/VIP/yhk@3x.png')},
          {msg: 'VIP救援金0.5%最高金额33333', url: require('@/assets/images/VIP/yhbq@3x.png')},
          {msg: '存款送18%，最高2888，需18倍流水', url: require('@/assets/images/VIP/qd@3x.png')}
        ],
        [
          {msg: '晋级礼金1888元', url: require('@/assets/images/VIP/hg@3x.png')},
          {msg: '生日礼金1888元', url: require('@/assets/images/VIP/dg@3x.png')},
          {msg: '客户经理', url: require('@/assets/images/VIP/QQ@3x.png')},
          {msg: '每月免费筹码888元', url: require('@/assets/images/VIP/jb@3x.png')},
          {msg: '积分商城折扣8.5折', url: require('@/assets/images/VIP/sc@3x.png')},
          {msg: '单日提款额度请联系客服提取', url: require('@/assets/images/VIP/yhk@3x.png')},
          {msg: 'VIP救援金0.8%最高金额66666', url: require('@/assets/images/VIP/yhbq@3x.png')},
          {msg: '存款送19%，最高2888，需18倍流水', url: require('@/assets/images/VIP/qd@3x.png')}
        ],
        [
          {msg: '晋级礼金2888元', url: require('@/assets/images/VIP/hg@3x.png')},
          {msg: '生日礼金2888元', url: require('@/assets/images/VIP/dg@3x.png')},
          {msg: '客户经理', url: require('@/assets/images/VIP/QQ@3x.png')},
          {msg: '每月免费筹码1288元', url: require('@/assets/images/VIP/jb@3x.png')},
          {msg: '积分商城折扣9.2折', url: require('@/assets/images/VIP/sc@3x.png')},
          {msg: '单日提款额度请联系客服获取', url: require('@/assets/images/VIP/yhk@3x.png')},
          {msg: 'VIP救援金1%最高金额88888', url: require('@/assets/images/VIP/yhbq@3x.png')},
          {msg: '存款送20%，最高2888，需18倍流水', url: require('@/assets/images/VIP/qd@3x.png')}
        ]
      ]
    }
  }
}
</script>
<style>
#vipPage {
  margin-bottom: 3rem;
}
#vip-title {
  margin:0 auto;
  width: 80%;
}

#vip-title>img {
  width: 100%;
}

.VIP-topPic {
  width: 100%;
}

.VIP-topPic>img {
  width: 50%;
}

#vipPage .van-tabs--card>.van-tabs__wrap{
  height: 60px;
}

#vipPage .van-tabs__nav--card {
  height: 60px;
}

.VIP-topTitle {
  margin-top: -5px;
}

#vipPage .van-tabs__nav--card .van-tab {
  border-right: none;
}

#vipPage .van-tabs__nav--card {
  border: none;
}

.VIP-taps-box {
  width: 100%;
  background-color: rgba(42, 44, 53, 1);
  overflow: hidden;
  padding: 5px 0;
}

.VIP-taps-divpic {
  width: 30%;
  font-size: 12px;
  margin: 10px 5px;
  float: left;
}

.VIP-taps-divpic>div {
  margin-bottom: 10px;
  border: solid 0.05rem rgba(153, 152, 153, 1);
  border-radius: 20%;
  width: 20%;
  height: 1.3rem;
  padding: 10px 10px ;
  margin: 0 auto;
}

.VIP-taps-divpic>div>img {
  width: 100%;
}

.VIP-taps-divpic>p {
  margin-top: 10px;
}

#vip-table {
  font-size: 13px;
  color: rgba(204, 204, 204, 1);
  margin-top: 20px;
  background-color: rgba(42, 44, 53, 1);
}

#vip-table>p:nth-child(1) {
  width: 95%;
  margin: 5px auto;
  color: #ffffff;
  text-align: left;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 0 0 0;
}

#vip-table>table {
  width: 95%;
  margin: 0 auto;
  border-collapse:collapse;
  border:none
}
#vip-table-leve,#vip-table-leve-1,#vip-table-leve-2 {
  border: solid 1px rgba(53, 58, 72, 1);
  font-size: 15px;
  color: rgba(255, 255, 255, 1);
}

#vip-table-leve-1,#vip-table-leve-2 {
  padding: 5px 0;
}
.vip-table-td-1 {
  padding: 10px 0;
  width: 30%;
  border: solid 1px rgba(53, 58, 72, 1);
}

.vip-table-td-2 {
  padding: 10px 0;
  width: 70%;
  border: solid 1px rgb(62, 68, 85);
  text-align: left;
}

.vip-table-td-1>p>img {
  width: 20%;
}

#vip-table-bottom {
  color: rgba(245, 191, 27, 1);
  margin: 5px auto;
  line-height: 25px;
  width: 95%;
  text-align: left;
  font-size: 13px;
}

#vip-rlule {
  margin: 20px 0;
  background: rgba(42, 44, 53, 1);
  color: rgba(204, 204, 204, 1);
  font-size: 13px;
  text-align: left;
  padding: 8px 0;
}

#vip-rlule>p {
  width: 95%;
  margin:0 auto;
  line-height: 25px;
}

#vip-rlule>p:nth-child(1) {
  font-size: 16px;
  color: #ffffff;
  font-weight: 600;
}
</style>
