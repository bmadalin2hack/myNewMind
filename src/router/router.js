import Vue from "vue";
import VueRouter from "vue-router";
import WelcomePage from "@/views/Welcome";
import Home from "@/views/Home";
import Register from "@/views/Register";
import SigninPage from "@/views/SignIn";
import FindHelp from "@/views/FindHelp";
import Emergency from "@/views/Emergency";
import store from "../store/store";
import storeArticles from "../store/storeArticles";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: WelcomePage },
  {
    path: "/register",
    component: Register
  },
  { path: "/signin", component: SigninPage },
  {
    path: "/home",
    component: Home,
    beforeEach(to, from, next) {
      if (store.state.idToken) {
        next();
      } else {
        next("/signin");
      }
    }
  },
  { path: "/findhelp", component: FindHelp },
  { path: "/emergency", component: Emergency },
  {
    path: "/articles/:slug",
    name: "Articles",
    props: true,
    component: () =>
      import(/* webpackChunkName: "Articles" */ "@/views/Articles"),
    children: [
      {
        path: ":topicsSlug",
        name: "Topics",
        props: true,
        component: () =>
          import(/*webpackChunkName: "Topics" */ "@/views/Topics")
      }
    ],
    beforeEnter: (to, _from, next) => {
      const exists = storeArticles.articles.find(
        article => article.slug === to.params.slug
      );
      if (exists) {
        next();
      } else {
        next({ name: "home" });
      }
    }
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
