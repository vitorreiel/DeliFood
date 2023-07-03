import Products from "@/views/Products.vue";
import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";
import Administrator from "@/views/Administrator.vue";
import ManageClient from "@/components/Admin/Manage-cliente.vue";
import ManageRestaurant from "@/components/Admin/Manage-restaurante.vue";
import Register from "@/views/Register.vue";
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
            requiresAuth: false, // Defina como true se essa rota exigir autenticação
            admin: false,
        }
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: {
            requiresAuth: false, // Defina como true se essa rota exigir autenticação
            admin: false,
        }
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
        meta: {
            requiresAuth: false, // Defina como true se essa rota exigir autenticação
            admin: false,
        }
    },
    {
        path: "/administrator",
        name: "Administrator",
        component: Administrator,
        meta: {
            requiresAuth: true, // Essa rota requer autenticação
            admin: true,
        }
    },
    {
        path: "/administrator/client",
        name: "ManageClient",
        component: ManageClient,
        meta: {
            requiresAuth: true, // Essa rota requer autenticação
            admin: true,
        }
    },
    {
        path: "/administrator/restaurant",
        name: "ManageRestaurant",
        component: ManageRestaurant,
        meta: {
            requiresAuth: true, // Essa rota requer autenticação
            admin: true,
        }
    },
    {
        path: "/products",
        name: "Products",
        component: Products,
        meta: {
            requiresAuth: true, // Essa rota requer autenticação
            admin: false,
        }
    },
    {
        path: "/address",
        name: "Address",
        component: Address,
        meta: {
            requiresAuth: true, // Essa rota requer autenticação
            admin: false,
        }
    },
    {
        path: "/confirm",
        name: "Confirm",
        component: Confirm,
        meta: {
            requiresAuth: true, // Essa rota requer autenticação
            admin: false,
        }
    },
    {
        path: "/historico",
        name: "Historico",
        component: Historico,
        meta: {
            requiresAuth: true, // Essa rota requer autenticação
            admin: false,
        }
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFound,
        meta: {
            requiresAuth: false, // Defina como true se essa rota exigir autenticação
            admin: false,
        }
    }
];

export default routes;
