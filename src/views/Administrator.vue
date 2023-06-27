<template>
    <section class="home-admin">
        <navbar />
        <img src="img/logo_inicial.png" class="icon_admin">
    </section>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
    components: { Navbar }
}
</script>

<style scoped>
    .home-admin {
        color: black;
        display: flex;
        flex-wrap: wrap;
        border-radius: 7px;
        padding: 20px;
        max-width: 800px;
        min-width: 300px;
        max-height: 620px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        background-color: #fff;
        box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.4);
    }
    
    .icon_admin {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10%;
        width: 8%;
        height: 8%;
    }
</style>