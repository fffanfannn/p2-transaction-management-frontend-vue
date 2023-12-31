import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/WelcomeView.vue";
import Main from "../views/MainView.vue";
import Home from "../views/HomeView.vue";
import UserData from "../views/UserData.vue";
import ChartComp from "../views/ChartComp.vue";
import AdminData from "../views/AdminData.vue";
import Register from "../views/RegisterView.vue";
import Login from "../views/LoginView.vue";
import NotFound from "../views/NotFound.vue";
import DetailsComp from "../components/DetailsComp.vue";

const routes = [
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
    path: "/main/:id",
    name: "Main",
    component: Main,
    beforeEnter: (to, from, next) => {
      const isAuthenticated = localStorage.getItem("lastUserInfo");
      if (isAuthenticated) {
        next();
      } else {
        next("/");
      }
    },
    redirect: { name: "Userdata" },
    children: [
      {
        path: "account",
        name: "Home",
        component: Home,
      },
      {
        path: "userdata",
        name: "Userdata",
        component: UserData,
      },
      {
        path: "userdata/:itemid",
        name: "ItemDetails",
        component: DetailsComp,
      },
      {
        path: "report",
        name: "Statistics",
        component: ChartComp,
      },
    ],
  },

  {
    path: "/admin",
    name: "Admindata",
    component: AdminData,
  },
  {
    // path: "*",
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
