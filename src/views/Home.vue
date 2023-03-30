<template>
    <div>
        <section class="items">
            <h3>Selecione os produtos</h3>
            <div v-for="product in products" class="product" @click="product.active = !product.active" :class="{ selected : product.active }">
                <div class="photo">
                    <img :src="product.photo">
                </div>
                <div class="description">
                    <span class="name"> {{ product.name }} </span>
                    <span class="complements"> {{ product.complements }} </span>
                </div>
                <div class="price">
                    <span> {{ `${this.monetary} ${product.price}` }} </span>
                    <div class="quantity-area" v-if="product.active">
                        <button class="button-1" @click.stop="product.quantity--" :disabled="product.quantity <=1">-</button>
                        <span class="quantity"> {{ product.quantity }} </span>
                        <button class="button-2" @click.stop="product.quantity++">+</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="summary" v-if="total()>0">
            <strong>Resumo do pedido</strong>
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
            <router-link to="/address">
                <button class="btn">Confirmar</button>
            </router-link>
        </section>
    </div>
</template>

<script>
    import { products } from "../utils/products"
    export default {
        data() {
            return {
                products: products,
                monetary: "R$"
            }
        },
        methods: {
            total: function() {
                var total = this.products.reduce((acc, item) => { 
                    // método reduce: ele executa uma função para cada elemento do array.
                    // acc (acumulador): recebe o valor inicial, e seu valor será acumulado comforme as interações com o array, armazenando o valor total.
                    if (item.active) {
                        acc += item.price * item.quantity;
                    }
                    return acc; // irá retornar o valor total acumulado pelo acc, nas operações dentro do If.
                }, 0); // o valor inicial dessa função é 0, mas em caso de um (ou mais) produto for selecionado, a função irá executar o Método reduce.
                return total.toFixed(2); 
                    // toFixed: irá definir o números de casas decimais depois da virgula.
                    // irá retornar o valor total no método total().
            }
        }
    }
</script>

<style>
    body {
        margin: 0;
        font-family: 'Open Sans', sans-serif;
    }

    div > section.items h4 {
        text-align: center;
        margin-top: 0;
        width: 100%;
    }
    div {
        display: flex;
        justify-content: center;
        align-items:flex-start;
        flex-wrap: wrap;
        padding-top: 20px;
    }

    div > section.items {
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

    section.items .product {
        border: 1px solid lightgrey;
        margin: 10px;
        flex: 100%;
        cursor: pointer;
        text-align: center;
        border-radius: 6px;
    }

    section.items .product.selected {
        border: 2px solid rgb(29, 134, 233);
    }

    section.items .photo img {
        max-width: 100px;
        margin-top: -30%;
        margin-left: 10px;
    }

    section.items .description {
        display: flex;
        flex-direction: column;
        margin-right: auto;
        margin-left: 12px;
    }

    section.items .complements {
        color: gray;
        padding-top: 10px;
        font-size: 13px;
        max-width: 215px;
        text-align: left;
        margin-bottom: 20px;
    }

    section.items .price {
        font-weight: bold;
        margin-right: 20px;
        margin-bottom: 10px;
    }

    section.items .price .quantity-area {
        margin-top: 6px;
        margin-left: -67%;
        margin-right: -35px;
        margin-bottom: 10px;
    }

    section.items .price .quantity-area button {
        width: 18px;
        height: 18px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    section.items .button-1 {
        align-items: center;
        background-color: #ffffff;
        border: 1px solid #e61919;
        border-radius: .25rem;
        box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
        box-sizing: border-box;
        color: #e61919;
        cursor: pointer;
        display: inline-flex;
        font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
        font-weight: 600;
        justify-content: center;
        line-height: 1.25;
        margin: 0;
        min-height: 1rem;
        padding: calc(0.8rem - 1px) calc(0.8rem - 1px);
        position: relative;
        text-decoration: none;
        transition: all 250ms;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        vertical-align: baseline;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    section.items .button-1:hover, .button-1:focus {
        border-color: #e61919;
        box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
        color: #e61919;
    }

    section.items .button-1:hover {
        transform: translateY(-1px);
    }

    section.items .button-1:active {
        background-color: #F0F0F1;
        border-color: rgba(0, 0, 0, 0.15);
        box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
        color: rgba(0, 0, 0, 0.65);
        transform: translateY(0);
    }

    section.items .button-2 {
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
        justify-content: center;
        line-height: 1.25;
        margin: 0;
        min-height: 1rem;
        padding: calc(0.8rem - 1px) calc(0.8rem - 1px);
        position: relative;
        text-decoration: none;
        transition: all 250ms;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        vertical-align: baseline;
    }

    section.items .button-2:hover, .button-2:focus {
        border-color: #e61919;
        box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
        color: #F0F0F1;
    }

    section.items .button-2:hover {
        transform: translateY(-1px);
    }

    section.items .button-2:active {
        background-color: #F0F0F1;
        border-color: rgba(0, 0, 0, 0.15);
        box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
        color: rgba(0, 0, 0, 0.65);
        transform: translateY(0);
    }   

    section.items .price .quantity-area .quantity {
        font-weight: bold;
        margin: 3px 6px;
    }

    section.summary {
        background-color: rgb(245, 245, 245);
        padding: 20px;
        min-height: 200px;
        min-width: 200px;
        text-align: center;
    }

    section.summary table {
        width: 100%;
        padding-top: 12px;
        font-size: 11px;
        margin: auto;
    }

    section.summary table tbody tr:last-of-type th {
        border-top: 1px solid black;
        padding-top: 4px;
        padding-bottom: 30px;
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
</style>