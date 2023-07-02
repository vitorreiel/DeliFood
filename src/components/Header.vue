<template>
    <header>
        <nav>
            <ul>
                <li v-if="!isLoggedIn">
                    <router-link class="secondary-button"  to="/register">
                        Cadastro
                    </router-link>
                </li>
                <li v-if="!isLoggedIn && isLoginPage">
                    <router-link class="primary-button"  to="/home">
                        Restaurantes
                    </router-link>
                </li>
                <li v-if="!isLoggedIn && !isLoginPage">
                    <router-link class="primary-button" to="/">
                        Entrar
                    </router-link>
                </li>
                <li v-if="isLoggedIn && !isAdmin">
                    <router-link class="secondary-button" to="/">
                        Restaurantes
                    </router-link>
                </li>
                <li v-if="isLoggedIn && !isAdmin">
                    <router-link class="secondary-button" to="/address">
                        Endereços
                    </router-link>
                </li>
                <li v-if="isLoggedIn && !isAdmin">
                    <router-link class="secondary-button" to="/historico">
                        Histórico
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
                isLoggedIn: false, // Defina essa variável como true se o usuário estiver logado
                isLoginPage: false,
                isAdmin: false,
            };
        },
        mounted() {
            this.verifyUserIsLogged();
            this.verifyLoginPage();
            this.verifyIsAdmin();
        },
        watch: {
            $route() {
                this.verifyUserIsLogged();
                this.verifyLoginPage();
                this.verifyIsAdmin();
            }
        },
        methods: {
            logout() {
                localStorage.removeItem("USER");
                this.$router.push("/");
            },
            verifyLoginPage() {
                if (this.$route.path === '/') {
                    this.isLoginPage = true;
                } else {
                    this.isLoginPage = false;
                }
            },
            verifyIsAdmin() {
                if (this.$route.meta.admin) {
                    this.isAdmin = true;
                    console.log("aaaa", this.$route.meta.admin);
                } else {
                    this.isAdmin = false;
                }
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
        width: 50%;
        background-color: transparent;
        padding: 10px 0;
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
        padding: 8px 16px;
        font-size: 16px;
    }
</style>
  