var products = [
    {
        "photo": "img/big-mac.png",
        "name": "Big Mac",
        "price": 5.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/mc-chicken.png",
        "name": "Mc Chicken",
        "price": 4.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/double-cb.png",
        "name": "Double Cheese Burger",
        "price": 2.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/fries.png",
        "name": "Batata frita",
        "price": 2.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/nuggets.png",
        "name": "Mc Nuggets",
        "price": 3.49,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/salad.png",
        "name": "Salada",
        "price": 2.79,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/cola.png",
        "name": "Coca Cola",
        "price": 1.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/lipton.png",
        "name": "Ice Tea",
        "price": 1.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/water.png",
        "name": "Água",
        "price": 1.49,
        "active": false,
        "quantity": 1
    }
];
 
const SelfServiceMachine = {
    data() {
        return {
            products: window.products,
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
};

Vue.createApp(SelfServiceMachine).mount('#app');