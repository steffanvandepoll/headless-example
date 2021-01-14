import Vue from 'vue'
import App from './App.vue'

// extra plugins used to make life easy for us
import ContentfulVue from 'contentful-vue';
// import VueShowdownPlugin from 'vue-showdown';

Vue.config.productionTip = false

// configure our space and key which are required for request to contentful
Vue.use(ContentfulVue, {
  space: "qwj6qsjcimuj",
  accessToken: "hyMrateVeFUGufMb04G7iEgxWRClWpRab-oln4FAKy0"
});

/* Vue.use(VueShowdownPlugin, {

}); */

new Vue({
  render: h => h(App),
}).$mount('#app')