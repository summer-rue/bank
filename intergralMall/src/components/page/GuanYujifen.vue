<template>
  <div id=''>
    <TopBar2/>
    <div class="guanyu-divbox">
      <p class="guanyu-divbox-title"><span>|</span>关于宝马会奖励积分计划</p>
      <p>欢迎来到宝马会奖励积分商城，在这里你可以使用积分兑换任何感兴趣的奖品，关于兑换的方式和注意事项，请查看下列的条款。 宝马会努力为会员提供更完美的游戏体验，并致力于将这些体验融入到生活中去。因此你在宝马会能体会到的绝不只是游戏。 更能感受到“快乐生活”的定义和它衍生的一切元素。</p>
    </div>

    <div class="guanyu-divbox">
      <p class="guanyu-divbox-title"><span>|</span>如何获得积分</p>
      <p>宝马会积分产生方式：<span class="guanyu-divbox-msgspan">①投注游戏&nbsp;&nbsp;②参与活动</span></p>

      <div id="guanyu-divbox-table">
        <table>
          <tr class="guanyu-divbox-table-tr">
            <th>积分产生途径</th>
            <th>完成标准</th>
            <th>产生积分</th>
          </tr>

          <tr class="guanyu-divbox-table-tr">
            <td>参与任意游戏</td>
            <td>每投注400元</td>
            <td>1</td>
          </tr>

          <tr class="guanyu-divbox-table-tr">
            <td>参与特定的优惠活动</td>
            <td>以活动规则而定</td>
            <td>20-200</td>
          </tr>
        </table>
      </div>
      <p>会员每天在投注游戏时，每400元的投注额将产生一积分，积分会在隔天下午自动更新，并派发到会员的积分账户内。参与宝马会的特色优惠活动，可空去数额不等的积分</p>
      <p class="guanyu-divbox-hint">(提示：任何平局、和局、取消的投注都将无法获得积分)</p>
    </div>

    <div class="guanyu-divbox">
      <p class="guanyu-divbox-title"><span>|</span>如何兑换积分</p>
      <p>在宝马会积分商城内，积分就是您的账户金额，您可以使用积分兑换任何奖品，包括奖金筹码、数码产品、生活用品、奢侈品等</p>
      <p class="guanyu-divbox-hint">(提示：宝马会积分只允许宝马会会员使用，不可转让让人，且会员账户内的积分不可从同一账户转入到另一个账户中。)</p>
    </div>

    <div class="guanyu-divbox">
      <p class="guanyu-divbox-title"><span>|</span>积分有效期</p>
      <p>为鼓励会员更高频的使用兑换功能，商城的积分系统将会对会员的积分账 户定期检核，长期不活跃的账户积分将会被扣除。请会员及时查看积分账户，在积分过期之前兑换使用。普通会员的积分有效期为 6个月，VIP会员的积分有效期为 12个月。</p>
    </div>

    <div class="guanyu-divbox">
      <p class="guanyu-divbox-title"><span>|</span>声明</p>
      <p>为了更高效的完成兑换和快递服务，请会员在注册账户时如实填写个人信息，在兑换奖品时如实填写收货信息。如您选择拒绝提供相关资料，可能会影响积分兑换礼品签收的时效性和安全性。对于已提供资料的会员，将会定时收到我们最新的优惠信息 以及更为体贴的客服服务，并优先获得优惠的参与权。</p>
      <p class="guanyu-divbox-hint">(提示：宝马会绝不会向任何机构或个人提供会员的个人信息，若会员发现自己的个人信息被第三方机构或个人知悉，可立即发邮件告知于我们。)</p>
      <p class="guanyu-divbox-hint">邮件地址：BMW@201.COM (请一并提供截图信息)</p>
    </div>
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
.guanyu-divbox {
  width: 100%;
  background-color: rgba(42, 44, 53, 1);
  text-align: left;
  font-size: 13.5px;
  padding: 15px 0;
  margin-bottom: 20px;
  color: rgba(204, 204, 204, 1);
}

.guanyu-divbox>p {
  width: 90%;
  margin:0 auto;
  line-height: 25px;
}

.guanyu-divbox-title {
  font-size: 16px;
  color: #ffffff;
  font-weight: 600;
}

.guanyu-divbox-title>span {
  color: rgba(245, 191, 27, 1);
  margin-right: 10px;
}

.guanyu-divbox-msgspan {
  color: rgba(245, 191, 27, 1);
}

.guanyu-divbox-hint {
  color: rgb(83, 83, 83);
}

.guanyu-divbox-table-tr td,.guanyu-divbox-table-tr th {
 border: solid 1px rgba(53, 58, 72, 1);
 padding: 5px 8px;
 text-align: center;
}

#guanyu-divbox-table {
  width: 90%;
  margin: 0 auto;
  border-collapse:collapse;
  border:none
}

</style>
