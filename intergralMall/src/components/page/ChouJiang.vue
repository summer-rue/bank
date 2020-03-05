<template>
  <div id='ChouJiang'>
    <TopBar2/>
  </div>
</template>

<script>
import TopBar2 from '@/components/component/TopBar2'
export default {
  components: {
    TopBar2
  },
  data () {
    return {}
  },
  created () {
    this.$store.commit('changeTitle', '幸运大抽奖')
  }
}
</script>

<style>

</style>
