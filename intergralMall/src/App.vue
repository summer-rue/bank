<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  // TDK设置
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
  margin-top: 2.75rem;
}
</style>
