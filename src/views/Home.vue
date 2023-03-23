<template>
    <div>
        <section class="items">
            <h4>Selecione os produtos</h4>
            <div v-for="product in products" class="product" @click="product.active = !product.active" :class="{ selected : product.active }">
                <div class="photo">
                    <img :src="product.photo">
                </div>
                <div class="description">
                    <span class="name"> {{ product.name }} </span>
                    <span class="price"> {{ `${this.monetary} ${product.price}` }} </span>
                    <div class="quantity-area" v-if="product.active">
                        <button @click.stop="product.quantity--" :disabled="product.quantity <=1">-</button>
                        <span class="quantity"> {{ product.quantity }} </span>
                        <button @click.stop="product.quantity++">+</button>
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
        </section>
    </div>
</template>
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
    justify-content: center;
    
}

section.items .product {
    border: 1px solid lightgrey;
    margin: 6px;
    flex: 0 0 calc(33.333% - 24px);
    cursor: pointer;
    text-align: center;
}

section.items .product.selected {
    border: 2px solid rgb(29, 134, 233);

}

section.items .photo img {
    max-width: 90px;
}

section.items .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 11px;
    line-height: 15px;
}

section.items  .description .price {
    font-weight: bold;
    margin: 4px auto;
}

section.items  .description .quantity-area {
    margin: 8px auto;
    height: 14px;
}

section.items  .description .quantity-area button {
    width: 16px;
    height: 16px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

section.items  .description .quantity-area .quantity {
    font-weight: bold;
    margin: 0 4px;
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
}

</style>
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