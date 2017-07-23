<template>
  <div>

    <div v-for="post in posts" class="container">
      <div class="item-id">{{post.id}}</div>
      <div class="item-title">{{post.title}}</div>
      <div class="item-body">{{post.body}}</div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'posts-component',
    data () {
      return {
        posts: []

      }
    },
    methods: {
      getAll: function () {
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(response => {
          this.posts = response.body.splice(0, 10)
        }, response => {
          console.log(response)
        })
      }

    },
    created: function () {
      this.getAll()
    }
  }
</script>


<style scoped>

.container{
  font-size: large;
  justify-content: flex-start;
  display: flex;
  margin-left: 30px;
  margin-right: 15px;
}
  .item-id{
    display: flex;
    flex: 0 1 33px;
    margin: 10px;
    padding: 10px;

  }
.item-title{
    display: flex;
    flex: 0 1 400px;
    margin: 10px;
    padding: 10px;

  }
.item-body{
    display: flex;
    flex: 0 1 600px;
    margin: 10px;
    padding: 10px;

  }

</style>
