import { createRouter, createWebHistory } from "vue-router";
import CourseRegisterView from "../view/CourseRegisterView.vue";
import UserRegisterView from "../view/UserRegisterView.vue";

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
