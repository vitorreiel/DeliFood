<template>
    <div>
        <section class="add">
            <h3>Informe o endereço de entrega</h3>
            <div class="container-address">
                <div v-for="address in addresses" class="address" @click="selecionar(address)" :class="{ selected : address.active }">
                    <div class="description-address">
                        <span class="Rua">Rua: {{ address.rua }} </span>
                        <span class="Bairro">Bairro: {{ address.bairro }} </span>
                        <span class="Numero">N°: {{ address.numero }} </span>
                        <span class="Complemento">Complemento: {{ address.complemento }} </span>
                    </div>
                </div>
            </div>
            <div class="buttons-container">
                <router-link to="/address">
                    <button class="btn">+ Endereço</button>
                </router-link>
                <router-link to="/confirm">
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
                addresses
            }
        },
        methods: {
            selecionar: function(address) {
                const activeAdress = this.addresses.find(item => item.active);
                if (activeAdress){
                   activeAdress.active = false 
                }
                address.active = !address.active
            }
        }
    }
</script>

<style>
    body {
        margin: 0;
        font-family: 'Open Sans', sans-serif;
    }

    div {
        display: flex;
        justify-content: center;
        align-items:flex-start;
        flex-wrap: wrap;
        padding-top: 20px;
    }

    .add {
        display: flex;
        flex-wrap: wrap;
        border: 1px solid lightgrey;
        padding: 20px;
        max-width: 500px;
        min-width: 300px;
        justify-content: center;
        background-color: #ffffff;
        border-radius: 6px;
        box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.4);
    }

    .container-address{
        overflow-y: scroll;
        max-height: 480px;
    }

    .container-address::-webkit-scrollbar {
        width: 8px;
    }

    .container-address::-webkit-scrollbar-thumb {
        background-color: #A9A9A9;
        border-radius: 20px;
    }

    .address {
        border: 1px solid lightgrey;
        margin: 10px;
        flex: 100%;
        cursor: pointer;
        text-align: center;
        border-radius: 6px;
    }

    .address.selected {
        border: 2px solid rgb(29, 134, 233);
    }

    .description-address {
        display: flex;
        flex-direction: column;
        margin-right: auto;
        margin-left: 30px;
        margin-top: -20px;
        margin-bottom: 20px;
        line-height: 1.5em;
    }
    .btn {
        background-color: #e61919;
        color: #fff;
        font-size: 14px;
        font-weight: 550;
        border: none !important;
        transition: all linear 160ms;
        width: 150px;
        height: 45px;
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
        width: 150px;
        height: 45px;
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