<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1 v-if="tutorials.length === 0">There is no spoon.</h1>
    <Tutorial v-for="tutorial in tutorials" 
      :key="tutorial.sys.id"
      :title="tutorial.fields.title"
      :description="tutorial.fields.description"
      :steps="tutorial.fields.steps"
    />
    <!-- just added to display all data -->
    <div v-if="data !== null">{{data}}</div>
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
        data: null
    }
  },
  created() {

     // getting all entries
    /*this.$contentful
    .getEntries()
    .then((res) => {
      this.data = res
    })
    .catch((error) => {
      console.log(error)
    })*/

     // getting a single entry
    /*this.$contentful
    .getEntry("6bbLQbsDlCApWwKWGM4xJQ")
    .then((res) => {
      this.tutorials.push(res)
    })
    .catch((error) => {
      console.log(error)
    })*/

    // getting all entries of a specific content type
    /*this.$contentful
    .getEntries({
      'content_type': 'tutorial', //filters on the content type.. based on the ID as specified in Contentful
      'include': 1 //sets the level of nested content we will retrieve (default is 0, max is 10)
    })
    .then((res) => {
      this.tutorials = res.items
    })
    .catch((error) => {
      console.log(error)
    })*/ 
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
