<template>
  <div id="app">

    <img src="./assets/logo.png">
<div class="container">

    <router-link to="/" class="item" ><h3>To Hello Component</h3></router-link>
    <router-link to="/custom" class="item" ><h3>To Custom Component</h3></router-link>
    <router-link to="/posts" class="item" ><h3>To Posts Component</h3></router-link>
</div>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app'
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
  .container{
    display: flex;
    justify-content: center;
  }
  .item{
    display: flex;
    margin: 25px;
    padding: 10px;
  }

</style>
