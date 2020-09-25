import Vue from "vue";
import App from "./App.vue";
// import router from "./router";
import VueRouter from 'vue-router'
import vuetify from "./plugins/vuetify";
import Home from "./components/Home.vue"
import About from "./components/About.vue"
import Projects from "./components/Projects.vue"
import Contacts from "./components/Contacts.vue"
import Blog from "./components/Blog.vue"
import Certification from "./components/Certification.vue"

Vue.config.productionTip = false;
Vue.use(VueRouter)


const router = new VueRouter({
  routes : [
      {
      path : '/home',
      component : Home
      },
      {
      path : '/about',
      component : About
      },
      {
      path : '/projects',
      component : Projects
      },
      {
      path : '/contacts',
      component : Contacts
      },
      {
      path : '/blog',
      component : Blog
      },
      {
      path : '/certification',
      component : Certification
      },
  ]
  });


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
