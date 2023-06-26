<template>
    <header>
        <nav>
            <ul>
                <li v-if="!isLoggedIn">
                    <router-link class="secondary-button"  to="/register">
                        Cadastro
                    </router-link>
                </li>
                <li v-if="!isLoggedIn">
                    <router-link class="primary-button" to="/">
                        Entrar
                    </router-link>
                </li>
                <li v-if="isLoggedIn">
                    <router-link class="secondary-button" to="/address">
                        Endereços
                    </router-link>
                </li>
                <li v-if="isLoggedIn">
                    <button class="primary-button" @click="logout()">
                        Sair
                    </button>
                </li>
            </ul>
        </nav>
    </header>
</template>
  
<script>
    export default {
        data() {
            return {
                isLoggedIn: false // Defina essa variável como true se o usuário estiver logado
            };
        },
        mounted() {
            this.verifyUserIsLogged();
        },
        watch: {
            $route() {
                this.verifyUserIsLogged();
            }
        },
        methods: {
            logout() {
                localStorage.removeItem("USER");
                this.$router.push("/");
            },
            verifyUserIsLogged() {
                const isLoggedIn = JSON.parse(localStorage.getItem('USER')) ? true : false;

                if (isLoggedIn) {
                    this.isLoggedIn = true;
                } else {
                    this.isLoggedIn = false;
                }
            }
        }
    };
</script>
  
<style>
    header {
        background-color: transparent;
        padding: 10px 25%;
        display: flex;
        flex-direction: row-reverse;
    }

    nav ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
    }

    nav li {
        display: inline;
        margin-right: 10px;
    }

    nav li a {
        text-decoration: none;
        color: #333;
    }

    .primary-button {
        background-color: #fff;
        cursor: pointer;
        border: none;
        padding: 8px 24px;
        border-radius: 2px;
        font-size: 16px;
        font-weight: bold;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        transition: all ease-in-out 350ms;
    }

    .primary-button:hover {
        background-color: #E61919;
        color: #fff;
    }

    .secondary-button {
        color: #fff;
        font-weight: bold;
        padding: 8px 24px;
        font-size: 16px;
    }
</style>
  