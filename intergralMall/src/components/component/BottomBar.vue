<template>
  <van-tabbar id="BottomBar" v-model="active" active-color="rgba(181, 128, 36, 1)" route>
    <van-tabbar-item name="/" icon="wap-home" to="/">首页</van-tabbar-item>
    <van-tabbar-item name="/YouHui" icon="hot" to="/YouHui">优惠</van-tabbar-item>
    <van-tabbar-item name="/GuanWang" icon="gem" to="/GuanWang">官网</van-tabbar-item>
    <van-tabbar-item name="/VIP" icon="vip-card" to="/VIP">vip</van-tabbar-item>
    <van-tabbar-item name="/PersoNal" icon="manager" to="/PersoNal">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  data () {
    return {
      active: String
    }
  },
  created () {
    this.active = this.$route.path
  }
}
</script>

<style>
#BottomBar {
  z-index: 10;
  background-color:rgba(42, 44, 53, 1)
}
</style>
