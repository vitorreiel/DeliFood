import Products from "@/views/Products.vue";
import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";
import Administrator from "@/views/Administrator.vue";
import NotFound from "@/views/404.vue";
import Address from "@/components/Address.vue";
import Confirm from "@/components/Confirm.vue";
import Historico from "@/components/Historico.vue";

const routes = [
    {
        path: "/",
        name: "Login",
        component: Login,
        meta: {
            requiresAuth: false // Defina como true se essa rota exigir autenticação
        }
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
        meta: {
            requiresAuth: false // Defina como true se essa rota exigir autenticação
        }
    },
    {
        path: "/administrator",
        name: "Administrator",
        component: Administrator,
        meta: {
            requiresAuth: true // Essa rota requer autenticação
        }
    },
    {
        path: "/products",
        name: "Products",
        component: Products,
        meta: {
            requiresAuth: true // Essa rota requer autenticação
        }
    },
    {
        path: "/address",
        name: "Address",
        component: Address,
        meta: {
            requiresAuth: true // Essa rota requer autenticação
        }
    },
    {
        path: "/confirm",
        name: "Confirm",
        component: Confirm,
        meta: {
            requiresAuth: true // Essa rota requer autenticação
        }
    },
    {
        path: "/historico",
        name: "Historico",
        component: Historico,
        meta: {
            requiresAuth: true // Essa rota requer autenticação
        }
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFound,
        meta: {
            requiresAuth: false // Defina como true se essa rota exigir autenticação
        }
    }
];

export default routes;
