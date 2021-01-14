import Vue from 'vue'
import App from './App.vue'
import ContentfulVue from 'contentful-vue';

Vue.config.productionTip = false

Vue.use(ContentfulVue, {
  space: "qwj6qsjcimuj",
  accessToken: "hyMrateVeFUGufMb04G7iEgxWRClWpRab-oln4FAKy0"
});

new Vue({
  render: h => h(App),
}).$mount('#app')