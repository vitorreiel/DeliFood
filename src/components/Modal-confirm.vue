<template>
    <div id="myModal" class="modal">
          <div class="modal-content">
              <span class="close">&times;</span>
              <h3>Pedido Realizado com <a class="delivery-success">Sucesso!</a> ✅</h3>
              <img class="delivery-gif" src="img/delivery.gif" alt="moto">
          </div>
      </div>

      <button id="myBtn" @click="sendButton" class="button-confirm">Confirmar</button>
</template>

<script>
import router from '../router/index';
export default {
    data() {
        return {
            loading: true
        };
    },
    methods: {
        async sendButton() {
            const pedidoData = JSON.parse(localStorage.getItem("PEDIDO"));

            const body = {
                "endereco": `${pedidoData.endereco.rua} ${pedidoData.endereco.numero}, ${pedidoData.endereco.complemento}, ${pedidoData.endereco.bairro}`,
                "user_id": pedidoData.user.id,
                "total": parseFloat(pedidoData.total),
                "restaurante": pedidoData.produtos[0].id_restaurante,
                "data_hora": new Date()
            };

            this.$axios.post("/historicos", body)
                .then(async (response) => {
                    const pedidos = pedidoData.produtos.map((produto) => (
                        {
                            produto: produto.id,
                            subtotal: parseFloat(produto.valor.replace(',', '.')) * produto.quantidade,
                            quantidade: produto.quantidade,
                            historico: response.data.id
                        }
                    ));

                    for (const value of pedidos) {
                        try {
                            await this.$axios.post("/pedidos", value);
                        } catch (e) {
                            console.log(e);
                        }
                    }

                    localStorage.removeItem("PEDIDO");
                    router.push("/historico");
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    },
    mounted() {
        // Encontra o modal
        let modal = document.getElementById("myModal");

        // Encontra o botão para fechar o modal
        let span = document.getElementsByClassName("close")[0];
        span.addEventListener('click', function() {
            modal.style.display = "none";
            router.push("/historico");
        });

        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
                router.push("/historico");
            }
        });
    },
}
</script>

<style>
    .modal-content {
        background-color: #fefefe;
        border: 1px solid #888;
        min-width: 500px;
        min-height: 500px;
        margin: auto;
        margin-top: 70px;
        display: flex;
        position: relative;
    }

    .delivery-gif {
        margin: auto;
        width: 80%;
        height: 100%;
    }

    .delivery-success {
      color: green;
    }

    .close {
        color: lightgray;
        transition: 0.2s ease-in-out;
    }
    
    .close:hover,
    .close:focus {
        color: #e61919;
        transform: scale(1.3);
    }

    .button-confirm {
        background-color: #e61919;
        color: #fff;
        font-size: 14px;
        font-weight: 550;
        border: none;
        transition: all linear 160ms;
        width: 120px;
        height: 45px;
        border-radius: 5px;
        margin-top: 20px;
        margin-bottom: 20px;
    }

  .button-confirm:hover {
      transform: scale(1.05);
      background-color: #cc0000;
  }
</style>
