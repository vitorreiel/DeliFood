<template>
    <div id="myModal" class="modal">
        <div class="modal-content">
            <AddressForm />
            <span class="close">&times;</span>
        </div>
    </div>
    <button id="add-address" class="button-add-address">+ Adicionar</button>
</template>
<script>
    import router from '../router/index';
    import AddressForm from './AddressForm.vue';
    export default {
        components: {
            AddressForm
        },
        mounted() {
            // Encontra o modal
            var modal = document.getElementById("myModal");
            // Encontra o botão para abrir o modal
            var btn = document.getElementById("add-address");
            btn.addEventListener("click", function () {
                modal.style.display = "block";
            });
            // Encontra o botão para fechar o modal
            var span = document.getElementsByClassName("close")[0];
            span.addEventListener("click", function () {
                modal.style.display = "none";
            });
            window.addEventListener("click", function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            });
        },
    }
</script>
<style>
    /* Estilo do modal */
    .modal {
        display: none; /* Esconde o modal por padrão */
        position: fixed; /* Fica em cima de tudo */
        z-index: 1; /* Fica acima de todo o conteúdo */
        left: 0;
        top: 0;
        width: 100%; /* Largura total */
        height: 100%; /* Altura total */
        overflow: auto; /* Adiciona rolagem se necessário */
        background-color: rgba(0, 0, 0, 0.4); /* Fundo escuro */
    }
    /* Estilo do conteúdo do modal */
    .modal-content {
        display: flex;
        flex-wrap: wrap;
        border-radius: 7px;
        padding: 20px;
        margin-right: 20px;
        max-width: 500px;
        min-width: 300px;
        min-height: 300px;
        max-height: 620px;
        justify-content: center;
        background-color: #fff;
    }
    /* Estilo do botão de fechar */
    .close {
        color: #aaaaaa;
        position: absolute;
        top: 10px;  
        right: 25px;
        font-size: 28px;
        font-weight: bold;
    }
    .close:hover,
    .close:focus {
        color: lightgrey;
        text-decoration: none;
        cursor: pointer;
    }
    .button-add-address {
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

    .button-add-address:hover, .button-add-address:focus {
        border-color: #e61919;
        box-shadow: rgba(0, 0, 0, 0.2) 0 4px 12px;
        color: #fff;
    }

    .button-add-address:hover {
        transform: translateY(-1px);
    }

    .button-add-address:active {
        background-color: #F0F0F1;
        border-color: rgba(0, 0, 0, 0.15);
        box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
        color: rgba(0, 0, 0, 0.65);
        transform: translateY(0);
    } 
</style>