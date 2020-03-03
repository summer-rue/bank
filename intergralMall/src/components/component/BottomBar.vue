<template>
  <van-tabbar id="BottomBar" v-model="active" active-color="rgba(181, 128, 36, 1)">
    <van-tabbar-item name="/" icon="wap-home">首页</van-tabbar-item>
    <van-tabbar-item name="/YouHui" icon="hot">优惠</van-tabbar-item>
    <van-tabbar-item name="/GuanWang" icon="gem">官网</van-tabbar-item>
    <van-tabbar-item name="/VIP" icon="vip-card">vip</van-tabbar-item>
    <van-tabbar-item name="/PersoNal" icon="manager">我的</van-tabbar-item>
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
