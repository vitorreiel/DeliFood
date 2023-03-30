import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Address from "@/components/Address.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/address",
        name: "Address",
        component: Address,
    }
];

export default routes;