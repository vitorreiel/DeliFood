import Products from "@/views/Products.vue";
import Login from "@/views/Login.vue";
import Locations from "@/views/Locations.vue";
import Address from "@/components/Address.vue";
import Confirm from "@/components/Confirm.vue";

const routes = [
    {
        path: "/",
        name: "Login",
        component: Login,
    },
    {
        path: "/locations",
        name: "Locations",
        component: Locations
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
    }
];

export default routes;