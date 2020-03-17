<template>
  <div id=''>
    <TopBar2/>

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

</style>
