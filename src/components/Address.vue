<template>
    <div class="main-div">
        <section class="address-list">
            <h3>Informe o endereço de entrega</h3>
            <div v-for="address in addresses" class="address" @click="onSelectAddress(address)" :class="{ selected : address.active }">
                <div class="description">
                    <span class="rua"> Rua: {{ address.rua }} </span>
                    <span class="bairro"> Bairro: {{ address.bairro }} </span>
                    <span class="numero"> Número: {{ address.numero }} </span>
                    <span class="complemento"> Complemento: {{ address.complemento }} </span>
                    <button class="button-address" style="margin-left: 73%;" @click="this.delete(address.id)">
                        <i class='bx bx-trash'></i>
                    </button>
                </div>
            </div>

            <div v-if="addresses.length == 0">
                <h4>Você não tem endereços cadastrados!</h4>
            </div>

            <div class="buttons-container">
                <ModalAddress />
                <button
                    v-if="isPedido"
                    @click="confirm()"
                    class="button-address"
                    :disabled="selectedAddress == null ? true : false"
                >
                    Confirmar
                </button>
                <router-link v-else to="/home">
                    <button class="button-address">
                        Restaurantes
                    </button>
                </router-link>
            </div>
        </section>
    </div>
</template>

<script>
    import ModalAddress from "./Modal-address.vue";

    export default {
        data() {
            return { 
                addresses: [],
                selectedAddress: null,
                isPedido: false,
            }
        },
        mounted() {
            this.getAddresses();
            this.verifyIfIsPedido();
        },
        components: {
            ModalAddress
        },
        methods: { // Função para selecionar o endereço
            onSelectAddress(address) {
                this.addresses.forEach( a => {
                    a.active = false;
                });

                address.active = true;
                this.selectedAddress = address;
            },
            verifyIfIsPedido() {
                const pedido = JSON.parse(localStorage.getItem("PEDIDO"));

                if (pedido) {
                    this.isPedido = true;
                }
            },
            getAddresses() {
                const userData = JSON.parse(localStorage.getItem("USER"));

                this.$axios.get("/enderecos")
                .then((response) => {
                    const enderecos = response.data.filter(
                        (endereco) => {
                            if (endereco.user_id) {
                                if (parseInt(endereco.user_id.id) == parseInt(userData.user.id))
                                    return true;
                            }

                            return false;
                        }
                    );

                    this.addresses = enderecos;
                })
                .catch((error) => {
                    console.error(error);
                });
            },
            confirm() {
                const pedido = JSON.parse(localStorage.getItem("PEDIDO"));

                localStorage.setItem("PEDIDO", JSON.stringify({
                    ...pedido,
                    endereco: this.selectedAddress
                }));

                this.$router.push("/confirm");
            },
            delete(id) {
                this.$axios.delete(`/enderecos/${id}`)
                    .then(() => {
                        this.addresses = this.addresses.filter(address => address.id !== id);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        }
    }
</script>

<style scoped>
    body {
        margin: 0;
        font-family: 'Open Sans', sans-serif;
    }

    .address-list {
        display: flex;
        flex-wrap: wrap;
        border-radius: 7px;
        padding: 20px;
        margin-right: 20px;
        max-width: 500px;
        min-width: 300px;
        max-height: 600px;
        overflow-y: scroll;
        justify-content: center;
        background-color: #fff;
        box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.4);
    }

    .address-list::-webkit-scrollbar {
        width: 8px;
    }

    .address-list::-webkit-scrollbar-thumb {
        background-color: #A9A9A9;
        border-radius: 20px;
    }

   .address {
        padding: 15px 10px;
        border: 2px solid lightgrey;
        margin: 10px;
        flex: 100%;
        cursor: pointer;
        text-align: center;
        border-radius: 6px;
        margin-bottom: 20px;
        transition: 0.2s ease-in-out;
    }

    .address:hover{
        transform: scale(1.05);
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
    }

    .address.selected {
        border: 2px solid rgb(195, 9, 9);
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
        transform: scale(1.05);
    }

   .description {
        display: flex;
        flex-direction: column;
        margin-right: auto;
        margin-left: 12px;
    }

    .rua, .bairro, .numero, .complemento {
        padding: 5px;
    }

    .button-address {
        align-items: center;
        background-color: #e61919;
        border: 1px solid #e61919;
        border-radius: .25rem;
        box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
        box-sizing: border-box;
        color: #ffffff;
        cursor: pointer;
        display: inline-flex;
        font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
        font-weight: 600;
        font-size: 15px;
        justify-content: center;
        line-height: 1.25;
        margin: 0;
        min-height: 1rem;
        padding: calc(1.2em - 1px) calc(1.8rem - 1px);
        text-decoration: none;
        transition: all 250ms;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        vertical-align: baseline;
    }

    .button-address:hover, .button-address:focus {
        border-color: #e61919;
        box-shadow: rgba(0, 0, 0, 0.2) 0 4px 12px;
        color: #fff;
    }

    .button-address:hover {
        transform: translateY(-1px);
    }

    .button-address:active {
        background-color: #F0F0F1;
        border-color: rgba(0, 0, 0, 0.15);
        box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
        color: rgba(0, 0, 0, 0.65);
        transform: translateY(0);
    } 

    .buttons-container {
        display: flex;
        gap: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>