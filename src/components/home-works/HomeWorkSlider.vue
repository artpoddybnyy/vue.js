
<template>
  <div >

    <div class="content">
      <agile :options="sliderOptions">
        <div v-for="(picture, index) in show">
        <img :src="picture" :key="index">
        </div>
      </agile>
    </div>
    </div>


</template>

<script>
  export default {
    name: 'slider',
    data () {
      return {
      sliderOptions: {
        arrows: true,
        dots: false,
        autoplay: false,
        timing: 'linear',
//        fade:true,
        speed: 750,
        pauseOnHover:true
        },
      }
      },
    methods: {
    },
    created(){

    },
    computed: {
      show () {
        return this.$store.state.picLinks
      }
    },
  }
</script>

<style scoped>

  img {
    width: 1000px;
  }

  .content  {
    margin: 20px auto;
  }

  button {
    width: 30px;
    background-color: transparent;
    border: 1px solid #fff;
    margin-top: 10px;
  }

  @media screen and (max-width: 1000px) {
    img {
      width: 800px;
    }

  }
  @media screen and (max-width: 700px) {
    img {
      width: 500px;
    }

  }
  @media screen and (max-width: 376px) {
    img {
      width: 300px;
    }

  }

</style>
