<template>
    <div>

        <section class="summary" v-if="total()>0">
            <strong>Confirmação do pedido</strong>
            <table>
                <thead>
                    <tr>
                        <th>Item</th> 
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    
                
                    <tr v-for="product in products">
                        <template v-if="product.active"> <!-- Se algum produto for selecionado, 
                            ele vai exibir o Resumo do pedido e fazer a conta de cada produto
                            selecionado até obter o total -->
                            <td> {{ product.quantity + 'x ' + product.name }} </td>
                            <td> {{ `${this.monetary} ${(product.quantity * product.price).toFixed(2)}` }} </td>
                        </template>

                    </tr>
                    
                    <tr>
                        <th>Total</th>
                        <th> {{ `${this.monetary} ${total()}` }} </th> <!-- Obter o total final
                            do pedido, através do Método criado pora a função Total -->
                    </tr>
             
                </tbody>
            </table>
            <ModalConfirm></ModalConfirm>
        </section>
    </div>
</template>

<script>
    import { addresses } from "../utils/addresses"
    import { products } from "../utils/products"
    import ModalConfirm from "./Modal-confirm.vue"
    export default {
        data() { 
            return { 
                addresses,
                products,
                monetary: "R$"

            }
        },
        components: {
            ModalConfirm,
        },
        methods: {
            // Método para obter o total do pedido
            total() {
                let total = 0
                this.products.forEach(product => {
                    if (product.active) {
                        total += product.quantity * product.price
                    }
                })
                return total.toFixed(2)
            },
           
        }
    }
</script>

