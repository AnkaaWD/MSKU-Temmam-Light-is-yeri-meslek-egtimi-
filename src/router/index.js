import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Home from "@/views/HomeView.vue";
import appAbout from "@/components/appAbout.vue";
import appProjects from "@/components/appProjects.vue";
import appSuccess from "@/components/appSuccess.vue";
import appPartners from "@/components/appPartners.vue";
import appTeam from "@/components/appTeam.vue";
import appFooter from "@/components/appFooter.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  { path: "/", component: Home },
  { path: "/appAbout", component: appAbout },
  { path: "/appProjects", component: appProjects },
  { path: "/appSuccess", component: appSuccess },
  { path: "/appPartners", component: appPartners },
  { path: "/appTeam", component: appTeam },
  { path: "/appFooter", component: appFooter },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
