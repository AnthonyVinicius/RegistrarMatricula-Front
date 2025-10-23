import { createRouter, createWebHistory } from "vue-router";
import UserRegisterView from "../View/UserRegisterView.vue";
import CourseRegisterView from "../View/CourseRegisterView.vue"

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
