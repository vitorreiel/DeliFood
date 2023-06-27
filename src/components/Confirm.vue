<template>
    <div class="main-div">
        <section class="summary-confirm" v-if="total > 0">
            <h3>Confirmação do pedido</h3>
            <table>
                <thead>
                    <tr>
                        <th class="table-products-confirm">Item</th> 
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products">
                        <template v-if="product.quantidade > 0">
                            <!-- Se algum produto for selecionado, 
                                ele vai exibir o Resumo do pedido e fazer a conta de cada produto
                                selecionado até obter o total -->
                            <td class="table-products"> {{ product.quantidade + ' X ' + product.nome }} </td>
                            <td> {{ `${this.monetary} ${(product.quantidade * parseFloat(product.valor.replace(",", "."))).toFixed(2)}` }} </td>
                        </template>
                    </tr>
                    <tr class="table-sumary-confirm" >
                        <th class="table-products-confirm">Total</th>
                        <th> {{ `${this.monetary} ${total}` }} </th> <!-- Obter o total final
                            do pedido, através do Método criado pora a função Total -->
                    </tr>
                </tbody>
            </table>

            <ModalConfirm />
        </section>
    </div>
</template>

<script>
    import { addresses } from "../utils/addresses"
    import ModalConfirm from "./Modal-confirm.vue"

    export default {
        data() { 
            return { 
                addresses,
                products: null,
                total: 0,
                monetary: "R$"
            }
        },
        components: {
            ModalConfirm,
        },
        mounted() {
            const pedido = JSON.parse(localStorage.getItem("PEDIDO"));

            this.products = pedido.produtos;
            this.total = pedido.total;
        },
    }
</script>

<style scoped>
    .summary-confirm {
        background-color: rgb(245, 245, 245);
        padding: 20px;
        min-height: 300px;
        min-width: 400px;
        text-align: center;
        box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.4);
        border-radius: 7px;
    }

    .summary-confirm table {
        width: 100%;
        padding-top: 12px;
        font-size: 16px;
        margin: auto;
    }

    .summary-confirm table tbody tr:last-of-type th {
        border-top: 1px solid black;
        padding-top: 10px;
        padding-bottom: 20px;
    }    
    
    .table-sumary-confirm {
        font-size: 20px;
    }

    .table-products-confirm {
        text-align: left;
        padding-right: 50px;
        padding-top: 10px;
    }
</style>
