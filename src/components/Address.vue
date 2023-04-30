<template>
    <div>
        <section class="add">
            <h3>Informe o endereço de entrega</h3>
            <div v-for="address in addresses" class="address" @click="onSelectAddress(address)" :class="{ selected : address.active }">
                <div class="description">
                    <span class="Rua"> Rua: {{ address.rua }} </span>
                    <span class="Bairro"> Bairro: {{ address.bairro }} </span>
                    <span class="Numero"> Número: {{ address.numero }} </span>
                    <span class="Complemento"> Complemento: {{ address.complemento }} </span>
                </div>
            </div>
            <div class="buttons-container">
                <ModalAddress></ModalAddress>
                <router-link to="/confirm">
                    <button class="botao" @click.>Confirmar</button>
                </router-link>
            </div>
        </section>

        <section v-if="onSelectAddress">  
        <div>
            <span> {{ onSelectAddress.rua }}</span> 
            <span> {{ onSelectAddress.bairro }}</span> 
            <span> {{ onSelectAddress.numero }}</span>
            <span> {{ onSelectAddress.complemento }}</span>
        </div>
        </section>

    </div>
</template>

<script>
    import { addresses } from "../utils/addresses"
import ModalAddress from "./Modal-address.vue";
    export default {
        data() {
            return { 
                addresses
            }
        },
        components: {
    ModalAddress,
    ModalAddress
},
        methods: { // Função para selecionar o endereço
            onSelectAddress(address) {
                this.addresses.forEach( a => {
                    a.active = false;
                });
                address.active = true;
                
                this.selectedAddress = address;
            }
        }
    }
</script>

<style scoped>
    body {
        margin: 0;
        font-family: 'Open Sans', sans-serif;
    }

    .add {
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
    .add h3 {
        text-align: center;
        margin-top: 0;
        width: 100%;
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

   .description {
        display: flex;
        flex-direction: column;
        margin-right: auto;
        margin-left: 12px;
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