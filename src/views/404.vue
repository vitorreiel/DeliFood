<template>
    <main>
        <h1>Página não encontrada!</h1>
        <router-link to="/">
            <button class="redirect-button">
                VOLTAR À PÁGINA INICIAL
            </button>
        </router-link>
    </main>
</template>

<style scoped>
    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    main h1 {
        color: #FAFAFA;
    }

    main .redirect-button {
        padding: 15px 20px;
        background-color: #FAFAFA;
        color: #222;
        font-weight: bold;
        border-radius: 4px;
        border: 1px solid #CCC;
    }

    main .redirect-button:hover {
        cursor: pointer;
    }
</style>
