<template>
    <form>
      <div>
        <label for="street">Rua:</label>
        <input type="text" id="street" v-model="street" required>
        <span v-if="!streetValid" class="error">Por favor, insira uma rua válida</span>
      </div>
      <div>
        <label for="number">Número:</label>
        <input type="text" id="number" v-model="number" required>
        <span v-if="!numberValid" class="error">Por favor, insira um número válido</span>
      </div>
      <div>
        <label for="district">Bairro:</label>
        <input type="text" id="district" v-model="district" required>
        <span v-if="!districtValid" class="error">Por favor, insira um bairro válido</span>
      </div>
      <div>
        <label for="complement">Complemento:</label>
        <input type="text" id="complement" v-model="complement" required>
        <span v-if="!complementValid" class="error">Por favor, insira um complemento válido</span>
      </div>
      <div class="btn-container">
        <button id="btn" type="submit" :disabled="!formValid">Enviar</button>
      </div>
    </form>
</template>
  
<script>
  export default {
    data() {
      return {
        street: '',
        number: '',
        district: '',
        complement: '',
        streetValid: true,
        numberValid: true,
        districtValid: true,
        complementValid: true,
      }
    },
    computed: {
      formValid() {
        return (
          this.streetValid &&
          this.numberValid &&
          this.districtValid &&
          this.complementValid 
        )
      },
    },
    methods: {
      validateStreet() {
        this.streetValid = /^[a-zA-Z\s]+$/.test(this.street)
      },
      validateNumber() {
        this.numberValid = /^[0-9]+$/.test(this.number)
      },
      validateDistrict() {
        this.districtValid = /^[a-zA-Z\s]+$/.test(this.district)
      },
      validateComplement() {
        this.complementValid = /^[a-zA-Z\s]+$/.test(this.complement)
      },
    },
    watch: {
      street() {
        this.validateStreet()
      },
      number() {
        this.validateNumber()
      },
      city() {
        this.validateDistrict()
      },
      state() {
        this.validateComplement()
      },
    },
  }
</script>

<style>
    .btn-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    #btn {
        background-color: #e61919;
        color: #fff;
        font-size: 14px;
        font-weight: 550;
        border: none;
        margin-top: 20px;
        width: 100%;
        height: 6vh;
        border-radius: 5px;
        
    }

    #btn:hover {
        transform: scale(1.05);
        background-color: #cc0000;
    }

</style>