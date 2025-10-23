import { createRouter, createWebHistory } from "vue-router";
import CourseRegisterView from "../View/CourseRegisterView.vue";
import UserRegisterView from "../View/UserRegisterView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/user",
    },
    {
      path: "/user",
      name: "user",
      component: UserRegisterView,
    },
    {
      path: "/course",
      name: "course",
      component: CourseRegisterView,
    },
  ],
});

export default router;
