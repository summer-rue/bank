<template>
  <div id='TopBar'>
    <van-icon name="bars" size=25 id='TopBar-bar'/>
    <img src="../../assets/images/TopBar/logo.png" alt="" id='TopBar-logo'>
    <van-icon name="search" size=25 id='TopBar-search' @click="To" />
  </div>
</template>

<script>
export default {
  methods: {
    To () {
      this.$router.push('/search')
    }
  }
}
</script>

<style>

#TopBar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 2.75rem;
  background-color: rgba(102, 17, 21, 1);
  z-index: 10;
}

#TopBar-logo {
  width: 20%;
  text-align: center;
}

#TopBar-bar {
  float: left;
  text-align: left;
  margin-left: 10px;
  width: 25%;
}

#TopBar-search {
  float: right;
  text-align: right;
  margin-right: 10px;
  width: 25%;
}
#TopBar-logo,#TopBar-bar,#TopBar-search {
  margin-top: 8px
}
</style>
