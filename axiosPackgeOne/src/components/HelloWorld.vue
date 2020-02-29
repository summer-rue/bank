<template>
  <div class="hello">
    <h1>{{ msg }}你是不是傻{{this.$store.state.count}}</h1>
    <a href="/ddd">sdffffffffffffffffffffffff</a>
  </div>
    
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
