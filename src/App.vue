<template>
  <div id="app">

    <img class="logo" src="./assets/logo.png">

    <div class="dropdown" style="float:left;">

      <button class="dropbtn" @click="activate">Menu</button>
      <div class="dropdown-content" v-show="active" @click="activate">
        <a href="https://github.com/artpoddybnyy/vue.js" target="_blank">Git Hub</a>
        <router-link to="/posts">Posts Component</router-link>
        <router-link to="/home-works" class="item" @click="activate">To Home Work</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'app',

    data () {
      return {
        active: false
      }
    },
    methods: {
      activate(){
        this.active = !this.active;
      }
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

  }

  body {
    font-family: 'Lucida Grande', 'Helvetica Neue', Helvetica, Arial, sans-serif;

    background: #E3CAA1;
  }

  .logo {
    display: block;
    margin: 0 auto;
  }

  .dropbtn {
    border-radius: 50%;
    color: #fff0b9;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    background-color: #35495e;

  }

  .dropdown {
    position: absolute;
    display: inline-block;
    left: 25px;
    top: 30px;
  }
  .dropbtn:hover {
   background-color: black;
  }

  .dropdown-content {
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);

  }

  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content a:hover {
    background-color: #f1f1f1
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown:hover .dropbtn {
    /*background-color: #8e810d;*/
  }

</style>
