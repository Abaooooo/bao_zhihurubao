import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: home */ "@/views/Home"),
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: () => import(/* webpackChunkName: detail */ "@/views/Detail"),
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
