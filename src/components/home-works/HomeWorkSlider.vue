
<template>
  <div >
    <div>
        <button class="button button5" @click="addToShow('angular')">angular</button>
        <button class="button button5" @click="addToShow('react')">react</button>
        <button class="button button5" @click="addToShow('vue')">vue</button>
    <div class="pic-holder content" v-show="toShow">
      <button class="button button5" @click="prevIng">&#10094</button>
      <img class="pic slider" :src="show[picIndex]"  :class=" { slider2: slide}"  >
      <button  class="button button5" @click="nextIng">&#10095</button>
    </div>
    </div>
    </div>


</template>

<script>
  export default {
    name: 'slider',
    data () {
      return {
        slide: false,
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
        this.slide =  !this.slide;
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
        this.$http.get('https://artpoddybnyy.github.io/test/framworks.json').then(data => {
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
  .button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;

  }
  .button5 {
    background-color: white;
    color: black;
    border: 2px solid #555555;
  }

  .button5:hover {
    background-color: #555555;
    color: white;
  }
 .content {
   display: flex;
   justify-content: center;
 }
  .content button {
    margin: 0;
  }

</style>
