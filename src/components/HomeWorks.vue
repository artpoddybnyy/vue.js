<template>
  <div>
    <router-link :to="{ name: 'HomeWorkForm'}"><button><h3>To Form</h3></button></router-link>
    <router-link to="/slider"><button><h3>To Slider</h3></button></router-link>

  <router-view></router-view>
  </div>


</template>

<script>
  export default {
    name: 'home-works',
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
