<template>
  <div class="custom-color">
    <h1>{{ msg }}</h1>
  </div>

</template>

<script>
  export default {
    name: 'custom-hello',
    data () {
      return {
        msg: 'Welcome to Your CUSTOM Vue Component'
      }
    }
  }
</script>


<style scoped>

  .custom-color {
    color: red;

  }

</style>
