import Vue from "vue";
import VueRouter from "vue-router";
import VueParticles from 'vue-particles'
import Home from "../views/Home.vue";

Vue.use(VueRouter);
Vue.use(VueParticles)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue")
  },
  {
    path: "/works",
    name: "Works",
    component: () =>
      import("../views/Works.vue")
  },
  {
    path: "/history",
    name: "History",
    component: () =>
      import("../views/History.vue")
  },
  {
    path: "/skills",
    name: "Skills",
    component: () =>
      import("../views/Skills.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: "/tommy-portfolio",
  routes
});

export default router;
