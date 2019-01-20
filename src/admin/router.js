import Vue from "vue"
import VueRouter from "vue-router";
import axios from "axios";

Vue.use(VueRouter);

import blog from "./components/blog";
import works from "./components/works";
import about from "./components/about";


const routes = [
  {
    path: '/',
    component: about
  },
  {
    path: '/works',
    component: works
  },
  {
    path: '/blog',
    component: blog
  }
];

export default new VueRouter({routes, mode:'history'});