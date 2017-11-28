
<template>
  <div >
    <div>
        <button class="button button5" @click="addToShow('angular')">angular</button>
        <button class="button button5" @click="addToShow('react')">react</button>
        <button class="button button5" @click="addToShow('vue')">vue</button>

    <!--<div class="pic-holder content" v-show="toShow">-->
      <!--<button class="button button5 abs" @click="prevIng">&#10094</button>-->
      <!--<img class="pic slider " :src="show[picIndex]"  :class=" {expand: slide, expand2: !slide2 }"  >-->
      <!--<button  class="button button5 abs2" @click="nextIng">&#10095</button>-->
    <!--</div>-->
      <agile>
        <div v-for="s in show">
        <img  :src="s" >
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

        slide: false,
        slide2: false,
        picIndex: 0,
        pictures: {},
        show: [ "http://artemdemo.me/blog/wp-content/uploads/2015/05/angular2-red.png",
          "https://camo.githubusercontent.com/c3537d08b44e9432d2b2e1374c6529cde07c984a/687474703a2f2f692e696d6775722e636f6d2f43715863735a392e706e67",
          "https://i.ytimg.com/vi/-zW1zHqsdyc/maxresdefault.jpg"],
        toShow: false
      }
    },
    methods: {
      nextIng () {
        this.slide = !this.slide;
        this.slide2 = !this.slide2;

        if (this.picIndex === this.show.length - 1) {
          this.picIndex = 0;
        } else {
          this.picIndex++;
        }
      },
      prevIng () {
        this.slide2 =  !this.slide2;
        this.slide = !this.slide;
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
//      this.addToShow('vue');
      this.getPictures();

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
  /*.button {*/
    /*background-color: #4CAF50; !* Green *!*/
    /*border: none;*/
    /*color: white;*/
    /*padding: 16px 32px;*/
    /*text-align: center;*/
    /*text-decoration: none;*/
    /*display: inline-block;*/
    /*font-size: 16px;*/
    /*margin: 4px 2px;*/
    /*-webkit-transition-duration: 0.4s; !* Safari *!*/
    /*transition-duration: 0.4s;*/
    /*cursor: pointer;*/

  /*}*/
  .button5 {
    background-color: white;
    color: black;
    border: 2px solid #555555;
  }
.abs {
  position: absolute;
  top: 0;
  left:0;
}
  .abs2 {
  position: absolute;
  top: 0;
  right: 0;
}
  .button5:hover {
    background-color: #555555;
    color: white;
  }
 .content {
  position: relative;
   justify-content: center;
 }
  .content button {
    margin: 0;
  }

  .expand {
    position: absolute;
    top: 30px;
    animation: mc-right 1s forwards;
  } .expand2 {
    position: absolute;
    top: 30px;
    animation: mc-left 1s forwards;
  }

  @keyframes mc-left {
    0% { margin-left: 20%; opacity:1; }
    100% { margin-left: -100%; opacity:0; }
  }
  @keyframes mc-right {
    0% { margin-left: 100%; opacity:0; }
    100% { margin-left: -20%; opacity:1; }
  }

</style>
