<template>
  <div class="tutorial">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <!-- <VueShowdown :markdown="description" tag="p" /> -->
    <ol>
      <li v-for="step in steps" :key="step.sys.id">
        <span v-if="step.fields">{{step.fields.title}}</span>
        <!-- added as an example to show what happens when you set depth to 0 --> 
        <span v-else>{{step.sys.id}}</span>
      </li>
    </ol>
    
  </div>
</template>


<script>
export default {
  name: 'Tutorial',
  props: {
    id: String,
    title: String,
    description: String,
    steps: Array,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 40px 0 0;
}
ol {
  padding: 0;
  margin-left: 10px;
  text-align: left;
}
li {
  margin: 5px 10px;
  padding-left: 10px;
}

.tutorial{
  text-align: left;
  max-width: 350px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
