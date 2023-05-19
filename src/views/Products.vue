<template>
    <div class="main-div">
        <section class="items">
            <h3>Selecione os produtos</h3>
            <div v-for="product in products" class="product" @click="product.active = !product.active" :class="{ selected : product.active }">
                <div class="photo">
                    <img class="photo-products-action" :src="product.photo">
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
            <h3>Resumo do pedido</h3>
            <table>
                <thead>
                    <tr>
                        <th class="table-products">Item</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products">
                        <template v-if="product.active"> <!-- Se algum produto for selecionado, 
                            ele vai exibir o Resumo do pedido e fazer a conta de cada produto
                            selecionado até obter o total -->
                            <td class="table-products"> {{ product.quantity + ' X ' + product.name }} </td>
                            <td> {{ `${this.monetary} ${(product.quantity * product.price).toFixed(2)}` }} </td>
                        </template>
                    </tr>
                    <tr class="table-sumary">
                        <th class="table-products">Total</th>
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
                monetary: "R$",
                products
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

    #app, .main-div, .product, .items, .description, .price, .photo {
        padding-top: 20px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: wrap;
    }

    .items {
        display: flex;
        flex-wrap: wrap;
        border-radius: 7px;
        padding: 20px;
        margin-right: 20px;
        max-width: 500px;
        min-width: 300px;
        max-height: 750px;
        overflow-y: scroll;
        justify-content: center;
        background-color: #fff;
        box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.4);
    }

    .items::-webkit-scrollbar {
        width: 8px;
    }

    .items::-webkit-scrollbar-thumb {
        background-color: #A9A9A9;
        border-radius: 20px;
    }

    .product {
        border: 2px solid lightgrey;
        margin: 10px;
        flex: 100%;
        cursor: pointer;
        text-align: center;
        border-radius: 7px;
        transition: 0.2s ease-in-out;
    }

    .product:hover {
        transform: scale(1.05);
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
    }

    .product.selected {
        border: 2px solid rgb(195, 9, 9);
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
        transform: scale(1.05);
    }

    .photo-products-action {
        max-width: 100px;
        margin-top: -30%;
        margin-left: 10px;
        transition: 0.2s ease-in-out;
    }

    .photo-products-action:hover {
        transform: scale(1.3);
    }

    .description {
        padding: 0;
        flex-direction: column;
        margin-right: auto;
        margin-left: 12px;
    }

    .name {
        font-weight: bold;
        font-size: 17px;
    }

    .complements {
        color: #383838	;
        padding-top: 10px;
        font-size: 15px;
        max-width: 180px;
        text-align: left;
        margin-bottom: 20px;
    }

    .price {
        font-weight: bold;
        margin-right: 20px;
        margin-bottom: 10px;
    }

    .price .quantity-area {
        margin-top: 30px;
        margin-left: -67%;
        margin-right: -35px;
        margin-bottom: 10px;
    }

    .price .quantity-area button {
        width: 18px;
        height: 18px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .button-1 {
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

    .button-1:hover, .button-1:focus {
        border-color: #e61919;
        box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
        color: #e61919;
    }

    .button-1:hover {
        transform: translateY(-1px);
    }

    .button-1:active {
        background-color: #F0F0F1;
        border-color: rgba(0, 0, 0, 0.15);
        box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
        color: rgba(0, 0, 0, 0.65);
        transform: translateY(0);
    }

    .button-2 {
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

    .button-2:hover, .button-2:focus {
        border-color: #e61919;
        box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
        color: #F0F0F1;
    }

    .button-2:hover {
        transform: translateY(-1px);
    }

    .button-2:active {
        background-color: #F0F0F1;
        border-color: rgba(0, 0, 0, 0.15);
        box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
        color: rgba(0, 0, 0, 0.65);
        transform: translateY(0);
    }   

    .price .quantity-area .quantity {
        font-weight: bold;
        margin: 3px 6px;
    }

    .summary {
        background-color: rgb(245, 245, 245);
        padding: 20px;
        min-height: 200px;
        min-width: 250px;
        text-align: center;
        box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.4);
        border-radius: 7px;
    }

    .summary table {
        width: 100%;
        padding-top: 12px;
        font-size: 14px;
        margin: auto;
    }

    .summary table tbody tr:last-of-type th {
        border-top: 1px solid black;
        padding-top: 10px;
        padding-bottom: 20px;
    }

    .table-sumary {
        font-size: 16px;
    }

    .table-products {
        text-align: left;
        padding-right: 20px;
    }

    .btn {
        background-color: #e61919;
        color: #fff;
        font-size: 14px;
        font-weight: 550;
        border: none !important;
        transition: all linear 160ms;
        width: 120px;
        height: 45px;
        border-radius: 5px;
    }

    .btn:hover {
        transform: scale(1.05);
        background-color: #cc0000;
    }
</style>