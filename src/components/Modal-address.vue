<template>
  <div id="myModal" class="modal">
      <div class="modal-content">
        <AddressForm></AddressForm>
        <span class="close">&times;</span>
      </div>
    </div>
    
    <button id="add-address" class="btn">+</button>
</template>

<script>
import router from '../router/index';
import AddressForm from './AddressForm.vue';
export default {
    mounted() {
        // Encontra o botão para abrir o modal
        var btn = document.getElementById("add-address");
        btn.addEventListener("click", function () {
            modal.style.display = "block";
        });
        // Encontra o modal
        var modal = document.getElementById("myModal");
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
    components: { AddressForm }
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
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 25%;
  position: relative;
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
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

#add-address {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background-color: #e61919;
  color: #fff;
  padding: 15px 15px;
  text-align: center;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

#add-address:hover {
  transform: scale(1.05);
  background-color: #cc0000;
}

</style>