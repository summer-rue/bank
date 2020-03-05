<template>
  <div id=''>
    <TopBar/>
    <div id="imgBox">
      <router-link  v-for="(imgData, index) in imgData" :key="index" :to=imgData.link>
        <img :src="imgData.url" alt="" class="imgBox-img">
      </router-link>
    </div>
    <BottomBar/>
  </div>
</template>

<script>
import TopBar from '@/components/component/TopBar'
import BottomBar from '@/components/component/BottomBar'
export default {
  components: {
    TopBar,
    BottomBar
  },
  data () {
    return {
      imgData: [
        {link: '/ChouJiang', url: require('@/assets/images/YouHui/Choujiang.png')},
        {link: '/NBA', url: require('@/assets/images/YouHui/NBA.png')}
      ]
    }
  }
}
</script>

<style>
#imgBox {
  width: 95%;
  margin: 0 auto;
  text-align: center
}

.imgBox-img {
  width: 100%;
  margin-top: 15px
}
</style>
