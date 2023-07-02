<template>
    <div class="card" v-if="!loading">
        <h1>{{ title }}</h1>
        
        <form class="form-client" @submit="submit">
            <div class="form-group">
                <div class="form-input">
                    <label for="name">Nome: </label>
                    <input type="text" id="name" class="form-client-input" v-model="name" required>
                </div>
                <span v-if="!nameValid" class="error">*Por favor, insira um nome válido</span>
            </div>
            <div class="form-group">
                <div class="form-input">
                    <label for="email">Email: </label>
                    <input type="text" id="email" class="form-client-input" v-model="email" required>
                </div>
                <span v-if="!emailValid" class="error">*Por favor, insira um email válido</span>
            </div>
            <div v-if="!this.client" class="form-group">
                <div class="form-input">
                    <label for="password">Senha: </label>
                    <input type="text" id="password" class="form-client-input" v-model="password" required>
                </div>
                <span v-if="!passwordValid" class="error">*Por favor, insira um password válido</span>
            </div>
            <div class="btn-container">
                <button class="button-form-client" type="submit" :disabled="!formValid">
                    {{ this.client ? 'Salvar' : 'Enviar' }}
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
                title: "Gerenciar cliente",
                client: null,
                loading: false,
                name: '',
                nameValid: true,
                email: '',
                emailValid: true,
                password: '',
                passwordValid: true,
            }
        },
        computed: {
            formValid() {
                return (
                    this.nameValid &&
                    this.emailValid &&
                    this.passwordValid
                )
            }
        },
        mounted() {
            const clientId = this.$router.currentRoute.value.query.id;

            if (clientId) {
                this.getUser(clientId);
            }
        },
        methods: {
            validateName() {
                this.nameValid = /^[a-zA-Z\s]+$/.test(this.name);
            },
            validateEmail() {
                this.emailValid = /^[\w\.-]+@[\w\.-]+\.\w+$/.test(this.email);
            },
            validatePassword() {
                this.passwordValid = /^.{5,10}$/.test(this.password);
            },
            getUser(id) {
                this.loading = true;

                this.$axios
                    .get(`/users/${id}`)
                    .then((response) => {
                        this.client = response.data;
                        this.name = response.data.username;
                        this.email = response.data.email;
                    })
                    .catch((error) => {
                        console.error(error);
                    })
                    .finally(() => (this.loading = false));
            },
            submit(e) {
                e.preventDefault();

                if (this.password) {
                    this.$axios.post('/users', {
                        email: this.email,
                        password: this.password,
                        username: this.name,
                    })
                    .then(() => {
                        this.$router.push('/administrator?type=clientes');
                    })
                    .catch((error) => {
                        console.error(error);
                    });
                } else {
                    this.$axios.put(`/users/${this.client.id}`, {
                        email: this.email,
                        username: this.name,
                    })
                    .then(() => {
                        this.$router.push('/administrator?type=clientes');
                    })
                    .catch((error) => {
                        console.error(error);
                    });
                }
            }
        },
        watch: {
            name() {
                this.validateName()
            },
            email() {
                this.validateEmail()
            },
        },
    }
</script>

<style scoped>
    .card {
        display: flex;
        flex-wrap: wrap;
        border-radius: 7px;
        padding: 20px;
        margin-right: 20px;
        width: 500px;
        min-width: 300px;
        max-height: 620px;
        min-height: 300px;
        justify-content: center;
        background-color: #fff;
    }

    .form-client {
        margin-top: 20px;
        width: 80%;
    }

    .form-client-input{
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

    .button-form-client {
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

    .button-form-client:hover, .button-form-client:focus {
        border-color: #e61919;
        box-shadow: rgba(0, 0, 0, 0.2) 0 4px 12px;
        color: #fff;
    }

    .button-form-client:hover {
        transform: translateY(-1px);
    }

    .button-form-client:active {
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
