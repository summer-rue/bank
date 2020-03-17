<template>
  <div id=''>
    <TopBar2/>
    <div id="guize-box">
      <p>1、宝马会保留在任何时间修改商城使用条款和兑换规则的权利。</p>
      <p>2、会员在使用积分和兑换物品时，若存在任何欺诈行为，或使用任何恶意手段获取利益，违背宝马会商城的使用条款，宝马会拥有冻结或关闭相应账户的权利。 会员可以用积分兑换商城中所有的奖品，除非在商城的使用条款中针对参加资格有特别说明。</p>
      <p>3、成功注册宝马会的会员，将自动成为宝马会积分商城的会员。同一积分账户当天兑换礼品或筹码次数不可超过3次。</p>
      <p>4、使用真钱投注游戏，每400元投注额将产生1个积分。</p>
      <p>5、投注彩票游戏不产生任何积分，特殊情况（和/平局/无效/取消的投注）也不产生积分；积分仅限个人使用，不可转让。</p>
      <p>6、积分以天（24小时）为计算单位，系统自动计算和累计积分，投注结算后的第2天下午更新至会员的积分账户中。 进入【商城】，点击【我的账户】，即可查看积分和等级。</p>
      <p>7、会员可使用积分在宝马会商城内兑换免费筹码、奖品及其他可供兑换的奖品。 使用积分兑换的免费筹码需完成1倍流水即可提款。</p>
      <p>8、会员需仔细阅读积分使用条款，并在积分有效期之内及时使用。</p>
      <p>9、普通会员的积分有效期为 6 个月。</p>
      <p>10、VIP会员的积分有效期为 12 个月。</p>
      <p>11、若会员在积分有效期内未及时使用，则失效过期的积分将全部清零，请务必在对应的有效期内及时兑换。</p>
    </div>
    <p id="guize-box-bottom">还有任何问题？宝马会欢迎您随时联系在线客服!</p>
  </div>
</template>

<script>
import TopBar2 from '@/components/component/TopBar2'
export default {
  components: {
    TopBar2
  },
  created () {
    this.$store.commit('changeTitle', '规则与条款')
  }
}
</script>

<style>
#guize-box {
  width: 100%;
  padding: 20px 0;
  text-align: left;
  font-size: 15px;
  background-color: rgba(42, 45, 54, 1);
}

#guize-box>p {
  width: 90%;
  margin:0 auto;
  line-height: 20px;
  color: rgba(204, 204, 204, 1);
}

#guize-box-bottom {
  width: 90%;
  margin: 20px auto;
  text-align: left;
  color: rgba(181, 128, 36, 1);
}
</style>
