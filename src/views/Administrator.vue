<template>
    <section class="home-admin">
        <Navbar />
        <div class="home-admin-content">
            <div v-if="['clientes', 'restaurantes', 'pedidos'].includes(type)">
                <admin-data :type="this.type" />
            </div>
            <div v-else-if="type == ''">
                <div class="select-option-admin">
                    <p style="text-align: center;">Selecione alguma opção ao lado</p>
                    <img src="img/logo_inicial.png" class="icon_admin">
                </div>
            </div>
            <div v-else>
                <div class="select-option-admin">
                    <p>Não existe essa categoria no menu, por favor, selecione outra</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import AdminData from '../components/AdminData.vue';

export default {
    data() {
        return {
            type: '',
        };
    },
    components: {
        Navbar,
        AdminData
    },
    mounted() {
        this.type = this.$router.currentRoute.value.query?.type || "";
    }
}
</script>

<style scoped>
    .home-admin {
        color: black;
        display: flex;
        flex-wrap: wrap;
        border-radius: 7px;
        padding: 20px;
        min-width: 800px;
        max-width: 800px;
        min-height: 600px;
        max-height: 600px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        background-color: #fff;
        box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.4);
        position: relative;
        padding-left: 80px;
    }

    .home-admin-content {
        overflow: auto;
        max-height: 560px;
        width: 100%;
    }

    .select-option-admin {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .icon_admin {
        height: 50px;
        width: 50px;
    }
</style>
