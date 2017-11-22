
<template>
  <div>
    <ul class="submenu">
      <li>
        <button @click="addToShow('angular')">angular</button>
      </li>
      <li>
        <button @click="addToShow('react')">react</button>
      </li>
      <li>
        <button @click="addToShow('vue')">vue</button>
      </li>
    </ul>


    <div class="" v-show="toShow">
      <button @click="prevIng">&#10094</button>
      <img class="pic " :src="show[picIndex]">

      <button @click="nextIng">&#10095</button>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'slider',
    data () {
      return {
        picIndex: 0,
        pictures: {},
        show: [],
        toShow: false
      }
    },
    methods: {
      nextIng () {
        if (this.picIndex === this.show.length - 1) {
          this.picIndex = 0;
        } else {
          this.picIndex++;
        }
      },
      prevIng () {
        if (this.picIndex === 0) {
          this.picIndex = this.show.length - 1;
        } else {
          this.picIndex--;
        }
      },
      addToShow (framework) {
          this.toShow = true;
        if (this.show.length > 0) {
          this.picIndex = 0;
          this.show = [];
        }
        this.show = this.pictures[framework];
      },

      getPictures () {
        this.$http.get('https://artpoddybnyy.github.io/vue.js/data/framworks.json').then(data => {
         this.pictures = data.data;
        });
      },

    },
    created(){
      this.getPictures()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pic {
    height: 400px;
    width: 400px;
    /*transform: translateX(-50%);*/
  }


</style>
