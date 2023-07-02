<template>
    <div class="main-div">
        <section class="historic-list">
            <h3>Histórico de Pedidos</h3>
            <div v-for="historic in historics" class="historic">
                <div class="">
                    <div class="photo-historic">
                        <img class="photo-historic-action" :src="'../../app/public/' + historic.restaurante.imagem[0].url">
                    </div>
                    <div class="description-historic">
                        <span class="name">{{ historic.restaurante.nome }} </span>
                        <span class="">Pedido {{ historic.id }} </span>
                        <span class=""> {{ historic.data_hora }} </span>
                    </div>
                    <div v-for="product in historic.products" class="product-historic">
                        <span class=""> {{ product.quantidade }}x {{ product.produto.nome }} - R$ {{ product.subtotal.toFixed(2) }}</span>
                    </div>
                    <p class="product-historic-total"><span class="">Preço Total - <b>R$ {{ historic.total.toFixed(2) }}</b> </span></p>
                    <div class="address-historic">
                      <span class="">Endereço: <br> {{ historic.endereco }}</span>
                    </div>
                </div>
            </div>

            <div v-if="historics.length == 0">
                <h5>Não há restaurantes registrados</h5>
            </div>
        </section>
    </div>
</template>

<script>
// import {historics} from '../utils/historics';
    export default {
        data() {
            return {
                historics: []
            }
        },
        methods: {
            async getHistory() {
                const userData = JSON.parse(localStorage.getItem('USER'));

                this.$axios.get("/historicos", { id_cliente: userData.user.id })
                    .then(async (response) => {
                        let data = response.data;
                        let iterator = 0;

                        for (const dt of data) {
                            try {
                                const pedidos = await this.$axios.get("/pedidos", { params: { historico: dt.id } });

                                data[iterator] = {
                                    ...data[iterator],
                                    products: {
                                        ...pedidos.data
                                    }
                                };
                            } catch (e) {
                                console.log(e);
                            } finally {
                                iterator++;
                            }
                        }

                        this.historics = data;
                    }).catch((error) => {
                        console.log(error)
                    })
            }
        },
        mounted() {
            this.getHistory();
        }
    }
</script>

<style>

    .historic-list {
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

    .historic-list::-webkit-scrollbar {
        width: 8px;
    }

    .historic-list::-webkit-scrollbar-thumb {
        background-color: #A9A9A9;
        border-radius: 20px;
    }

    .historic {
        border: 2px solid lightgrey;
        margin: 10px;
        display: flex;
        flex: 100%;
        cursor: pointer;
        border-radius: 7px;
        transition: 0.2s ease-in-out;
    }

    .historic:hover{
        transform: scale(1.05);
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
    }

    .historic-content {
        display: flex;
        flex: 100%;
        text-decoration: none;
        color: black
    }

    .photo-historic-action {
        width: 90px;
        height: 90px;
        margin-top: 20px;
        margin-left: 30px;
        margin-bottom: 15px;
        border-radius: 7px;
        transition: 0.2s ease-in-out;
    }

    .photo-historic-action:hover {
        transform: scale(1.3);
    }

    .description-historic {
        display: flex;
        align-items: center;
        padding: 0;
        flex-direction: column;
        margin-right: auto;
        margin-left: 205px;
        margin-top: -90px;
        margin-bottom: 50px;
    }

    .product-historic{
        display: flex;
        align-items: center;
        padding: 0;
        flex-direction: column;
        margin-left: 20px;
        margin-top: 10px;
    }

    .name-historic {
        padding-top: 20px;
        font-weight: bold;
        font-size: 17px;
    }

    .address-historic {
        display: flex;
        align-items: flex-start;
        padding: 0;
        flex-direction: column;
        margin-left: 20px;
        margin-bottom: 20px;
        width: 380px;
    }

    .product-historic-total {
        text-align: center;
    }

</style>