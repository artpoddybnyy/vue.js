<template>
  <div>
    <form  >
      <label for="post-title" class="label"><h3>Post Title</h3>  </label>
      <input id="post-title" type="text" v-model="post.title" minlength="1" />
      <label for="post-body" class="label"><h3> Post Body </h3></label>
      <input id="post-body" type="text" v-model="post.body" minlength="1"/>
      <p><button @click.prevent="addPost">Add</button></p>
    </form>
    <div v-for="post in posts" class="container">
      <div class="item-id">{{post.id}}</div>
      <div class="item-title">{{post.title}}</div>
      <div class="item-body">{{post.body}}</div>
    </div>
  </div>
</template>

<script>
  export default  {
    name: 'posts-component',
    data () {
      return {
        posts: [],
        post: {
          title: '',
          body: ''
        }
      }
    },
    methods: {
      getPosts: function () {
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(response => {
          this.posts = response.body.splice(0, 5);
          console.log(this.posts)
        }, response => {
          console.log(response)
        });
      },
      addPost: function () {
        this.$http.post('https://jsonplaceholder.typicode.com/posts', {
            title: this.post.title,
            body: this.post.body
          }
        ).then(function (data) {
          console.log(data);
          this.post.title = '';
          this.post.body = '';
        });
      }
    },
    created() {
      this.getPosts();
    }
  }
</script>

<style scoped>

  .container {
    font-size: large;
    justify-content: flex-start;
    display: flex;
    margin-left: 30px;
    margin-right: 15px;
  }

  .item-id {
    display: flex;
    flex: 0 1 33px;
    margin: 10px;
    padding: 10px;

  }

  .item-title {
    display: flex;
    flex: 0 1 400px;
    margin: 10px;
    padding: 10px;

  }

  .item-body {
    display: flex;
    flex: 0 1 600px;
    margin: 10px;
    padding: 10px;

  }
  .label{
    display: flex;
    justify-content: center;
    margin: 2px;

  }
  button{
    background-color: aqua;
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 15px;

  }
  input[type=text] {
    width: 40%;
    padding: 12px 15px;
    box-sizing: border-box;
  }
</style>
