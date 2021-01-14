<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>There is no spoon.</h1>
    <Tutorial v-for="tutorial in tutorials" 
      :key="tutorial.title"
      :title="tutorial.title"  
    />
  </div>
</template>

<script>
import Tutorial from './components/Tutorial.vue'

export default {
  name: 'App',
  components: {
    Tutorial
  },
  data() {
    return {
        tutorials: [],
    }
  },
  created() {
    this.$contentful
    .getEntries()
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
