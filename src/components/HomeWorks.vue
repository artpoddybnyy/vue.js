<template>

  <div class="hw-comp">

    <ul>
      <li>
        <router-link :to="{ name: 'HomeWorkForm'}">Form</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'HomeWorkSlider'}">Slider</router-link>
      </li>

    </ul>




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

  .hw-comp {
    margin-top: 40px;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #35495e;
    display: flex;
    justify-content: center;
  }

  li {

  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover:not(.active) {
    background-color: #111;
  }

</style>
