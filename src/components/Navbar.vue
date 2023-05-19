<template>
    <nav class="navbar-container" :data-open="String(this.isOpen)">
        <div class="navbar-header">
            <button class="navbar-button" @click="changeStatus()">
                <i class='bx bx-menu navbar-icon'></i>
                <span>Delifood </span>
            </button>
        </div>
        <div class="navbar-content">
            <a href="#" class="navbar-content__item" role="button">
                <div class="navbar-content__item-icon">
                    <i class='bx bx-user navbar-icon'></i>
                </div>
                <div class="navbar-content__item-description">
                    <span>Clientes</span>
                </div>
            </a>
            <a href="#" class="navbar-content__item" role="button">
                <div class="navbar-content__item-icon">
                    <i class='bx bx-cart-alt navbar-icon'></i>
                </div>
                <div class="navbar-content__item-description">
                    <span>Restaurantes</span>
                </div>
            </a>
            <a href="#" class="navbar-content__item" role="button">
                <div class="navbar-content__item-icon">
                    <i class='bx bx-pie-chart-alt-2 navbar-icon'></i>
                </div>
                <div class="navbar-content__item-description">
                    <span>Pedidos</span>
                </div>
            </a>
        </div>
        <div class="navbar-footer">
            <button class="navbar-button navbar-button--active">
                <i class='bx bx-log-out navbar-icon' id="log_out"></i>
                <span>Logout</span>
            </button>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        changeStatus() {
            this.isOpen = !this.isOpen;
        }
    }
}
</script>

<style>
    .navbar-container {
        background: #990808;
        display: flex;
        flex-direction: column;
        min-height: 100%;
        padding: 10px;

        /* Workaround to navbar fit in parent container */
        margin: -20px;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
    }

    .navbar-container div {
        padding-top: 0;
    }

    .navbar-container > .navbar-header {
        margin-bottom: 20px;
    }

    .navbar-container > .navbar-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
    }

    .navbar-button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }

    .navbar-button,
    .navbar-content__item {
        border-radius: 10px;
        display: flex;
        color: #ffffff;
        text-decoration: none;
        font-size: 14px;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        transition: all 0.3s ease-in-out;
        height: 40px;
        width: 40px;
    }

    .navbar-button:hover,
    .navbar-button--active,
    .navbar-content__item:is([data-active="true"], :hover) {
        background: rgba(0, 0, 0, 0.2);
    }

    .navbar-button > .navbar-icon,
    .navbar-content__item .navbar-icon {
        font-size: 18px;
    }

    .navbar-button > span,
    .navbar-content__item span {
        display: none;
    }

    .navbar-container[data-open="true"] .navbar-button > span,
    .navbar-container[data-open="true"] .navbar-content__item span {
        display: block;
        margin-left: 8px;
    }

    .navbar-container[data-open="true"] .navbar-button,
    .navbar-container[data-open="true"] .navbar-content__item {
        width: 100%;
        padding: 0 30px;
        justify-content: left;
    }

    .navbar-footer {
        margin-top: 40px;
    }
</style>