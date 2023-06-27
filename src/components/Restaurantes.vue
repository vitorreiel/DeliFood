<template>
    <div class="main-div">
        <section class="locations-list">
            <h3>Selecione o restaurante</h3>
            <div v-for="location in locations" class="location">
                <router-link :to="`/products?id=${location.id}`" class="location-content">
                    <div class="photo-restaurante">
                        <img class="photo-restaurante-action" :src="'../../app/public/' + location.imagem[0].url">
                    </div>
                    <div class="description-restaurante">
                        <span class="name-restaurante">
                            {{ location.nome }}
                        </span>
                        <span class="address-restaurante">
                            {{ location.rua }}, Nº {{ location.numero }} - {{ location.bairro }}
                        </span>
                        <span class="phone-restaurante">
                            {{ location.phone }}
                        </span>
                    </div>
                </router-link>
            </div>

            <div v-if="locations.length == 0">
                <h5>Não há restaurantes registrados</h5>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                locations: []
            }
        },
        mounted() {
            this.fetchUsers();
        },
        methods: {
            fetchUsers() {
                this.$axios.get('/restaurantes')
                    .then(response => {
                        this.locations = response.data;
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }
        }
    }
</script>

<style>
    .description-restaurante {
        display: flex;
        align-items: flex-start;
    }

    .locations-list {
        display: flex;
        flex-wrap: wrap;
        border-radius: 7px;
        padding: 20px;
        margin-right: 20px;
        max-width: 500px;
        min-width: 300px;
        max-height: 750px;
        overflow-y: scroll;
        justify-content: center;
        background-color: #fff;
        box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.4);
    }

    .locations-list::-webkit-scrollbar {
        width: 8px;
    }

    .locations-list::-webkit-scrollbar-thumb {
        background-color: #A9A9A9;
        border-radius: 20px;
    }

    .location {
        border: 2px solid lightgrey;
        margin: 10px;
        display: flex;
        flex: 100%;
        cursor: pointer;
        border-radius: 7px;
        transition: 0.2s ease-in-out;
    }

    .location:hover{
        transform: scale(1.05);
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
    }

    .location-content {
        display: flex;
        flex: 100%;
        text-decoration: none;
        color: black
    }

    .photo-restaurante-action {
        width: 90px;
        height: 90px;
        margin-top: 20px;
        margin-left: 20px;
        margin-bottom: 15px;
        border-radius: 7px;
        transition: 0.2s ease-in-out;
    }

    .photo-restaurante-action:hover {
        transform: scale(1.3);
    }

    .description-restaurante {
        padding: 0;
        flex-direction: column;
        margin-right: auto;
        margin-left: 25px;
    }

    .name-restaurante {
        padding-top: 20px;
        font-weight: bold;
        font-size: 17px;
    }

    .address-restaurante {
        color: #383838;
        padding-top: 10px;
        font-size: 15px;
        max-width: 270px;
        text-align: left;
    }

    .phone-restaurante {
        color:#383838;
        padding-top: 10px;
        font-size: 15px;
        margin-bottom: 15px;
    }

</style>