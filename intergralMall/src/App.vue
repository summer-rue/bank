<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  metaInfo: {
    title: '宝马会积分商城',
    meta: [
      {
        name: 'keywords',
        content: '宝马会,积分商城,宝马会积分商城'
      },
      {
        name: 'description',
        content: '欢迎来到报马会积分商城'
      }
    ]
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
