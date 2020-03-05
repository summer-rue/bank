<template>
  <div id='TopBar2'>
    <van-icon name="arrow-left" size=25 id='TopBar-bar2' @click="backOne" />
    <span id="TopBar-title">{{this.$store.state.TopTitle}}</span>
    <van-icon name="service-o" size=25 id='TopBar-search2'/>
  </div>
</template>

<script>
export default {
  methods: {
    backOne () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
#TopBar2 {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 2.75rem;
  background-color: rgba(102, 17, 21, 1);
  z-index: 10;
}

#TopBar-title {
  text-align: center;
  line-height: 2.75rem;
  font-weight: 600;
  color: #b58024;
}

#TopBar-bar2 {
  float: left;
  text-align: left;
  margin-left: 10px;
  width: 25%;
}

#TopBar-search2 {
  float: right;
  text-align: right;
  margin-right: 10px;
  width: 25%;
}
#TopBar-bar2,#TopBar-search2 {
  margin-top: 8px
}
</style>
