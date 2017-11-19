<template>
  <div>

<h1 v-text="form"></h1>

  <div class="form">
    <form>
      <label for="fname">First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name.." v-model="formResult.name">
      <label for="age">Age</label>
      <input type="text" id="age" placeholder="Your age" v-model="formResult.age">
      <div>
      <label for="city">Выбери город</label>
      <select  id="city" v-model="formResult.city">
        <option v-for="city in cities" v-text="city"></option>
      </select>
      </div>
      <input type="submit" value="Submit" @click.prevent="subForm">
    </form>
  </div>


    <modal name="result" :clickToClose = false>
      <button @click.prevent="close">close</button>
       <div v-html="modalResult" class="result"></div>
   </modal>

  </div>
</template>

<script>
  export default {
    name: 'form',
    data () {
      return {
        form: 'Form',
        cities: ['Харьков', 'Киев', 'Львов'],
        formResult: {name: null, age: null, city: null},
        modalResult: ''
      }
      },
        methods:{
          subForm () {
            (this.formResult.name && this.formResult.age &&  this.formResult.city) === null ?  this.modalResult = '<h1> Что то пропущенно</h1>' :
              this.modalResult = '<h3>Меня зовут '+ this.formResult.name +' мне '+ this.formResult.age+ ' я проживаю в '+ this.formResult.city +'e</h3>';

            this.$modal.show('result');

          },
          close () {
            this.$modal.hide('result');
            this.formResult.name = null;
            this.formResult.age = null;
            this.formResult.city = null;
          }
      }
  }
</script>


<style scoped>
.form {
  margin: 0 auto;
  width: 400px;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  }

  input[type=text] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  input[type=submit] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  input[type=submit]:hover {
    background-color: #a07541;
  }

  button {
    float: right;
    margin: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: #06a08c;
  }

.v--modal-overlay[data-modal="result"] {
  background: #dedede;

}

</style>
