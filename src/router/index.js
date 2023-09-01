import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/WelcomeView.vue";
import Main from "../views/MainView.vue";
import Home from "../views/HomeView.vue";
import UserList from "../views/UserList.vue";
import Register from "../views/RegisterView.vue";
import Login from "../views/LoginView.vue";
import NotFound from "../views/NotFound.vue";
import DetailsComp from "../components/DetailsComp.vue";

const routes = [
  {
    path: "/main/:id",
    name: "Main",
    component: Main,
    // redirect: "/main/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: Home,
      },
      {
        path: "userlist",
        name: "Userlist",
        component: UserList,
      },
      {
        path: "userlist/:itemid",
        name: "ItemDetails",
        component: DetailsComp,
      },
    ],
  },

  {
    path: "/",
    name: "Welcome",
    component: Welcome,
    children: [
      {
        path: "/register",
        name: "Register",
        component: Register,
      },

      {
        path: "/login",
        name: "Login",
        component: Login,
      },
    ],
  },

  {
    // path: "*",
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },

  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
