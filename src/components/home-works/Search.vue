
<template>
  <div >
    <input type="text" v-model="searchValue" >
    <button @click="searching">Search</button>
    <div class="container">
    <div v-for="link in links" class="container-items" >
      <img c :src="link.contentUrl" class="content " >
    </div>
    </div>
  </div>


</template>

<script>
  export default {
    name: 'custom-search',
    data () {
      return {
        links: [],
        searchValue: null

      }
    },
    methods: {
      searching() {
        this.$http.get('https://api.cognitive.microsoft.com/bing/v7.0/images/search?q='+ this.searchValue +'&count=10&offset=0&mkt=en-us&safeSearch=Moderate',  {headers: {'Ocp-Apim-Subscription-Key': '012ea95b20724b8cab8b548c73c024e9'}}).then(data => {
          console.log(data);
          this.links = data.body.value;

        });
      }
    },
    created(){


    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  width: 500px;
  height: 500px;
}
.container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
  .container-items {

  }

</style>
