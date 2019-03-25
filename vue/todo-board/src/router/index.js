import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Backlog from "@/components/Backlog";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/backlog",
      component: Backlog
    },
    {
      path: "*",
      redirect: "/backlog"
    }
  ]
});
