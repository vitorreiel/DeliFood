import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = JSON.parse(localStorage.getItem('USER')) ? true : false;

  if (requiresAuth && !isAuthenticated) {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
