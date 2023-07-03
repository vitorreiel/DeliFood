<template>
    <div class="card" v-if="!loading">
        <h1>{{ title }}</h1>

        <form class="form-restaurant" @submit="submit">
            <div class="form-group">
                <div class="form-input">
                    <label for="name">Nome: </label>
                    <input type="text" id="name" class="form-restaurant-input" v-model="name" required>
                </div>
                <span v-if="!nameValid" class="error">*Por favor, insira um nome válido</span>
            </div>
            <div class="form-group">
                <div class="form-input">
                    <label for="street">Rua: </label>
                    <input type="text" id="street" class="form-restaurant-input" v-model="street" required>
                </div>
                <span v-if="!streetValid" class="error">*Por favor, insira uma rua válida</span>
            </div>
            <div class="form-group">
                <div class="form-input">
                    <label for="number">Número: </label>
                    <input type="text" id="number" class="form-restaurant-input" v-model="number" required>
                </div>
                <span v-if="!numberValid" class="error">*Por favor, insira um número válido</span>
            </div>
            <div class="form-group">
                <div class="form-input">
                    <label for="district">Bairro: </label>
                    <input type="text" id="district" class="form-restaurant-input" v-model="district" required>
                </div>
                <span v-if="!districtValid" class="error">*Por favor, insira um bairro válido</span>
            </div>
            <!-- <div class="form-group">
                <div class="form-input">
                    <label for="file">Imagem: </label>
                    <input type="file" id="file" class="form-restaurant-input" required @change="handleFileUpload">

                    <img v-if="file && !imagePreview" :src="'../../../app/public/' + file" alt="restaurant">
                    <img v-if="imagePreview" :src="imagePreview" alt="restaurant">
                </div>
                <span v-if="!fileValid" class="error">*Por favor, insira uma imagem válida</span>
            </div> -->
            <div class="btn-container">
                <button class="button-form-restaurant" type="submit" :disabled="!formValid">
                    {{ this.restaurant ? 'Salvar' : 'Enviar' }}
                </button>
            </div>
        </form>
    </div>

    <div v-else>
		<p>Carregando...</p>
	</div>
</template>

<script>
    export default {
        data() {
            return {
                title: "Gerenciar restaurante",
                restaurant: null,
                loading: false,
                name: '',
                nameValid: true,
                street: '',
                streetValid: true,
                number: '',
                numberValid: true,
                district: '',
                districtValid: true,
                file: null,
                fileValid: true,
                imagePreview: null,
            }
        },
        computed: {
            formValid() {
                return (
                    this.nameValid &&
                    this.streetValid &&
                    this.numberValid &&
                    this.districtValid &&
                    this.fileValid
                )
            }
        },
        mounted() {
            const restaurantId = this.$router.currentRoute.value.query.id;

            if (restaurantId) {
                this.getRestaurant(restaurantId);
            }
        },
        methods: {
            handleFileUpload(event) {
                this.file = event.target.files[0];
                this.imagePreview = URL.createObjectURL(this.file);
            },
            validateName() {
                this.nameValid = /^[a-zA-Z\u00C0-\u017F\s]+$/.test(this.name);
            },
            validateStreet() {
                this.streetValid = /^[a-zA-Z\u00C0-\u017F\s]+$/.test(this.street)
            },
            validateNumber() {
                this.numberValid = /^[0-9]+$/.test(this.number)
            },
            validateDistrict() {
                this.districtValid = /^[a-zA-Z\u00C0-\u017F\s]+$/.test(this.district)
            },
            validateFile() {
                if (this.file) {
                    this.fileValid = true;
                }
            },
            getRestaurant(id) {
                this.loading = true;

                this.$axios
                    .get(`/restaurantes/${id}`)
                    .then((response) => {
                        this.restaurant = response.data;

                        this.name = response.data.nome;
                        this.street = response.data.rua;
                        this.number = response.data.numero;
                        this.district = response.data.bairro;
                        this.file = response.data.imagem[0].url;
                    })
                    .catch((error) => {
                        console.error(error);
                    })
                    .finally(() => (this.loading = false));
            },
            submit(e) {
                this.loading = true;
                e.preventDefault();
                
                // const imageFile = fs.createReadStream(this.file);

                if (!this.restaurant) {
                    this.$axios.post('/restaurantes', {
                        nome: this.name,
                        rua: this.street,
                        numero: this.number,
                        bairro: this.district,
                        // imagem: imageFile,
                    })
                    .then(() => {
                        this.$router.push('/administrator?type=restaurantes');
                    })
                    .catch((error) => {
                        console.error(error);
                    })
                    .finally(() => {
                        this.loading = false;
                    });
                } else {
                    this.$axios.put(`/restaurantes/${this.restaurant.id}`, {
                        nome: this.name,
                        rua: this.street,
                        numero: this.number,
                        bairro: this.district,
                        // imagem: imageFile,
                    })
                    .then(() => {
                        this.$router.push('/administrator?type=restaurantes');
                    })
                    .catch((error) => {
                        console.error(error);
                    })
                    .finally(() => {
                        this.loading = false;
                    });
                }
            }
        },
        watch: {
            name() {
                this.validateName()
            },
            street() {
                this.validateStreet()
            },
            number() {
                this.validateNumber()
            },
            district() {
                this.validateDistrict()
            },
            file() {
                this.validateFile()
            }
        },
    }
</script>

<style scoped>
    h1 {
        margin: 16px 0 0 0;
    }

    .card {
        display: flex;
        flex-wrap: wrap;
        border-radius: 7px;
        padding: 20px;
        margin-right: 20px;
        width: 500px;
        min-width: 300px;
        min-height: 300px;
        justify-content: center;
        background-color: #fff;
    }

    .form-restaurant {
        margin-top: 20px;
        width: 80%;
    }

    .form-restaurant-input{
        margin: 5px 0;
        padding: 8px;
        border-radius: 4px;
        border: 1px solid lightgrey;
        width: 100%;
    }

    .form-group {
        display: flex;
        flex-direction: column;
    }

    .form-input {
        margin-top: 12px;
        display: flex;
        flex-direction: column;
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

    .button-form-restaurant {
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

    .button-form-restaurant:hover, .button-form-restaurant:focus {
        border-color: #e61919;
        box-shadow: rgba(0, 0, 0, 0.2) 0 4px 12px;
        color: #fff;
    }

    .button-form-restaurant:hover {
        transform: translateY(-1px);
    }

    .button-form-restaurant:active {
        background-color: #F0F0F1;
        border-color: rgba(0, 0, 0, 0.15);
        box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
        color: rgba(0, 0, 0, 0.65);
        transform: translateY(0);
    }

    .error {
        color: #e61919;
    }
</style>
