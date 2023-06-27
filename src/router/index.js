import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  const userData = JSON.parse(localStorage.getItem('USER'));
  const isAuthenticated = userData ? true : false;

  const isAdmin = userData 
    ? userData.user.role.type === "admin"
      ? true
      : false
    : false

  if (isAdmin && !to.meta.admin) {
    next({ name: "Administrator" });
  }

  if (to.meta.admin && !isAdmin) {
    next({ name: from.name });
  }

  if (requiresAuth && !isAuthenticated) {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
