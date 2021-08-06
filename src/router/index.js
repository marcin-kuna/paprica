import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/magazines",
    name: "Czasopisma",
    component: () => import("../views/Magazines.vue"),
  },
  {
    path: "/api",
    name: "Api",
    component: () => import("../views/Api.vue"),
  },
  {
    path: "/api/posts",
    name: "Posts",
    component: () => import("../views/Posts.vue"),
  },
  {
    path: "/api/create-post",
    name: "CreatePost",
    component: () => import("../views/CreatePost.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
