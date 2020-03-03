<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: '积分商城首页-首页',
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
  },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
