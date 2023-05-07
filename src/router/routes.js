import Products from "@/views/Products.vue";
import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";
import Address from "@/components/Address.vue";
import Confirm from "@/components/Confirm.vue";
import NotFound from "@/views/404.vue";

const routes = [
    {
        path: "/",
        name: "Login",
        component: Login,
    },
    {
        path: "/home",
        name: "Home",
        component: Home
    },
    {
        path: "/products",
        name: "Products",
        component: Products,
    },
    {
        path: "/address",
        name: "Address",
        component: Address,
    },
    {
        path: "/confirm",
        name: "Confirm",
        component: Confirm,
    },
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFound
    }
];

export default routes;