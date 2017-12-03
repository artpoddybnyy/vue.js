
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
        links: this.$store.state.picLinks || [],
        copyPicLinks:[]
      }
    },
    methods: {
      searching() {

        this.$http.get('https://api.cognitive.microsoft.com/bing/v7.0/images/search?q='+
          this.searchValue + '&count='+ this.searchCountValue +'&offset=0&mkt=en-us&safeSearch=Moderate',
          {headers: {'Ocp-Apim-Subscription-Key': '012ea95b20724b8cab8b548c73c024e9'}})
          .then(data => {
            data.body.value.map((pic) =>{
              return new Promise ((resolve, reject) => {
                let img = new Image ();
                img.onerror = () => reject ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIJVFP_NkplcGoSCexcRvv9xV64APqLhPHg2b2M4BFKx9T0TA9pg');
                img.onload = () => resolve (pic.contentUrl);
                img.src = pic.contentUrl
            }).then((data) => {
                this.copyPicLinks.push(data);
              }).catch((err) => {
                this.copyPicLinks.push(err)
              });
            });
            this.links = this.copyPicLinks;
        });
        setTimeout(() => {
          this.$store.commit('addLinks', this.links);
        }, 2000);
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

</style>
