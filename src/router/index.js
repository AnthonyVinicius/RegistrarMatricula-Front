import { createRouter, createWebHistory } from "vue-router";
import CourseRegisterView from "../views/CourseRegisterView.vue";
import UserRegisterView from "../views/UserRegisterView.vue";
import UserDashboardView from "../views/UserDashboardView.vue";
import CourseDashboardView from "../views/CourseDashboardView.vue";
import AllUsersView from "../views/AllUsersView.vue";
import AllCoursesView from "../views/AllCoursesView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/registerUser",
    },
    {
      path: "/registerUser",
      name: "registerUser",
      component: UserRegisterView,
    },
    {
      path: "/registerCourse",
      name: "registerCourse",
      component: CourseRegisterView,
    },
    {
      path: "/courseDashboard",
      name: "courseDashboard",
      component: CourseDashboardView,
    },
    {
      path: "/userDashboard",
      name: "userDashboard",
      component: UserDashboardView,
    },
    {
      path: "/allUsers",
      name: "allUsers",
      component: AllUsersView,
    },
    {
      path: "/allCourses",
      name: "allCourses",
      component: AllCoursesView,
    },
  ],
});

export default router;
