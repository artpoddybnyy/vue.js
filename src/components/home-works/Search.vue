﻿
<template>
  <div>
    <form action.prevent="searching">
    <input   type="text" v-model="searchValue" placeholder="Введите Название Картинки">
    <input  class="request-count"  type="number" v-model="searchCountValue">
    <button @click="searching">Search</button>
    </form>

    <div class="container">
    <div v-for="link in links" class="container-items" >
      <img  :src="link" class="content" >
    </div>
    </div>
  </div>


</template>

<script>
  export default {
    name: 'custom-search',
    data () {
      return {
        searchValue: null,
        searchCountValue: 10,
        links:  this.$store.state.picLinks || [],
        copyPicLinks: [],
        notFound: 'https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/404-not-found-error-page-examples.png'
      }
    },
    methods: {
      searching() {
        this.copyPicLinks.splice(0,  this.copyPicLinks.length);
        this.links.splice(0,  this.links.length);
        this.$http.get('https://api.cognitive.microsoft.com/bing/v7.0/images/search?q='+
          this.searchValue + '&count='+ this.searchCountValue +'&offset=0&mkt=en-us&safeSearch=Moderate',
          {headers: {'Ocp-Apim-Subscription-Key': 'af95ae0ddabd46f28b5c1e110ee85603'}})
          .then(data => {
            data.body.value.map(pic => {
              return new Promise ((resolve, reject) => {
                let img = new Image ();
                img.onerror = () => reject (this.notFound);
                img.onload = () => resolve (pic.contentUrl);
                img.src = pic.contentUrl})
                .then(data => this.copyPicLinks.push(data))
                .catch(err => this.copyPicLinks.push(err));
            });
          this.links = this.copyPicLinks;
          this.$store.commit('addLinks', this.links);
        });
      },
    },
    computed: {

    },
    created(){

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  width: 100%;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin: auto auto;

}
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
  .container-items {
    display: flex;
    width: 600px;
    height: 400px;
    overflow: hidden; margin: 10px;
    background-color: #ddd;
  }
  form {
    margin: 20px auto;
  }

button{
  background-color: #35495e;
  border: none;
  color: #f5e988;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 15px;

}
  button:hover {
    background-color: black;
  }
  input[type=text] {
  width: 300px;
  padding: 12px 15px;
    box-sizing: border-box;
    border: 1px solid #35495e;
    border-radius: 10px;
}
.request-count {
  width: 100px;
  padding: 12px 15px;
  box-sizing: border-box;
  border: 1px solid #35495e;
  border-radius: 10px;
}
@media screen and (max-width: 540px) {
  .container-items {
    height: 300px;
  }
}
@media screen and (max-width: 376px) {
  .container-items {
    height: 200px;
  }
}

</style>
