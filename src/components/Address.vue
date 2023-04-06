<template>
    <div>
        <section class="add">
            <h3>Informe o endereço de entrega</h3>
            <div v-for="address in addresses" class="address" @click="onSelectAddress" :class="{ selected : address.active }">
                <div class="description">
                    <span class="Rua"> {{ address.rua }} </span>
                    <span class="Bairro"> {{ address.bairro }} </span>
                    <span class="Numero"> {{ address.numero }} </span>
                    <span class="Complemento"> {{ address.complemento }} </span>
                </div>
            </div>
            <div class="buttons-container">
                <router-link to="/address">
                    <button class="btn">+ Endereço</button>
                </router-link>
                <router-link to="/address">
                    <button class="botao">Confirmar</button>
                </router-link>
            </div>
        </section>
    </div>
</template>

<script>
    import { addresses } from "../utils/addresses"
    export default {
        data() {
            return {
                addresses: addresses
            }
        },
        methods: {
            onSelectAddress() {
                
            }
        }
    }
</script>

<style scoped>
    body {
        margin: 0;
        font-family: 'Open Sans', sans-serif;
    }

    div > section.add h3 {
        text-align: center;
        margin-top: 0;
        width: 100%;
    }
    div {
        display: flex;
        justify-content: center;
        align-items:flex-start;
        flex-wrap: wrap;
        padding: 0;
    }

    div > section.add{
        display: flex;
        flex-wrap: wrap;
        border: 1px solid lightgrey;
        padding: 20px;
        max-width: 500px;
        min-width: 300px;
        max-height: 620px;
        overflow-y: scroll;
        justify-content: center;
        background-color: #ffffff;
        border-radius: 6px;
    }

    section.add .address {
        border: 1px solid lightgrey;
        margin: 10px;
        flex: 100%;
        cursor: pointer;
        text-align: center;
        border-radius: 6px;
    }

    section.add .address.selected {
        border: 2px solid rgb(29, 134, 233);
    }

    section.add .description {
        display: flex;
        flex-direction: column;
        margin-right: auto;
        margin-left: 12px;
    }
    .btn {
        background-color: #e61919;
        color: #fff;
        font-size: 14px;
        font-weight: 550;
        border: none !important;
        transition: all linear 160ms;
        width: 100%;
        height: 6vh;
        border-radius: 5px;
    }

    .btn:hover {
        transform: scale(1.05);
        background-color: #cc0000;
    }

    .botao {
        background-color: #e61919;
        color: #fff;
        font-size: 14px;
        font-weight: 550;
        border: none !important;
        transition: all linear 160ms;
        width: 100%;
        height: 6vh;
        border-radius: 5px;

    }

    .botao:hover {
        transform: scale(1.05);
        background-color: #cc0000;
    }

    .buttons-container {
        display: flex;
        gap: 20px;
    }
</style>