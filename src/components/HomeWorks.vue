<template>

  <div class="hw-comp">

    <ul>
      <li>
        <router-link :to="{ name: 'HomeWorkForm'}">Form</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Search'}">Searching</router-link>
      </li>
      <transition name="slider">
        <li v-show="showSlider">
          <router-link :to="{ name: 'HomeWorkSlider'}">Slider</router-link>
        </li>
      </transition>
    </ul>

    <router-view></router-view>
  </div>


</template>

<script>
  export default {
    name: 'home-works',
    data () {
      return {}
    },
    methods: {},
    computed: {
      showSlider () {
        return this.$store.getters.showSlider;
      }
    }
  }
</script>

<style scoped>

  .hw-comp {
    margin-top: 40px;
  }

  ul {
    list-style-type: none;
    margin: 0;
    color: #f5ebcb;
    padding: 0;
    overflow: hidden;
    background-color: #35495e;
    display: flex;
    justify-content: center;
    border-radius: 10px;
  }

  li {

  }

  li a {
    display: block;
    color: #f1ffc5;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover:not(.active) {
    background-color: #111;
    border-radius: 10px;
  }

  .slider-enter-active {
    animation: slider-in .5s;
  }

  .slider-leave-active {
    animation: slider-in .5s reverse;
  }

  @keyframes slider-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
