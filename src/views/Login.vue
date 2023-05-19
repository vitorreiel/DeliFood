<template>
    <div class="main-div">
        <section class="formLogin">
            <h1>Login</h1>
            <img src="img/logo_inicial.png" class="icon_login" />
            <label class="login-label" for="email">E-mail</label>
            <input class="login-input" type="email" placeholder="Digite seu e-mail" autofocus="true" />
            <label class="login-label" for="password">Senha</label>
            <input class="login-input" type="password" placeholder="Digite sua senha" />
            <router-link to="/home">
                <button class="button-login">Acessar</button>
            </router-link>
        </section>
    </div>
</template>

<script>


</script>

<style>
    body {
        background-color: #e61919;
        width: 100%;
        height: 100%;
    }

    .formLogin {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        border-radius: 7px;
        max-width: 500px;
        padding: 40px;
        box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.4);
        gap: 5px
    }

    .formLogin h1 {
        font-size: 2.3em;
    }

    .login-input {
        padding: 15px;
        font-size: 16px;
        border: 1px solid #ccc;
        margin-bottom: 20px;
        margin-top: 5px;
        border-radius: 4px;
        transition: all linear 160ms;
        outline: none;
    }

    .login-input:focus {
        transition: 1s;
        border: 2px solid #e61919;
    }

    .login-label {
        font-size: 16px;
        font-weight: 600;
    }

    .icon_login {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10%;
        width: 30%;
        height: 30%;
    }

    .button-login {
        background-color: #e61919;
        color: #fff;
        font-size: 16px;
        font-weight: 550;
        border: none;
        transition: all linear 160ms;
        margin: 0;
        width: 100%;
        height: 6vh;
        border-radius: 5px;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .button-login:hover {
        transform: scale(1.05);
        background-color: #cc0000;
    }
</style>