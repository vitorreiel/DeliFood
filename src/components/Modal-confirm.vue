<template>
    <div id="myModal" class="modal">
        <div class="modal-content">
          <p>Pedido Confirmado!</p>
          <img id="gif" src="https://i.pinimg.com/originals/62/dd/c4/62ddc455488a13d67f4198a09dc4bb29.gif" alt="moto">
          <span class="close">&times;</span>
        </div>
      </div>
      
      <button id="myBtn" class="btn">Confirmar</button>
</template>

<script>
import router from '../router/index';
export default {
  mounted() {
    // Encontra o botão para abrir o modal
    var btn = document.getElementById("myBtn");
    btn.addEventListener('click', function() {
      modal.style.display = "block";
    });

    // Encontra o modal
    var modal = document.getElementById("myModal");

    // Encontra o botão para fechar o modal
    var span = document.getElementsByClassName("close")[0];
    span.addEventListener('click', function() {
      modal.style.display = "none";
      router.push("/");
    });

    window.addEventListener('click', function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        router.push("/");
      }
    });
  }
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
    overflow: hidden; /* Adiciona rolagem se necessário */
    background-color: rgba(0, 0, 0, 0.4); /* Fundo escuro */
  }
  
  /* Estilo do conteúdo do modal */
  .modal-content {
    position: relative;
    top: -50px;
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 25%;
  }

  .modal-content #gif {
    width: 60%;
  }
  
  /* Estilo do botão de fechar */
  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    margin-left: 10px;
  }
  
  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
  
</style>