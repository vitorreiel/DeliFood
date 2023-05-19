<template>
    <form class="form-address">
        <div class="form-group">
            <div class="form-input">
                <label for="street">Rua: </label>
                <input type="text" id="street" class="form-address-input" v-model="street" required>
            </div>
            <span v-if="!streetValid" class="error">*Por favor, insira uma rua válida</span>
        </div>
        <div class="form-group">
            <div class="form-input">
                <label for="number">Número: </label>
                <input type="text" id="number" class="form-address-input" v-model="number" required>
            </div>
            <span v-if="!numberValid" class="error">*Por favor, insira um número válido</span>
        </div>
        <div class="form-group">
            <div class="form-input">
                <label for="district">Bairro: </label>
                <input type="text" id="district" class="form-address-input" v-model="district" required>
            </div>
            <span v-if="!districtValid" class="error">*Por favor, insira um bairro válido</span>
        </div>
        <div class="form-group">
            <div class="form-input">
                <label for="complement">Complemento: </label>
                <input type="text" id="complement" class="form-address-input" v-model="complement" required>
            </div>
            <span v-if="!complementValid" class="error">*Por favor, insira um complemento válido</span>
        </div>
        <div class="btn-container">
            <button class="button-form-address" type="submit" :disabled="!formValid">Enviar</button>
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
    .form-address {
        margin-top: 20px;
    }

    .form-address-input{
        margin: 20px;
        padding: 8px;
        border-radius: 7px;
        border:  2px solid lightgrey;
        width: 100%;
    }

    .form-group {
        display: flex;
        flex-direction: column;
    }

    .form-input {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
    }

    .btn-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .button-form-address {
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

    .button-form-address:hover, .button-form-address:focus {
        border-color: #e61919;
        box-shadow: rgba(0, 0, 0, 0.2) 0 4px 12px;
        color: #fff;
    }

    .button-form-address:hover {
        transform: translateY(-1px);
    }

    .button-form-address:active {
        background-color: #F0F0F1;
        border-color: rgba(0, 0, 0, 0.15);
        box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
        color: rgba(0, 0, 0, 0.65);
        transform: translateY(0);
    }
</style>