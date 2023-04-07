<template>
    <div>
        <section class="confirm">
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
        </section>
    </div>
</template>

